// 갤러리 결과물 일러스트 — "당신이 만들게 될 것들"을 팔레트 SVG로.
// 사진 대신 청사진(blueprint) 톤의 선·면 일러스트. 색은 토큰 변수(var(--pigment) 등)를
// 그대로 써서 다크/라이트 테마와 같은 팔레트로 호흡한다. viewBox 320×200 = cover 16:10.
//
// 공통 헬퍼 — 모눈 종이결(아주 옅게) 배경.
function Grid() {
  return (
    <g stroke="var(--ink)" strokeWidth="0.5" opacity="0.06">
      {[40, 80, 120, 160].map((y) => <line key={`h${y}`} x1="0" y1={y} x2="320" y2={y} />)}
      {[40, 80, 120, 160, 200, 240, 280].map((x) => <line key={`v${x}`} x1={x} y1="0" x2={x} y2="200" />)}
    </g>
  )
}

// M1 — AI 업무 진단표: 표 + 체크 + 돋보기
function ArtDiagnose() {
  return (
    <>
      <Grid />
      <rect x="58" y="34" width="176" height="132" rx="10" fill="#fff" stroke="var(--paper-d)" />
      <rect x="58" y="34" width="176" height="26" rx="10" fill="var(--pigment)" />
      <rect x="58" y="50" width="176" height="10" fill="var(--pigment)" />
      <rect x="72" y="42" width="70" height="9" rx="4" fill="#fff" opacity="0.9" />
      {[78, 100, 122, 144].map((y, i) => (
        <g key={y}>
          <rect x="74" y={y} width="14" height="14" rx="3" fill={i < 3 ? 'var(--accent)' : 'var(--wash)'} />
          {i < 3 && <path d={`M77 ${y + 7} l4 4 l7 -8`} fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />}
          <rect x="98" y={y + 2} width={[110, 88, 100, 74][i]} height="9" rx="4" fill="var(--wash)" />
        </g>
      ))}
      <circle cx="214" cy="150" r="26" fill="#fff" stroke="var(--pigment)" strokeWidth="4" />
      <line x1="232" y1="168" x2="250" y2="186" stroke="var(--pigment)" strokeWidth="7" strokeLinecap="round" />
      <path d="M204 150 a10 10 0 0 1 10 -10" fill="none" stroke="var(--pigment)" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
    </>
  )
}

// M2 — 홍보 기획 한 장: 한 장 문서 + 과녁 + 메시지 줄
function ArtPlan() {
  return (
    <>
      <Grid />
      <rect x="64" y="30" width="150" height="140" rx="10" fill="#fff" stroke="var(--paper-d)" />
      <rect x="80" y="46" width="84" height="12" rx="6" fill="var(--ink)" />
      <rect x="80" y="68" width="118" height="8" rx="4" fill="var(--wash)" />
      <rect x="80" y="84" width="100" height="8" rx="4" fill="var(--wash)" />
      <rect x="80" y="108" width="44" height="34" rx="6" fill="color-mix(in srgb, var(--pigment) 14%, #fff)" stroke="var(--pigment)" strokeWidth="1" />
      <rect x="134" y="108" width="64" height="8" rx="4" fill="var(--wash)" />
      <rect x="134" y="124" width="48" height="8" rx="4" fill="var(--wash)" />
      {/* 과녁 */}
      <g transform="translate(228,120)">
        <circle r="34" fill="#fff" stroke="var(--pigment)" strokeWidth="3" />
        <circle r="22" fill="none" stroke="var(--pigment)" strokeWidth="3" opacity="0.6" />
        <circle r="10" fill="var(--accent)" />
        <line x1="6" y1="-6" x2="40" y2="-40" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" />
        <path d="M40 -40 l-12 2 l4 -12 z" fill="var(--accent)" />
      </g>
    </>
  )
}

