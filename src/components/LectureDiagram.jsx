// 학습강의안 도해 — 모듈별 핵심 프레임워크를 팔레트 SVG로 시각화.
// 색은 토큰 변수(var(--pigment) 등) 사용 → 다크/라이트 동일 팔레트. viewBox 760×250.
// 글꼴은 layout.css의 .lec-diagram text 규칙으로 지정.

const arrowDefs = (
  <defs>
    <marker id="ld-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill="var(--pigment)" />
    </marker>
  </defs>
)

// M1 — 자동화 우선순위 2×2 (반복성 × 창의성)
function D1() {
  const cell = (x, y, fill, t1, t2, tc) => (
    <g>
      <rect x={x} y={y} width="150" height="84" rx="8" fill={fill} stroke="var(--paper-d)" />
      <text x={x + 75} y={y + 36} textAnchor="middle" fontSize="15" fontWeight="700" fill={tc}>{t1}</text>
      <text x={x + 75} y={y + 58} textAnchor="middle" fontSize="12" fill={tc} opacity="0.85">{t2}</text>
    </g>
  )
  return (
    <svg viewBox="0 0 760 250" className="lec-diagram__svg" role="img">
      <text x="40" y="30" fontSize="13" className="mono" fill="var(--pigment)">반복성 高</text>
      <text x="40" y="232" fontSize="13" className="mono" fill="var(--ink-45)">반복성 低</text>
      <text x="300" y="248" fontSize="13" className="mono" fill="var(--ink-45)">창의성 低</text>
      <text x="470" y="248" fontSize="13" className="mono" fill="var(--ink-45)">창의성 高</text>
      {cell(250, 40, 'var(--accent)', '자동화 1순위', '반복 高 · 창의 低', '#fff')}
      {cell(410, 40, 'var(--wash)', '부분 자동화', 'AI 초안 + 사람', 'var(--ink)')}
      {cell(250, 132, '#fff', '가끔/수동', '효과 낮음', 'var(--ink-70)')}
      {cell(410, 132, 'var(--wash)', '사람 주도', '판단·창의 영역', 'var(--ink)')}
      <text x="595" y="86" fontSize="12.5" fill="var(--ink-70)">← 여기부터</text>
      <text x="595" y="104" fontSize="12.5" fill="var(--ink-70)">자동화 시작</text>
    </svg>
  )
}

// M2 — 메시지 하우스 (지붕 1 + 기둥 3)
function D2() {
  return (
    <svg viewBox="0 0 760 250" className="lec-diagram__svg" role="img">
      <polygon points="230,70 530,70 380,18" fill="var(--pigment)" />
      <text x="380" y="58" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff">핵심 메시지 1문장 (지붕)</text>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={236 + i * 100} y="86" width="86" height="120" rx="6" fill="#fff" stroke="var(--paper-d)" />
          <text x={279 + i * 100} y="124" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--pigment)">근거 {i + 1}</text>
          <text x={279 + i * 100} y="150" textAnchor="middle" fontSize="11.5" fill="var(--ink-70)">기둥</text>
        </g>
      ))}
      <rect x="226" y="206" width="308" height="20" rx="4" fill="var(--ink)" />
      <text x="380" y="220" textAnchor="middle" fontSize="11.5" fill="#fff">타깃 페르소나 (토대)</text>
      <text x="566" y="130" fontSize="13" fill="var(--ink-70)">모든 콘텐츠가</text>
      <text x="566" y="150" fontSize="13" fill="var(--ink-70)">이 한 채에서 파생</text>
    </svg>
  )
}

// M3 — PAS 흐름 + 원소스 멀티유즈
function D3() {
  const step = (x, t, fill, tc) => (
    <g>
      <rect x={x} y="40" width="120" height="44" rx="22" fill={fill} stroke="var(--paper-d)" />
      <text x={x + 60} y="68" textAnchor="middle" fontSize="14" fontWeight="700" fill={tc}>{t}</text>
    </g>
  )
  const chan = (y, t) => (
    <g>
      {/* 메시지 하우스(원) → 각 채널로 뻗는 화살표 */}
      <line x1="201" y1="165" x2="554" y2={y + 17} stroke="var(--pigment)" strokeWidth="2" markerEnd="url(#ld-arrow)" />
      <rect x="560" y={y} width="160" height="34" rx="6" fill="#fff" stroke="var(--paper-d)" />
      <text x="640" y={y + 22} textAnchor="middle" fontSize="13" fill="var(--ink)">{t}</text>
    </g>
  )
  return (
    <svg viewBox="0 0 760 250" className="lec-diagram__svg" role="img">
      {arrowDefs}
      <text x="40" y="30" fontSize="13" className="mono" fill="var(--pigment)">PAS 구조</text>
      {step(40, '문제 P', 'var(--wash)', 'var(--ink)')}
      {step(180, '공감 A', 'var(--wash)', 'var(--ink)')}
      {step(320, '해결 S', 'var(--pigment)', '#fff')}
      <line x1="162" y1="62" x2="178" y2="62" stroke="var(--pigment)" strokeWidth="2" markerEnd="url(#ld-arrow)" />
      <line x1="302" y1="62" x2="318" y2="62" stroke="var(--pigment)" strokeWidth="2" markerEnd="url(#ld-arrow)" />
      <text x="40" y="116" fontSize="13" className="mono" fill="var(--pigment)">원소스 멀티유즈</text>
      <circle cx="160" cy="165" r="38" fill="var(--accent)" />
      <text x="160" y="161" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff">메시지</text>
      <text x="160" y="179" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff">하우스</text>
      {chan(96, '인스타 캡션 + 해시태그')}
      {chan(143, '블로그 도입부')}
      {chan(190, '카드뉴스 5장 문구')}
    </svg>
  )
}

