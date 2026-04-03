import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import EnFooter from '@/components/EnFooter'

type CityData = {
  name: string
  region: string
  heroImg: string
  heroAlt: string
  introImg: string
  introAlt: string
  introTitle: string
  introP1: string
  introP2: string
  introP3?: string
  contextTitle: string
  contextText: string
  servicesTitle: string
  services: { title: string; desc: string; link: string }[]
  keywords: string[]
  faqTitle: string
  faqs: { q: string; a: string }[]
  ctaTitle: string
  ctaDesc: string
  metaTitle: string
  metaDesc: string
  frSlug: string
}

const cityData: Record<string, CityData> = {
  paris: {
    name: 'Paris',
    region: 'Île-de-France',
    heroImg: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?w=1800&q=80',
    heroAlt: 'Paris – Eiffel Tower and Seine',
    introImg: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    introAlt: 'Imperium agent Paris',
    introTitle: 'The French capital secured at the highest level',
    introP1: 'Paris is the nerve centre of France and one of the most visited and most exposed cities in the world. Heads of state, international celebrities, CAC 40 executives, political figures: the capital concentrates an exceptional density of high-value, high-media-exposure individuals.',
    introP2: 'Imperium Private Protection is based in Paris and operates daily in the capital for close protection, residence security, escort during official events and security coverage across Île-de-France.',
    introP3: 'Our in-depth knowledge of the Parisian urban fabric, current security protocols, sensitive locations and traffic routes allows us to provide optimal protection in every arrondissement.',
    contextTitle: 'The security challenges of the capital',
    contextText: 'Paris presents unique security challenges: residual terrorist threat, dense media and paparazzi presence, high-footfall zones (Champs-Élysées, Marais, Saint-Germain), major international events and luxury crime risks. Our teams are trained to operate in this complex urban environment while remaining completely discreet.',
    servicesTitle: 'Protection services in Paris',
    services: [
      { title: 'Bodyguard in Paris', desc: 'Close protection across all arrondissements of Paris. Discreet plainclothes agents, perfectly integrated into the Parisian environment.', link: '/en/close-protection' },
      { title: 'VIP & celebrity protection Paris', desc: 'Dedicated service for VIPs, celebrities, executives and political figures. Media exposure management and interaction filtering.', link: '/en/vip-protection' },
      { title: 'Residence security Paris', desc: 'Protection of apartments, private mansions and prestige properties in Paris. Guarding, access control and integrated systems.', link: '/en/residence-security' },
      { title: 'Security driver Paris', desc: 'Secure transfers throughout Paris and Île-de-France. Premium vehicles, certified drivers available 24/7.', link: '/en/close-protection' },
    ],
    keywords: ['bodyguard Paris', 'close protection Paris', 'VIP security Paris', 'personal protection Paris France', 'executive protection Paris', 'private security Paris', 'security guard Paris', 'celebrity bodyguard Paris', 'event security Paris', 'secure driver Paris'],
    faqTitle: 'Close protection in Paris – FAQ',
    faqs: [
      { q: 'Do you cover all arrondissements of Paris?', a: 'Yes. Our teams cover all 20 arrondissements of Paris as well as the inner and outer suburbs of Île-de-France.' },
      { q: 'Do you provide protection during Paris Fashion Week and major events?', a: 'Absolutely. We regularly operate during Paris Fashion Week, Prix de l\'Arc de Triomphe, film premieres and all prestigious Parisian events.' },
      { q: 'Are your agents familiar with Paris?', a: 'All our Parisian agents have excellent knowledge of the capital: traffic routes, sensitive areas, protocols for prestigious venues and relations with local law enforcement.' },
    ],
    ctaTitle: 'Need protection in Paris?',
    ctaDesc: 'Our teams are based in Paris and available 24/7. Contact us for a confidential assessment.',
    metaTitle: 'Bodyguard Paris | Close Protection & VIP Security – Imperium',
    metaDesc: 'Bodyguard and close protection in Paris. CNAPS-certified agents available 24/7. VIP, celebrity, executive protection. Confidential quote.',
    frSlug: 'paris',
  },
  nice: {
    name: 'Nice',
    region: 'Alpes-Maritimes',
    heroImg: 'https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=1800&q=80',
    heroAlt: 'Nice – Promenade des Anglais and French Riviera',
    introImg: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    introAlt: 'Imperium agent Nice',
    introTitle: 'The capital of the French Riviera under protection',
    introP1: 'Nice is the reference metropolis of the French Riviera: regional capital, international airport hub, congress and festival city. It welcomes a wealthy international clientele year-round, diplomatic summits, and world-class sporting and cultural events.',
    introP2: 'Our teams are permanently based in Nice and across the entire Azure coastline. We operate for the protection of VIP residents and visitors in Nice, the security of properties in the hills and by the sea, and escort during events.',
    introP3: 'Our Nice base allows us to rapidly deploy teams across the entire French Riviera, from Monaco to Antibes, from Cannes to Saint-Tropez.',
    contextTitle: 'A demanding security environment',
    contextText: 'Nice presents a unique combination of challenges: a large city with sensitive areas and tourist flows, major events (Carnival, MIPIM, TFWA), VIP personalities in prestigious seafront and hillside hotels. Our local expertise allows us to anticipate and manage these specificities.',
    servicesTitle: 'Protection services in Nice',
    services: [
      { title: 'Bodyguard in Nice', desc: 'Close protection in Nice, along the Promenade des Anglais and across the metropolis. Discreet and responsive agents.', link: '/en/close-protection' },
      { title: 'Yacht security Nice & French Riviera', desc: 'Protection of superyachts in Nice, Villefranche and along the Riviera. Maritime-trained agents available.', link: '/en/residence-security' },
      { title: 'Villa security Nice & Hills', desc: 'Protection of villas and properties on the Nice hills and seafront. Guarding and 24/7 physical presence.', link: '/en/residence-security' },
      { title: 'Security driver Nice', desc: 'Transfers from Nice Côte d\'Azur Airport. Coverage of the entire French Riviera with premium vehicles.', link: '/en/close-protection' },
    ],
    keywords: ['bodyguard Nice', 'close protection Nice France', 'VIP security Nice', 'personal protection Nice', 'executive protection French Riviera', 'private security Nice', 'yacht security Nice', 'villa security Nice', 'security driver Nice', 'CNAPS bodyguard Nice'],
    faqTitle: 'Close protection in Nice – FAQ',
    faqs: [
      { q: 'Do you cover the entire French Riviera from Nice?', a: 'Yes. Our base in Nice allows us to deploy teams across the entire French Riviera very quickly.' },
      { q: 'Do you operate during the Nice Carnival and other events?', a: 'Yes. We have specific experience of major Nice events (Carnival, MIPIM, TFWA) and the security constraints they generate.' },
      { q: 'Do you provide protection at Nice Airport?', a: 'Absolutely. We manage VIP arrivals at Nice Côte d\'Azur Airport, secure transfers and protection within the airport.' },
    ],
    ctaTitle: 'Need protection in Nice?',
    ctaDesc: 'Our teams are based on the French Riviera and available 24/7. Free confidential assessment.',
    metaTitle: 'Bodyguard Nice | Close Protection French Riviera – Imperium',
    metaDesc: 'Bodyguard and close protection in Nice. CNAPS-certified agents. VIP, yacht, villa security and transfers across the French Riviera. Available 24/7.',
    frSlug: 'nice',
  },
  cannes: {
    name: 'Cannes',
    region: 'Alpes-Maritimes',
    heroImg: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=1800&q=80',
    heroAlt: 'Cannes – La Croisette and Film Festival',
    introImg: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    introAlt: 'Imperium agent Cannes',
    introTitle: 'The Festival city secured by experts',
    introP1: 'Cannes is world-famous for its international Film Festival, but also for its major international congresses (MIPIM, MAPIC, TFWA, Lions) which draw thousands of decision-makers, celebrities and global personalities every year. La Croisette, the palace hotels and the superyachts of Port Canto create a high-density environment of exposed personalities.',
    introP2: 'Imperium Private Protection regularly operates in Cannes during the Film Festival and major congresses, providing protection for celebrities, executives and VIP delegations. Our knowledge of the specific constraints of these events allows us to operate with maximum efficiency.',
    introP3: 'Our teams cover the entire Cannes area: La Croisette, Palm Beach, Le Suquet, Mougins, Vallauris and the Lérins Islands.',
    contextTitle: 'The Film Festival and major congresses',
    contextText: 'Cannes is one of the cities in the world where the concentration of exposed personalities is highest during major events. The cohabitation between the general public, the world\'s media and VIP personalities requires a very high-precision security organisation that we master perfectly.',
    servicesTitle: 'Protection services in Cannes',
    services: [
      { title: 'Bodyguard Cannes Film Festival', desc: 'Protection of celebrities, directors and personalities during the Festival. Management of red carpet walkups, premieres and official events.', link: '/en/vip-protection' },
      { title: 'Yacht security Port of Cannes', desc: 'Protection of superyachts in Port Canto and the old port. Access control, embarked agents and contractor management.', link: '/en/residence-security' },
      { title: 'Villa security Cannes area', desc: 'Protection of luxury villas and properties in Cannes, Mougins and Vallauris. Guarding and 24/7 physical presence.', link: '/en/residence-security' },
      { title: 'Security driver Cannes', desc: 'Transfers from Nice Airport and Cannes heliport. Premium vehicles available 24/7.', link: '/en/close-protection' },
    ],
    keywords: ['bodyguard Cannes', 'close protection Cannes', 'Film Festival security Cannes', 'VIP security Cannes', 'personal protection Cannes France', 'private security Cannes', 'yacht security Cannes', 'villa security Cannes', 'celebrity bodyguard Cannes', 'executive protection Cannes'],
    faqTitle: 'Close protection in Cannes – FAQ',
    faqs: [
      { q: 'Can you provide protection during the Cannes Film Festival?', a: 'Yes. We are one of the reference providers during the Cannes Film Festival. We protect celebrities, jury members and VIP delegations during the Festival and its satellite events.' },
      { q: 'Do you also operate during professional congresses in Cannes?', a: 'Absolutely. We operate during major international congresses (MIPIM, MAPIC, TFWA) for the protection of executives and sensitive delegations.' },
      { q: 'Do you organise transfers from Cannes heliport?', a: 'Yes. We manage arrivals and transfers from Cannes Mandelieu heliport and Nice Côte d\'Azur Airport.' },
    ],
    ctaTitle: 'Need protection in Cannes?',
    ctaDesc: 'Our teams operate in Cannes and on La Croisette 24/7, 365 days a year.',
    metaTitle: 'Bodyguard Cannes | Close Protection & Film Festival Security – Imperium',
    metaDesc: 'Bodyguard and close protection in Cannes. Film Festival, congresses, yachts, villas. CNAPS-certified agents available 24/7. Confidential quote.',
    frSlug: 'cannes',
  },
  monaco: {
    name: 'Monaco',
    region: 'Principality of Monaco',
    heroImg: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1800&q=80',
    heroAlt: 'Monaco – Port Hercule and the Rock',
    introImg: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    introAlt: 'Imperium agent Monaco',
    introTitle: 'The most secure principality in Europe',
    introP1: 'Monaco is the most densely populated principality in the world and the state with the highest concentration of millionaires per capita. Its small surface area and status as a leading international financial centre attract a resident and tourist population of extraordinary wealth and visibility.',
    introP2: 'Our teams regularly operate in Monaco for the protection of permanent residents, visitors during the Grand Prix, the Yacht Show and other events on the Monegasque calendar. We coordinate our operations with the Principality\'s security forces.',
    introP3: 'Our agents know the Monegasque environment perfectly: Port Hercule, the Rock, Monte-Carlo, Fontvieille and residential areas like Larvotto and the Exotic Garden.',
    contextTitle: 'The ultra-secure Monegasque environment',
    contextText: 'Monaco has one of the most sophisticated surveillance systems in the world. This does not eliminate the need for private protection: on the contrary, the density of wealth and the visibility of residents require personalised, discreet protection that complements the Principality\'s official arrangements.',
    servicesTitle: 'Protection services in Monaco',
    services: [
      { title: 'Bodyguard in Monaco', desc: 'Close protection throughout the Principality. Agents perfectly integrated into the Monegasque environment, available 24/7.', link: '/en/close-protection' },
      { title: 'Superyacht security Port Hercule', desc: 'Protection of superyachts at Port Hercule and Monegasque anchorages. Access control, embarked agents and full management.', link: '/en/residence-security' },
      { title: 'Residence security Monaco', desc: 'Protection of apartments, penthouses and prestige properties in Monaco. High-level guarding and integration with existing systems.', link: '/en/residence-security' },
      { title: 'Monaco Grand Prix security', desc: 'Protection during the Monaco Grand Prix and satellite events. Movement management and access control in circuit configuration.', link: '/en/vip-protection' },
    ],
    keywords: ['bodyguard Monaco', 'close protection Monaco', 'VIP security Monaco', 'yacht security Monaco', 'personal protection Monaco', 'private security Monaco', 'Grand Prix security Monaco', 'residence security Monaco', 'celebrity protection Monaco', 'Port Hercule security'],
    faqTitle: 'Close protection in Monaco – FAQ',
    faqs: [
      { q: 'Can you operate in Monaco despite the strong presence of official security forces?', a: 'Absolutely. We coordinate our operations with the Principality\'s services. A dense official security presence does not replace personalised protection for high-exposure individuals.' },
      { q: 'Do you operate during the Monaco Grand Prix?', a: 'Yes. The Monaco Grand Prix is one of our recurring events. We protect personalities, team executives and VIP guests during the Grand Prix and its satellite events.' },
      { q: 'Do you manage yacht security during the Monaco Yacht Show?', a: 'Absolutely. The Monaco Yacht Show is one of our main operational periods. We secure exhibited yachts and protect owners and their guests.' },
    ],
    ctaTitle: 'Need protection in Monaco?',
    ctaDesc: 'Our teams operate in Monaco 24/7, year-round. Free confidential assessment.',
    metaTitle: 'Bodyguard Monaco | Close Protection & Yacht Security – Imperium',
    metaDesc: 'Bodyguard and close protection in Monaco. Grand Prix, Yacht Show, prestige residences. CNAPS-certified agents 24/7. Confidential quote.',
    frSlug: 'monaco',
  },
  'saint-tropez': {
    name: 'Saint-Tropez',
    region: 'Var',
    heroImg: 'https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=1800&q=80',
    heroAlt: 'Saint-Tropez – Harbour and village',
    introImg: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    introAlt: 'Imperium agent Saint-Tropez',
    introTitle: 'The global capital of summer luxury',
    introP1: 'Saint-Tropez is, during the summer season, one of the world\'s most sought-after destinations for the ultra-wealthy, celebrities and great international fortunes. The harbour, Les Caves du Roy, Club 55, Nikki Beach — venues where personalities and billionaires gather and who require protection commensurate with their exposure.',
    introP2: 'The extraordinary concentration of superyachts in the Gulf of Saint-Tropez, the density of luxury villas in the hamlets of Ramatuelle, Gassin and the Parcs de Saint-Tropez, combined with extreme tourist footfall, create a particularly complex security environment.',
    introP3: 'Imperium Private Protection is one of the reference security providers in Saint-Tropez during the season. Our agents know the environment perfectly: from the harbour to the Pampelonne beaches, from the nightclubs to the exclusive beach clubs.',
    contextTitle: 'Security challenges in Saint-Tropez',
    contextText: 'Saint-Tropez concentrates extraordinary pressure in summer: dense crowds at the harbour, paparazzi, attempted intrusions into private properties, targeted theft against wealthy clienteles. Navigating between beaches, yachts and nighttime events requires high-level security coordination that our teams master.',
    servicesTitle: 'Protection services in Saint-Tropez',
    services: [
      { title: 'Bodyguard in Saint-Tropez', desc: 'Close protection at the harbour, beaches, restaurants and clubs. Discreet agents adapted to the relaxed but vigilant summer atmosphere.', link: '/en/close-protection' },
      { title: 'Yacht security Gulf of Saint-Tropez', desc: 'Protection aboard superyachts in the Gulf of Saint-Tropez. Maritime-trained agents, on-board access management and tender escort.', link: '/en/residence-security' },
      { title: 'Villa security Saint-Tropez & Pampelonne', desc: 'Protection of luxury villas in the Parcs de Saint-Tropez, Ramatuelle and Gassin. Guarding, access control and 24/7 physical presence.', link: '/en/residence-security' },
      { title: 'Security driver Saint-Tropez', desc: 'Secure transfers from Nice and Toulon airports, Saint-Tropez heliport. Movement management across the Saint-Tropez peninsula.', link: '/en/close-protection' },
    ],
    keywords: ['bodyguard Saint-Tropez', 'close protection Saint-Tropez', 'yacht security Saint-Tropez', 'VIP security Saint-Tropez', 'villa protection Saint-Tropez', 'personal protection Saint-Tropez', 'security Pampelonne beach', 'executive protection Saint-Tropez', 'private security Saint-Tropez France', 'celebrity bodyguard Saint-Tropez'],
    faqTitle: 'Close protection in Saint-Tropez – FAQ',
    faqs: [
      { q: 'Do you operate in Saint-Tropez year-round or only in summer?', a: 'We operate in Saint-Tropez year-round, with a reinforced presence during the summer high season (June–September) when demand is highest.' },
      { q: 'Can you provide security on a yacht in the Gulf?', a: 'Yes. We deploy agents specialised in maritime environments, capable of operating on board, in tenders or during beach landings.' },
      { q: 'How do you handle paparazzi in Saint-Tropez?', a: 'We have specific protocols for managing paparazzi presence: alternative routes, management of venue entrances and exits, coordination with venue security teams.' },
    ],
    ctaTitle: 'Need protection in Saint-Tropez?',
    ctaDesc: 'Our teams are available in Saint-Tropez and the Gulf 24/7. Contact us for a confidential assessment.',
    metaTitle: 'Bodyguard Saint-Tropez | Close Protection & Yacht Security – Imperium',
    metaDesc: 'Bodyguard and close protection in Saint-Tropez. Yacht security, villa, VIP beaches. CNAPS-certified agents 24/7. Pampelonne, Ramatuelle, Gassin. Confidential quote.',
    frSlug: 'saint-tropez',
  },
  courchevel: {
    name: 'Courchevel',
    region: 'Savoie',
    heroImg: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=1800&q=80',
    heroAlt: 'Courchevel – Luxury ski resort',
    introImg: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    introAlt: 'Imperium agent Courchevel',
    introTitle: 'The most exclusive ski resort in the Alps',
    introP1: 'Courchevel 1850 is the most luxurious and exclusive ski resort in the world. Each winter it welcomes an international clientele of ultra-wealthy individuals — oligarchs, Gulf royal families, American and European billionaires — who stay in chalets worth tens of millions of euros.',
    introP2: 'This exceptional concentration of wealth and high-exposure profiles creates very specific security needs, within a mountain environment that imposes particular operational constraints. Our teams have been operating in Courchevel for many seasons and have mastered these specificities completely.',
    introP3: 'From securing prestige chalets to ski escort, from helicopter transfer management to protection at top restaurants, we cover every aspect of your Courchevel stay.',
    contextTitle: 'Security specificities in Courchevel',
    contextText: 'Courchevel presents unique operational challenges: altitude, snowfall, limited access roads, private heliport, concentration of ultra-secure chalets. The international clientele also brings varied risk profiles. Our agents are trained for mountain conditions and adapt their vehicles and equipment to this specific environment.',
    servicesTitle: 'Protection services in Courchevel',
    services: [
      { title: 'Bodyguard in Courchevel', desc: 'Close protection in Courchevel 1850, 1650 and 1550. Agents adapted to the mountain environment, in appropriate civilian attire.', link: '/en/close-protection' },
      { title: 'Chalet security Courchevel', desc: 'Protection of prestige chalets: guarding, access control, perimeter surveillance and 24/7 residential agents.', link: '/en/residence-security' },
      { title: 'Security driver Courchevel', desc: 'Secure transfers from Geneva, Lyon and Chambéry airports. Premium 4x4 vehicles with winter equipment and certified drivers.', link: '/en/close-protection' },
      { title: 'Ski escort Courchevel', desc: 'Secure accompaniment during skiing, hiking and outdoor activities. Discreet agents adapted to the sporting environment.', link: '/en/close-protection' },
    ],
    keywords: ['bodyguard Courchevel', 'close protection Courchevel', 'VIP security Courchevel 1850', 'chalet security Courchevel', 'ski resort bodyguard', 'executive protection Courchevel', 'personal protection Courchevel', 'private security Courchevel', 'security driver Courchevel', 'luxury ski security Alps'],
    faqTitle: 'Close protection in Courchevel – FAQ',
    faqs: [
      { q: 'Do you provide security in Courchevel outside ski season?', a: 'Courchevel also hosts summer events. We operate year-round, with reinforced presence during the winter high season (December–April).' },
      { q: 'Can your agents ski to accompany a client on the slopes?', a: 'Yes. Some of our agents are accomplished skiers and can accompany clients on the slopes while maintaining discreet security vigilance.' },
      { q: 'Do you organise transfers from Geneva to Courchevel?', a: 'Yes. We manage transfers from Geneva, Lyon and Chambéry airports with premium 4x4 vehicles equipped for alpine winter conditions.' },
    ],
    ctaTitle: 'Need protection in Courchevel?',
    ctaDesc: 'Our teams operate in Courchevel and the Trois Vallées. Contact us 24/7 for a confidential assessment.',
    metaTitle: 'Bodyguard Courchevel | Close Protection & Chalet Security – Imperium',
    metaDesc: 'Bodyguard and close protection in Courchevel 1850. Luxury chalet security, VIP ski escort, transfers. CNAPS-certified agents 24/7. Confidential quote.',
    frSlug: 'courchevel',
  },
  megeve: {
    name: 'Megève',
    region: 'Haute-Savoie',
    heroImg: 'https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?w=1800&q=80',
    heroAlt: 'Megève – Luxury alpine village',
    introImg: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    introAlt: 'Imperium agent Megève',
    introTitle: 'Alpine elegance in service of your security',
    introP1: 'Megève is the quintessential alpine resort for a Franco-French and international clientele of great tradition. Founded by the Rothschild family, it has embodied mountain elegance and refinement for a century. Its chalets, prestige hotels and unique atmosphere attract a wealthy clientele that demands protection equal to their standards.',
    introP2: 'Imperium Private Protection regularly operates in Megève, bringing the same operational excellence as in Paris or on the French Riviera, adapted to the constraints of the Savoyard mountain environment.',
    introP3: 'Our teams cover the entire Mont-Blanc massif and can intervene in neighbouring resorts (Saint-Gervais, Les Contamines, Chamonix) very quickly.',
    contextTitle: 'A discreet security environment',
    contextText: 'Megève attracts a clientele that particularly appreciates discretion and authenticity. Our agents integrate naturally into the resort\'s village atmosphere, without disrupting the local ambiance. Protection here is invisible but completely effective.',
    servicesTitle: 'Protection services in Megève',
    services: [
      { title: 'Bodyguard in Megève', desc: 'Discreet close protection in Megève. Agents adapted to the alpine environment and the resort\'s codes.', link: '/en/close-protection' },
      { title: 'Chalet security Megève', desc: 'Protection of chalets and private properties in Megève and the Mont-Blanc massif. Guarding and residential agents.', link: '/en/residence-security' },
      { title: 'Security driver Megève', desc: 'Transfers from Geneva, Lyon and Annecy. Premium 4x4 vehicles adapted to alpine conditions.', link: '/en/close-protection' },
      { title: 'Event security Megève', desc: 'Security coverage for private events, gala dinners and receptions in prestige chalets and hotels.', link: '/en/vip-protection' },
    ],
    keywords: ['bodyguard Megève', 'close protection Megève', 'VIP security Megève', 'chalet security Megève', 'private security Megève France', 'executive protection Megève', 'personal protection Megève', 'security driver Megève', 'luxury ski security Megève', 'celebrity protection Megève'],
    faqTitle: 'Close protection in Megève – FAQ',
    faqs: [
      { q: 'Do you operate in Megève and Chamonix?', a: 'Yes. We cover the entire Mont-Blanc massif, from Megève to Chamonix including Saint-Gervais and Les Contamines.' },
      { q: 'Can you secure a chalet for a family during school holidays?', a: 'Absolutely. We offer comprehensive arrangements for families staying in Megève: protection for parents, escort for children to ski school and chalet security.' },
    ],
    ctaTitle: 'Need protection in Megève?',
    ctaDesc: 'Our teams operate in Megève and across the Mont-Blanc massif. Contact us 24/7.',
    metaTitle: 'Bodyguard Megève | Close Protection & Chalet Security Alps – Imperium',
    metaDesc: 'Bodyguard and close protection in Megève. Luxury chalet security, VIP ski escort, alpine transfers. CNAPS-certified agents 24/7. Confidential quote.',
    frSlug: 'megeve',
  },
  antibes: {
    name: 'Antibes',
    region: 'Alpes-Maritimes',
    heroImg: 'https://images.unsplash.com/photo-1595843563523-41ba81a15d64?w=1800&q=80',
    heroAlt: 'Antibes – Port Vauban and old town',
    introImg: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    introAlt: 'Imperium agent Antibes',
    introTitle: 'The world capital of yachting secured',
    introP1: 'Antibes is world-famous for Port Vauban, the largest marina in Europe, which hosts some of the world\'s largest superyachts. Cap d\'Antibes concentrates some of the most exclusive properties on the French Riviera, with villas selling at record prices.',
    introP2: 'Our permanent presence in Antibes and on the Cap allows us to intervene rapidly for all protection needs: Cap properties, superyachts at Port Vauban, events at the Boat Show or prestigious hotels.',
    introP3: 'We cover the entire Antibes-Juan-les-Pins sector, coordinating with our Nice and Cannes teams for continuous security coverage across the Riviera.',
    contextTitle: 'Port Vauban and Cap d\'Antibes',
    contextText: 'Port Vauban is a unique environment: extraordinary concentration of wealth, continuous flow of visitors and service providers, and specific maritime security challenges. Cap d\'Antibes is one of the most discreet and exclusive addresses on the French Riviera.',
    servicesTitle: 'Protection services in Antibes',
    services: [
      { title: 'Bodyguard in Antibes', desc: 'Close protection in Antibes, on the Cap and in Juan-les-Pins. Discreet agents adapted to the French Riviera.', link: '/en/close-protection' },
      { title: 'Yacht security Port Vauban', desc: 'Protection of superyachts at Port Vauban. On-board access control, embarked agents and contractor management.', link: '/en/residence-security' },
      { title: 'Villa security Cap d\'Antibes', desc: 'Protection of villas and properties on Cap d\'Antibes. Guarding, CCTV and 24/7 residential agents.', link: '/en/residence-security' },
      { title: 'Security driver Antibes', desc: 'Transfers from Nice airports and ports. Premium vehicles available 24/7.', link: '/en/close-protection' },
    ],
    keywords: ['bodyguard Antibes', 'close protection Antibes', 'yacht security Port Vauban', 'villa security Cap Antibes', 'VIP security Antibes', 'personal protection Antibes France', 'private security Antibes', 'superyacht security Antibes', 'executive protection Antibes', 'security driver Antibes'],
    faqTitle: 'Close protection in Antibes – FAQ',
    faqs: [
      { q: 'Do you provide yacht security at Port Vauban?', a: 'Yes. Port Vauban is one of our regular operational areas. We deploy maritime-trained agents for the protection of superyachts at berth and during departures.' },
      { q: 'Do you also cover Juan-les-Pins from Antibes?', a: 'Absolutely. We cover the entire Antibes-Juan-les-Pins municipality and its immediate surroundings.' },
    ],
    ctaTitle: 'Need protection in Antibes?',
    ctaDesc: 'Our teams cover Antibes, Juan-les-Pins and the Cap. Available 24/7.',
    metaTitle: 'Bodyguard Antibes | Close Protection & Yacht Security Port Vauban – Imperium',
    metaDesc: 'Bodyguard and close protection in Antibes. Superyacht security Port Vauban, Cap d\'Antibes villa. CNAPS-certified agents 24/7. Confidential quote.',
    frSlug: 'antibes',
  },
  'juan-les-pins': {
    name: 'Juan-les-Pins',
    region: 'Alpes-Maritimes',
    heroImg: 'https://images.unsplash.com/photo-1544642058-b4e1a5d0a8d7?w=1800&q=80',
    heroAlt: 'Juan-les-Pins – French Riviera',
    introImg: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    introAlt: 'Imperium agent Juan-les-Pins',
    introTitle: 'Discretion and excellence on the French Riviera',
    introP1: 'Juan-les-Pins is a legendary resort on the French Riviera, known for its cosmopolitan atmosphere, private beaches and international jazz festival. Adjacent to Antibes, it welcomes a wealthy international clientele seeking discretion and quality.',
    introP2: 'Our teams based in the Antibes-Juan-les-Pins sector cover this entire area continuously with our Nice and Cannes arrangements, ensuring uninterrupted security coverage across the entire coast.',
    contextTitle: 'Jazz Festival and events',
    contextText: 'The International Jazz Festival of Juan-les-Pins attracts high-quality artists and an international audience every summer. We regularly provide security for personalities attending this event and the private parties that accompany it.',
    servicesTitle: 'Protection services in Juan-les-Pins',
    services: [
      { title: 'Bodyguard in Juan-les-Pins', desc: 'Close protection in Juan-les-Pins and on the private beaches. Discreet and effective agents.', link: '/en/close-protection' },
      { title: 'Jazz Festival security', desc: 'Security coverage during the Jazz Festival and cultural events. Protection of artists and VIP personalities.', link: '/en/vip-protection' },
      { title: 'Villa security Juan-les-Pins', desc: 'Protection of properties and villas in the municipality. Guarding and residential agents.', link: '/en/residence-security' },
      { title: 'Security driver Antibes-Juan-les-Pins', desc: 'Secure transfers in the area. Connection to Nice Airport and other French Riviera destinations.', link: '/en/close-protection' },
    ],
    keywords: ['bodyguard Juan-les-Pins', 'close protection Juan-les-Pins', 'VIP security Juan-les-Pins', 'Jazz Festival security Juan-les-Pins', 'personal protection Juan-les-Pins', 'private security Juan-les-Pins', 'villa security Juan-les-Pins', 'celebrity protection French Riviera'],
    faqTitle: 'Close protection in Juan-les-Pins – FAQ',
    faqs: [
      { q: 'Do you operate during the Jazz Festival in Juan-les-Pins?', a: 'Yes. We regularly provide security for artists and VIP personalities present during the festival.' },
      { q: 'Do your teams cover both Antibes and Juan-les-Pins?', a: 'Yes. Our teams cover the entire Antibes-Juan-les-Pins municipality without distinction.' },
    ],
    ctaTitle: 'Need protection in Juan-les-Pins?',
    ctaDesc: 'Our teams cover Juan-les-Pins and the entire Antibes area. Available 24/7.',
    metaTitle: 'Bodyguard Juan-les-Pins | Close Protection French Riviera – Imperium',
    metaDesc: 'Bodyguard and close protection in Juan-les-Pins. Jazz Festival, VIP beaches. CNAPS-certified agents available 24/7. Confidential quote.',
    frSlug: 'juan-les-pins',
  },
  grimaud: {
    name: 'Grimaud',
    region: 'Var',
    heroImg: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=1800&q=80',
    heroAlt: 'Grimaud and Port-Grimaud – Gulf of Saint-Tropez',
    introImg: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    introAlt: 'Imperium agent Grimaud',
    introTitle: 'The Provençal Venice in complete safety',
    introP1: 'Grimaud and Port-Grimaud form a very high-end residential ensemble in the Gulf of Saint-Tropez. Port-Grimaud, nicknamed the Provençal Venice, is a private lakeside village where each house has its own berth, accommodating prestige boats and yachts.',
    introP2: 'The clientele of Grimaud and Port-Grimaud is among the most wealthy on the Var coast: owners of villas and village houses with private pontoons, passing residents aboard large yachts. Our teams master this unique environment that blends maritime and terrestrial security.',
    contextTitle: 'Security in the Gulf hinterland',
    contextText: 'The commune of Grimaud extends from the Var hinterland to the seafront of Port-Grimaud. This particular geography requires security management that integrates road and maritime access, surveillance of private pontoons and protection in the enclosed residential environment of Port-Grimaud.',
    servicesTitle: 'Protection services in Grimaud',
    services: [
      { title: 'Bodyguard in Grimaud & Port-Grimaud', desc: 'Close protection in the Gulf of Saint-Tropez. Agents adapted to the maritime and lacustrine environment.', link: '/en/close-protection' },
      { title: 'Villa security Port-Grimaud', desc: 'Protection of houses and villas in Port-Grimaud with maritime access. Pontoon and access control.', link: '/en/residence-security' },
      { title: 'Yacht security Gulf of Saint-Tropez', desc: 'Security for yachts anchored in the Gulf between Grimaud and Saint-Tropez. Embarked agents and tender transfers.', link: '/en/residence-security' },
      { title: 'Secure transfers Grimaud', desc: 'Secure connection to Saint-Tropez heliport, Nice and Toulon airports and the Gulf marinas.', link: '/en/close-protection' },
    ],
    keywords: ['bodyguard Grimaud', 'close protection Grimaud', 'security Port-Grimaud', 'yacht security Gulf Saint-Tropez', 'villa security Port-Grimaud', 'private security Grimaud France', 'personal protection Grimaud', 'VIP security Grimaud'],
    faqTitle: 'Close protection in Grimaud – FAQ',
    faqs: [
      { q: 'Can you access Port-Grimaud by water?', a: 'Yes. Our agents can travel by water in Port-Grimaud and ensure security of private pontoons and water access points.' },
      { q: 'Do you also cover Sainte-Maxime and Cogolin from Grimaud?', a: 'Yes. We cover the entire Gulf of Saint-Tropez, from Sainte-Maxime to Ramatuelle including Grimaud and Cogolin.' },
    ],
    ctaTitle: 'Need protection in Grimaud?',
    ctaDesc: 'Our teams cover Grimaud, Port-Grimaud and the entire Gulf of Saint-Tropez. Available 24/7.',
    metaTitle: 'Bodyguard Grimaud | Close Protection & Port-Grimaud Security – Imperium',
    metaDesc: 'Bodyguard and close protection in Grimaud and Port-Grimaud. Yacht security, lakeside villa. CNAPS-certified agents 24/7. Confidential quote.',
    frSlug: 'grimaud',
  },
  'saint-jean-cap-ferrat': {
    name: 'Saint-Jean-Cap-Ferrat',
    region: 'Alpes-Maritimes',
    heroImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1800&q=80',
    heroAlt: 'Saint-Jean-Cap-Ferrat – French Riviera',
    introImg: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    introAlt: 'Imperium agent Saint-Jean-Cap-Ferrat',
    introTitle: 'The most exclusive peninsula in the Mediterranean',
    introP1: 'Saint-Jean-Cap-Ferrat is one of the most exclusive and most expensive addresses in the world. This peninsula between Nice and Monaco is home to some of the most precious properties on the planet, belonging to royal families, billionaires and great world fortunes.',
    introP2: 'The very nature of the peninsula — semi-isolated, with a single road access — creates a particular security environment that our teams master perfectly. We regularly work with the owners of the great Cap Ferrat villas.',
    contextTitle: 'The ultra-exclusive Cap Ferrat environment',
    contextText: 'Cap Ferrat is one of the few places where wealth and discretion combine at an absolute level. Our interventions there are of total discretion, perfectly integrated into the ultra-exclusive residential environment of the peninsula.',
    servicesTitle: 'Protection services in Saint-Jean-Cap-Ferrat',
    services: [
      { title: 'Bodyguard at Cap Ferrat', desc: 'Close protection on the Saint-Jean-Cap-Ferrat peninsula. Absolute discretion and excellent local knowledge.', link: '/en/close-protection' },
      { title: 'Villa security Cap Ferrat', desc: 'Protection of exceptional Cap Ferrat properties. Residential guarding, CCTV and specialist agents 24/7.', link: '/en/residence-security' },
      { title: 'Yacht security Cap Ferrat', desc: 'Security for yachts anchored offshore or at private berths. Maritime agents available.', link: '/en/residence-security' },
      { title: 'Security driver Cap Ferrat', desc: 'Secure transfers to Monaco, Nice, Cannes and the heliport. Discreet prestige vehicles.', link: '/en/close-protection' },
    ],
    keywords: ['bodyguard Cap Ferrat', 'close protection Saint-Jean-Cap-Ferrat', 'villa security Cap Ferrat', 'VIP security Cap Ferrat', 'private security Cap Ferrat France', 'personal protection Cap Ferrat', 'yacht security Cap Ferrat', 'executive protection Cap Ferrat'],
    faqTitle: 'Close protection in Saint-Jean-Cap-Ferrat – FAQ',
    faqs: [
      { q: 'Do you regularly operate at Cap Ferrat?', a: 'Yes. Cap Ferrat is one of our priority operational areas. We work regularly there for resident owners and visiting guests in the great villas.' },
      { q: 'How discreet are your operations at Cap Ferrat?', a: 'Absolute discretion is our standard at Cap Ferrat. Our agents integrate perfectly into the residential environment without creating any unwanted visible presence.' },
    ],
    ctaTitle: 'Need protection at Cap Ferrat?',
    ctaDesc: 'Our teams operate on the Cap Ferrat peninsula 24/7. Free confidential assessment.',
    metaTitle: 'Bodyguard Saint-Jean-Cap-Ferrat | Close Protection & Villa Security – Imperium',
    metaDesc: 'Bodyguard and close protection in Saint-Jean-Cap-Ferrat. Villa security, yacht. CNAPS-certified agents available 24/7. Confidential quote.',
    frSlug: 'saint-jean-cap-ferrat',
  },
  ramatuelle: {
    name: 'Ramatuelle',
    region: 'Var',
    heroImg: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=1800&q=80',
    heroAlt: 'Ramatuelle – Pampelonne beaches',
    introImg: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    introAlt: 'Imperium agent Ramatuelle',
    introTitle: 'The VIP Pampelonne beaches secured',
    introP1: 'Ramatuelle is home to the famous Pampelonne beaches — Nikki Beach, Club 55, Tahiti Beach — which every summer are the unmissable meeting point of the global elite. The villas and properties on the Ramatuelle hills are among the most sought-after on the Var coast.',
    introP2: 'Our teams operate in Ramatuelle in coordination with our Saint-Tropez arrangements, covering the beaches, hilltop villas and events that have made this iconic village famous.',
    contextTitle: 'Pampelonne and the VIP beach clubs',
    contextText: 'The beach clubs of Pampelonne generate an extraordinary flow of personalities, billionaires and celebrities every summer. The security management of these open, exposed and very busy environments requires specific expertise that our teams possess.',
    servicesTitle: 'Protection services in Ramatuelle',
    services: [
      { title: 'Bodyguard in Ramatuelle', desc: 'Close protection in Ramatuelle and on the Pampelonne beaches. Agents adapted to beach environments.', link: '/en/close-protection' },
      { title: 'Villa security Ramatuelle', desc: 'Protection of villas on the Ramatuelle hills. Guarding and 24/7 residential agents.', link: '/en/residence-security' },
      { title: 'VIP beach security Pampelonne', desc: 'Security coverage during events and evenings at beach clubs. Crowd management and access filtering.', link: '/en/vip-protection' },
      { title: 'Secure transfers Ramatuelle', desc: 'Connection to Saint-Tropez heliport and airports. Vehicles adapted to the peninsula roads.', link: '/en/close-protection' },
    ],
    keywords: ['bodyguard Ramatuelle', 'close protection Ramatuelle', 'security Pampelonne beach', 'villa security Ramatuelle', 'VIP security Ramatuelle France', 'private security Ramatuelle', 'personal protection Ramatuelle', 'beach club security Pampelonne'],
    faqTitle: 'Close protection in Ramatuelle – FAQ',
    faqs: [
      { q: 'Do you provide security on the Pampelonne beaches?', a: 'Yes. We regularly operate at the Pampelonne beach clubs for the protection of personalities on holiday.' },
      { q: 'Do you also cover Gassin from Ramatuelle?', a: 'Yes. We cover the entire Saint-Tropez peninsula: Ramatuelle, Gassin and their hamlets.' },
    ],
    ctaTitle: 'Need protection in Ramatuelle?',
    ctaDesc: 'Our teams cover Ramatuelle and Pampelonne 24/7. Free confidential assessment.',
    metaTitle: 'Bodyguard Ramatuelle | Close Protection & Pampelonne Security – Imperium',
    metaDesc: 'Bodyguard and close protection in Ramatuelle. Pampelonne security, VIP beaches, villas. CNAPS-certified agents 24/7. Confidential quote.',
    frSlug: 'ramatuelle',
  },
  mougins: {
    name: 'Mougins',
    region: 'Alpes-Maritimes',
    heroImg: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1800&q=80',
    heroAlt: 'Mougins – Hilltop village Alpes-Maritimes',
    introImg: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    introAlt: 'Imperium agent Mougins',
    introTitle: 'The village of artists and gastronomy, protected',
    introP1: 'Mougins is a hilltop village in the Alpes-Maritimes, world-renowned for its exceptional gastronomy and long artistic tradition. Pablo Picasso spent his final years here. Today, this village highly sought-after by celebrities, artists and wealthy personalities passing through the French Riviera welcomes a demanding clientele.',
    introP2: 'Located just 8 kilometres from Cannes and 20 kilometres from Nice, Mougins is ideally positioned for our teams covering the entire Cannes-Grasse sector. We regularly intervene there for the protection of residents and prestige visitors.',
    contextTitle: 'Between Cannes and Grasse',
    contextText: 'Mougins enjoys a strategic position between Cannes and Grasse, in a very high-quality residential environment. The surrounding estates and properties are among the most beautiful and most expensive in the Alpes-Maritimes.',
    servicesTitle: 'Protection services in Mougins',
    services: [
      { title: 'Bodyguard in Mougins', desc: 'Close protection in Mougins and in the surrounding residential estates. Discretion and excellence.', link: '/en/close-protection' },
      { title: 'Property security Mougins', desc: 'Protection of villas and properties in Mougins and the Cannes-Grasse sector. Guarding and residential agents.', link: '/en/residence-security' },
      { title: 'Security driver Mougins', desc: 'Secure transfers to and from Cannes, Nice, Monaco and airports. Prestige vehicles.', link: '/en/close-protection' },
      { title: 'Event security Mougins', desc: 'Security for gastronomic events, private views and receptions in prestige villas and starred restaurants.', link: '/en/vip-protection' },
    ],
    keywords: ['bodyguard Mougins', 'close protection Mougins', 'VIP security Mougins', 'property security Mougins', 'private security Mougins France', 'personal protection Mougins', 'villa security Mougins', 'security Cannes Grasse Mougins'],
    faqTitle: 'Close protection in Mougins – FAQ',
    faqs: [
      { q: 'Do you operate in Mougins and the surrounding residential estates?', a: 'Yes. We cover Mougins and the residential estates of the Cannes-Grasse area with teams permanently operational in the sector.' },
      { q: 'Can you secure a private reception at a Michelin-starred restaurant in Mougins?', a: 'Absolutely. We provide discreet and effective security coverage at private events in Mougins\' prestigious establishments.' },
    ],
    ctaTitle: 'Need protection in Mougins?',
    ctaDesc: 'Our teams cover Mougins and the Cannes-Grasse sector 24/7. Contact us.',
    metaTitle: 'Bodyguard Mougins | Close Protection Cannes-Grasse – Imperium',
    metaDesc: 'Bodyguard and close protection in Mougins. Villa security, gastronomic events. CNAPS-certified agents available 24/7. Confidential quote.',
    frSlug: 'mougins',
  },
}

