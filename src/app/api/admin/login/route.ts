// app/api/admin/login/route.ts
import { NextRequest, NextResponse } from 'next/server';

const ADMIN_TOKEN = process.env.ADMIN_TOKEN;

export async function POST(request: NextRequest) {
    const { token } = await request.json();

    if (token === ADMIN_TOKEN) {
        const response = NextResponse.json({ success: true });
        response.cookies.set('admin_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 3600 // 1 hour
        });
        return response;
    } else {
        return NextResponse.json({ success: false }, { status: 401 });
    }
}