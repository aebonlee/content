import { useParams, Link } from 'react-router-dom'
import { modules, course, stamps } from '../config/site'
import { lectureDetails } from '../config/lectures'
import { useStamps, toggleStamp } from '../lib/stamps'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import LectureDiagram from '../components/LectureDiagram'

// 학습강의안 — 한 페이지 마스터-디테일.
// 왼쪽 타임라인(교시)에서 모듈을 고르면 오른쪽에 그 교시의 상세 강의안이 바로 보인다.
export default function LectureNotes() {
  const { moduleId } = useParams()
  const totalSessions = modules.reduce((s, m) => s + m.lessons.length, 0)

  const idx = Math.max(0, modules.findIndex((m) => m.id === moduleId))
  const m = modules[idx]
  const detail = lectureDetails[m.id]
  const prev = modules[idx - 1]
  const next = modules[idx + 1]
  const titleOf = (ref) => m.lessons.find((l) => l.id === ref)?.title || ''

  const done = useStamps()
  const moduleStamp = stamps.find((s) => s.module === m.no)
  const earned = moduleStamp ? !!done[moduleStamp.id] : false

  return (
    <div className="container lecture">
      {/* 헤더 */}
      <header className="lecture__head">
        <p className="eyeline mono">LECTURE NOTES · 학습강의안</p>
        <h1 className="lecture__title">시간대별 · 모듈별 강의안</h1>
        <p className="lecture__lead">
          {course.schedule.offline} · {modules.length}개 모듈 · {totalSessions}개 세션.
          왼쪽에서 교시를 선택하면 그 시간의 <strong>핵심 개념 · 실습 절차 · 프롬프트 예시 · 흔한 실수</strong>가 바로 열립니다.
        </p>
      </header>

      <div className="lecture__layout">
        {/* 타임라인 사이드 내비 — 클릭 시 해당 교시 표시 */}
        <aside className="lecture__rail">
          <p className="lecture__rail-title mono">TIMELINE</p>
          <ul className="lecture__rail-list">
            {modules.map((mm) => (
              <li key={mm.id}>
                <Link to={`/lecture/${mm.id}`} className={mm.id === m.id ? 'is-active' : ''}>
                  <span className="lecture__rail-time mono">{mm.period} · {mm.time}{mm.hours === 2 ? ' · 2시간' : ''}</span>
                  <span className="lecture__rail-name">M{mm.no}. {mm.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* 선택된 교시의 상세 강의안 (인라인) */}
        <div className="lecture__body">
          <Reveal key={m.id} className="lecmod">
            <header className="lecmod__head">
              <span className="lecmod__period mono">
                <Icon name="fa-regular fa-clock" /> {m.period} · {m.time}{m.hours === 2 ? ' · 2시간' : ''}
              </span>
              <h2 className="lecmod__title">M{m.no}. {m.title}</h2>
              {detail?.goal && (
                <p className="lecmod__goal"><Icon name="fa-solid fa-flag-checkered" /> {detail.goal}</p>
              )}
            </header>

            {/* 핵심 프레임워크 도해 */}
            <LectureDiagram moduleId={m.id} />

            {detail?.sessions.map((s, si) => (
              <section key={s.ref} className="lecmod__session">
                <div className="lecmod__session-head">
                  <span className="lecmod__session-no mono">{m.no}-{si + 1}</span>
                  <h3 className="lecmod__session-title">{titleOf(s.ref)}</h3>
                </div>
                {s.lead && <p className="lecmod__lead">{s.lead}</p>}

                {s.concepts?.length > 0 && (
                  <div className="lecmod__sec">
                    <h4 className="lecmod__sec-title"><Icon name="fa-solid fa-key" /> 핵심 개념</h4>
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

                {s.steps?.length > 0 && (
                  <div className="lecmod__sec">
                    <h4 className="lecmod__sec-title"><Icon name="fa-solid fa-list-ol" /> 실습 절차</h4>
                    <ol className="step-list">
                      {s.steps.map((st, i) => <li key={i}>{st}</li>)}
                    </ol>
                  </div>
                )}

                {s.prompt && (
                  <div className="lecmod__sec">
                    <h4 className="lecmod__sec-title"><Icon name="fa-solid fa-terminal" /> 프롬프트 예시 — {s.prompt.title}</h4>
                    <pre className="prompt-block"><code>{s.prompt.code}</code></pre>
                  </div>
                )}

                {s.pitfalls?.length > 0 && (
                  <div className="lecmod__sec lecmod__sec--warn">
                    <h4 className="lecmod__sec-title"><Icon name="fa-solid fa-triangle-exclamation" /> 흔한 실수</h4>
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
              </section>
            ))}

            {/* 도구 · 체크리스트 */}
            <div className="grid grid-2 lecmod__meta">
              {detail?.toolsDeep?.length > 0 && (
                <div className="card lecmod__panel">
                  <h3 className="lecmod__panel-title"><Icon name="fa-solid fa-toolbox" /> 도구 가이드</h3>
                  <ul className="tool-deep">
                    {detail.toolsDeep.map((t) => (
                      <li key={t.name}><strong>{t.name}</strong> — {t.note}</li>
                    ))}
                  </ul>
                </div>
              )}
              {detail?.checklist?.length > 0 && (
                <div className="card lecmod__panel">
                  <h3 className="lecmod__panel-title"><Icon name="fa-solid fa-square-check" /> 완료 체크리스트</h3>
                  <ul className="material__list material__list--check">
                    {detail.checklist.map((c, i) => (
                      <li key={i}><Icon name="fa-regular fa-square" className="material__bullet" /> {c}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {detail?.references?.length > 0 && (
              <div className="lecmod__refs">
                <h3 className="lecmod__panel-title"><Icon name="fa-solid fa-link" /> 이어보기</h3>
                <ul className="material__list">
                  {detail.references.map((r, i) => (
                    <li key={i}><strong>{r.label}</strong> — {r.note}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* 이해 도장 — 모듈 하단 버튼(도장깨기와 연동, 클릭 시 색/값 변화) */}
            {moduleStamp && (
              <div className={`lec-stamp${earned ? ' is-earned' : ''}`}>
                <div className="lec-stamp__info">
                  <span className="lec-stamp__seal" aria-hidden>
                    <Icon name={earned ? 'fa-solid fa-stamp' : 'fa-regular fa-circle-check'} />
                  </span>
                  <div>
                    <strong>{earned ? '이 모듈을 이해 완료했어요' : '이 모듈, 이해되셨나요?'}</strong>
                    <span className="lec-stamp__sub">
                      {earned
                        ? `도장 ${String(moduleStamp.no).padStart(2, '0')} 획득됨 · 다시 누르면 해제`
                        : `버튼을 누르면 도장깨기에 도장 ${String(moduleStamp.no).padStart(2, '0')}이 채워집니다`}
                    </span>
                  </div>
                </div>
                <button
                  className={`btn lec-stamp__btn ${earned ? 'btn-accent' : 'btn-primary'}`}
                  onClick={() => toggleStamp(moduleStamp.id)}
                >
                  <Icon name={earned ? 'fa-solid fa-circle-check' : 'fa-solid fa-stamp'} />
                  {earned ? '이해 완료됨' : '이해 완료 — 도장 찍기'}
                </button>
              </div>
            )}

            {/* 교시 이동 */}
            <div className="lesson__nav">
              {prev
                ? <Link to={`/lecture/${prev.id}`} className="btn btn-ghost"><Icon name="fa-solid fa-arrow-left" /> M{prev.no}. {prev.title}</Link>
                : <span />}
              {next
                ? <Link to={`/lecture/${next.id}`} className="btn btn-primary">M{next.no}. {next.title} <Icon name="fa-solid fa-arrow-right" /></Link>
                : <Link to="/stamps" className="btn btn-accent"><Icon name="fa-solid fa-stamp" /> 도장깨기</Link>}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
