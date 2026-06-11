import { useParams, Link } from 'react-router-dom'
import { modules } from '../config/site'
import { lectureDetails } from '../config/lectures'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'

// 학습강의안 — 모듈별 개별 페이지(/lecture/:moduleId). 기술적으로 상세한 본문.
export default function LectureModule() {
  const { moduleId } = useParams()
  const idx = modules.findIndex((m) => m.id === moduleId)
  const m = modules[idx]
  const detail = lectureDetails[moduleId]

  if (!m || !detail) {
    return (
      <div className="container lesson-missing">
        <h2>강의안을 찾을 수 없습니다.</h2>
        <Link to="/lecture" className="btn btn-ghost">학습강의안으로</Link>
      </div>
    )
  }

  const prev = modules[idx - 1]
  const next = modules[idx + 1]
  const titleOf = (ref) => m.lessons.find((l) => l.id === ref)?.title || ''

  return (
    <div className="container lecmod">
      {/* 헤더 */}
      <p className="eyeline mono">
        <Link to="/lecture">학습강의안</Link> · M{m.no}
      </p>
      <header className="lecmod__head">
        <span className="lecmod__period mono">
          <Icon name="fa-regular fa-clock" /> {m.period} · {m.time}{m.hours === 2 ? ' · 2시간' : ''}
        </span>
        <h1 className="lecmod__title">M{m.no}. {m.title}</h1>
        <p className="lecmod__goal"><Icon name="fa-solid fa-flag-checkered" /> {detail.goal}</p>
      </header>

      {/* 세션별 상세 본문 */}
      {detail.sessions.map((s, si) => (
        <Reveal key={s.ref} className="lecmod__session">
          <div className="lecmod__session-head">
            <span className="lecmod__session-no mono">{m.no}-{si + 1}</span>
            <h2 className="lecmod__session-title">{titleOf(s.ref)}</h2>
          </div>
          {s.lead && <p className="lecmod__lead">{s.lead}</p>}

          {/* 핵심 개념 */}
          {s.concepts?.length > 0 && (
            <div className="lecmod__sec">
              <h3 className="lecmod__sec-title"><Icon name="fa-solid fa-key" /> 핵심 개념</h3>
              <dl className="concept-list">
                {s.concepts.map((c) => (
                  <div key={c.term} className="concept">
                    <dt className="concept__term">{c.term}</dt>
                    <dd className="concept__desc">{c.desc}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {/* 실습 절차 */}
          {s.steps?.length > 0 && (
            <div className="lecmod__sec">
              <h3 className="lecmod__sec-title"><Icon name="fa-solid fa-list-ol" /> 실습 절차</h3>
              <ol className="step-list">
                {s.steps.map((st, i) => <li key={i}>{st}</li>)}
              </ol>
            </div>
          )}

          {/* 프롬프트 예시 */}
          {s.prompt && (
            <div className="lecmod__sec">
              <h3 className="lecmod__sec-title"><Icon name="fa-solid fa-terminal" /> 프롬프트 예시 — {s.prompt.title}</h3>
              <pre className="prompt-block"><code>{s.prompt.code}</code></pre>
            </div>
          )}

          {/* 주의사항 */}
          {s.pitfalls?.length > 0 && (
            <div className="lecmod__sec lecmod__sec--warn">
              <h3 className="lecmod__sec-title"><Icon name="fa-solid fa-triangle-exclamation" /> 흔한 실수</h3>
              <ul className="material__list">
                {s.pitfalls.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
          )}

          {s.output && (
            <p className="lecmod__output mono">
              <Icon name="fa-solid fa-box-archive" /> 결과물 — {s.output}
            </p>
          )}
        </Reveal>
      ))}

      {/* 도구 · 체크리스트 · 참고 */}
      <div className="grid grid-2 lecmod__meta">
        {detail.toolsDeep?.length > 0 && (
          <Reveal className="card lecmod__panel">
            <h3 className="lecmod__panel-title"><Icon name="fa-solid fa-toolbox" /> 도구 가이드</h3>
            <ul className="tool-deep">
              {detail.toolsDeep.map((t) => (
                <li key={t.name}><strong>{t.name}</strong> — {t.note}</li>
              ))}
            </ul>
          </Reveal>
        )}
        {detail.checklist?.length > 0 && (
          <Reveal className="card lecmod__panel" style={{ transitionDelay: '80ms' }}>
            <h3 className="lecmod__panel-title"><Icon name="fa-solid fa-square-check" /> 완료 체크리스트</h3>
            <ul className="material__list material__list--check">
              {detail.checklist.map((c, i) => (
                <li key={i}><Icon name="fa-regular fa-square" className="material__bullet" /> {c}</li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>

      {detail.references?.length > 0 && (
        <div className="lecmod__refs">
          <h3 className="lecmod__panel-title"><Icon name="fa-solid fa-link" /> 이어보기</h3>
          <ul className="material__list">
            {detail.references.map((r, i) => (
              <li key={i}><strong>{r.label}</strong> — {r.note}</li>
            ))}
          </ul>
        </div>
      )}

      {/* 모듈 이동 */}
      <div className="lesson__nav">
        {prev
          ? <Link to={`/lecture/${prev.id}`} className="btn btn-ghost"><Icon name="fa-solid fa-arrow-left" /> M{prev.no}. {prev.title}</Link>
          : <Link to="/lecture" className="btn btn-ghost"><Icon name="fa-solid fa-arrow-left" /> 목록</Link>}
        {next
          ? <Link to={`/lecture/${next.id}`} className="btn btn-primary">M{next.no}. {next.title} <Icon name="fa-solid fa-arrow-right" /></Link>
          : <Link to="/stamps" className="btn btn-accent"><Icon name="fa-solid fa-stamp" /> 도장깨기</Link>}
      </div>
    </div>
  )
}
