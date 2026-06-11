import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { stamps, modules } from '../config/site'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Highlighter from '../components/Highlighter'

// 도장깨기 — 강의 내용을 직접 만들어 보는 8개 미션.
// 로그인 없이 브라우저(localStorage)에 진행 상태를 저장한다.
const STORE_KEY = 'content.stamps.v1'

function loadStamps() {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY)) || {}
  } catch {
    return {}
  }
}

const moduleName = (no) => modules.find((m) => m.no === no)?.title || ''

export default function Stamps() {
  const [done, setDone] = useState(loadStamps)

  useEffect(() => {
    localStorage.setItem(STORE_KEY, JSON.stringify(done))
  }, [done])

  const toggle = (id) =>
    setDone((prev) => ({ ...prev, [id]: !prev[id] }))

  const reset = () => {
    if (confirm('도장을 모두 지울까요? 되돌릴 수 없습니다.')) setDone({})
  }

  const count = stamps.filter((s) => done[s.id]).length
  const pct = Math.round((count / stamps.length) * 100)
  const allDone = count === stamps.length

  return (
    <Section
      eyeline="STAMP RALLY"
      title="도장깨기"
      lead="듣고 끝내지 않습니다. 8개의 미션을 직접 만들어 도장을 찍으세요. 손으로 남긴 결과물이 강의를 체화합니다."
    >
      {/* 진행 요약 */}
      <div className="stamp-summary">
        <div className="stamp-summary__meter">
          <div className="progress-bar__track">
            <div className="progress-bar__fill" style={{ width: `${pct}%` }} />
          </div>
          <span className="progress-bar__label mono">
            {count}/{stamps.length} 완료 · {pct}%
          </span>
        </div>
        {count > 0 && (
          <button className="btn btn-ghost btn-sm" onClick={reset}>도장 초기화</button>
        )}
      </div>

      {allDone && (
        <Reveal className="stamp-clear">
          <span className="stamp-clear__seal" aria-hidden>🏅</span>
          <p>
            8개 미션을 모두 <Highlighter>완성</Highlighter>했습니다. 이제 당신만의 홍보 자동화 루틴이 손에 남았습니다.
          </p>
          <Link to="/gallery" className="btn btn-accent">결과물 갤러리 보기</Link>
        </Reveal>
      )}

      {/* 도장 그리드 */}
      <div className="stamp-grid">
        {stamps.map((s, i) => {
          const isDone = !!done[s.id]
          return (
            <Reveal
              key={s.id}
              className={`stamp-card${isDone ? ' stamp-card--done' : ''}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="stamp-card__seal" aria-hidden>
                <span className="stamp-card__emoji">{s.icon}</span>
                {isDone && <span className="stamp-card__check">완료</span>}
              </div>
              <div className="stamp-card__body">
                <span className="stamp-card__no mono">
                  MISSION {String(s.no).padStart(2, '0')} · {moduleName(s.module)}
                </span>
                <h3 className="stamp-card__title">{s.title}</h3>
                <p className="stamp-card__mission">{s.mission}</p>
                <p className="stamp-card__tip mono">💡 {s.tip}</p>
                <button
                  className={`btn btn-sm ${isDone ? 'btn-ghost' : 'btn-primary'}`}
                  onClick={() => toggle(s.id)}
                >
                  {isDone ? '✓ 도장 찍음 (해제)' : '도장 찍기'}
                </button>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