// M4 — 이미지 프롬프트 5요소
function D4() {
  const els = ['피사체', '스타일·매체', '구도·조명', '색 팔레트', '--no 금지']
  return (
    <svg viewBox="0 0 760 250" className="lec-diagram__svg" role="img">
      {arrowDefs}
      <text x="40" y="34" fontSize="13" className="mono" fill="var(--pigment)">좋은 이미지 프롬프트 = 5요소를 순서대로</text>
      {els.map((t, i) => {
        const x = 40 + i * 142
        const last = i === 4
        return (
          <g key={t}>
            <rect x={x} y="60" width="126" height="60" rx="8" fill={last ? 'var(--ink)' : 'var(--wash)'} stroke="var(--paper-d)" />
            <text x={x + 63} y="88" textAnchor="middle" fontSize="13.5" fontWeight="700" fill={last ? '#fff' : 'var(--ink)'}>{t}</text>
            <text x={x + 63} y="107" textAnchor="middle" fontSize="11" className="mono" fill={last ? 'var(--wash)' : 'var(--pigment)'}>{i + 1}</text>
            {i < 4 && <line x1={x + 126} y1="90" x2={x + 142} y2="90" stroke="var(--pigment)" strokeWidth="2" markerEnd="url(#ld-arrow)" />}
          </g>
        )
      })}
      <rect x="40" y="158" width="680" height="58" rx="8" fill="#fff" stroke="var(--paper-d)" />
      <text x="58" y="184" fontSize="12.5" className="mono" fill="var(--ink-70)">예) minimal product banner · soft side-light · amber + navy · 16:9</text>
      <text x="58" y="204" fontSize="12.5" className="mono" fill="var(--accent)">--no text, logo, watermark   →  글자·로고·워터마크 없는 깔끔한 배경</text>
    </svg>
  )
}

// M5 — 1페이지 1목표 (랜딩 구조 + CTA 반복)
function D5() {
  const sec = (y, t, fill, tc, h = 28) => (
    <g>
      <rect x="250" y={y} width="260" height={h} rx="5" fill={fill} stroke="var(--paper-d)" />
      <text x="380" y={y + h / 2 + 5} textAnchor="middle" fontSize="13" fontWeight="600" fill={tc}>{t}</text>
    </g>
  )
  return (
    <svg viewBox="0 0 760 250" className="lec-diagram__svg" role="img">
      <text x="250" y="24" fontSize="13" className="mono" fill="var(--pigment)">한 페이지 = 하나의 목표(전환)</text>
      {sec(34, '히어로 + CTA', 'var(--pigment)', '#fff', 40)}
      {sec(82, '특징 3 (이득)', 'var(--wash)', 'var(--ink)')}
      {sec(118, '후기 · 사회적 증거', 'var(--wash)', 'var(--ink)')}
      {sec(154, 'FAQ', 'var(--wash)', 'var(--ink)')}
      {sec(190, 'CTA 다시 (사전예약)', 'var(--accent)', '#fff', 34)}
      <text x="540" y="58" fontSize="13" fill="var(--accent)" fontWeight="700">CTA ①</text>
      <text x="540" y="214" fontSize="13" fill="var(--accent)" fontWeight="700">CTA ②</text>
      <text x="540" y="120" fontSize="12.5" fill="var(--ink-70)">목표는</text>
      <text x="540" y="138" fontSize="12.5" fill="var(--ink-70)">'사전예약'</text>
      <text x="540" y="156" fontSize="12.5" fill="var(--ink-70)">하나만</text>
      <text x="110" y="120" fontSize="13" className="mono" fill="var(--ink-45)">위 → 아래</text>
      <text x="110" y="140" fontSize="13" className="mono" fill="var(--ink-45)">시선 흐름</text>
    </svg>
  )
}