// M3 — 홍보 콘텐츠 세트: 겹친 카드(SNS·블로그·카드뉴스)
function ArtContent() {
  return (
    <>
      <Grid />
      <rect x="40" y="58" width="120" height="120" rx="10" fill="color-mix(in srgb, var(--pigment) 12%, #fff)" stroke="var(--paper-d)" transform="rotate(-7 100 118)" />
      <g transform="rotate(5 180 110)">
        <rect x="120" y="50" width="120" height="120" rx="10" fill="#fff" stroke="var(--paper-d)" />
        <rect x="120" y="50" width="120" height="40" rx="10" fill="var(--pigment)" />
        <rect x="120" y="78" width="120" height="12" fill="var(--pigment)" />
        <circle cx="140" cy="70" r="9" fill="#fff" opacity="0.85" />
        <rect x="156" y="62" width="50" height="6" rx="3" fill="#fff" opacity="0.8" />
        <rect x="156" y="73" width="34" height="5" rx="2.5" fill="#fff" opacity="0.55" />
        <rect x="136" y="104" width="88" height="7" rx="3.5" fill="var(--wash)" />
        <rect x="136" y="118" width="88" height="7" rx="3.5" fill="var(--wash)" />
        <rect x="136" y="132" width="60" height="7" rx="3.5" fill="var(--wash)" />
        <rect x="136" y="150" width="40" height="12" rx="6" fill="var(--accent)" />
      </g>
      {/* SNS 하트/말풍선 강조 */}
      <g transform="translate(250,140)">
        <circle r="20" fill="var(--accent)" />
        <path d="M0 6 C-9 -3 -14 -8 -7 -12 C-3 -14 0 -10 0 -8 C0 -10 3 -14 7 -12 C14 -8 9 -3 0 6 Z" fill="#fff" />
      </g>
    </>
  )
}

// M4 — 홍보 시각자료: 이미지 프레임 + 해 + 언덕 + 반짝임
function ArtVisual() {
  return (
    <>
      <Grid />
      <rect x="56" y="36" width="208" height="128" rx="12" fill="#fff" stroke="var(--paper-d)" />
      <clipPath id="vclip"><rect x="64" y="44" width="192" height="112" rx="8" /></clipPath>
      <g clipPath="url(#vclip)">
        <rect x="64" y="44" width="192" height="112" fill="color-mix(in srgb, var(--pigment) 18%, #fff)" />
        <circle cx="210" cy="80" r="20" fill="var(--accent)" />
        <path d="M64 130 q40 -34 78 -10 q34 22 70 -6 q24 -18 44 -4 v46 h-192 z" fill="var(--pigment)" />
        <path d="M64 142 q50 -22 96 0 q44 20 96 -4 v22 h-192 z" fill="var(--ink)" opacity="0.85" />
      </g>
      {/* 반짝임 */}
      <g fill="var(--accent)">
        <path d="M120 60 l3 7 l7 3 l-7 3 l-3 7 l-3 -7 l-7 -3 l7 -3 z" />
        <path d="M250 130 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 l5 -2 z" opacity="0.8" />
      </g>
    </>
  )
}

// M5 — UI 시안(와이어프레임): 회색 블록 위주의 시안
function ArtWireframe() {
  return (
    <>
      <Grid />
      <rect x="78" y="26" width="164" height="148" rx="12" fill="#fff" stroke="var(--pigment)" strokeWidth="1.5" strokeDasharray="5 4" />
      <rect x="94" y="42" width="44" height="10" rx="5" fill="var(--wash)" />
      <circle cx="222" cy="47" r="6" fill="var(--wash)" />
      <rect x="94" y="64" width="132" height="40" rx="8" fill="color-mix(in srgb, var(--pigment) 10%, #fff)" stroke="var(--paper-d)" />
      <path d="M150 92 l10 -14 l10 14 z M168 92 l8 -10 l8 10 z" fill="var(--wash)" />
      <circle cx="138" cy="78" r="6" fill="var(--wash)" />
      <rect x="94" y="116" width="62" height="46" rx="8" fill="var(--wash)" />
      <rect x="164" y="116" width="62" height="46" rx="8" fill="var(--wash)" />
      <rect x="104" y="126" width="42" height="6" rx="3" fill="#fff" />
      <rect x="174" y="126" width="42" height="6" rx="3" fill="#fff" />
    </>
  )
}

