// alternative seed inside prisma folder (optional)
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main(){
  console.log('prisma folder seed placeholder');
}

main().finally(()=>prisma.$disconnect());
