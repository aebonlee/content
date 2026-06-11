import { Link } from 'react-router-dom'
import { gallery, modules, stamps } from '../config/site'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'

// 갤러리 — 7개 모듈에서 만들어 내는 결과물 쇼케이스(모듈마다 1개).
// cover 는 팔레트 색 플레이스홀더(실제 결과물 이미지로 교체 가능).
const stampNo = (sid) => stamps.find((s) => s.id === sid)?.no
const moduleOf = (no) => modules.find((m) => m.no === no)

export default function Gallery() {
  return (
    <Section
      eyeline="GALLERY"
      title="당신이 만들게 될 것들"
      lead="7개 모듈, 7개 결과물 — 모듈마다 하나씩, 워크숍을 따라가면 손에 남습니다."
    >
      <div className="gallery-grid">
        {gallery.map((g, i) => {
          const m = moduleOf(g.module)
          return (
            <Reveal
              key={g.id}
              className={`gallery-card gallery-card--${g.cat}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className={`gallery-card__cover gallery-card__cover--${g.cat}`} aria-hidden>
                <span className="gallery-card__emoji"><Icon name={g.icon} /></span>
                <span className="gallery-card__cat mono">M{g.module}</span>
              </div>
              <div className="gallery-card__body">
                <span className="gallery-card__module mono">M{g.module}. {m?.title}</span>
                <h3 className="gallery-card__title">{g.title}</h3>
                <p className="gallery-card__desc">{g.desc}</p>
                <div className="gallery-card__foot">
                  <span className="gallery-card__tool mono">{g.tool}</span>
                  {stampNo(g.stamp) && (
                    <Link to="/stamps" className="gallery-card__stamp mono">
                      <Icon name="fa-solid fa-bullseye" /> 미션 {String(stampNo(g.stamp)).padStart(2, '0')}
                    </Link>
                  )}
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>

      <div className="section__more">
        <Link to="/stamps" className="btn btn-primary">직접 만들러 가기 — 도장깨기</Link>
      </div>
    </Section>
  )
}
