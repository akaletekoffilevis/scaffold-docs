import { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const fullSubject = encodeURIComponent(`[Scaffolder] ${subject || 'Contact'}`)
    const body = encodeURIComponent(
      `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`
    )
    window.open(`mailto:koffilevis21@gmail.com?subject=${fullSubject}&body=${body}`, '_blank')
    setSent(true)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input type="text" placeholder="Votre nom" value={name} onChange={e => setName(e.target.value)} required />
        <input type="email" placeholder="Votre email" value={email} onChange={e => setEmail(e.target.value)} required />
      </div>
      <input type="text" placeholder="Sujet" value={subject} onChange={e => setSubject(e.target.value)} required />
      <textarea placeholder="Votre message..." rows={5} value={message} onChange={e => setMessage(e.target.value)} required />
      <button type="submit" className="btn btn-primary">
        {sent ? 'Message envoyé (ouvre votre client mail)' : 'Envoyer le message'}
      </button>
    </form>
  )
}