// M6 — AIDA 퍼널
function D6() {
  const rows = [
    ['Attention', '인지 — 히어로로 후킹', 700, 'var(--pigment)'],
    ['Interest', '관심 — 특징(이득)', 560, 'var(--pigment)'],
    ['Desire', '욕구 — 후기·증거', 420, 'var(--pigment)'],
    ['Action', '행동 — 이득형 CTA', 280, 'var(--accent)'],
  ]
  return (
    <svg viewBox="0 0 760 250" className="lec-diagram__svg" role="img">
      {rows.map(([k, d, w, fill], i) => {
        const y = 26 + i * 52
        const x = (760 - w) / 2
        return (
          <g key={k}>
            <rect x={x} y={y} width={w} height="42" rx="6" fill={fill} opacity={i === 3 ? 1 : 0.86 - i * 0.12} />
            <text x="380" y={y + 27} textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff">{k} · {d}</text>
          </g>
        )
      })}
      <text x="380" y="246" textAnchor="middle" fontSize="12.5" fill="var(--ink-45)">섹션 순서를 이 흐름(인지→관심→욕구→행동)에 맞춘다</text>
    </svg>
  )
}

// M7 — 자동화 워크플로 (트리거 → 생성 → 검수 → 발행)
function D7() {
  const node = (x, t, sub, fill, tc, gate) => (
    <g>
      <rect x={x} y="70" width="140" height="74" rx="10" fill={fill} stroke={gate ? 'var(--accent)' : 'var(--paper-d)'} strokeWidth={gate ? 3 : 1} />
      <text x={x + 70} y="104" textAnchor="middle" fontSize="14" fontWeight="700" fill={tc}>{t}</text>
      <text x={x + 70} y="124" textAnchor="middle" fontSize="11.5" fill={tc} opacity="0.85">{sub}</text>
    </g>
  )
  return (
    <svg viewBox="0 0 760 250" className="lec-diagram__svg" role="img">
      {arrowDefs}
      <text x="40" y="44" fontSize="13" className="mono" fill="var(--pigment)">반복 홍보업무 자동화 워크플로</text>
      {node(40, '트리거', '매주 월 09:00', 'var(--wash)', 'var(--ink)')}
      {node(220, 'AI 생성', '게시글·문구 초안', 'var(--pigment)', '#fff')}
      {node(400, '사람 검수', '사실·톤 게이트', '#fff', 'var(--ink)', true)}
      {node(580, '발행', '예약 발행', 'var(--ink)', '#fff')}
      {[180, 360, 540].map((x) => (
        <line key={x} x1={x} y1="107" x2={x + 40} y2="107" stroke="var(--pigment)" strokeWidth="2.5" markerEnd="url(#ld-arrow)" />
      ))}
      <text x="470" y="172" textAnchor="middle" fontSize="12" fill="var(--accent)" fontWeight="700">⚠ 사람 게이트 필수</text>
      <text x="120" y="206" fontSize="12.5" fill="var(--ink-70)">주 3시간</text>
      <text x="180" y="206" fontSize="12.5" fill="var(--pigment)" fontWeight="700">→ 약 10분</text>
    </svg>
  )
}

const DIAGRAMS = {
  m1: { title: '자동화 우선순위 매트릭스 (반복성 × 창의성)', C: D1 },
  m2: { title: '메시지 하우스 — 핵심 메시지 1 + 근거 3', C: D2 },
  m3: { title: 'PAS 구조 & 원소스 멀티유즈', C: D3 },
  m4: { title: '이미지 프롬프트 5요소', C: D4 },
  m5: { title: '한 페이지 한 목표 — 랜딩 구조', C: D5 },
  m6: { title: 'AIDA 퍼널 — 섹션 배열 흐름', C: D6 },
  m7: { title: '반복업무 자동화 워크플로', C: D7 },
}

export default function LectureDiagram({ moduleId }) {
  const d = DIAGRAMS[moduleId]
  if (!d) return null
  const C = d.C
  return (
    <figure className="lec-diagram">
      <figcaption className="lec-diagram__cap mono">
        <Icon /> 도해 — {d.title}
      </figcaption>
      <div className="lec-diagram__frame">
        <C />
      </div>
    </figure>
  )
}

// Icon 자리 표시(아이콘은 부모에서 FA 사용). 여기선 간단히 생략용 빈 스팬.
function Icon() {
  return <i className="fa-solid fa-diagram-project" aria-hidden style={{ marginRight: '.4rem', color: 'var(--pigment)' }} />
}
