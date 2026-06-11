import { useState } from 'react'
import { Link } from 'react-router-dom'
import { community } from '../config/site'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'

export default function Community() {
  const [open, setOpen] = useState(0)

  return (
    <>
      <Section eyeline="COMMUNITY" title="함께 만들고, 나눕니다" lead={community.lead}>
        <div className="grid grid-3">
          {community.channels.map((c, i) => (
            <Reveal key={c.label} className="card channel" style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="channel__icon" aria-hidden><Icon name={c.icon} /></span>
              <h3>{c.label}</h3>
              <p>{c.desc}</p>
              {c.to
                ? <Link to={c.to} className="btn btn-ghost btn-sm">{c.cta}</Link>
                : <span className="channel__cta mono">{c.cta} <Icon name="fa-solid fa-arrow-right" /></span>}
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ 아코디언 */}
      <Section eyeline="FAQ" title="자주 묻는 질문" wash>
        <ul className="faq">
          {community.faq.map((f, i) => {
            const isOpen = open === i
            return (
              <li key={i} className={`faq__item${isOpen ? ' is-open' : ''}`}>
                <button className="faq__q" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                  <span><Icon name="fa-solid fa-circle-question" className="faq__qicon" /> {f.q}</span>
                  <Icon name={isOpen ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'} className="faq__chev" />
                </button>
                {isOpen && <p className="faq__a">{f.a}</p>}
              </li>
            )
          })}
        </ul>
      </Section>
    </>
  )
}
