import { useState } from 'react'
import { Link } from 'react-router-dom'
import { gallery, galleryCategories, stamps } from '../config/site'
import Section from '../components/Section'
import Reveal from '../components/Reveal'

// 갤러리 — 강의에서 만들어 내는 결과물 쇼케이스.
// "이걸 만들게 됩니다"를 한눈에. cover 는 팔레트 색 플레이스홀더.
const stampNo = (sid) => stamps.find((s) => s.id === sid)?.no

export default function Gallery() {
  const [cat, setCat] = useState('all')
  const items = cat === 'all' ? gallery : gallery.filter((g) => g.cat === cat)

  return (
    <Section
      eyeline="GALLERY"
      title="당신이 만들게 될 것들"
      lead="콘텐츠 · 이미지 · 페이지 — 강의를 따라가면 손에 남는 결과물입니다. 카테고리로 골라 보세요."
    >
      {/* 필터 */}
      <div className="gallery-filter">
        {galleryCategories.map((c) => (
          <button
            key={c.key}
            className={`gallery-filter__btn${cat === c.key ? ' is-active' : ''}`}
            onClick={() => setCat(c.key)}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* 카드 그리드 */}
      <div className="gallery-grid">
        {items.map((g, i) => (
          <Reveal
            key={g.id}
            className={`gallery-card gallery-card--${g.cat}`}
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <div className={`gallery-card__cover gallery-card__cover--${g.cat}`} aria-hidden>
              <span className="gallery-card__emoji">{g.emoji}</span>
              <span className="gallery-card__cat mono">{g.cat}</span>
            </div>
            <div className="gallery-card__body">
              <h3 className="gallery-card__title">{g.title}</h3>
              <p className="gallery-card__desc">{g.desc}</p>
              <div className="gallery-card__foot">
                <span className="gallery-card__tool mono">{g.tool}</span>
                {stampNo(g.stamp) && (
                  <Link to="/stamps" className="gallery-card__stamp mono">
                    🎯 미션 {String(stampNo(g.stamp)).padStart(2, '0')}
                  </Link>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="section__more">
        <Link to="/stamps" className="btn btn-primary">직접 만들러 가기 — 도장깨기</Link>
      </div>
    </Section>
  )
}
