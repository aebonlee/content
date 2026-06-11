import { Link } from 'react-router-dom'
import { hero, features, modules, course, stamps, gallery } from '../config/site'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Highlighter from '../components/Highlighter'

export default function Home() {
  const totalLessons = modules.reduce((s, m) => s + m.lessons.length, 0)
  const galleryPreview = gallery.slice(0, 6)

  return (
    <>
      {/* --- 히어로 : 좌측 네거티브 스페이스에 헤드라인 --- */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="eyeline mono">{hero.eyeline}</p>
            <h1 className="hero__title">
              {hero.title[0]}<br />
              {hero.title[1].split(hero.highlight).map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && <Highlighter delay={500}>{hero.highlight}</Highlighter>}
                </span>
              ))}
            </h1>
            <p className="hero__body">{hero.body}</p>
            <div className="hero__badges">
              {course.badges.map((b) => <span key={b} className="badge mono">{b}</span>)}
            </div>
            <div className="hero__cta">
              <Link to={hero.ctaPrimary.to} className="btn btn-accent">{hero.ctaPrimary.label}</Link>
              <Link to={hero.ctaGhost.to} className="btn btn-ghost">{hero.ctaGhost.label}</Link>
            </div>
          </div>
          <div className="hero__art" aria-hidden>
            {/* 팔레트 색으로만 그린 SVG — 청사진 위 새순(성장) */}
            <svg viewBox="0 0 400 400" className="hero__svg">
              <defs>
                <linearGradient id="wash" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="var(--pigment)" stopOpacity="0.18" />
                  <stop offset="1" stopColor="var(--accent)" stopOpacity="0.12" />
                </linearGradient>
              </defs>
              <circle cx="200" cy="200" r="170" fill="url(#wash)" />
              {/* 모눈(blueprint grid) */}
              <g stroke="var(--pigment)" strokeOpacity="0.18" strokeWidth="1">
                {Array.from({ length: 9 }).map((_, i) => (
                  <line key={'h'+i} x1="40" y1={60 + i * 35} x2="360" y2={60 + i * 35} />
                ))}
                {Array.from({ length: 9 }).map((_, i) => (
                  <line key={'v'+i} x1={60 + i * 35} y1="40" x2={60 + i * 35} y2="360" />
                ))}
              </g>
              {/* 성장 곡선 */}
              <path d="M120 300 C 160 260, 180 180, 240 120" fill="none"
                    stroke="var(--pigment)" strokeWidth="3" strokeLinecap="round" />
              <path d="M240 120 c 10 -28, 38 -32, 52 -22 c -8 22, -34 30, -52 22 z"
                    fill="var(--accent)" fillOpacity="0.85" />
              <circle cx="120" cy="300" r="6" fill="var(--pigment)" />
            </svg>
          </div>
        </div>
      </section>

      {/* --- 가치 3개 --- */}
      <Section eyeline="WHY" title="홍보 실무, AI로 자동화">
        <div className="grid grid-3">
          {features.map((f, i) => (
            <Reveal key={f.title} className="card feature" style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="feature__icon" aria-hidden>{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* --- 커리큘럼 미리보기 --- */}
      <Section eyeline="CURRICULUM" title="4개 모듈, 한 걸음씩" wash
               lead={`${modules.length}개 모듈 · ${totalLessons}개 레슨 · 약 ${course.hours}시간 실습`}>
        <div className="grid grid-2 module-grid">
          {modules.map((m, i) => (
            <Reveal key={m.id} className="card module" style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="module__no mono">MODULE {String(m.no).padStart(2, '0')}</span>
              <h3>{m.title}</h3>
              <p>{m.summary}</p>
              <span className="module__count mono">{m.lessons.length} lessons</span>
            </Reveal>
          ))}
        </div>
        <div className="section__more">
          <Link to="/curriculum" className="btn btn-primary">전체 커리큘럼 보기</Link>
        </div>
      </Section>

      {/* --- 도장깨기 미리보기 --- */}
      <Section eyeline="STAMP RALLY" title="듣지 말고, 만들어 보세요"
               lead="강의 내용을 8개 미션으로 쪼갰습니다. 직접 만들어 도장을 찍으면 내용이 손에 남습니다.">
        <div className="stamp-strip">
          {stamps.map((s) => (
            <Link key={s.id} to="/stamps" className="stamp-chip" title={s.mission}>
              <span className="stamp-chip__emoji" aria-hidden>{s.icon}</span>
              <span className="stamp-chip__no mono">{String(s.no).padStart(2, '0')}</span>
              <span className="stamp-chip__title">{s.title}</span>
            </Link>
          ))}
        </div>
        <div className="section__more">
          <Link to="/stamps" className="btn btn-accent">도장깨기 시작하기</Link>
        </div>
      </Section>

      {/* --- 갤러리 미리보기 --- */}
      <Section eyeline="GALLERY" title="당신이 만들게 될 것들" wash
               lead="콘텐츠 · 이미지 · 페이지 — 강의를 따라가면 손에 남는 결과물입니다.">
        <div className="gallery-grid">
          {galleryPreview.map((g, i) => (
            <Reveal key={g.id} className={`gallery-card gallery-card--${g.cat}`} style={{ transitionDelay: `${i * 50}ms` }}>
              <div className={`gallery-card__cover gallery-card__cover--${g.cat}`} aria-hidden>
                <span className="gallery-card__emoji">{g.emoji}</span>
                <span className="gallery-card__cat mono">{g.cat}</span>
              </div>
              <div className="gallery-card__body">
                <h3 className="gallery-card__title">{g.title}</h3>
                <p className="gallery-card__desc">{g.desc}</p>
                <span className="gallery-card__tool mono">{g.tool}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="section__more">
          <Link to="/gallery" className="btn btn-primary">갤러리 전체 보기</Link>
        </div>
      </Section>
    </>
  )
}
