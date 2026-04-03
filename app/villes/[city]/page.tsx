import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FrFooter from '@/components/FrFooter'

type CityData = {
  name: string
  nameFull: string
  region: string
  heroImg: string
  heroAlt: string
  introImg: string
  introAlt: string
  sectionTag: string
  introTitle: string
  introP1: string
  introP2: string
  introP3?: string
  contextTitle: string
  contextText: string
  servicesTitle: string
  services: { title: string; desc: string; link: string }[]
  expertisesTitle: string
  keywords: string[]
  faqTitle: string
  faqs: { q: string; a: string }[]
  ctaTitle: string
  ctaDesc: string
  metaTitle: string
  metaDesc: string
  metaKeywords: string
  enSlug: string
}

const cityData: Record<string, CityData> = {
  paris: {
    name: 'Paris',
    nameFull: 'Paris',
    region: 'Île-de-France',
    heroImg: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?w=1800&q=80',
    heroAlt: 'Paris – Tour Eiffel et Seine',
    introImg: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    introAlt: 'Agent Imperium Private Protection Paris',
    sectionTag: 'Présence locale',
    introTitle: 'La capitale française sécurisée au plus haut niveau',
    introP1: 'Paris est le cœur névralgique de la France et l\'une des villes les plus visitées et les plus exposées au monde. Chefs d\'État, célébrités internationales, dirigeants d\'entreprise du CAC 40, personnalités politiques : la capitale concentre une densité exceptionnelle d\'individus à haute valeur et à forte exposition médiatique.',
    introP2: 'Imperium Private Protection est basé à Paris et intervient quotidiennement dans la capitale pour la protection rapprochée, la sécurisation de résidences, l\'accompagnement lors d\'événements officiels et la couverture sécuritaire de déplacements en Île-de-France.',
    introP3: 'Notre connaissance approfondie du tissu urbain parisien, des protocoles de sécurité en vigueur, des lieux sensibles et des axes de circulation nous permet d\'assurer une protection optimale dans chaque arrondissement.',
    contextTitle: 'Les défis sécuritaires de la capitale',
    contextText: 'Paris présente des défis sécuritaires uniques : menace terroriste résiduelle, présence de nombreux médias et paparazzi, zones de forte affluence (Champs-Élysées, Marais, Saint-Germain), grands événements internationaux et risques liés à la criminalité de luxe. Nos équipes sont formées pour opérer dans cet environnement urbain complexe tout en restant totalement discrètes.',
    servicesTitle: 'Services de protection à Paris',
    services: [
      { title: 'Garde du corps à Paris', desc: 'Protection rapprochée dans tous les arrondissements de Paris. Agents discrets en tenue civile, parfaitement intégrés à l\'environnement parisien.', link: '/protection-rapprochee' },
      { title: 'Protection de personnalité Paris', desc: 'Service dédié aux VIP, célébrités, dirigeants et personnalités politiques. Gestion de l\'exposition médiatique et filtrage des interactions.', link: '/protection-personnalite' },
      { title: 'Sécurisation résidence Paris', desc: 'Protection des appartements, hôtels particuliers et propriétés de prestige à Paris. Gardiennage, contrôle d\'accès et systèmes intégrés.', link: '/securisation-residence' },
      { title: 'Chauffeur sécurité Paris', desc: 'Transferts sécurisés dans tout Paris et en Île-de-France. Véhicules haut de gamme, chauffeurs certifiés disponibles 24h/24.', link: '/protection-rapprochee' },
    ],
    expertisesTitle: 'Nos expertises à Paris',
    keywords: ['garde du corps Paris', 'protection rapprochée Paris', 'bodyguard Paris', 'agent sécurité Paris', 'protection VIP Paris', 'sécurité personnalité Paris', 'service protection Paris', 'garde du corps luxe Paris', 'sécurité événement Paris', 'escorte sécurisée Paris'],
    faqTitle: 'Protection rapprochée à Paris – FAQ',
    faqs: [
      { q: 'Intervenez-vous dans tous les arrondissements de Paris ?', a: 'Oui. Nos équipes couvrent l\'ensemble des 20 arrondissements de Paris ainsi que la petite et grande couronne d\'Île-de-France.' },
      { q: 'Proposez-vous des services de protection lors de Fashion Week et autres grands événements ?', a: 'Absolument. Nous intervenons régulièrement lors de la Fashion Week de Paris, des grands prix, des premières de cinéma et de tous les événements de prestige parisiens.' },
      { q: 'Vos agents connaissent-ils bien Paris ?', a: 'Tous nos agents parisiens ont une excellente connaissance de la capitale : axes de circulation, zones sensibles, protocoles des lieux de prestige et relations avec les forces de l\'ordre locales.' },
    ],
    ctaTitle: 'Besoin d\'une protection à Paris ?',
    ctaDesc: 'Nos équipes sont basées à Paris et disponibles 24h/24. Contactez-nous pour une évaluation confidentielle.',
    metaTitle: 'Garde du Corps Paris | Protection Rapprochée & Sécurité VIP – Imperium',
    metaDesc: 'Garde du corps et protection rapprochée à Paris. Agents CNAPS certifiés, disponibles 24h/24. Protection VIP, personnalités, dirigeants. Devis confidentiel.',
    metaKeywords: 'garde du corps Paris, protection rapprochée Paris, bodyguard Paris, sécurité VIP Paris, agent sécurité Paris',
    enSlug: 'paris',
  },
  nice: {
    name: 'Nice',
    nameFull: 'Nice',
    region: 'Alpes-Maritimes',
    heroImg: 'https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=1800&q=80',
    heroAlt: 'Nice – Promenade des Anglais et Côte d\'Azur',
    introImg: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    introAlt: 'Agent Imperium Private Protection Nice',
    sectionTag: 'Présence locale',
    introTitle: 'La capitale de la Côte d\'Azur sous protection',
    introP1: 'Nice est la métropole de référence de la Côte d\'Azur : capitale régionale, hub aéroportuaire international, ville de congrès et festival. Elle accueille une clientèle internationale fortunée tout au long de l\'année, des sommets diplomatiques et des événements sportifs et culturels de premier plan.',
    introP2: 'Nos équipes sont implantées durablement à Nice et sur l\'ensemble du littoral azuréen. Nous intervenons pour la protection des résidents et visiteurs VIP de Nice, la sécurisation de propriétés sur les collines et à la mer, et l\'accompagnement lors d\'événements.',
    introP3: 'Notre base niçoise nous permet de déployer rapidement des équipes sur l\'ensemble de la Côte d\'Azur, de Monaco à Antibes, de Cannes à Saint-Tropez.',
    contextTitle: 'Un environnement sécuritaire exigeant',
    contextText: 'Nice présente une combinaison unique de défis : grande ville avec ses zones sensibles et ses flux touristiques, événements d\'envergure (Carnaval, MIPIM, TFWA), présence de nombreuses personnalités dans les hôtels de prestige du bord de mer et des collines. Notre expertise locale nous permet d\'anticiper et de gérer ces spécificités.',
    servicesTitle: 'Services de protection à Nice',
    services: [
      { title: 'Garde du corps à Nice', desc: 'Protection rapprochée à Nice, sur la Promenade des Anglais et dans l\'ensemble de la métropole. Agents discrets et réactifs.', link: '/protection-rapprochee' },
      { title: 'Sécurité yacht Nice et Côte d\'Azur', desc: 'Protection des super-yachts dans les ports de Nice, Villefranche et sur le littoral azuréen. Agents maritimes disponibles.', link: '/securisation-residence' },
      { title: 'Protection villa Nice et Collines', desc: 'Sécurisation des villas et propriétés sur les collines niçoises et le bord de mer. Gardiennage et présence 24h/24.', link: '/securisation-residence' },
      { title: 'Chauffeur sécurité Nice', desc: 'Transferts depuis Nice-Côte d\'Azur Aéroport. Couverture de l\'ensemble de la Côte d\'Azur avec véhicules de prestige.', link: '/protection-rapprochee' },
    ],
    expertisesTitle: 'Nos expertises à Nice',
    keywords: ['garde du corps Nice', 'protection rapprochée Nice', 'bodyguard Nice', 'sécurité VIP Nice', 'agent sécurité Nice', 'protection personnalité Nice', 'sécurité yacht Nice', 'gardiennage villa Nice', 'chauffeur sécurité Nice', 'protection Côte d\'Azur'],
    faqTitle: 'Protection rapprochée à Nice – FAQ',
    faqs: [
      { q: 'Couvrez-vous l\'ensemble de la Côte d\'Azur depuis Nice ?', a: 'Oui. Notre base à Nice nous permet de déployer des équipes sur l\'ensemble de la Côte d\'Azur en très peu de temps.' },
      { q: 'Intervenez-vous lors du Carnaval de Nice et autres événements ?', a: 'Oui. Nous avons une expérience spécifique des grands événements niçois (Carnaval, MIPIM, TFWA) et des contraintes sécuritaires qu\'ils génèrent.' },
      { q: 'Proposez-vous la protection à l\'aéroport de Nice ?', a: 'Absolument. Nous assurons les accueils VIP à l\'aéroport de Nice-Côte d\'Azur, les transferts sécurisés et la protection dans l\'enceinte aéroportuaire.' },
    ],
    ctaTitle: 'Besoin d\'une protection à Nice ?',
    ctaDesc: 'Nos équipes sont basées sur la Côte d\'Azur et disponibles 24h/24. Évaluation confidentielle gratuite.',
    metaTitle: 'Garde du Corps Nice | Protection Rapprochée Côte d\'Azur – Imperium',
    metaDesc: 'Garde du corps et protection rapprochée à Nice. Agents CNAPS certifiés. Sécurité VIP, yacht, villa et transferts sur la Côte d\'Azur. Disponibles 24h/24.',
    metaKeywords: 'garde du corps Nice, protection rapprochée Nice, bodyguard Nice, sécurité VIP Nice, agent sécurité Côte d\'Azur',
    enSlug: 'nice',
  },
  cannes: {
    name: 'Cannes',
    nameFull: 'Cannes',
    region: 'Alpes-Maritimes',
    heroImg: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=1800&q=80',
    heroAlt: 'Cannes – La Croisette et Festival',
    introImg: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    introAlt: 'Agent Imperium Private Protection Cannes',
    sectionTag: 'Présence locale',
    introTitle: 'La ville du Festival sécurisée par des experts',
    introP1: 'Cannes est mondialement connue pour son Festival international du Film, mais aussi pour ses grands congrès internationaux (MIPIM, MAPIC, TFWA, Lions) qui drainent chaque année des milliers de décideurs, de célébrités et de personnalités du monde entier. La Croisette, les palaces et les super-yachts du port Canto créent un environnement à haute densité de personnalités exposées.',
    introP2: 'Imperium Private Protection intervient régulièrement à Cannes lors du Festival et des grands congrès, assurant la protection de célébrités, de dirigeants et de délégations VIP. Notre connaissance des contraintes spécifiques de ces événements nous permet d\'opérer avec une efficacité maximale.',
    introP3: 'Nos équipes couvrent l\'ensemble du secteur cannois : La Croisette, Palm Beach, Le Suquet, Mougins, Vallauris et les îles de Lérins.',
    contextTitle: 'Le Festival et les grands congrès',
    contextText: 'Cannes est l\'une des villes du monde où la concentration de personnalités exposées est la plus forte lors des grands événements. La cohabitation entre le grand public, les médias du monde entier et les personnalités VIP impose une organisation sécuritaire de très haute précision que nous maîtrisons parfaitement.',
    servicesTitle: 'Services de protection à Cannes',
    services: [
      { title: 'Garde du corps Festival de Cannes', desc: 'Protection des célébrités, réalisateurs et personnalités lors du Festival. Gestion des montées des marches, tapis rouge et événements officiels.', link: '/protection-personnalite' },
      { title: 'Sécurité yacht port de Cannes', desc: 'Protection des super-yachts dans le port Canto et le vieux port. Contrôle d\'accès, agents embarqués et gestion des prestataires.', link: '/securisation-residence' },
      { title: 'Protection villa Cannes et environs', desc: 'Sécurisation des villas et propriétés de luxe à Cannes, Mougins et Vallauris. Gardiennage et présence 24h/24.', link: '/securisation-residence' },
      { title: 'Chauffeur sécurité Cannes', desc: 'Transferts sécurisés depuis l\'aéroport de Nice et l\'héliport de Cannes. Véhicules de prestige disponibles 24h/24.', link: '/protection-rapprochee' },
    ],
    expertisesTitle: 'Nos expertises à Cannes',
    keywords: ['garde du corps Cannes', 'protection rapprochée Cannes', 'bodyguard Cannes', 'sécurité Festival Cannes', 'protection personnalité Cannes', 'sécurité VIP Cannes', 'agent sécurité Cannes', 'sécurité yacht Cannes', 'gardiennage villa Cannes', 'protection Croisette'],
    faqTitle: 'Protection rapprochée à Cannes – FAQ',
    faqs: [
      { q: 'Pouvez-vous assurer la protection lors du Festival de Cannes ?', a: 'Oui. Nous sommes l\'un des prestataires de référence lors du Festival de Cannes. Nous assurons la protection de célébrités, de membres de jurys et de délégations VIP lors du Festival et de ses événements satellites.' },
      { q: 'Intervenez-vous aussi lors des congrès professionnels à Cannes ?', a: 'Absolument. Nous intervenons lors des grands congrès internationaux (MIPIM, MAPIC, TFWA) pour la protection de dirigeants et de délégations sensibles.' },
      { q: 'Assurez-vous des transferts depuis l\'héliport de Cannes ?', a: 'Oui. Nous gérons les accueils et transferts depuis l\'héliport de Cannes Mandelieu et l\'aéroport de Nice-Côte d\'Azur.' },
    ],
    ctaTitle: 'Besoin d\'une protection à Cannes ?',
    ctaDesc: 'Nos équipes interviennent à Cannes et sur la Croisette 24h/24, 365 jours par an.',
    metaTitle: 'Garde du Corps Cannes | Protection Rapprochée & Festival – Imperium',
    metaDesc: 'Garde du corps et protection rapprochée à Cannes. Festival, congrès, yachts, villas. Agents CNAPS certifiés disponibles 24h/24. Devis confidentiel.',
    metaKeywords: 'garde du corps Cannes, protection rapprochée Cannes, bodyguard Cannes, sécurité Festival Cannes, protection VIP Cannes',
    enSlug: 'cannes',
  },
  monaco: {
    name: 'Monaco',
    nameFull: 'Monaco',
    region: 'Principauté de Monaco',
    heroImg: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1800&q=80',
    heroAlt: 'Monaco – Port Hercule et Rocher',
    introImg: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    introAlt: 'Agent Imperium Private Protection Monaco',
    sectionTag: 'Présence locale',
    introTitle: 'La principauté la plus sécurisée d\'Europe',
    introP1: 'Monaco est la principauté la plus densément peuplée du monde et l\'État avec le plus fort taux de millionnaires per capita. Sa surface réduite et son statut de place financière internationale de premier plan attirent une population résidente et touristique d\'une richesse et d\'une exposition hors du commun.',
    introP2: 'Nos équipes opèrent régulièrement à Monaco pour la protection de résidents permanents, de visiteurs lors du Grand Prix, du Yacht Show et des autres événements qui jalonnent l\'agenda monégasque. Nous coordonnons nos interventions avec les forces de sécurité de la Principauté.',
    introP3: 'Nos agents connaissent parfaitement l\'environnement monégasque : Port Hercule, le Rocher, Monte-Carlo, Fontvieille et les quartiers résidentiels comme Larvotto et les jardins exotiques.',
    contextTitle: 'L\'environnement ultra-sécurisé monégasque',
    contextText: 'Monaco dispose de l\'un des systèmes de surveillance les plus sophistiqués au monde. Cela ne supprime pas les besoins en protection privée : au contraire, la densité de richesses et la visibilité des résidents imposent une protection personnalisée et discrète qui complète les dispositifs officiels de la Principauté.',
    servicesTitle: 'Services de protection à Monaco',
    services: [
      { title: 'Garde du corps à Monaco', desc: 'Protection rapprochée dans toute la Principauté. Agents parfaitement intégrés à l\'environnement monégasque, disponibles 24h/24.', link: '/protection-rapprochee' },
      { title: 'Sécurité super-yacht Port Hercule', desc: 'Protection des super-yachts à Port Hercule et en escale monégasque. Contrôle d\'accès, agents embarqués et gestion complète.', link: '/securisation-residence' },
      { title: 'Sécurisation résidence Monaco', desc: 'Protection des appartements, penthouses et propriétés de prestige à Monaco. Gardiennage de haut niveau et intégration aux systèmes existants.', link: '/securisation-residence' },
      { title: 'Sécurité Grand Prix Monaco', desc: 'Protection lors du Grand Prix de Monaco et des événements satellites. Gestion des déplacements et des accès dans la configuration circuit.', link: '/protection-personnalite' },
    ],
    expertisesTitle: 'Nos expertises à Monaco',
    keywords: ['garde du corps Monaco', 'protection rapprochée Monaco', 'bodyguard Monaco', 'sécurité yacht Monaco', 'protection VIP Monaco', 'agent sécurité Monaco', 'sécurité Grand Prix Monaco', 'gardiennage résidence Monaco', 'protection personnalité Monaco', 'sécurité Port Hercule'],
    faqTitle: 'Protection rapprochée à Monaco – FAQ',
    faqs: [
      { q: 'Pouvez-vous opérer à Monaco malgré la forte présence des forces de sécurité officielles ?', a: 'Tout à fait. Nous coordonnons nos interventions avec les services de la Principauté. La présence d\'une sécurité officielle dense ne remplace pas la protection personnalisée pour les individus à haute exposition.' },
      { q: 'Intervenez-vous lors du Grand Prix de Monaco ?', a: 'Oui. Le Grand Prix de Monaco est l\'un de nos événements récurrents. Nous assurons la protection de personnalités, de dirigeants d\'équipes et d\'invités VIP lors du Grand Prix et des événements satellites.' },
      { q: 'Gérez-vous la sécurité des yachts lors du Monaco Yacht Show ?', a: 'Absolument. Le Monaco Yacht Show est l\'une de nos périodes d\'intervention principales. Nous sécurisons les yachts exposés et assurons la protection des propriétaires et de leurs invités.' },
    ],
    ctaTitle: 'Besoin d\'une protection à Monaco ?',
    ctaDesc: 'Nos équipes interviennent à Monaco 24h/24, toute l\'année. Évaluation confidentielle gratuite.',
    metaTitle: 'Garde du Corps Monaco | Protection Rapprochée & Sécurité Yacht – Imperium',
    metaDesc: 'Garde du corps et protection rapprochée à Monaco. Grand Prix, Yacht Show, résidences de prestige. Agents CNAPS certifiés 24h/24. Devis confidentiel.',
    metaKeywords: 'garde du corps Monaco, protection rapprochée Monaco, bodyguard Monaco, sécurité VIP Monaco, sécurité yacht Monaco',
    enSlug: 'monaco',
  },
  'saint-tropez': {
    name: 'Saint-Tropez',
    nameFull: 'Saint-Tropez',
    region: 'Var',
    heroImg: 'https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=1800&q=80',
    heroAlt: 'Saint-Tropez – Port et village',
    introImg: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    introAlt: 'Agent Imperium Private Protection Saint-Tropez',
    sectionTag: 'Présence locale',
    introTitle: 'La capitale estivale du luxe mondial',
    introP1: 'Saint-Tropez est, durant la saison estivale, l\'une des destinations les plus prisées au monde par les ultra-riches, les célébrités et les grandes fortunes internationales. Le port, Les Caves du Roy, le Club 55, Nikki Beach – autant de lieux où se retrouvent personnalités et milliardaires qui ont besoin d\'une protection à la hauteur de leur exposition.',
    introP2: 'La concentration exceptionnelle de super-yachts dans le golfe de Saint-Tropez, la densité de villas de luxe dans les hameaux de Ramatuelle, Gassin et dans les Parcs de Saint-Tropez, ainsi que l\'affluence touristique extrême créent un environnement sécuritaire particulièrement complexe.',
    introP3: 'Imperium Private Protection est l\'un des prestataires de référence sur Saint-Tropez durant la saison. Nos agents connaissent parfaitement l\'environnement : du port aux plages de Pampelonne, des boîtes de nuit aux clubs de plage huppés.',
    contextTitle: 'Défis sécuritaires à Saint-Tropez',
    contextText: 'Saint-Tropez concentre durant l\'été une pression extraordinaire : foules denses sur le port, présence de paparazzi, tentatives d\'intrusion dans les propriétés privées, vols ciblant les clientèles fortunées. La navigation entre les plages, les yachts et les événements nocturnes nécessite une coordination sécuritaire de haut niveau que nos équipes maîtrisent.',
    servicesTitle: 'Services de protection à Saint-Tropez',
    services: [
      { title: 'Garde du corps à Saint-Tropez', desc: 'Protection rapprochée sur le port, les plages, les restaurants et clubs de Saint-Tropez. Agents discrets et adaptés à l\'ambiance estivale décontractée mais vigilants.', link: '/protection-rapprochee' },
      { title: 'Sécurité yacht golfe de Saint-Tropez', desc: 'Protection à bord des super-yachts dans le golfe de Saint-Tropez. Agents formés aux environnements maritimes, gestion des accès à bord et escorte en annexe.', link: '/securisation-residence' },
      { title: 'Protection villa Saint-Tropez et Pampelonne', desc: 'Sécurisation des villas de luxe dans les parcs de Saint-Tropez, Ramatuelle et Gassin. Gardiennage, contrôle d\'accès et présence 24h/24.', link: '/securisation-residence' },
      { title: 'Chauffeur sécurité Saint-Tropez', desc: 'Transferts sécurisés depuis les aéroports de Nice et Toulon, l\'héliport de Saint-Tropez. Gestion des déplacements dans la péninsule de Saint-Tropez.', link: '/protection-rapprochee' },
    ],
    expertisesTitle: 'Nos expertises à Saint-Tropez',
    keywords: ['garde du corps Saint-Tropez', 'protection rapprochée Saint-Tropez', 'bodyguard Saint-Tropez', 'sécurité yacht Saint-Tropez', 'protection villa Saint-Tropez', 'sécurité VIP Saint-Tropez', 'agent sécurité Var', 'protection Pampelonne', 'sécurité Gassin Ramatuelle', 'garde du corps luxe Saint-Tropez'],
    faqTitle: 'Protection rapprochée à Saint-Tropez – FAQ',
    faqs: [
      { q: 'Opérez-vous à Saint-Tropez toute l\'année ou seulement l\'été ?', a: 'Nous opérons à Saint-Tropez toute l\'année, avec un dispositif renforcé durant la haute saison estivale (juin-septembre) où la demande est la plus forte.' },
      { q: 'Pouvez-vous assurer la sécurité sur un yacht dans le golfe ?', a: 'Oui. Nous déployons des agents spécialisés dans les environnements maritimes, capables d\'opérer à bord, en annexe ou lors des débarquements sur les plages.' },
      { q: 'Comment gérez-vous les paparazzi à Saint-Tropez ?', a: 'Nous avons des protocoles spécifiques pour gérer la présence des paparazzi : itinéraires alternatifs, gestion des entrées et sorties des établissements, coordination avec les responsables des lieux.' },
    ],
    ctaTitle: 'Besoin d\'une protection à Saint-Tropez ?',
    ctaDesc: 'Nos équipes sont disponibles sur Saint-Tropez et le golfe 24h/24. Contactez-nous pour une évaluation confidentielle.',
    metaTitle: 'Garde du Corps Saint-Tropez | Protection Rapprochée & Sécurité Yacht – Imperium',
    metaDesc: 'Garde du corps et protection rapprochée à Saint-Tropez. Sécurité yacht, villa, plages VIP. Agents CNAPS disponibles 24h/24. Protection Pampelonne, Ramatuelle, Gassin. Devis confidentiel.',
    metaKeywords: 'garde du corps Saint-Tropez, protection rapprochée Saint-Tropez, bodyguard Saint-Tropez, sécurité yacht Saint-Tropez, protection villa Saint-Tropez',
    enSlug: 'saint-tropez',
  },
  courchevel: {
    name: 'Courchevel',
    nameFull: 'Courchevel',
    region: 'Savoie',
    heroImg: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=1800&q=80',
    heroAlt: 'Courchevel – Station de ski de luxe',
    introImg: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    introAlt: 'Agent Imperium Private Protection Courchevel',
    sectionTag: 'Présence locale',
    introTitle: 'La station la plus exclusive des Alpes',
    introP1: 'Courchevel 1850 est la station de ski la plus luxueuse et la plus exclusive au monde. Elle accueille chaque hiver une clientèle internationale d\'ultra-riches – oligarques russes, familles royales du Golfe, milliardaires américains et européens – qui y séjournent dans des chalets valant plusieurs dizaines de millions d\'euros.',
    introP2: 'Cette concentration exceptionnelle de fortunes et de profils à haute exposition crée des besoins sécuritaires très spécifiques, dans un environnement montagnard qui impose des contraintes opérationnelles particulières. Nos équipes interviennent à Courchevel depuis de nombreuses saisons et maîtrisent parfaitement ces spécificités.',
    introP3: 'De la sécurisation des chalets de prestige à l\'escorte sur les pistes, de la gestion des transferts en hélicoptère à la protection lors des dîners au restaurant Le Chabichou ou La Table du Kilimandjaro, nous couvrons chaque aspect de votre séjour courchevelois.',
    contextTitle: 'Spécificités sécuritaires à Courchevel',
    contextText: 'Courchevel présente des défis opérationnels uniques : altitude, enneigement, routes d\'accès limitées, héliport privé, concentration de chalets ultra-sécurisés. La clientèle internationale y apporte aussi des profils de risque variés. Nos agents sont formés aux conditions montagnardes et adaptent leurs véhicules et équipements à cet environnement spécifique.',
    servicesTitle: 'Services de protection à Courchevel',
    services: [
      { title: 'Garde du corps à Courchevel', desc: 'Protection rapprochée à Courchevel 1850, 1650 et 1550. Agents adaptés à l\'environnement montagnard, en tenue civile de saison.', link: '/protection-rapprochee' },
      { title: 'Sécurisation chalet Courchevel', desc: 'Protection des chalets de prestige à Courchevel : gardiennage, contrôle d\'accès, surveillance périmétrique et agents résidents 24h/24.', link: '/securisation-residence' },
      { title: 'Chauffeur sécurité Courchevel', desc: 'Transferts sécurisés depuis les aéroports de Genève, Lyon et Chambéry. Véhicules 4x4 de luxe avec équipements hiver et chauffeurs certifiés.', link: '/protection-rapprochee' },
      { title: 'Escorte ski et activités Courchevel', desc: 'Accompagnement sécurisé lors des activités de ski, randonnées et activités extérieures. Agents discrets adaptés à l\'environnement sportif.', link: '/protection-rapprochee' },
    ],
    expertisesTitle: 'Nos expertises à Courchevel',
    keywords: ['garde du corps Courchevel', 'protection rapprochée Courchevel', 'bodyguard Courchevel', 'sécurité VIP Courchevel', 'protection chalet Courchevel', 'agent sécurité Courchevel 1850', 'sécurité ski luxe', 'protection personnalité Courchevel', 'gardiennage chalet luxe', 'chauffeur sécurité Courchevel'],
    faqTitle: 'Protection rapprochée à Courchevel – FAQ',
    faqs: [
      { q: 'Proposez-vous la sécurité à Courchevel en dehors de la saison ski ?', a: 'Courchevel accueille aussi des événements estivaux. Nous intervenons toute l\'année, avec un dispositif renforcé durant la haute saison hivernale (décembre-avril).' },
      { q: 'Vos agents peuvent-ils skier pour accompagner un client sur les pistes ?', a: 'Oui. Certains de nos agents sont des skieurs confirmés et peuvent accompagner les clients sur les pistes tout en maintenant une vigilance sécuritaire discrète.' },
      { q: 'Assurez-vous les transferts depuis Genève vers Courchevel ?', a: 'Oui. Nous gérons les transferts depuis les aéroports de Genève, Lyon et Chambéry, avec des véhicules 4x4 de luxe équipés pour les conditions hivernales alpines.' },
    ],
    ctaTitle: 'Besoin d\'une protection à Courchevel ?',
    ctaDesc: 'Nos équipes interviennent à Courchevel et dans les Trois Vallées. Contactez-nous pour une évaluation confidentielle 24h/24.',
    metaTitle: 'Garde du Corps Courchevel | Protection Rapprochée & Sécurité Chalet – Imperium',
    metaDesc: 'Garde du corps et protection rapprochée à Courchevel 1850. Sécurité chalet de luxe, ski VIP, transferts. Agents CNAPS disponibles 24h/24. Évaluation confidentielle gratuite.',
    metaKeywords: 'garde du corps Courchevel, protection rapprochée Courchevel, bodyguard Courchevel, sécurité VIP Courchevel, protection chalet Courchevel',
    enSlug: 'courchevel',
  },
  megeve: {
    name: 'Megève',
    nameFull: 'Megève',
    region: 'Haute-Savoie',
    heroImg: 'https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?w=1800&q=80',
    heroAlt: 'Megève – Village alpin de luxe',
    introImg: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    introAlt: 'Agent Imperium Private Protection Megève',
    sectionTag: 'Présence locale',
    introTitle: 'L\'élégance alpine au service de votre sécurité',
    introP1: 'Megève est la station alpine par excellence pour une clientèle franco-française et internationale de grande tradition. Fondée par la famille Rothschild, elle incarne depuis un siècle l\'élégance et le raffinement montagnard. Ses chalets, ses hôtels de prestige et son atmosphère unique attirent une clientèle fortunée qui exige une protection à la hauteur de ses standards.',
    introP2: 'Imperium Private Protection intervient régulièrement à Megève, apportant la même excellence opérationnelle qu\'à Paris ou sur la Côte d\'Azur, adaptée aux contraintes de l\'environnement montagnard savoyard.',
    introP3: 'Nos équipes couvrent l\'ensemble du massif du Mont-Blanc et peuvent intervenir sur les stations voisines (Saint-Gervais, Les Contamines, Chamonix) dans des délais très courts.',
    contextTitle: 'Un environnement sécuritaire discret',
    contextText: 'Megève attire une clientèle qui apprécie particulièrement la discrétion et l\'authenticité. Nos agents s\'intègrent naturellement dans l\'atmosphère villageoise de la station, sans rupture avec l\'ambiance locale. La protection y est invisible mais totalement efficace.',
    servicesTitle: 'Services de protection à Megève',
    services: [
      { title: 'Garde du corps à Megève', desc: 'Protection rapprochée discrète à Megève. Agents adaptés à l\'environnement alpin et aux codes de la station.', link: '/protection-rapprochee' },
      { title: 'Sécurisation chalet Megève', desc: 'Protection des chalets et propriétés privées à Megève et sur le massif du Mont-Blanc. Gardiennage et agents résidents.', link: '/securisation-residence' },
      { title: 'Chauffeur sécurité Megève', desc: 'Transferts depuis Genève, Lyon et Annecy. Véhicules 4x4 premium adaptés aux conditions alpines.', link: '/protection-rapprochee' },
      { title: 'Sécurité événements Megève', desc: 'Couverture sécuritaire pour les événements privés, dîners de gala et réceptions dans les chalets et hôtels de prestige.', link: '/protection-personnalite' },
    ],
    expertisesTitle: 'Nos expertises à Megève',
    keywords: ['garde du corps Megève', 'protection rapprochée Megève', 'bodyguard Megève', 'sécurité VIP Megève', 'protection chalet Megève', 'agent sécurité Haute-Savoie', 'sécurité ski Megève', 'gardiennage chalet Megève', 'chauffeur sécurité Megève', 'protection personnalité Megève'],
    faqTitle: 'Protection rapprochée à Megève – FAQ',
    faqs: [
      { q: 'Intervenez-vous à Megève et à Chamonix ?', a: 'Oui. Nous couvrons l\'ensemble du massif du Mont-Blanc, de Megève à Chamonix en passant par Saint-Gervais et Les Contamines.' },
      { q: 'Pouvez-vous sécuriser un chalet pour une famille pendant les vacances scolaires ?', a: 'Absolument. Nous proposons des dispositifs complets pour les familles en séjour à Megève : protection des parents, accompagnement des enfants aux cours de ski et sécurisation du chalet.' },
    ],
    ctaTitle: 'Besoin d\'une protection à Megève ?',
    ctaDesc: 'Nos équipes interviennent à Megève et dans tout le massif du Mont-Blanc. Contactez-nous 24h/24.',
    metaTitle: 'Garde du Corps Megève | Protection Rapprochée & Sécurité Chalet – Imperium',
    metaDesc: 'Garde du corps et protection rapprochée à Megève. Sécurité chalet de luxe, ski VIP, transferts alpins. Agents CNAPS disponibles 24h/24. Évaluation confidentielle.',
    metaKeywords: 'garde du corps Megève, protection rapprochée Megève, bodyguard Megève, sécurité VIP Megève, protection chalet Megève',
    enSlug: 'megeve',
  },
  antibes: {
    name: 'Antibes',
    nameFull: 'Antibes',
    region: 'Alpes-Maritimes',
    heroImg: 'https://images.unsplash.com/photo-1595843563523-41ba81a15d64?w=1800&q=80',
    heroAlt: 'Antibes – Port Vauban et vieille ville',
    introImg: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    introAlt: 'Agent Imperium Private Protection Antibes',
    sectionTag: 'Présence locale',
    introTitle: 'La capitale mondiale du yachting sécurisée',
    introP1: 'Antibes est mondialement connue pour Port Vauban, le plus grand port de plaisance d\'Europe, qui accueille certains des plus grands super-yachts du monde. Cap d\'Antibes concentre quant à lui des propriétés parmi les plus exclusives de la Côte d\'Azur, avec des villas se vendant à des prix records.',
    introP2: 'Notre présence permanente sur Antibes et le Cap nous permet d\'intervenir rapidement pour tous les besoins en protection : propriétés du Cap, super-yachts à Port Vauban, événements au Salon Nautique ou dans les hôtels de prestige.',
    introP3: 'Nous couvrons l\'ensemble du secteur Antibes-Juan-les-Pins, en coordination avec nos équipes de Nice et Cannes pour une couverture sécuritaire continue de la Côte d\'Azur.',
    contextTitle: 'Port Vauban et le Cap d\'Antibes',
    contextText: 'Port Vauban est un environnement particulier : concentration de richesses extraordinaires, flux continu de visiteurs et de prestataires, et enjeux de sécurité maritime spécifiques. Le Cap d\'Antibes est quant à lui l\'une des adresses les plus discrètes et les plus exclusives de la Côte d\'Azur.',
    servicesTitle: 'Services de protection à Antibes',
    services: [
      { title: 'Garde du corps à Antibes', desc: 'Protection rapprochée à Antibes, sur le Cap et à Juan-les-Pins. Agents discrets adaptés à la Côte d\'Azur.', link: '/protection-rapprochee' },
      { title: 'Sécurité yacht Port Vauban', desc: 'Protection des super-yachts à Port Vauban. Contrôle d\'accès à bord, agents embarqués et gestion des prestataires.', link: '/securisation-residence' },
      { title: 'Protection villa Cap d\'Antibes', desc: 'Sécurisation des villas et propriétés du Cap d\'Antibes. Gardiennage, CCTV et agents résidents 24h/24.', link: '/securisation-residence' },
      { title: 'Chauffeur sécurité Antibes', desc: 'Transferts depuis les aéroports de Nice et les ports. Véhicules haut de gamme disponibles 24h/24.', link: '/protection-rapprochee' },
    ],
    expertisesTitle: 'Nos expertises à Antibes',
    keywords: ['garde du corps Antibes', 'protection rapprochée Antibes', 'sécurité yacht Port Vauban', 'bodyguard Antibes', 'protection villa Cap d\'Antibes', 'sécurité VIP Antibes', 'agent sécurité Antibes', 'protection super-yacht Antibes', 'gardiennage villa Antibes', 'chauffeur sécurité Antibes'],
    faqTitle: 'Protection rapprochée à Antibes – FAQ',
    faqs: [
      { q: 'Assurez-vous la sécurité des yachts à Port Vauban ?', a: 'Oui. Port Vauban est l\'un de nos secteurs d\'intervention régulier. Nous déployons des agents formés aux environnements maritimes pour la protection des super-yachts à quai et lors des départs.' },
      { q: 'Couvrez-vous aussi Juan-les-Pins depuis Antibes ?', a: 'Absolument. Nous couvrons l\'ensemble de la commune d\'Antibes-Juan-les-Pins et ses environs immédiats.' },
    ],
    ctaTitle: 'Besoin d\'une protection à Antibes ?',
    ctaDesc: 'Nos équipes couvrent Antibes, Juan-les-Pins et le Cap. Disponibles 24h/24.',
    metaTitle: 'Garde du Corps Antibes | Protection Rapprochée & Sécurité Yacht – Imperium',
    metaDesc: 'Garde du corps et protection rapprochée à Antibes. Sécurité super-yacht Port Vauban, villa Cap d\'Antibes. Agents CNAPS 24h/24. Devis confidentiel.',
    metaKeywords: 'garde du corps Antibes, protection rapprochée Antibes, sécurité yacht Port Vauban, protection villa Cap Antibes, bodyguard Antibes',
    enSlug: 'antibes',
  },
  'juan-les-pins': {
    name: 'Juan-les-Pins',
    nameFull: 'Juan-les-Pins',
    region: 'Alpes-Maritimes',
    heroImg: 'https://images.unsplash.com/photo-1544642058-b4e1a5d0a8d7?w=1800&q=80',
    heroAlt: 'Juan-les-Pins – Côte d\'Azur',
    introImg: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    introAlt: 'Agent Imperium Private Protection Juan-les-Pins',
    sectionTag: 'Présence locale',
    introTitle: 'Discrétion et excellence sur la Côte d\'Azur',
    introP1: 'Juan-les-Pins est une station balnéaire mythique de la Côte d\'Azur, connue pour son ambiance cosmopolite, ses plages privées et son festival de jazz international. Adjacente à Antibes, elle accueille une clientèle aisée et internationale en quête de discrétion et de qualité.',
    introP2: 'Nos équipes basées sur le secteur Antibes-Juan-les-Pins couvrent l\'ensemble de cette zone en continuité avec nos dispositifs niçois et cannois, assurant une couverture sécuritaire sans rupture sur la totalité de la côte.',
    contextTitle: 'Festival de Jazz et événements',
    contextText: 'Le Festival International de Jazz de Juan-les-Pins attire chaque été des artistes et un public international de grande qualité. Nous assurons régulièrement la sécurité de personnalités présentes lors de cet événement et des soirées privées qui l\'accompagnent.',
    servicesTitle: 'Services de protection à Juan-les-Pins',
    services: [
      { title: 'Garde du corps à Juan-les-Pins', desc: 'Protection rapprochée à Juan-les-Pins et sur les plages privées. Agents discrets et efficaces.', link: '/protection-rapprochee' },
      { title: 'Sécurité événements jazz', desc: 'Couverture sécuritaire lors du Festival de Jazz et des événements culturels. Protection des artistes et personnalités VIP.', link: '/protection-personnalite' },
      { title: 'Protection villa Juan-les-Pins', desc: 'Sécurisation des propriétés et villas de la commune. Gardiennage et agents résidents.', link: '/securisation-residence' },
      { title: 'Chauffeur sécurité Antibes-Juan-les-Pins', desc: 'Transferts sécurisés sur le secteur. Liaison avec Nice-Aéroport et les autres destinations de la Côte d\'Azur.', link: '/protection-rapprochee' },
    ],
    expertisesTitle: 'Nos expertises à Juan-les-Pins',
    keywords: ['garde du corps Juan-les-Pins', 'protection rapprochée Juan-les-Pins', 'bodyguard Juan-les-Pins', 'sécurité VIP Juan-les-Pins', 'sécurité Festival Jazz Juan-les-Pins', 'agent sécurité Juan-les-Pins', 'protection personnalité Juan-les-Pins', 'gardiennage villa Juan-les-Pins'],
    faqTitle: 'Protection rapprochée à Juan-les-Pins – FAQ',
    faqs: [
      { q: 'Intervenez-vous lors du Festival de Jazz de Juan-les-Pins ?', a: 'Oui. Nous assurons régulièrement la sécurité des artistes et personnalités VIP présentes lors du festival.' },
      { q: 'Vos équipes couvrent-elles les deux communes Antibes et Juan-les-Pins ?', a: 'Oui. Nos équipes couvrent l\'ensemble de la commune Antibes-Juan-les-Pins sans distinction.' },
    ],
    ctaTitle: 'Besoin d\'une protection à Juan-les-Pins ?',
    ctaDesc: 'Nos équipes couvrent Juan-les-Pins et tout le secteur Antibes. Disponibles 24h/24.',
    metaTitle: 'Garde du Corps Juan-les-Pins | Protection Rapprochée Côte d\'Azur – Imperium',
    metaDesc: 'Garde du corps et protection rapprochée à Juan-les-Pins. Festival de Jazz, plages VIP. Agents CNAPS disponibles 24h/24. Devis confidentiel.',
    metaKeywords: 'garde du corps Juan-les-Pins, protection rapprochée Juan-les-Pins, bodyguard Juan-les-Pins, sécurité VIP Juan-les-Pins, sécurité Festival Jazz',
    enSlug: 'juan-les-pins',
  },
  grimaud: {
    name: 'Grimaud',
    nameFull: 'Grimaud',
    region: 'Var',
    heroImg: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=1800&q=80',
    heroAlt: 'Grimaud et Port-Grimaud – Golfe de Saint-Tropez',
    introImg: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    introAlt: 'Agent Imperium Private Protection Grimaud',
    sectionTag: 'Présence locale',
    introTitle: 'La Venise provençale en toute sécurité',
    introP1: 'Grimaud et Port-Grimaud constituent un ensemble résidentiel de très grand standing dans le golfe de Saint-Tropez. Port-Grimaud, surnommé la Venise provençale, est un village lacustre privé où chaque maison dispose de son propre appontement, accueillant des bateaux et yachts de prestige.',
    introP2: 'La clientèle de Grimaud et Port-Grimaud est parmi les plus fortunées de la côte varoise : propriétaires de villas et maisons de village avec ponton privé, résidents de passage sur de grands yachts. Nos équipes maîtrisent cet environnement unique qui mêle sécurité maritime et terrestre.',
    contextTitle: 'Sécurité dans l\'arrière-pays du golfe',
    contextText: 'La commune de Grimaud s\'étend de l\'arrière-pays varois jusqu\'au bord de mer de Port-Grimaud. Cette géographie particulière implique une gestion sécuritaire qui intègre les accès routiers et maritimes, la surveillance des appontements privés et la protection dans l\'environnement résidentiel fermé de Port-Grimaud.',
    servicesTitle: 'Services de protection à Grimaud',
    services: [
      { title: 'Garde du corps à Grimaud et Port-Grimaud', desc: 'Protection rapprochée dans le golfe de Saint-Tropez. Agents adaptés à l\'environnement maritime et lacustre.', link: '/protection-rapprochee' },
      { title: 'Sécurité villa Port-Grimaud', desc: 'Sécurisation des maisons et villas de Port-Grimaud avec accès par voie maritime. Contrôle des appontements et des accès.', link: '/securisation-residence' },
      { title: 'Protection yacht golfe de Saint-Tropez', desc: 'Sécurité des yachts mouillant dans le golfe entre Grimaud et Saint-Tropez. Agents embarqués et transferts en annexe.', link: '/securisation-residence' },
      { title: 'Transferts sécurisés Grimaud', desc: 'Liaison sécurisée avec l\'héliport de Saint-Tropez, les aéroports de Nice et Toulon et les marinas du golfe.', link: '/protection-rapprochee' },
    ],
    expertisesTitle: 'Nos expertises à Grimaud',
    keywords: ['garde du corps Grimaud', 'protection rapprochée Grimaud', 'sécurité Port-Grimaud', 'bodyguard Grimaud', 'sécurité villa Port-Grimaud', 'protection yacht golfe Saint-Tropez', 'agent sécurité Grimaud', 'gardiennage Port-Grimaud'],
    faqTitle: 'Protection rapprochée à Grimaud – FAQ',
    faqs: [
      { q: 'Pouvez-vous accéder à Port-Grimaud par voie maritime ?', a: 'Oui. Nos agents peuvent se déplacer par voie maritime à Port-Grimaud et assurer la sécurité des appontements privés et des accès par l\'eau.' },
      { q: 'Couvrez-vous aussi Sainte-Maxime et Cogolin depuis Grimaud ?', a: 'Oui. Nous couvrons l\'ensemble du golfe de Saint-Tropez, de Sainte-Maxime à Ramatuelle en passant par Grimaud et Cogolin.' },
    ],
    ctaTitle: 'Besoin d\'une protection à Grimaud ?',
    ctaDesc: 'Nos équipes couvrent Grimaud, Port-Grimaud et tout le golfe de Saint-Tropez. Disponibles 24h/24.',
    metaTitle: 'Garde du Corps Grimaud | Protection Rapprochée & Sécurité Port-Grimaud – Imperium',
    metaDesc: 'Garde du corps et protection rapprochée à Grimaud et Port-Grimaud. Sécurité yacht, villa lacustre. Agents CNAPS disponibles 24h/24. Devis confidentiel.',
    metaKeywords: 'garde du corps Grimaud, protection rapprochée Grimaud, sécurité Port-Grimaud, bodyguard Grimaud, protection yacht golfe Saint-Tropez',
    enSlug: 'grimaud',
  },
  'saint-jean-cap-ferrat': {
    name: 'Saint-Jean-Cap-Ferrat',
    nameFull: 'Saint-Jean-Cap-Ferrat',
    region: 'Alpes-Maritimes',
    heroImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1800&q=80',
    heroAlt: 'Saint-Jean-Cap-Ferrat – Côte d\'Azur',
    introImg: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    introAlt: 'Agent Imperium Private Protection Saint-Jean-Cap-Ferrat',
    sectionTag: 'Présence locale',
    introTitle: 'La presqu\'île la plus exclusive de la Méditerranée',
    introP1: 'Saint-Jean-Cap-Ferrat est l\'une des adresses les plus exclusives et les plus chères au monde. Cette presqu\'île entre Nice et Monaco abrite quelques-unes des propriétés les plus précieuses de la planète, appartenant aux familles royales, aux milliardaires et aux grandes fortunes mondiales.',
    introP2: 'La nature même de la presqu\'île — semi-isolée, avec un accès routier unique — crée un environnement sécuritaire particulier que nos équipes maîtrisent parfaitement. Nous travaillons régulièrement avec les propriétaires des grandes villas du Cap Ferrat.',
    contextTitle: 'L\'environnement ultra-exclusif du Cap Ferrat',
    contextText: 'Cap Ferrat est l\'un des rares endroits où la richesse et la discrétion se conjuguent à un niveau absolu. Nos interventions y sont d\'une discrétion totale, parfaitement intégrées à l\'environnement résidentiel ultra-exclusif de la presqu\'île.',
    servicesTitle: 'Services de protection à Saint-Jean-Cap-Ferrat',
    services: [
      { title: 'Garde du corps à Cap Ferrat', desc: 'Protection rapprochée sur la presqu\'île de Saint-Jean-Cap-Ferrat. Discrétion absolue et excellente connaissance des lieux.', link: '/protection-rapprochee' },
      { title: 'Sécurisation villa Cap Ferrat', desc: 'Protection des propriétés d\'exception de Cap Ferrat. Gardiennage résidentiel, CCTV et agents spécialisés 24h/24.', link: '/securisation-residence' },
      { title: 'Protection yacht Cap Ferrat', desc: 'Sécurité des yachts mouillant au large ou à l\'appontement privé. Agents maritimes disponibles.', link: '/securisation-residence' },
      { title: 'Chauffeur sécurité Cap Ferrat', desc: 'Transferts sécurisés vers Monaco, Nice, Cannes et l\'héliport. Véhicules de prestige discrets.', link: '/protection-rapprochee' },
    ],
    expertisesTitle: 'Nos expertises à Saint-Jean-Cap-Ferrat',
    keywords: ['garde du corps Cap Ferrat', 'protection rapprochée Saint-Jean-Cap-Ferrat', 'sécurité villa Cap Ferrat', 'bodyguard Cap Ferrat', 'protection propriété Cap Ferrat', 'agent sécurité Saint-Jean-Cap-Ferrat', 'gardiennage villa Cap Ferrat', 'sécurité VIP Cap Ferrat'],
    faqTitle: 'Protection rapprochée à Saint-Jean-Cap-Ferrat – FAQ',
    faqs: [
      { q: 'Intervenez-vous régulièrement à Cap Ferrat ?', a: 'Oui. Cap Ferrat est l\'une de nos zones d\'intervention privilégiées. Nous y travaillons régulièrement pour des propriétaires résidents et des visiteurs de passage dans les grandes villas.' },
      { q: 'Quelle est la discrétion de vos interventions à Cap Ferrat ?', a: 'La discrétion absolue est notre standard à Cap Ferrat. Nos agents s\'intègrent parfaitement à l\'environnement résidentiel sans créer de présence visible indésirable.' },
    ],
    ctaTitle: 'Besoin d\'une protection à Cap Ferrat ?',
    ctaDesc: 'Nos équipes interviennent sur la presqu\'île de Cap Ferrat 24h/24. Évaluation confidentielle gratuite.',
    metaTitle: 'Garde du Corps Saint-Jean-Cap-Ferrat | Protection Rapprochée & Villa – Imperium',
    metaDesc: 'Garde du corps et protection rapprochée à Saint-Jean-Cap-Ferrat. Sécurité villa, yacht. Agents CNAPS disponibles 24h/24. Devis confidentiel.',
    metaKeywords: 'garde du corps Cap Ferrat, protection rapprochée Saint-Jean-Cap-Ferrat, sécurité villa Cap Ferrat, bodyguard Cap Ferrat',
    enSlug: 'saint-jean-cap-ferrat',
  },
  ramatuelle: {
    name: 'Ramatuelle',
    nameFull: 'Ramatuelle',
    region: 'Var',
    heroImg: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=1800&q=80',
    heroAlt: 'Ramatuelle – Plages de Pampelonne',
    introImg: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    introAlt: 'Agent Imperium Private Protection Ramatuelle',
    sectionTag: 'Présence locale',
    introTitle: 'Les plages VIP de Pampelonne sécurisées',
    introP1: 'Ramatuelle abrite les célèbres plages de Pampelonne — Nikki Beach, Club 55, Tahiti Beach — qui sont chaque été le rendez-vous incontournable de l\'élite mondiale. Les villas et propriétés des collines de Ramatuelle comptent parmi les plus prisées de la côte varoise.',
    introP2: 'Nos équipes opèrent à Ramatuelle en coordination avec nos dispositifs de Saint-Tropez, couvrant les plages, les villas perchées et les événements qui font la réputation de ce village emblématique.',
    contextTitle: 'Pampelonne et les clubs de plage VIP',
    contextText: 'Les clubs de plage de Pampelonne génèrent un flux extraordinaire de personnalités, milliardaires et célébrités chaque été. La gestion sécuritaire de ces environnements ouverts, exposés et très fréquentés nécessite une expertise spécifique que nos équipes possèdent.',
    servicesTitle: 'Services de protection à Ramatuelle',
    services: [
      { title: 'Garde du corps à Ramatuelle', desc: 'Protection rapprochée à Ramatuelle et sur les plages de Pampelonne. Agents adaptés aux environnements balnéaires.', link: '/protection-rapprochee' },
      { title: 'Sécurité villa Ramatuelle', desc: 'Protection des villas des collines de Ramatuelle. Gardiennage et agents résidents 24h/24.', link: '/securisation-residence' },
      { title: 'Protection plages VIP Pampelonne', desc: 'Couverture sécuritaire lors des événements et soirées sur les clubs de plage. Gestion des foules et filtrages.', link: '/protection-personnalite' },
      { title: 'Transferts sécurisés Ramatuelle', desc: 'Liaison avec l\'héliport de Saint-Tropez et les aéroports. Véhicules adaptés aux routes de la péninsule.', link: '/protection-rapprochee' },
    ],
    expertisesTitle: 'Nos expertises à Ramatuelle',
    keywords: ['garde du corps Ramatuelle', 'protection rapprochée Ramatuelle', 'sécurité Pampelonne', 'bodyguard Ramatuelle', 'protection villa Ramatuelle', 'agent sécurité Ramatuelle', 'sécurité club plage Pampelonne', 'gardiennage villa Ramatuelle'],
    faqTitle: 'Protection rapprochée à Ramatuelle – FAQ',
    faqs: [
      { q: 'Assurez-vous la sécurité sur les plages de Pampelonne ?', a: 'Oui. Nous intervenons régulièrement sur les clubs de plage de Pampelonne pour la protection de personnalités en villégiature.' },
      { q: 'Couvrez-vous aussi Gassin depuis Ramatuelle ?', a: 'Oui. Nous couvrons l\'ensemble de la péninsule de Saint-Tropez : Ramatuelle, Gassin et leurs hameaux.' },
    ],
    ctaTitle: 'Besoin d\'une protection à Ramatuelle ?',
    ctaDesc: 'Nos équipes couvrent Ramatuelle et Pampelonne 24h/24. Évaluation confidentielle gratuite.',
    metaTitle: 'Garde du Corps Ramatuelle | Protection Rapprochée & Pampelonne – Imperium',
    metaDesc: 'Garde du corps et protection rapprochée à Ramatuelle. Sécurité Pampelonne, plages VIP, villas. Agents CNAPS disponibles 24h/24. Devis confidentiel.',
    metaKeywords: 'garde du corps Ramatuelle, protection rapprochée Ramatuelle, sécurité Pampelonne, bodyguard Ramatuelle, protection villa Ramatuelle',
    enSlug: 'ramatuelle',
  },
  mougins: {
    name: 'Mougins',
    nameFull: 'Mougins',
    region: 'Alpes-Maritimes',
    heroImg: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1800&q=80',
    heroAlt: 'Mougins – Village perché Alpes-Maritimes',
    introImg: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    introAlt: 'Agent Imperium Private Protection Mougins',
    sectionTag: 'Présence locale',
    introTitle: 'Le village des artistes et des gourmets protégé',
    introP1: 'Mougins est un village perché des Alpes-Maritimes, mondialement connu pour sa gastronomie d\'exception et sa longue tradition artistique. Pablo Picasso y vécut ses dernières années. Aujourd\'hui, ce village très prisé des célébrités, artistes et personnalités fortunées de passage sur la Côte d\'Azur accueille une clientèle exigeante.',
    introP2: 'Situé à seulement 8 kilomètres de Cannes et 20 kilomètres de Nice, Mougins est idéalement positionné pour nos équipes qui couvrent l\'ensemble du secteur cannes-Grasse. Nous y intervenons régulièrement pour la protection de résidents et de visiteurs de prestige.',
    contextTitle: 'Entre Cannes et Grasse',
    contextText: 'Mougins bénéficie d\'une position stratégique entre Cannes et Grasse, dans un environnement résidentiel de très grande qualité. Les domaines et propriétés environnantes comptent parmi les plus belles et les plus chères des Alpes-Maritimes.',
    servicesTitle: 'Services de protection à Mougins',
    services: [
      { title: 'Garde du corps à Mougins', desc: 'Protection rapprochée à Mougins et dans les domaines résidentiels environnants. Discrétion et excellence.', link: '/protection-rapprochee' },
      { title: 'Sécurisation propriété Mougins', desc: 'Protection des villas et propriétés de Mougins et du secteur Cannes-Grasse. Gardiennage et agents résidents.', link: '/securisation-residence' },
      { title: 'Chauffeur sécurité Mougins', desc: 'Transferts sécurisés depuis et vers Cannes, Nice, Monaco et les aéroports. Véhicules de prestige.', link: '/protection-rapprochee' },
      { title: 'Protection événements Mougins', desc: 'Sécurité pour les événements gastronomiques, vernissages et réceptions privées dans les villas et restaurants étoilés.', link: '/protection-personnalite' },
    ],
    expertisesTitle: 'Nos expertises à Mougins',
    keywords: ['garde du corps Mougins', 'protection rapprochée Mougins', 'bodyguard Mougins', 'sécurité VIP Mougins', 'protection propriété Mougins', 'agent sécurité Mougins', 'gardiennage villa Mougins', 'sécurité Cannes Grasse Mougins'],
    faqTitle: 'Protection rapprochée à Mougins – FAQ',
    faqs: [
      { q: 'Intervenez-vous à Mougins et dans les domaines résidentiels environnants ?', a: 'Oui. Nous couvrons Mougins et les domaines résidentiels de la zone Cannes-Grasse avec des équipes opérationnelles en permanence sur le secteur.' },
      { q: 'Pouvez-vous sécuriser une réception privée dans un restaurant étoilé de Mougins ?', a: 'Absolument. Nous proposons une couverture sécuritaire discrète et efficace lors d\'événements privés dans les établissements de prestige de Mougins.' },
    ],
    ctaTitle: 'Besoin d\'une protection à Mougins ?',
    ctaDesc: 'Nos équipes couvrent Mougins et le secteur Cannes-Grasse 24h/24. Contactez-nous.',
    metaTitle: 'Garde du Corps Mougins | Protection Rapprochée Cannes-Grasse – Imperium',
    metaDesc: 'Garde du corps et protection rapprochée à Mougins. Sécurité villa, événements gastronomiques. Agents CNAPS disponibles 24h/24. Devis confidentiel.',
    metaKeywords: 'garde du corps Mougins, protection rapprochée Mougins, bodyguard Mougins, sécurité VIP Mougins, protection propriété Mougins',
    enSlug: 'mougins',
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
    keywords: data.metaKeywords,
    alternates: {
      canonical: `https://www.imperiumprotection.fr/villes/${city}`,
      languages: {
        'fr': `https://www.imperiumprotection.fr/villes/${city}`,
        'en': `https://www.imperiumprotection.fr/en/cities/${data.enSlug}`,
      },
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDesc,
      url: `https://www.imperiumprotection.fr/villes/${city}`,
      siteName: 'Imperium Private Protection',
      locale: 'fr_FR',
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
    return <main><p>Ville non trouvée.</p></main>
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
            <Link href="/">Accueil</Link><span>›</span>
            <Link href="/#coverage">Nos villes</Link><span>›</span>
            <span className="bc-current">{data.name}</span>
          </nav>
          <p className="hero-tag">Protection Rapprochée · {data.name}</p>
          <h1>Garde du Corps &amp; Protection Rapprochée<br /><span>à {data.name}</span></h1>
          <p className="svc-hero-desc">Agents certifiés CNAPS, discrets et réactifs pour votre protection à {data.name} et dans tout le {data.region}. Disponibles 24h/24, 7j/7.</p>
          <Link href="/#contact" className="btn btn-gold">Demander une évaluation confidentielle</Link>
        </div>
      </section>

      <section className="svc-intro">
        <div className="container svc-intro-grid">
          <div className="svc-intro-text">
            <p className="section-tag">{data.sectionTag}</p>
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
            <p className="section-tag">Analyse locale</p>
            <h2>{data.contextTitle}</h2>
          </div>
          <p style={{ maxWidth: '760px', margin: '0 auto 2rem', textAlign: 'center', color: 'var(--text-muted)', lineHeight: 1.8 }}>{data.contextText}</p>
        </div>
      </section>

      <section className="svc-features">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">Nos prestations sur place</p>
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
                <Link href={svc.link} style={{ color: 'var(--gold)', fontSize: '.85rem', textDecoration: 'none' }}>En savoir plus →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-profiles">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">Référencement local</p>
            <h2>{data.expertisesTitle}</h2>
          </div>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Imperium Private Protection est présent sur {data.name} pour tous vos besoins en sécurité privée&nbsp;:</p>
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
            <p className="section-tag">Questions fréquentes</p>
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
            <p className="section-tag">Zones d&apos;intervention</p>
            <h2>Nos autres services</h2>
          </div>
          <div className="related-grid">
            <Link href="/protection-rapprochee" className="related-card">
              <Image src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80" alt="Protection rapprochée" width={600} height={200} style={{ objectFit: 'cover' }} />
              <div className="related-info"><h4>Protection Rapprochée</h4><span>En savoir plus →</span></div>
            </Link>
            <Link href="/protection-personnalite" className="related-card">
              <Image src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80" alt="Protection personnalité" width={600} height={200} style={{ objectFit: 'cover' }} />
              <div className="related-info"><h4>Protection de Personnalité</h4><span>En savoir plus →</span></div>
            </Link>
            <Link href="/securisation-residence" className="related-card">
              <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" alt="Sécurisation résidence" width={600} height={200} style={{ objectFit: 'cover' }} />
              <div className="related-info"><h4>Sécurisation de Résidence</h4><span>En savoir plus →</span></div>
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
          <Link href="/#contact" className="btn btn-gold">Nous contacter maintenant</Link>
        </div>
      </section>

      <FrFooter />
    </main>
  )
}
