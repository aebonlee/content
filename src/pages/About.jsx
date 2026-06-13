import { Link } from 'react-router-dom'
import { about, course, instructors } from '../config/site'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Highlighter from '../components/Highlighter'
import Icon from '../components/Icon'

export default function About() {
  return (
    <>
      <Section eyeline="ABOUT" title="이 과정에 대하여" lead={about.lead}>
        <div className="badge-row">
          {course.badges.map((b) => <span key={b} className="badge mono">{b}</span>)}
        </div>
        <p className="about__intro">{about.intro}</p>

        <div className="grid grid-2 about__cols">
          <Reveal className="card about__block">
            <h3 className="about__block-title">
              <Icon name="fa-solid fa-flag-checkered" /> 이 과정이 끝나면
            </h3>
            <ul className="material__list material__list--check">
              {about.outcomes.map((o, i) => (
                <li key={i}><Icon name="fa-solid fa-check" className="material__bullet" /> {o}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="card about__block" style={{ transitionDelay: '80ms' }}>
            <h3 className="about__block-title">
              <Icon name="fa-solid fa-user-group" /> 이런 분께 권합니다
            </h3>
            <ul className="material__list material__list--check">
              {about.audience.map((a, i) => (
                <li key={i}><Icon name="fa-solid fa-check" className="material__bullet" /> {a}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* 강사 소개 */}
      <Section eyeline="INSTRUCTOR" title="강사 소개" lead="현장에서 만들어 본 사람이 가르칩니다.">
        <div className={`instructor-grid${instructors.length > 1 ? ' grid grid-2' : ' instructor-grid--solo'}`}>
          {instructors.map((inst, i) => (
            <Reveal key={inst.name} className="card instructor-card" style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="instructor-card__icon" aria-hidden><Icon name={inst.icon} /></span>
              <div className="instructor-card__info">
                <h3 className="instructor-card__name">{inst.name}</h3>
                <p className="instructor-card__role">{inst.role}</p>
                <p className="instructor-card__affil">{inst.affiliation}</p>
                <div className="instructor-card__tags">
                  {inst.specialties.map((s) => (
                    <span key={s} className="instructor-card__tag mono">{s}</span>
                  ))}
                </div>
                <a href={`mailto:${inst.email}`} className="instructor-card__email mono">
                  <Icon name="fa-regular fa-envelope" /> {inst.email}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 일정 */}
      <Section eyeline="SCHEDULE" title="진행 일정" wash lead={course.fullTitle}>
        <div className="grid grid-3 schedule">
          <Reveal className="card schedule__card">
            <span className="schedule__icon" aria-hidden><Icon name="fa-solid fa-laptop-code" /></span>
            <h3>사전 온라인</h3>
            <p>{course.schedule.online}</p>
          </Reveal>
          <Reveal className="card schedule__card" style={{ transitionDelay: '80ms' }}>
            <span className="schedule__icon" aria-hidden><Icon name="fa-solid fa-people-group" /></span>
            <h3>집합 교육</h3>
            <p>{course.schedule.offline}</p>
          </Reveal>
          <Reveal className="card schedule__card" style={{ transitionDelay: '160ms' }}>
            <span className="schedule__icon" aria-hidden><Icon name="fa-solid fa-location-dot" /></span>
            <h3>장소</h3>
            <p>{course.schedule.place}</p>
          </Reveal>
        </div>
        <p className="schedule__note mono">
          <Icon name="fa-solid fa-circle-info" /> {course.schedule.note}
        </p>
      </Section>

      {/* 준비물 */}
      <Section eyeline="BRING" title="준비물">
        <div className="grid grid-2 bring__grid">
          {course.bring.map((b, i) => (
            <Reveal key={b.label} className="bring__item" style={{ transitionDelay: `${i * 60}ms` }}>
              <span className="bring__icon" aria-hidden><Icon name={b.icon} /></span>
              <div>
                <strong>{b.label}</strong>
                <p>{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="section__more about__cta">
          <p><Highlighter>하루</Highlighter> 만에, 내 손으로 만드는 AI 홍보 자동화.</p>
          <Link to="/lecture" className="btn btn-accent">학습강의안 보기</Link>
        </div>
      </Section>
    </>
  )
}
