import { Link } from 'react-router-dom'
import { modules, course } from '../config/site'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'

// 학습강의안 — 시간대별 학습자료 전문(全文).
// 커리큘럼이 "목차"라면, 이 페이지는 하루를 따라 읽는 "강의안 본문".
export default function LectureNotes() {
  const totalSessions = modules.reduce((s, m) => s + m.lessons.length, 0)

  return (
    <div className="container lecture">
      {/* 헤더 */}
      <header className="lecture__head">
        <p className="eyeline mono">LECTURE NOTES · 학습강의안</p>
        <h1 className="lecture__title">시간대별 학습자료</h1>
        <p className="lecture__lead">
          {course.schedule.offline} · {modules.length}교시 {totalSessions}개 세션. 하루의 흐름을 따라
          세션마다 <strong>학습목표 · 핵심 개념 · 대면 실습 · 사용 도구</strong>를 담았습니다.
        </p>
      </header>

      <div className="lecture__layout">
        {/* 시간표 사이드 내비 */}
        <aside className="lecture__rail">
          <p className="lecture__rail-title mono">TIMELINE</p>
          <ul className="lecture__rail-list">
            {modules.map((m) => (
              <li key={m.id}>
                <a href={`#kyo-${m.no}`}>
                  <span className="lecture__rail-time mono">{m.time}</span>
                  <span className="lecture__rail-name">{m.no}교시 · {m.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* 강의안 본문 */}
        <div className="lecture__body">
          {modules.map((m) => (
            <section key={m.id} id={`kyo-${m.no}`} className="lecture__block">
              <div className="lecture__block-head">
                <span className="lecture__period mono">
                  <Icon name="fa-regular fa-clock" /> {m.time} · {m.no}교시
                </span>
                <h2 className="lecture__block-title">{m.title}</h2>
                <p className="lecture__block-summary">{m.summary}</p>
              </div>

              {m.lessons.map((l, li) => (
                <Reveal key={l.id} className="note">
                  <div className="note__head">
                    <span className="note__no mono">{m.no}-{li + 1}</span>
                    <h3 className="note__title">{l.title}</h3>
                  </div>

                  {l.objectives?.length > 0 && (
                    <div className="note__sec">
                      <h4 className="note__sec-title"><Icon name="fa-solid fa-bullseye" /> 학습목표</h4>
                      <ul className="material__list">
                        {l.objectives.map((o, i) => <li key={i}>{o}</li>)}
                      </ul>
                    </div>
                  )}

                  {l.keypoints?.length > 0 && (
                    <div className="note__sec">
                      <h4 className="note__sec-title"><Icon name="fa-solid fa-key" /> 핵심 개념</h4>
                      <ul className="material__list material__list--check">
                        {l.keypoints.map((k, i) => (
                          <li key={i}><Icon name="fa-solid fa-check" className="material__bullet" /> {k}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {l.practice && (
                    <div className="note__sec note__sec--practice">
                      <h4 className="note__sec-title"><Icon name="fa-solid fa-pen-ruler" /> 대면 실습</h4>
                      <p className="material__practice">{l.practice}</p>
                    </div>
                  )}

                  {l.tools?.length > 0 && (
                    <div className="note__sec">
                      <h4 className="note__sec-title"><Icon name="fa-solid fa-toolbox" /> 사용 도구</h4>
                      <div className="material__tools">
                        {l.tools.map((t) => <span key={t} className="tool-chip mono">{t}</span>)}
                      </div>
                    </div>
                  )}

                  <Link to={`/lesson/${l.id}`} className="note__more mono">
                    이 세션만 보기 <Icon name="fa-solid fa-arrow-right" />
                  </Link>
                </Reveal>
              ))}
            </section>
          ))}

          <div className="lecture__foot">
            <p>강의안을 따라 직접 만들어 보세요.</p>
            <Link to="/stamps" className="btn btn-accent">
              <Icon name="fa-solid fa-stamp" /> 도장깨기로 실습하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
