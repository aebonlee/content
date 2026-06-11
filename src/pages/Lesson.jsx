import { useParams, Link } from 'react-router-dom'
import { modules } from '../config/site'
import Icon from '../components/Icon'

// 모든 세션을 펼쳐 이전/다음 탐색 (영상 대신 대면 학습자료)
const flat = modules.flatMap((m) =>
  m.lessons.map((l) => ({ ...l, moduleTitle: m.title, moduleNo: m.no, moduleTime: m.time, modulePeriod: m.period, moduleHours: m.hours }))
)

export default function Lesson() {
  const { id } = useParams()
  const idx = flat.findIndex((l) => l.id === id)
  const lesson = flat[idx]

  if (!lesson) {
    return (
      <div className="container lesson-missing">
        <h2>학습자료를 찾을 수 없습니다.</h2>
        <Link to="/curriculum" className="btn btn-ghost">커리큘럼으로</Link>
      </div>
    )
  }

  const prev = flat[idx - 1]
  const next = flat[idx + 1]

  return (
    <div className="container lesson">
      <p className="eyeline mono">
        <Link to="/curriculum">학습자료</Link> · M{lesson.moduleNo}. {lesson.moduleTitle}
      </p>
      <h1 className="lesson__title">{lesson.title}</h1>
      <p className="lesson__meta mono">
        <Icon name="fa-regular fa-clock" /> {lesson.modulePeriod} · {lesson.moduleTime}
      </p>

      {/* 학습목표 */}
      {lesson.objectives?.length > 0 && (
        <section className="material material--goal">
          <h2 className="material__title"><Icon name="fa-solid fa-bullseye" /> 학습목표</h2>
          <ul className="material__list">
            {lesson.objectives.map((o, i) => <li key={i}>{o}</li>)}
          </ul>
        </section>
      )}

      {/* 핵심개념 */}
      {lesson.keypoints?.length > 0 && (
        <section className="material">
          <h2 className="material__title"><Icon name="fa-solid fa-key" /> 핵심 개념</h2>
          <ul className="material__list material__list--check">
            {lesson.keypoints.map((k, i) => (
              <li key={i}><Icon name="fa-solid fa-check" className="material__bullet" /> {k}</li>
            ))}
          </ul>
        </section>
      )}

      {/* 대면 실습 */}
      {lesson.practice && (
        <section className="material material--practice">
          <h2 className="material__title"><Icon name="fa-solid fa-pen-ruler" /> 대면 실습</h2>
          <p className="material__practice">{lesson.practice}</p>
        </section>
      )}

      {/* 사용 도구 */}
      {lesson.tools?.length > 0 && (
        <section className="material">
          <h2 className="material__title"><Icon name="fa-solid fa-toolbox" /> 사용 도구</h2>
          <div className="material__tools">
            {lesson.tools.map((t) => <span key={t} className="tool-chip mono">{t}</span>)}
          </div>
        </section>
      )}

      {/* 도장깨기 연결 */}
      {lesson.practice?.includes('미션') && (
        <Link to="/stamps" className="lesson__stamp-cta">
          <Icon name="fa-solid fa-stamp" />
          <span>이 세션의 결과물로 <strong>도장깨기</strong>에서 도장을 찍어 보세요</span>
          <Icon name="fa-solid fa-arrow-right" />
        </Link>
      )}

      <div className="lesson__nav">
        {prev ? <Link to={`/lesson/${prev.id}`} className="btn btn-ghost"><Icon name="fa-solid fa-arrow-left" /> {prev.title}</Link> : <span />}
        {next ? <Link to={`/lesson/${next.id}`} className="btn btn-primary">{next.title} <Icon name="fa-solid fa-arrow-right" /></Link> : <span />}
      </div>
    </div>
  )
}
