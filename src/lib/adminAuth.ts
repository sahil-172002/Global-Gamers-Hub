import { cookies } from 'next/headers';

const ADMIN_TOKEN = process.env.ADMIN_TOKEN;

export function verifyAdminToken(): boolean {
    const cookieStore = cookies();
    const adminToken = cookieStore.get('admin_token')?.value;

    return adminToken === ADMIN_TOKEN;
}