import { Link } from 'react-router-dom'
import { stamps, modules } from '../config/site'
import { useStamps, resetStamps } from '../lib/stamps'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Highlighter from '../components/Highlighter'
import Icon from '../components/Icon'

// 도장깨기 — 현황판. 도장은 각 학습강의안 모듈 하단 버튼에서 찍는다(연동).
// 이 페이지에서는 획득 현황을 보고, 미획득 모듈은 강의안으로 이동한다.
const moduleOf = (no) => modules.find((m) => m.no === no)

export default function Stamps() {
  const done = useStamps()

  const reset = () => {
    if (confirm('도장을 모두 지울까요? 되돌릴 수 없습니다.')) resetStamps()
  }

  const count = stamps.filter((s) => done[s.id]).length
  const pct = Math.round((count / stamps.length) * 100)
  const allDone = count === stamps.length

  return (
    <Section
      eyeline="STAMP RALLY"
      title="도장깨기"
      lead={`모듈마다 1개씩, ${stamps.length}개의 이해 도장. 각 학습강의안 맨 아래 "이해 완료" 버튼을 누르면 여기에 도장이 채워집니다.`}
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
          <span className="stamp-clear__seal" aria-hidden><Icon name="fa-solid fa-award" /></span>
          <p>
            {stamps.length}개 모듈을 모두 <Highlighter>이해 완료</Highlighter>했습니다. 이제 당신만의 홍보 자동화 루틴이 손에 남았습니다.
          </p>
          <Link to="/gallery" className="btn btn-accent">결과물 갤러리 보기</Link>
        </Reveal>
      )}

      {/* 도장 그리드 */}
      <div className="stamp-grid">
        {stamps.map((s, i) => {
          const isDone = !!done[s.id]
          const m = moduleOf(s.module)
          return (
            <Reveal
              key={s.id}
              className={`stamp-card${isDone ? ' stamp-card--done' : ''}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="stamp-card__seal" aria-hidden>
                <span className="stamp-card__emoji"><Icon name={s.icon} /></span>
                {isDone && (
                  <span className="stamp-card__check"><Icon name="fa-solid fa-check" /> 완료</span>
                )}
              </div>
              <div className="stamp-card__body">
                <span className="stamp-card__no mono">
                  MISSION {String(s.no).padStart(2, '0')} · {m?.title}
                </span>
                <h3 className="stamp-card__title">{s.title}</h3>
                <p className="stamp-card__mission">{s.mission}</p>
                <p className="stamp-card__tip mono">
                  <Icon name="fa-regular fa-lightbulb" /> {s.tip}
                </p>
                {isDone ? (
                  <span className="stamp-card__earned mono">
                    <Icon name="fa-solid fa-stamp" /> 이해 완료 · 도장 획득
                  </span>
                ) : (
                  <Link to={`/lecture/${m?.id}`} className="btn btn-ghost btn-sm">
                    강의안에서 학습 <Icon name="fa-solid fa-arrow-right" />
                  </Link>
                )}
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