export async function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({ city }))
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params
  const data = cityData[city]
  if (!data) return {}
  return {
    title: data.metaTitle,
    description: data.metaDesc,
    alternates: {
      canonical: `https://www.imperiumprotection.fr/en/cities/${city}`,
      languages: {
        'fr': `https://www.imperiumprotection.fr/villes/${data.frSlug}`,
        'en': `https://www.imperiumprotection.fr/en/cities/${city}`,
      },
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDesc,
      url: `https://www.imperiumprotection.fr/en/cities/${city}`,
      siteName: 'Imperium Private Protection',
      locale: 'en_GB',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: data.metaTitle,
      description: data.metaDesc,
    },
  }
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params
  const data = cityData[city]

  if (!data) {
    return <main><p>City not found.</p></main>
  }

  return (
    <main>
      <section className="svc-hero">
        <div className="svc-hero-bg">
          <Image src={data.heroImg} alt={data.heroAlt} fill style={{ objectFit: 'cover', objectPosition: 'center 35%' }} />
          <div className="svc-hero-overlay"></div>
        </div>
        <div className="container svc-hero-content">
          <nav className="breadcrumb">
            <Link href="/en">Home</Link><span>›</span>
            <Link href="/en#coverage">Our cities</Link><span>›</span>
            <span className="bc-current">{data.name}</span>
          </nav>
          <p className="hero-tag">Close Protection · {data.name}</p>
          <h1>Bodyguard &amp; Close Protection<br /><span>in {data.name}</span></h1>
          <p className="svc-hero-desc">CNAPS-certified, discreet and responsive agents for your protection in {data.name} and across {data.region}. Available 24/7, 365 days a year.</p>
          <Link href="/en#contact" className="btn btn-gold">Request a Confidential Assessment</Link>
        </div>
      </section>

      <section className="svc-intro">
        <div className="container svc-intro-grid">
          <div className="svc-intro-text">
            <p className="section-tag">Local presence</p>
            <h2>{data.introTitle}</h2>
            <p>{data.introP1}</p>
            <p>{data.introP2}</p>
            {data.introP3 && <p>{data.introP3}</p>}
          </div>
          <div className="svc-intro-img">
            <Image src={data.introImg} alt={data.introAlt} width={800} height={600} style={{ borderRadius: '10px' }} />
          </div>
        </div>
      </section>

      <section className="svc-profiles">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">Local analysis</p>
            <h2>{data.contextTitle}</h2>
          </div>
          <p style={{ maxWidth: '760px', margin: '0 auto 2rem', textAlign: 'center', color: 'var(--text-muted)', lineHeight: 1.8 }}>{data.contextText}</p>
        </div>
      </section>

      <section className="svc-features">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">On-the-ground services</p>
            <h2>{data.servicesTitle}</h2>
          </div>
          <div className="features-grid">
            {data.services.map((svc, i) => (
              <div key={i} className="feat-card">
                <div className="feat-icon">
                  <svg viewBox="0 0 48 48" fill="none"><path d="M24 4L6 13V24C6 34.5 13.5 44.1 24 47C34.5 44.1 42 34.5 42 24V13L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>
                </div>
                <h4>{svc.title}</h4>
                <p>{svc.desc}</p>
                <Link href={svc.link} style={{ color: 'var(--gold)', fontSize: '.85rem', textDecoration: 'none' }}>Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-profiles">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">Local expertise</p>
            <h2>Our services in {data.name}</h2>
          </div>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Imperium Private Protection is present in {data.name} for all your private security needs:</p>
          <div className="city-kw-grid" style={{ justifyContent: 'center' }}>
            {data.keywords.map((kw, i) => (
              <span key={i} className="city-kw">{kw}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-faq">
        <div className="container faq-wrap">
          <div className="section-head">
            <p className="section-tag">Frequently asked questions</p>
            <h2>{data.faqTitle}</h2>
          </div>
          <div className="faq-list">
            {data.faqs.map((faq, i) => (
              <details key={i} className="faq-item">
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-related">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">Our services</p>
            <h2>Explore our services</h2>
          </div>
          <div className="related-grid">
            <Link href="/en/close-protection" className="related-card">
              <Image src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80" alt="Close Protection" width={600} height={200} style={{ objectFit: 'cover' }} />
              <div className="related-info"><h4>Close Protection</h4><span>Learn more →</span></div>
            </Link>
            <Link href="/en/vip-protection" className="related-card">
              <Image src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80" alt="VIP Protection" width={600} height={200} style={{ objectFit: 'cover' }} />
              <div className="related-info"><h4>VIP Protection</h4><span>Learn more →</span></div>
            </Link>
            <Link href="/en/residence-security" className="related-card">
              <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" alt="Residence Security" width={600} height={200} style={{ objectFit: 'cover' }} />
              <div className="related-info"><h4>Residence Security</h4><span>Learn more →</span></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="svc-cta">
        <div className="container svc-cta-inner">
          <div className="emerg-pulse"></div>
          <div>
            <h2>{data.ctaTitle}</h2>
            <p>{data.ctaDesc}</p>
          </div>
          <Link href="/en#contact" className="btn btn-gold">Contact us now</Link>
        </div>
      </section>

      <EnFooter />
    </main>
  )
}
