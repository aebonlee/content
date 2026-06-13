import { Link } from 'react-router-dom'
import { hero, features, modules, course, stamps, gallery } from '../config/site'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Highlighter from '../components/Highlighter'
import Icon from '../components/Icon'
import GalleryArt from '../components/GalleryArt'

export default function Home() {
  const totalSessions = modules.reduce((s, m) => s + m.lessons.length, 0)
  const galleryPreview = gallery

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
            {/* 팔레트 SVG — 청사진 위에 결과물(콘텐츠·이미지·페이지)이 떠다니는 구성 */}
            <svg viewBox="0 0 400 400" className="hero__svg">
              <defs>
                <linearGradient id="heroWash" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="var(--pigment)" stopOpacity="0.18" />
                  <stop offset="1" stopColor="var(--accent)" stopOpacity="0.12" />
                </linearGradient>
                <clipPath id="heroImg"><rect x="246" y="80" width="104" height="74" rx="7" /></clipPath>
              </defs>
              <circle cx="200" cy="200" r="175" fill="url(#heroWash)" />
              {/* 모눈(blueprint grid) */}
              <g stroke="var(--pigment)" strokeOpacity="0.16" strokeWidth="1">
                {Array.from({ length: 9 }).map((_, i) => (
                  <line key={'h' + i} x1="36" y1={56 + i * 36} x2="364" y2={56 + i * 36} />
                ))}
                {Array.from({ length: 9 }).map((_, i) => (
                  <line key={'v' + i} x1={56 + i * 36} y1="36" x2={56 + i * 36} y2="364" />
                ))}
              </g>
              {/* 떠다니는 궤도 */}
              <circle cx="200" cy="205" r="138" fill="none" stroke="var(--pigment)" strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="3 7" />

              {/* 결과물 1 — 콘텐츠 카드(좌상단) */}
              <g className="hero-float hero-float--a">
                <g transform="rotate(-7 116 132)">
                  <rect x="46" y="86" width="140" height="96" rx="13" fill="#fff" stroke="var(--paper-d)" />
                  <rect x="46" y="86" width="140" height="26" rx="13" fill="var(--pigment)" />
                  <rect x="46" y="100" width="140" height="12" fill="var(--pigment)" />
                  <circle cx="64" cy="99" r="6.5" fill="#fff" opacity="0.85" />
                  <rect x="78" y="95" width="64" height="8" rx="4" fill="#fff" opacity="0.8" />
                  <rect x="62" y="126" width="108" height="9" rx="4.5" fill="var(--wash)" />
                  <rect x="62" y="142" width="108" height="9" rx="4.5" fill="var(--wash)" />
                  <rect x="62" y="158" width="66" height="9" rx="4.5" fill="var(--wash)" />
                </g>
              </g>

              {/* 결과물 2 — 이미지 카드(우상단) */}
              <g className="hero-float hero-float--b">
                <g transform="rotate(6 298 121)">
                  <rect x="240" y="74" width="116" height="94" rx="13" fill="#fff" stroke="var(--paper-d)" />
                  <g clipPath="url(#heroImg)">
                    <rect x="246" y="80" width="104" height="74" fill="color-mix(in srgb, var(--pigment) 18%, #fff)" />
                    <circle cx="320" cy="104" r="13" fill="var(--accent)" />
                    <path d="M246 138 q26 -24 50 -6 q22 16 54 -6 v28 h-104 z" fill="var(--pigment)" />
                    <path d="M246 148 q34 -16 64 0 q28 14 40 -4 v18 h-104 z" fill="var(--ink)" opacity="0.85" />
                  </g>
                </g>
              </g>

              {/* 결과물 3 — 페이지/랜딩 카드(하단 중앙) */}
              <g className="hero-float hero-float--c">
                <g transform="rotate(-3 214 290)">
                  <rect x="126" y="226" width="176" height="128" rx="14" fill="#fff" stroke="var(--paper-d)" />
                  <rect x="126" y="226" width="176" height="22" rx="14" fill="var(--ink)" />
                  <rect x="126" y="240" width="176" height="8" fill="var(--ink)" />
                  <circle cx="141" cy="237" r="3.2" fill="var(--accent)" />
                  <circle cx="152" cy="237" r="3.2" fill="#fff" opacity="0.5" />
                  <rect x="126" y="248" width="176" height="48" fill="color-mix(in srgb, var(--pigment) 16%, #fff)" />
                  <rect x="142" y="262" width="74" height="10" rx="5" fill="var(--ink)" />
                  <rect x="142" y="278" width="52" height="7" rx="3.5" fill="var(--pigment)" opacity="0.5" />
                  <circle cx="270" cy="272" r="16" fill="var(--pigment)" opacity="0.8" />
                  {[140, 196, 252].map((x) => (
                    <g key={x}>
                      <rect x={x} y="308" width="46" height="34" rx="7" fill="#fff" stroke="var(--paper-d)" />
                      <circle cx={x + 13} cy="320" r="6" fill="var(--wash)" />
                      <rect x={x + 8} y="330" width="30" height="5" rx="2.5" fill="var(--wash)" />
                    </g>
                  ))}
                </g>
              </g>

              {/* 떠다니는 작은 강조 — 하트칩 · 반짝임 */}
              <g className="hero-float hero-float--d">
                <g transform="translate(196,96)">
                  <circle r="19" fill="var(--accent)" />
                  <path d="M0 6 C-9 -3 -14 -8 -7 -12 C-3 -14 0 -10 0 -8 C0 -10 3 -14 7 -12 C14 -8 9 -3 0 6 Z" fill="#fff" />
                </g>
              </g>
              <g fill="var(--accent)" className="hero-float hero-float--d">
                <path d="M104 232 l4 9 l9 4 l-9 4 l-4 9 l-4 -9 l-9 -4 l9 -4 z" />
              </g>
              <path d="M330 200 l3 7 l7 3 l-7 3 l-3 7 l-3 -7 l-7 -3 l7 -3 z" fill="var(--pigment)" opacity="0.7" />
            </svg>
          </div>
        </div>
      </section>

      {/* --- 대면 일정 안내 --- */}
      <Section eyeline="SCHEDULE" title="하루, 함께 만드는 워크숍" wash
               lead={course.fullTitle}>
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

      {/* --- 가치 3개 --- */}
      <Section eyeline="WHY" title="홍보 실무, AI로 자동화">
        <div className="grid grid-3">
          {features.map((f, i) => (
            <Reveal key={f.title} className="card feature" style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="feature__icon" aria-hidden><Icon name={f.icon} /></span>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* --- 커리큘럼(타임테이블) 미리보기 --- */}
      <Section eyeline="CURRICULUM" title="7개 모듈, 하루 학습자료"
               lead={`${modules.length}개 모듈 · ${totalSessions}개 세션 · 09:00–18:00`}>
        <div className="grid grid-2 module-grid">
          {modules.map((m, i) => (
            <Reveal key={m.id} className="card module" style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="module__no mono">
                <Icon name="fa-regular fa-clock" /> {m.period} · {m.time}{m.hours === 2 ? ' · 2시간' : ''}
              </span>
              <h3>{m.title}</h3>
              <p>{m.summary}</p>
              <span className="module__count mono">{m.lessons.length} sessions</span>
            </Reveal>
          ))}
        </div>
        <div className="section__more">
          <Link to="/curriculum" className="btn btn-primary">전체 학습자료 보기</Link>
        </div>
      </Section>

      {/* --- 도장깨기 미리보기 --- */}
      <Section eyeline="STAMP RALLY" title="듣지 말고, 만들어 보세요" wash
               lead="7개 모듈을 7개 미션으로. 모듈마다 하나씩 직접 만들어 도장을 찍으면 내용이 손에 남습니다.">
        <div className="stamp-strip">
          {stamps.map((s) => (
            <Link key={s.id} to="/stamps" className="stamp-chip" title={s.mission}>
              <span className="stamp-chip__emoji" aria-hidden><Icon name={s.icon} /></span>
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
      <Section eyeline="GALLERY" title="당신이 만들게 될 것들"
               lead="콘텐츠 · 이미지 · 페이지 — 워크숍을 따라가면 손에 남는 결과물입니다.">
        <div className="gallery-grid">
          {galleryPreview.map((g, i) => (
            <Reveal key={g.id} className={`gallery-card gallery-card--${g.cat}`} style={{ transitionDelay: `${i * 50}ms` }}>
              <div className={`gallery-card__cover gallery-card__cover--${g.cat}`} aria-hidden>
                <GalleryArt id={g.id} />
                <span className="gallery-card__cat mono">M{g.module}</span>
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
