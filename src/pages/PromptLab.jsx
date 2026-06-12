import { useState } from 'react'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import {
  scoreCriteria, gradeTable, GRADE_COLOR, techniques, scoreSample, scenarios, evaluatePrompt,
} from '../config/promptLab'

export default function PromptLab() {
  const [scenario, setScenario] = useState(scenarios[0])
  const [input, setInput] = useState('')
  const [result, setResult] = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)

  const pick = (s) => { setScenario(s); setInput(''); setResult(null); setShowAnswer(false) }
  const evaluate = () => { if (input.trim()) setResult(evaluatePrompt(input, scenario)) }

  return (
    <>
      {/* ===== 학습 ===== */}
      <Section eyeline="PROMPT · 학습"
               title="좋은 프롬프트의 5요소"
               lead="프롬프트 품질을 객관적으로 보는 5대 기준(각 20점, 합계 100점). 이 기준으로 아래 실습에서 점수를 받아 봅니다.">
        <div className="grid grid-3 plab-criteria">
          {scoreCriteria.map((c, i) => (
            <Reveal key={c.key} className="card plab-crit" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="plab-crit__top">
                <span className="plab-crit__icon" aria-hidden><Icon name={c.icon} /></span>
                <span className="plab-crit__pts mono">{c.max}점</span>
              </div>
              <h3>{c.key} <span className="plab-crit__code mono">{c.code}</span></h3>
              <p className="plab-crit__desc">{c.desc}</p>
              <p className="plab-crit__detail">{c.detail}</p>
            </Reveal>
          ))}
        </div>

        {/* 등급표 */}
        <div className="plab-grades">
          {gradeTable.map((g) => (
            <div key={g.grade} className="plab-grade">
              <span className="plab-grade__badge" style={{ background: GRADE_COLOR[g.grade] }}>{g.grade}</span>
              <div>
                <strong>{g.label} <span className="mono">{g.range}</span></strong>
                <span className="plab-grade__desc">{g.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 핵심 기법 + 채점 예시 */}
      <Section eyeline="TECHNIQUE" title="점수를 올리는 5가지 기법" wash>
        <div className="grid grid-3">
          {techniques.map((t, i) => (
            <Reveal key={t.title} className="card feature" style={{ transitionDelay: `${i * 60}ms` }}>
              <span className="feature__icon" aria-hidden><Icon name={t.icon} /></span>
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
            </Reveal>
          ))}
        </div>

        <div className="plab-sample">
          <div className="plab-sample__col">
            <div className="plab-sample__head">
              <span className="plab-grade__badge plab-grade__badge--sm" style={{ background: GRADE_COLOR[scoreSample.before.grade] }}>{scoreSample.before.grade}</span>
              <span>개선 전 · <strong className="mono">{scoreSample.before.total}/100</strong></span>
            </div>
            <pre className="prompt-block prompt-block--bad">{scoreSample.before.prompt}</pre>
          </div>
          <div className="plab-sample__arrow" aria-hidden><Icon name="fa-solid fa-arrow-right-long" /></div>
          <div className="plab-sample__col">
            <div className="plab-sample__head">
              <span className="plab-grade__badge plab-grade__badge--sm" style={{ background: GRADE_COLOR[scoreSample.after.grade] }}>{scoreSample.after.grade}</span>
              <span>개선 후 · <strong className="mono">{scoreSample.after.total}/100</strong></span>
            </div>
            <pre className="prompt-block">{scoreSample.after.prompt}</pre>
          </div>
        </div>
      </Section>

      {/* ===== 평가 실습 ===== */}
      <Section eyeline="PROMPT · 평가 실습"
               title="직접 쓰고 점수 받기"
               lead="시나리오를 고르고 프롬프트를 작성하면, 5요소 기준으로 점수·등급·개선 피드백을 드립니다.">
        <div className="plab-practice">
          {/* 시나리오 선택 */}
          <aside className="plab-scenarios">
            <p className="plab-scenarios__title mono">시나리오</p>
            {scenarios.map((s) => (
              <button
                key={s.id}
                className={`plab-scenario${scenario.id === s.id ? ' is-active' : ''}`}
                onClick={() => pick(s)}
              >
                <span className="plab-scenario__cat mono">{s.category}</span>
                <span className="plab-scenario__title">{s.title}</span>
              </button>
            ))}
          </aside>

          {/* 작성 + 평가 */}
          <div className="plab-main">
            <div className="plab-brief">
              <h3>{scenario.title}</h3>
              <p><strong>상황</strong> {scenario.situation}</p>
              <p><strong>목표</strong> {scenario.goal}</p>
            </div>

            <textarea
              className="plab-input"
              value={input}
              onChange={(e) => { setInput(e.target.value); setResult(null) }}
              placeholder="여기에 프롬프트를 작성하세요. (역할·맥락·과제·제약·출력형식을 모두 담아보세요)"
              rows={10}
            />
            <div className="plab-actions">
              <span className="plab-len mono">{input.trim().length}자</span>
              <div className="plab-actions__btns">
                <button className="btn btn-ghost btn-sm" onClick={() => setShowAnswer((v) => !v)}>
                  {showAnswer ? '모범답안 숨기기' : '모범답안 보기'}
                </button>
                <button className="btn btn-primary btn-sm" onClick={evaluate} disabled={!input.trim()}>
                  <Icon name="fa-solid fa-gauge-high" /> 평가받기
                </button>
              </div>
            </div>

            {result && (
              <div className="plab-result">
                <div className="plab-result__score">
                  <div className="plab-grade__badge plab-grade__badge--lg" style={{ background: GRADE_COLOR[result.grade] }}>{result.grade}</div>
                  <div>
                    <div className="plab-total mono">{result.total}<span> / 100</span></div>
                    <div className="plab-total__label">5요소 종합 점수</div>
                  </div>
                </div>
                <div className="plab-bars">
                  {scoreCriteria.map((c) => {
                    const v = result.scores[c.key]
                    return (
                      <div className="plab-bar-row" key={c.key}>
                        <span className="plab-bar-label">{c.key}</span>
                        <div className="plab-bar"><div className="plab-bar__fill" style={{ width: `${(v / 20) * 100}%` }} /></div>
                        <span className="plab-bar-val mono">{v}/20</span>
                      </div>
                    )
                  })}
                </div>
                {result.feedback.length > 0 && (
                  <div className="plab-feedback">
                    <strong><Icon name="fa-solid fa-comment-dots" /> 개선 피드백</strong>
                    <ul>{result.feedback.map((f, i) => <li key={i}>{f}</li>)}</ul>
                  </div>
                )}
              </div>
            )}

            {showAnswer && (
              <div className="plab-answer">
                <p className="plab-answer__head"><Icon name="fa-solid fa-circle-check" /> 모범 프롬프트 예시</p>
                <pre className="prompt-block">{scenario.exampleAnswer}</pre>
              </div>
            )}

            <p className="plab-note mono">
              <Icon name="fa-solid fa-circle-info" /> 점수는 키워드·구조 기반 자동 추정입니다. 실제 결과는 ChatGPT·Claude 등에서 직접 받아보세요.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
