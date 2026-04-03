import type { Metadata } from 'next'
import { Cormorant_Garamond, Raleway } from 'next/font/google'
import './globals.css'
import './services.css'
import Navbar from '@/components/Navbar'
import BackToTop from '@/components/BackToTop'
import ScrollAnimations from '@/components/ScrollAnimations'
import LangDetect from '@/components/LangDetect'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-raleway',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Garde du Corps & Protection Rapprochée | Imperium Private Protection – Paris, Nice, Monaco, Cannes',
    template: '%s | Imperium Private Protection',
  },
  description: 'Imperium Private Protection : garde du corps et protection rapprochée d\'élite à Paris, Nice, Monaco, Cannes, Saint-Tropez, Courchevel. Agents certifiés CNAPS, disponibles 24h/24. Devis confidentiel.',
  keywords: ['garde du corps', 'protection rapprochée', 'bodyguard France', 'sécurité VIP', 'protection personnalité', 'agent de sécurité Paris', 'garde du corps Nice', 'protection Monaco', 'sécurité Cannes', 'bodyguard Saint-Tropez', 'protection Courchevel', 'sécurité Mégève', 'garde du corps Côte d\'Azur', 'société sécurité privée', 'chauffeur sécurité', 'protection dirigeants', 'CNAPS'],
  authors: [{ name: 'Imperium Private Protection' }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://www.imperiumprotection.fr/',
    languages: {
      'fr': 'https://www.imperiumprotection.fr/',
      'en': 'https://www.imperiumprotection.fr/en/',
      'x-default': 'https://www.imperiumprotection.fr/',
    },
  },
  openGraph: {
    type: 'website',
    title: 'Garde du Corps & Protection Rapprochée | Imperium Private Protection',
    description: 'Protection rapprochée d\'élite à Paris, Nice, Monaco, Cannes, Saint-Tropez et Courchevel. Agents certifiés CNAPS, discrets et réactifs 24h/24.',
    url: 'https://www.imperiumprotection.fr/',
    siteName: 'Imperium Private Protection',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Garde du Corps & Protection Rapprochée | Imperium Private Protection',
    description: 'Protection rapprochée d\'élite à Paris, Nice, Monaco, Cannes, Saint-Tropez. Agents certifiés CNAPS, disponibles 24h/24.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.imperiumprotection.fr/#organization',
      name: 'Imperium Private Protection',
      alternateName: ['Imperium Protection', 'Imperium Private Security'],
      description: 'Société de protection privée d\'élite certifiée CNAPS, spécialisée en garde du corps, protection rapprochée, protection de personnalité et accompagnement sécurisé international.',
      url: 'https://www.imperiumprotection.fr',
      telephone: '+33652624091',
      email: 'contact@imperiumprotection.fr',
      foundingDate: '2009',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '10 rue de la Bourse',
        addressLocality: 'Paris',
        postalCode: '75002',
        addressCountry: 'FR',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 48.8648, longitude: 2.3436 },
      areaServed: [
        { '@type': 'City', name: 'Paris' },
        { '@type': 'City', name: 'Nice' },
        { '@type': 'City', name: 'Cannes' },
        { '@type': 'City', name: 'Monaco' },
        { '@type': 'City', name: 'Saint-Tropez' },
        { '@type': 'City', name: 'Courchevel' },
        { '@type': 'City', name: 'Megève' },
        { '@type': 'Country', name: 'France' },
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
      priceRange: '$$$$',
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', reviewCount: '47', bestRating: '5' },
      sameAs: ['https://www.linkedin.com/company/imperium-private-protection'],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.imperiumprotection.fr/#website',
      url: 'https://www.imperiumprotection.fr',
      name: 'Imperium Private Protection',
      inLanguage: ['fr-FR', 'en-GB'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Qu\'est-ce que la protection rapprochée ?',
          acceptedAnswer: { '@type': 'Answer', text: 'La protection rapprochée consiste à assurer la sécurité physique d\'une personne grâce à la présence d\'un ou plusieurs agents certifiés CNAPS. Imperium Private Protection propose ce service à Paris, Nice, Cannes, Monaco, Saint-Tropez et dans toute la France.' },
        },
        {
          '@type': 'Question',
          name: 'Combien coûte un garde du corps en France ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Le tarif d\'un garde du corps varie selon la durée, le niveau de menace et le dispositif nécessaire. Imperium Private Protection propose une évaluation gratuite et confidentielle pour établir un devis personnalisé adapté à votre situation.' },
        },
        {
          '@type': 'Question',
          name: 'Intervenez-vous à Nice, Cannes et sur la Côte d\'Azur ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Oui. Imperium Private Protection dispose d\'équipes opérationnelles sur toute la Côte d\'Azur : Nice, Cannes, Antibes, Monaco, Saint-Tropez, Juan-les-Pins, Saint-Jean-Cap-Ferrat, Mougins, Grimaud et Ramatuelle.' },
        },
        {
          '@type': 'Question',
          name: 'Vos agents sont-ils certifiés CNAPS ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Oui. Tous les agents d\'Imperium Private Protection sont titulaires de la carte professionnelle CNAPS (Conseil National des Activités Privées de Sécurité), obligatoire pour exercer légalement en France.' },
        },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${raleway.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LangDetect />
        <Navbar lang="fr" />
        {children}
        <BackToTop />
        <ScrollAnimations />
      </body>
    </html>
  )
}
