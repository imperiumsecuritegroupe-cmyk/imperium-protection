'use client'

interface ScrollLinkProps {
  to: string
  className?: string
  children: React.ReactNode
  'aria-label'?: string
}

export default function ScrollLink({ to, className, children, 'aria-label': ariaLabel }: ScrollLinkProps) {
  function handleClick(e: React.MouseEvent) {
    e.preventDefault()
    const el = document.getElementById(to)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <a href="#" className={className} aria-label={ariaLabel} onClick={handleClick}>
      {children}
    </a>
  )
}
