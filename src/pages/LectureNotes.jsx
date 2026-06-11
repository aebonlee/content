import { Link } from 'react-router-dom'
import { modules, course } from '../config/site'
import { lectureDetails } from '../config/lectures'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'

// 학습강의안 — 인덱스. 모듈별 개별 페이지(/lecture/:moduleId)로 진입한다.
export default function LectureNotes() {
  const totalSessions = modules.reduce((s, m) => s + m.lessons.length, 0)

  return (
    <div className="container lecture">
      {/* 헤더 */}
      <header className="lecture__head">
        <p className="eyeline mono">LECTURE NOTES · 학습강의안</p>
        <h1 className="lecture__title">시간대별 · 모듈별 강의안</h1>
        <p className="lecture__lead">
          {course.schedule.offline} · {modules.length}개 모듈 · {totalSessions}개 세션.
          모듈을 선택하면 <strong>핵심 개념 · 실습 절차 · 프롬프트 예시 · 흔한 실수 · 도구 가이드</strong>까지
          상세 강의안이 열립니다.
        </p>
      </header>

      <div className="lecture__layout">
        {/* 타임라인 사이드 내비 */}
        <aside className="lecture__rail">
          <p className="lecture__rail-title mono">TIMELINE</p>
          <ul className="lecture__rail-list">
            {modules.map((m) => (
              <li key={m.id}>
                <Link to={`/lecture/${m.id}`}>
                  <span className="lecture__rail-time mono">{m.period} · {m.time}{m.hours === 2 ? ' · 2시간' : ''}</span>
                  <span className="lecture__rail-name">M{m.no}. {m.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* 모듈 카드 목록 */}
        <div className="lecture__body">
          {modules.map((m) => {
            const detail = lectureDetails[m.id]
            return (
              <Reveal key={m.id} className="lecmod-card">
                <Link to={`/lecture/${m.id}`} className="lecmod-card__link">
                  <div className="lecmod-card__head">
                    <span className="lecmod-card__badge mono">M{m.no}</span>
                    <span className="lecmod-card__period mono">
                      <Icon name="fa-regular fa-clock" /> {m.period} · {m.time}{m.hours === 2 ? ' · 2시간' : ''}
                    </span>
                  </div>
                  <h2 className="lecmod-card__title">{m.title}</h2>
                  <p className="lecmod-card__goal">{detail?.goal || m.summary}</p>
                  <ul className="lecmod-card__sessions">
                    {m.lessons.map((l) => (
                      <li key={l.id}><Icon name="fa-regular fa-file-lines" /> {l.title}</li>
                    ))}
                  </ul>
                  <span className="lecmod-card__cta mono">
                    강의안 열기 <Icon name="fa-solid fa-arrow-right" />
                  </span>
                </Link>
              </Reveal>
            )
          })}

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
