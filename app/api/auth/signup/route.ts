import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { query } from '@/lib/db';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  const hash = await bcrypt.hash(password, 10);

  try {
    await query(
      'INSERT INTO Users (email, password) VALUES ($1, $2)',
      [email, hash]
    );
    return NextResponse.json({ message: 'Signup successful' });
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json(
        { error: 'Signup failed', detail: err.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: 'Signup failed', detail: 'Unknown error' },
      { status: 500 }
    );
  }
}
