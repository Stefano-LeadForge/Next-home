import type { Metadata } from 'next';
import HomePage from './HomePage';

export const metadata: Metadata = {
  title: 'Vendere Casa a Milano | Agenzia Immobiliare NextHome 360',
  description:
    'Vuoi vendere casa a Milano Centro? Scopri NextHome 360: il metodo ibrido che massimizza il tuo ricavo con gli affitti brevi durante la vendita. Valuta ora il tuo immobile.',
  alternates: {
    canonical: 'https://nexthomemilano.it',
  },
};

export default function Page() {
  return <HomePage />;
}
