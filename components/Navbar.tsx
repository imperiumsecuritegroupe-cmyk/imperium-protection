'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface NavbarProps {
  lang?: 'fr' | 'en'
}

const frCities = [
  { slug: 'paris', label: 'Paris' },
  { slug: 'nice', label: 'Nice' },
  { slug: 'cannes', label: 'Cannes' },
  { slug: 'monaco', label: 'Monaco' },
  { slug: 'saint-tropez', label: 'Saint-Tropez' },
  { slug: 'courchevel', label: 'Courchevel' },
  { slug: 'megeve', label: 'Megève' },
  { slug: 'antibes', label: 'Antibes' },
  { slug: 'juan-les-pins', label: 'Juan-les-Pins' },
  { slug: 'grimaud', label: 'Grimaud' },
  { slug: 'saint-jean-cap-ferrat', label: 'Cap Ferrat' },
  { slug: 'ramatuelle', label: 'Ramatuelle' },
  { slug: 'mougins', label: 'Mougins' },
]

const enCities = [
  { slug: 'paris', label: 'Paris' },
  { slug: 'nice', label: 'Nice' },
  { slug: 'cannes', label: 'Cannes' },
  { slug: 'monaco', label: 'Monaco' },
  { slug: 'saint-tropez', label: 'Saint-Tropez' },
  { slug: 'courchevel', label: 'Courchevel' },
  { slug: 'megeve', label: 'Megève' },
  { slug: 'antibes', label: 'Antibes' },
  { slug: 'juan-les-pins', label: 'Juan-les-Pins' },
  { slug: 'grimaud', label: 'Grimaud' },
  { slug: 'saint-jean-cap-ferrat', label: 'Cap Ferrat' },
  { slug: 'ramatuelle', label: 'Ramatuelle' },
  { slug: 'mougins', label: 'Mougins' },
]

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar({ lang = 'fr' }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function closeMenu() {
    setMenuOpen(false)
  }

  const isFr = lang === 'fr'
  const homeHref = isFr ? '/' : '/en'
  const langSwitchHref = isFr ? '/en' : '/'
  const langSwitchLabel = isFr ? 'EN' : 'FR'
  const cities = isFr ? frCities : enCities
  const cityBase = isFr ? '/villes/' : '/en/cities/'

  const navLinks = isFr
    ? [
        { label: 'Services', scroll: 'services' },
        { label: 'À propos', scroll: 'about' },
        { label: 'Couverture', scroll: 'coverage' },
        { label: 'Équipe', scroll: 'team' },
      ]
    : [
        { label: 'Services', scroll: 'services' },
        { label: 'About', scroll: 'about' },
        { label: 'Coverage', scroll: 'coverage' },
        { label: 'Team', scroll: 'team' },
      ]

  const contactLabel = isFr ? 'Contact' : 'Contact'
  const citiesLabel = isFr ? 'Nos villes ▾' : 'Our cities ▾'

  return (
    <header id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <Link href={homeHref} className="logo">
          <Image src="/assets/logo.svg" alt="Imperium Private Protection" width={40} height={40} className="logo-img" />
          <span className="logo-text">IMPERIUM<span>PRIVATE PROTECTION</span></span>
        </Link>

        <nav className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
          {navLinks.map((link) => (
            <a
              key={link.scroll}
              href="javascript:void(0)"
              data-scroll={link.scroll}
              onClick={() => { scrollToSection(link.scroll); closeMenu() }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="javascript:void(0)"
            data-scroll="contact"
            className="btn-nav"
            onClick={() => { scrollToSection('contact'); closeMenu() }}
          >
            {contactLabel}
          </a>
          <a
            href={langSwitchHref}
            className="lang-switch"
            onClick={() => localStorage.setItem('imperium_lang', isFr ? 'en' : 'fr')}
          >
            {langSwitchLabel}
          </a>
          <div className="nav-cities-drop">
            <a
              href="javascript:void(0)"
              className="nav-cities-btn"
              data-scroll="coverage"
              onClick={() => { scrollToSection('coverage'); closeMenu() }}
            >
              {citiesLabel}
            </a>
            <div className="nav-cities-menu">
              {cities.map((city) => (
                <Link key={city.slug} href={`${cityBase}${city.slug}`} onClick={closeMenu}>
                  {city.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <button
          className={`burger${menuOpen ? ' open' : ''}`}
          id="burger"
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}
