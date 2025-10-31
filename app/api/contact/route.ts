import { NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '../../../lib/db';

const ContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const parsed = ContactSchema.parse(data);
    await prisma.contactMessage.create({
      data: {
        name: parsed.name,
        email: parsed.email,
        message: parsed.message,
        createdAt: new Date(),
      },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
  }
}
