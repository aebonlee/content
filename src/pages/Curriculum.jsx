import { Link } from 'react-router-dom'
import { modules, course } from '../config/site'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'

export default function Curriculum() {
  const totalSessions = modules.reduce((s, m) => s + m.lessons.length, 0)

  return (
    <Section eyeline="CURRICULUM · 학습자료"
             title="하루 타임테이블"
             lead={`${modules.length}교시 · ${totalSessions}개 세션 · ${course.schedule.offline.split('—')[0].trim()}`}>
      <div className="curriculum">
        {modules.map((m) => (
          <Reveal key={m.id} className="module-block">
            <div className="module-block__head">
              <span className="module__no mono">
                <Icon name="fa-regular fa-clock" /> {m.time} · {m.no}교시
              </span>
              <h3>{m.title}</h3>
              <p>{m.summary}</p>
            </div>
            <ul className="lesson-list">
              {m.lessons.map((l) => (
                <li key={l.id} className="lesson-row">
                  <Link to={`/lesson/${l.id}`} className="lesson-row__link">
                    <span className="lesson-row__title">
                      <span className="lesson-row__check" aria-hidden>
                        <Icon name="fa-regular fa-file-lines" />
                      </span>
                      <span>
                        {l.title}
                        {l.objectives?.[0] && (
                          <em className="lesson-row__obj">{l.objectives[0]}</em>
                        )}
                      </span>
                    </span>
                    <span className="lesson-row__meta mono">
                      {l.minutes}분
                      <Icon name="fa-solid fa-chevron-right" className="lesson-row__arrow" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      {/* 준비물 안내 (대면 워크숍) */}
      <div className="bring">
        <h3 className="bring__title"><Icon name="fa-solid fa-briefcase" /> 준비물</h3>
        <div className="grid grid-2 bring__grid">
          {course.bring.map((b) => (
            <Reveal key={b.label} className="bring__item">
              <span className="bring__icon" aria-hidden><Icon name={b.icon} /></span>
              <div>
                <strong>{b.label}</strong>
                <p>{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
