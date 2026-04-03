import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import BackToTop from '@/components/BackToTop'
import ScrollAnimations from '@/components/ScrollAnimations'

export const metadata: Metadata = {
  title: {
    default: 'Imperium Private Protection – Elite Physical Protection Services',
    template: '%s | Imperium Private Protection',
  },
  description: 'Imperium Private Protection: elite close protection and bodyguard services in Paris, Nice, Monaco, Cannes, Saint-Tropez, Courchevel. CNAPS certified agents, available 24/7. Confidential quote.',
  keywords: ['bodyguard France', 'close protection', 'VIP security', 'private security France', 'bodyguard Paris', 'security Monaco', 'protection Cannes', 'CNAPS certified'],
  authors: [{ name: 'Imperium Private Protection' }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://www.imperiumprotection.fr/en/',
    languages: {
      'fr': 'https://www.imperiumprotection.fr/',
      'en': 'https://www.imperiumprotection.fr/en/',
      'x-default': 'https://www.imperiumprotection.fr/',
    },
  },
  openGraph: {
    type: 'website',
    title: 'Imperium Private Protection – Elite Physical Protection Services',
    description: 'Elite close protection in Paris, Nice, Monaco, Cannes, Saint-Tropez and Courchevel. CNAPS certified agents, discreet and reactive 24/7.',
    url: 'https://www.imperiumprotection.fr/en/',
    siteName: 'Imperium Private Protection',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Imperium Private Protection – Elite Physical Protection Services',
    description: 'Elite close protection in Paris, Nice, Monaco, Cannes, Saint-Tropez. CNAPS certified agents, available 24/7.',
  },
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar lang="en" />
      {children}
      <BackToTop />
      <ScrollAnimations />
    </>
  )
}
