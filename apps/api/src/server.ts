import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(express.json());

// Storage for uploaded media
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(process.cwd(), 'storage/properties'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

// Simple tenant resolver: host header -> TenantDomain -> Tenant
async function resolveTenant(req: express.Request) {
  const host = (req.headers.host || '').split(':')[0];
  if (!host) return null;
  const domain = await prisma.tenantDomain.findUnique({ where: { host }, include: { tenant: true } });
  return domain?.tenant || null;
}

app.get('/health', (_req, res) => res.json({ ok: true }));

app.get('/properties', async (req, res) => {
  const tenant = await resolveTenant(req);
  if (!tenant) return res.status(400).json({ error: 'Tenant not found' });
  const properties = await prisma.property.findMany({ where: { tenantId: tenant.id, status: 'published' } });
  res.json(properties);
});

app.get('/properties/:slug', async (req, res) => {
  const tenant = await resolveTenant(req);
  if (!tenant) return res.status(400).json({ error: 'Tenant not found' });
  const property = await prisma.property.findFirst({ where: { tenantId: tenant.id, slug: req.params.slug } });
  if (!property) return res.status(404).json({ error: 'Not found' });
  res.json(property);
});

// Admin upload media (multipart)
app.post('/admin/properties/:id/media', upload.single('file'), async (req, res) => {
  const file = req.file;
  if (!file) return res.status(400).json({ error: 'no file' });
  res.json({ path: `/storage/${file.filename}` });
});

const port = process.env.PORT ? Number(process.env.PORT) : 4000;
app.listen(port, () => {
  console.log(`API listening on ${port}`);
});
