'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

// Map of FR paths to EN paths
const frToEn: Record<string, string> = {
  '/': '/en',
  '/protection-rapprochee': '/en/close-protection',
  '/protection-personnalite': '/en/vip-protection',
  '/accompagnement-international': '/en/international-escort',
  '/securisation-residence': '/en/residence-security',
  '/intelligence-analyse-risque': '/en/intelligence-risk',
  '/cyber-securite': '/en/cyber-security',
}

export default function LangDetect() {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Only run on FR pages (not /en/*)
    if (pathname.startsWith('/en')) return

    const stored = localStorage.getItem('imperium_lang')
    if (stored) {
      if (stored === 'en') {
        // Handle city pages
        if (pathname.startsWith('/villes/')) {
          const slug = pathname.replace('/villes/', '')
          router.replace(`/en/cities/${slug}`)
          return
        }
        const enPath = frToEn[pathname]
        if (enPath) router.replace(enPath)
      }
      return
    }

    // No stored preference — detect from browser
    const lang = navigator.language || ''
    if (lang.toLowerCase().startsWith('en')) {
      localStorage.setItem('imperium_lang', 'en')
      if (pathname.startsWith('/villes/')) {
        const slug = pathname.replace('/villes/', '')
        router.replace(`/en/cities/${slug}`)
        return
      }
      const enPath = frToEn[pathname]
      if (enPath) router.replace(enPath)
    }
  }, [pathname, router])

  return null
}