// M6 — 홍보 페이지(랜딩): 브라우저 창 + 히어로 + 섹션 + CTA
function ArtPage() {
  return (
    <>
      <Grid />
      <rect x="48" y="28" width="224" height="148" rx="12" fill="#fff" stroke="var(--paper-d)" />
      <rect x="48" y="28" width="224" height="24" rx="12" fill="var(--ink)" />
      <rect x="48" y="44" width="224" height="8" fill="var(--ink)" />
      <circle cx="64" cy="40" r="3.5" fill="var(--accent)" />
      <circle cx="76" cy="40" r="3.5" fill="#fff" opacity="0.5" />
      <circle cx="88" cy="40" r="3.5" fill="#fff" opacity="0.5" />
      {/* 히어로 */}
      <rect x="48" y="52" width="224" height="62" fill="color-mix(in srgb, var(--pigment) 16%, #fff)" />
      <rect x="68" y="68" width="96" height="11" rx="5" fill="var(--ink)" />
      <rect x="68" y="86" width="120" height="7" rx="3.5" fill="var(--pigment)" opacity="0.5" />
      <rect x="68" y="98" width="52" height="14" rx="7" fill="var(--accent)" />
      <circle cx="226" cy="83" r="22" fill="var(--pigment)" opacity="0.8" />
      {/* 섹션 카드 3 */}
      {[60, 130, 200].map((x) => (
        <g key={x}>
          <rect x={x} y="126" width="60" height="42" rx="7" fill="#fff" stroke="var(--paper-d)" />
          <circle cx={x + 16} cy="140" r="7" fill="var(--wash)" />
          <rect x={x + 30} y="136" width="22" height="5" rx="2.5" fill="var(--wash)" />
          <rect x={x + 10} y="152" width="40" height="5" rx="2.5" fill="var(--wash)" />
        </g>
      ))}
    </>
  )
}

// M7 — 자동화 루틴: 노드 흐름 + 톱니
function ArtAutomation() {
  const gear = (cx, cy, r, fill) => {
    const teeth = Array.from({ length: 8 }, (_, i) => {
      const a = (i * Math.PI) / 4
      const x = cx + Math.cos(a) * (r + 5)
      const y = cy + Math.sin(a) * (r + 5)
      return <rect key={i} x={x - 3} y={y - 3} width="6" height="6" rx="1.5" fill={fill} transform={`rotate(${(a * 180) / Math.PI} ${x} ${y})`} />
    })
    return <g>{teeth}<circle cx={cx} cy={cy} r={r} fill={fill} /><circle cx={cx} cy={cy} r={r * 0.42} fill="#fff" /></g>
  }
  const node = (x, y, fill) => (
    <g>
      <rect x={x} y={y} width="48" height="34" rx="9" fill="#fff" stroke="var(--paper-d)" />
      <rect x={x + 9} y={y + 10} width="14" height="14" rx="4" fill={fill} />
      <rect x={x + 28} y={y + 12} width="12" height="4" rx="2" fill="var(--wash)" />
      <rect x={x + 28} y={y + 20} width="9" height="4" rx="2" fill="var(--wash)" />
    </g>
  )
  return (
    <>
      <Grid />
      <path d="M78 67 H150" stroke="var(--pigment)" strokeWidth="2.5" strokeDasharray="4 4" />
      <path d="M150 67 q24 0 24 33 t24 33" fill="none" stroke="var(--pigment)" strokeWidth="2.5" strokeDasharray="4 4" />
      <path d="M150 133 H132" stroke="var(--pigment)" strokeWidth="2.5" strokeDasharray="4 4" />
      {node(40, 50, 'var(--pigment)')}
      {node(150, 50, 'var(--accent)')}
      {node(84, 116, 'var(--pigment)')}
      {gear(232, 138, 22, 'var(--pigment)')}
      {gear(264, 116, 14, 'var(--accent)')}
      {/* 흐름 화살표 */}
      <path d="M124 67 l-9 -4 v8 z" fill="var(--pigment)" />
    </>
  )
}

const ART = {
  g1: ArtDiagnose, g2: ArtPlan, g3: ArtContent, g4: ArtVisual,
  g5: ArtWireframe, g6: ArtPage, g7: ArtAutomation,
}

export default function GalleryArt({ id }) {
  const Art = ART[id]
  if (!Art) return null
  return (
    <svg className="gallery-card__art" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid meet" role="img" aria-hidden>
      <Art />
    </svg>
  )
}
