import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    { 
      status: 'Alive and coding!', 
      timestamp: new Date().toISOString(),
      uptime: process.uptime()
    },
    { status: 200 }
  );
}