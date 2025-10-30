import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed Users
  await prisma.user.createMany({
    data: [
      { email: 'alice@example.com', name: 'Alice', passwordHash: 'passwordhash' },
      { email: 'bob@example.com', name: 'Bob', passwordHash: 'passwordhash' }
    ]
  });

  // Seed Articles
  await prisma.article.createMany({
    data: [
      { title: 'Understanding Zero Trust', slug: 'zero-trust', excerpt: 'An intro to zero trust architecture', content: 'Zero trust is a security model...', published: true, publishedAt: new Date() },
      { title: 'Threat Intelligence Best Practices', slug: 'threat-intel-best-practices', excerpt: 'How to use threat intelligence effectively', content: 'Threat intelligence involves...', published: true, publishedAt: new Date() }
    ]
  });

  // Seed Press Releases
  await prisma.pressRelease.createMany({
    data: [
      { title: 'Aether Cyber Group Launches New Portal', slug: 'portal-launch', content: 'We are excited to announce...', publishedAt: new Date() }
    ]
  });

  // Seed Advisories
  await prisma.advisory.createMany({
    data: [
      { title: 'Critical Vulnerability in VPN Appliances', slug: 'vpn-vuln', severity: 'High', description: 'A critical vulnerability was discovered...', publishedAt: new Date() }
    ]
  });

  // Seed Vulnerability Briefs
  await prisma.vulnBrief.createMany({
    data: [
      { cve: 'CVE-2025-0001', summary: 'Buffer overflow in X library', details: 'This vulnerability allows...', publishedAt: new Date() }
    ]
  });

  // Seed Events
  await prisma.event.createMany({
    data: [
      { title: 'Webinar: Secure Coding', slug: 'webinar-secure-coding', description: 'Join us for a webinar on secure coding practices.', date: new Date(), location: 'Online' }
    ]
  });

  // Seed Registrations
  await prisma.registration.createMany({
    data: [
      { eventId: 1, name: 'Charlie', email: 'charlie@example.com' }
    ]
  });

  // Seed Contact Messages
  await prisma.contactMessage.createMany({
    data: [
      { name: 'Denise', email: 'denise@example.com', message: 'Interested in your services', createdAt: new Date() }
    ]
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
