import { cookies } from 'next/headers';
import { redirect, notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { findGuide, authCookieName } from '@/lib/guides';
import LoginForm from './LoginForm';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function LoginPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = findGuide(slug);
  if (!guide) notFound();

  const cookieStore = await cookies();
  if (cookieStore.get(authCookieName(slug))?.value === 'ok') {
    redirect(`/guide-ospiti/${slug}`);
  }

  return <LoginForm slug={slug} label={guide.label} />;
}
