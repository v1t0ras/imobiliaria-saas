import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(){
  console.log('Seeding...');
  const tenant = await prisma.tenant.upsert({
    where: { slug: 'petrus' },
    update: {},
    create: {
      name: 'Petrus Imobiliária',
      slug: 'petrus',
      status: 'active'
    }
  });

  await prisma.tenantDomain.upsert({
    where: { host: 'petrus.local' },
    update: {},
    create: { host: 'petrus.local', tenantId: tenant.id }
  });

  await prisma.property.upsert({
    where: { id: 'sample-1' },
    update: {},
    create: {
      id: 'sample-1',
      tenantId: tenant.id,
      title: 'Apartamento à beira-mar',
      slug: 'apartamento-a-beira-mar',
      code: 'SAMPLE1',
      price: 12000000,
      city: 'Cidade Exemplo',
      neighborhood: 'Centro',
      status: 'published'
    }
  });

  console.log('Seeding done');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
