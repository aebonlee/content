import { useParams, Link } from 'react-router-dom'
import { modules } from '../config/site'
import { practiceExamples, promptElements } from '../config/examples'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'

// 실습예제 — 학습강의안과 동일한 마스터-디테일.
// 왼쪽에서 모듈을 고르면 오른쪽에 그 모듈의 실습 예제 10개가 바로 보인다.
export default function Examples() {
  const { moduleId } = useParams()
  const idx = Math.max(0, modules.findIndex((m) => m.id === moduleId))
  const m = modules[idx]
  const list = practiceExamples[m.id] || []
  const prev = modules[idx - 1]
  const next = modules[idx + 1]
  const total = modules.reduce((s, mm) => s + (practiceExamples[mm.id]?.length || 0), 0)

  return (
    <div className="container lecture">
      <header className="lecture__head">
        <div className="lecture__head-intro">
          <p className="eyeline mono">PRACTICE · 실습예제</p>
          <h1 className="lecture__title">모듈별 실습 예제</h1>
          <p className="lecture__lead">
            {modules.length}개 모듈 × 10개 = 총 {total}개 실습 예제.
            모든 프롬프트는 아래 <strong>프롬프트 5요소</strong>를 빠짐없이 갖춰 복붙해서 바로 쓸 수 있습니다.
          </p>
        </div>
        <ul className="prompt-elements">
          {promptElements.map((e, i) => (
            <li key={e.key} className="prompt-elements__item">
              <span className="prompt-elements__icon" aria-hidden><Icon name={e.icon} /></span>
              <span className="prompt-elements__no mono">{String(i + 1).padStart(2, '0')}</span>
              <strong className="prompt-elements__key">{e.key}</strong>
              <span className="prompt-elements__desc">{e.desc}</span>
            </li>
          ))}
        </ul>
      </header>

      <div className="lecture__layout">
        {/* 모듈 사이드 내비 */}
        <aside className="lecture__rail">
          <p className="lecture__rail-title mono">MODULES</p>
          <ul className="lecture__rail-list">
            {modules.map((mm) => (
              <li key={mm.id}>
                <Link to={`/examples/${mm.id}`} className={mm.id === m.id ? 'is-active' : ''}>
                  <span className="lecture__rail-time mono">M{mm.no} · {practiceExamples[mm.id]?.length || 0}개</span>
                  <span className="lecture__rail-name">{mm.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* 선택된 모듈의 실습 예제 10개 */}
        <div className="lecture__body">
          <Reveal key={m.id} className="lecmod">
            <header className="lecmod__head">
              <span className="lecmod__period mono">
                <Icon name="fa-regular fa-clock" /> {m.period} · {m.time}{m.hours === 2 ? ' · 2시간' : ''}
              </span>
              <h2 className="lecmod__title">M{m.no}. {m.title} — 실습 예제 {list.length}</h2>
            </header>

            <div className="ex-list">
              {list.map((ex) => (
                <div key={ex.no} className="ex-card">
                  <div className="ex-card__head">
                    <span className="ex-card__no mono">{String(ex.no).padStart(2, '0')}</span>
                    <h3 className="ex-card__title">{ex.title}</h3>
                    {ex.tool && <span className="ex-card__tool mono">{ex.tool}</span>}
                  </div>
                  <p className="ex-card__task"><Icon name="fa-solid fa-pen-ruler" /> {ex.task}</p>
                  {ex.prompt && (
                    <pre className="prompt-block"><code>{ex.prompt}</code></pre>
                  )}
                </div>
              ))}
            </div>

            {/* 모듈 이동 */}
            <div className="lesson__nav">
              {prev
                ? <Link to={`/examples/${prev.id}`} className="btn btn-ghost"><Icon name="fa-solid fa-arrow-left" /> M{prev.no}. {prev.title}</Link>
                : <span />}
              {next
                ? <Link to={`/examples/${next.id}`} className="btn btn-primary">M{next.no}. {next.title} <Icon name="fa-solid fa-arrow-right" /></Link>
                : <Link to="/stamps" className="btn btn-accent"><Icon name="fa-solid fa-stamp" /> 도장깨기</Link>}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
