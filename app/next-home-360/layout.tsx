import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next Home 360 — NextHome Real Estate',
  description: 'Il servizio completo di NextHome per valorizzare al massimo la tua proprietà a Milano.',
};

export default function NextHome360Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
