'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { findGuide, authCookieName } from '@/lib/guides';

export async function loginAction(
  _prevState: { error: string } | null,
  formData: FormData
): Promise<{ error: string } | null> {
  const slug = formData.get('slug') as string;
  const password = ((formData.get('password') as string) ?? '').trim();

  const guide = findGuide(slug);
  if (!guide) return { error: 'Guida non trovata.' };

  const expected = process.env[guide.envKey];
  if (!expected || password !== expected) {
    return { error: 'Password non corretta.' };
  }

  const cookieStore = await cookies();
  cookieStore.set(authCookieName(slug), 'ok', {
    httpOnly: true,
    sameSite: 'lax',
    path: `/guide-ospiti/${slug}`,
    maxAge: 60 * 60 * 24 * 30,
  });

  redirect(`/guide-ospiti/${slug}`);
}
