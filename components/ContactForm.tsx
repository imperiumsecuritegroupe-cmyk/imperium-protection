'use client'

import { useState, useRef } from 'react'

interface ContactFormProps {
  lang?: 'fr' | 'en'
}

export default function ContactForm({ lang = 'fr' }: ContactFormProps) {
  const [toastMsg, setToastMsg] = useState('')
  const [toastOk, setToastOk] = useState(true)
  const [toastVisible, setToastVisible] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const isFr = lang === 'fr'

  function showToast(msg: string, ok = true) {
    setToastMsg(msg)
    setToastOk(ok)
    setToastVisible(true)
    setTimeout(() => setToastVisible(false), 4000)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = formRef.current
    if (!form) return

    const required = form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>('[required]')
    let valid = true
    required.forEach((f) => {
      if (f.type === 'checkbox') {
        if (!(f as HTMLInputElement).checked) { valid = false; f.style.outlineColor = '#c0392b' }
        else f.style.outlineColor = ''
      } else {
        if (!f.value.trim()) { valid = false; f.style.borderColor = '#c0392b' }
        else f.style.borderColor = ''
      }
    })

    if (!valid) {
      showToast(isFr ? 'Veuillez remplir tous les champs obligatoires.' : 'Please fill in all required fields.', false)
      return
    }

    setSubmitting(true)

    try {
      const data = new FormData(form)
      data.append('_subject', isFr
        ? 'Nouvelle demande de protection – Imperium Private Protection'
        : 'New protection request – Imperium Private Protection')
      data.append('_template', 'table')
      data.append('_captcha', 'false')

      const res = await fetch('https://formsubmit.co/ajax/imperiumsecuritegroupe@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })

      if (res.ok) {
        showToast(isFr
          ? '✓ Votre demande a été envoyée. Nous vous contacterons dans les plus brefs délais.'
          : '✓ Your request has been sent. We will contact you shortly.')
        form.reset()
      } else {
        showToast(isFr
          ? 'Une erreur est survenue. Veuillez réessayer ou nous appeler directement.'
          : 'An error occurred. Please try again or call us directly.', false)
      }
    } catch {
      showToast(isFr
        ? 'Une erreur est survenue. Veuillez réessayer ou nous appeler directement.'
        : 'An error occurred. Please try again or call us directly.', false)
    }

    setSubmitting(false)
  }

  if (isFr) {
    return (
      <>
        <form className="contact-form" id="contactForm" noValidate ref={formRef} onSubmit={handleSubmit}>
          <h3>Demande d&apos;évaluation confidentielle</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fname">Prénom *</label>
              <input type="text" id="fname" name="fname" placeholder="Jean" required />
            </div>
            <div className="form-group">
              <label htmlFor="lname">Nom *</label>
              <input type="text" id="lname" name="lname" placeholder="Dupont" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" placeholder="jean.dupont@exemple.fr" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Téléphone</label>
            <input type="tel" id="phone" name="phone" placeholder="06 52 62 40 91" />
          </div>
          <div className="form-group">
            <label htmlFor="service">Type de protection requis *</label>
            <select id="service" name="service" required defaultValue="">
              <option value="" disabled>Choisissez un service</option>
              <option value="rapprochee">Protection rapprochée</option>
              <option value="personnalite">Protection de personnalité</option>
              <option value="international">Accompagnement international</option>
              <option value="residence">Sécurisation de résidence</option>
              <option value="intelligence">Intelligence & analyse de risque</option>
              <option value="cyber">Cyber sécurité</option>
              <option value="autre">Autre / Je ne sais pas encore</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Décrivez brièvement votre situation *</label>
            <textarea id="message" name="message" rows={4} placeholder="Décrivez votre situation en quelques lignes. Toutes les informations resteront strictement confidentielles." required></textarea>
          </div>
          <div className="form-check">
            <input type="checkbox" id="gdpr" name="gdpr" required />
            <label htmlFor="gdpr">J&apos;accepte que mes données soient utilisées uniquement pour répondre à ma demande, dans le cadre de la politique de confidentialité d&apos;Imperium Private Protection.</label>
          </div>
          <button type="submit" className="btn btn-gold btn-full" disabled={submitting}>
            {submitting ? 'Envoi en cours…' : 'Envoyer ma demande confidentielle'}
          </button>
          <p className="form-note">🔒 Vos données sont chiffrées et ne sont jamais partagées avec des tiers.</p>
        </form>
        <div
          className={`toast${toastVisible ? ' show' : ''}`}
          id="toast"
          style={{ borderColor: toastOk ? 'var(--gold-dk)' : '#c0392b' }}
        >
          {toastMsg}
        </div>
      </>
    )
  }

  return (
    <>
      <form className="contact-form" id="contactForm" noValidate ref={formRef} onSubmit={handleSubmit}>
        <h3>Confidential Assessment Request</h3>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fname">First Name *</label>
            <input type="text" id="fname" name="fname" placeholder="John" required />
          </div>
          <div className="form-group">
            <label htmlFor="lname">Last Name *</label>
            <input type="text" id="lname" name="lname" placeholder="Smith" required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" placeholder="john.smith@example.com" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" placeholder="+44 20 7946 0000" />
        </div>
        <div className="form-group">
          <label htmlFor="service">Protection Type Required *</label>
          <select id="service" name="service" required defaultValue="">
            <option value="" disabled>Choose a service</option>
            <option value="close-protection">Close Protection</option>
            <option value="vip-protection">VIP Protection</option>
            <option value="international">International Escort</option>
            <option value="residence">Residence Security</option>
            <option value="intelligence">Intelligence & Risk Analysis</option>
            <option value="cyber">Cyber Security</option>
            <option value="other">Other / Not sure yet</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Briefly describe your situation *</label>
          <textarea id="message" name="message" rows={4} placeholder="Describe your situation in a few lines. All information will remain strictly confidential." required></textarea>
        </div>
        <div className="form-check">
          <input type="checkbox" id="gdpr" name="gdpr" required />
          <label htmlFor="gdpr">I agree that my data will be used solely to respond to my request, in accordance with Imperium Private Protection&apos;s privacy policy.</label>
        </div>
        <button type="submit" className="btn btn-gold btn-full" disabled={submitting}>
          {submitting ? 'Sending…' : 'Send my confidential request'}
        </button>
        <p className="form-note">🔒 Your data is encrypted and never shared with third parties.</p>
      </form>
      <div
        className={`toast${toastVisible ? ' show' : ''}`}
        id="toast"
        style={{ borderColor: toastOk ? 'var(--gold-dk)' : '#c0392b' }}
      >
        {toastMsg}
      </div>
    </>
  )
}
