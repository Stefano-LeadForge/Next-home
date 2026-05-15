import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Affitti brevi: guida completa per massimizzare i tuoi ricavi | Next Home',
  description:
    'Guida completa agli affitti brevi su Airbnb e Booking: foto, pricing, recensioni, calendario, legalità e strategie concrete per aumentare prenotazioni e ricavi.',
};

export default function ArticoloBnbLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
