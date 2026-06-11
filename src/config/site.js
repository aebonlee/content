// =========================================================================
// 사이트 설정 — content (AI로 만드는 홍보 실무)
// 과정: [인재키움] AI로 만드는 홍보 실무 — 콘텐츠·이미지·페이지까지 자동화 완성
// 아트디렉션(색·서체·시그니처)은 styles/tokens.css 에서 관리.
// =========================================================================

export const site = {
  brand: 'AI 홍보 스튜디오',
  tagline: '콘텐츠·이미지·페이지까지, AI로 한 번에',
  description:
    'AI로 홍보 실무를 자동화한다. 카피·SNS 콘텐츠부터 생성형 이미지, 랜딩페이지 제작까지 — 직접 만들며 익히는 8시간 실습 과정.',
  url: import.meta.env.VITE_SITE_URL || 'https://content.dreamitbiz.com',
  contact: 'hello@dreamitbiz.com',
}

// 과정 메타 (휴넷 인재키움 과정 정보)
export const course = {
  fullTitle: 'AI로 만드는 홍보 실무 — 콘텐츠·이미지·페이지까지 자동화 완성',
  type: '인재키움 프리미엄 · 단과(초급)',
  hours: 8,
  badges: ['초급', '8시간', '실습형', 'AI 홍보 자동화'],
}

// 홈 히어로
export const hero = {
  eyeline: 'AI · MARKETING · AUTOMATION',
  title: ['손이 가던 홍보를,', 'AI가 대신 짓는다'],
  highlight: 'AI가',           // 형광펜이 그어질 단어
  body:
    '카피 한 줄부터 이미지, 랜딩페이지까지. AI 도구로 홍보 실무 전 과정을 직접 만들어 보며, 나만의 자동화 루틴을 완성합니다.',
  ctaPrimary: { label: '도장깨기 시작', to: '/stamps' },
  ctaGhost: { label: '커리큘럼 보기', to: '/curriculum' },
}

// 사이트가 약속하는 가치 (3개 절제)
export const features = [
  { icon: '✍', title: '콘텐츠 자동화', body: '카피·SNS·보도자료를 AI로. 톤은 유지하고 분량은 늘립니다.' },
  { icon: '◑', title: '이미지 자동화', body: '브랜드 무드 이미지·카드뉴스·썸네일을 프롬프트 한 줄로.' },
  { icon: '↗', title: '페이지 자동화', body: '노코드로 홍보 페이지를 만들고, 콘텐츠를 한 번에 연결해 배포합니다.' },
]

// =========================================================================
// 커리큘럼 — 4개 모듈 / 15개 레슨 (8시간)
// 휴넷 과정 상세 차시는 비공개 영역이라, 과정명을 기준으로 설계한 구성.
// 실제 강의 영상이 준비되면 videoId 만 교체하면 됩니다.
// videoId: 유튜브 영상 ID. 데모는 공개도메인 Big Buck Bunny 사용.
// =========================================================================
const DEMO_VID = 'aqz-KE-bpKQ'
export const modules = [
  {
    id: 'm1', no: 1, title: 'AI 홍보 실무 시작하기',
    summary: '왜 지금 AI 홍보 자동화인가. 도구 지도를 그리고 프롬프트 기본기를 잡습니다.',
    lessons: [
      { id: 'l1-1', title: '홍보 업무는 어떻게 바뀌는가', minutes: 18, free: true, videoId: DEMO_VID },
      { id: 'l1-2', title: '실무에 쓰는 AI 도구 지도', minutes: 22, free: true, videoId: DEMO_VID },
      { id: 'l1-3', title: '타깃·톤 정의와 프롬프트 기본기', minutes: 20, free: true, videoId: DEMO_VID },
    ],
  },
  {
    id: 'm2', no: 2, title: 'AI 콘텐츠 자동화',
    summary: '카피·SNS 캡션·보도자료를 AI로. 같은 메시지를 톤 유지한 채 변주합니다.',
    lessons: [
      { id: 'l2-1', title: '한 줄 카피 10종 뽑기', minutes: 24, free: true, videoId: DEMO_VID },
      { id: 'l2-2', title: 'SNS 캡션 + 해시태그 자동 생성', minutes: 22, free: true, videoId: DEMO_VID },
      { id: 'l2-3', title: '블로그·보도자료 초안 자동화', minutes: 26, free: true, videoId: DEMO_VID },
      { id: 'l2-4', title: '톤앤매너 유지하며 대량 변주', minutes: 20, free: true, videoId: DEMO_VID },
    ],
  },
  {
    id: 'm3', no: 3, title: 'AI 이미지 자동화',
    summary: '생성형 이미지 도구로 브랜드 무드·카드뉴스·썸네일·배너를 만듭니다.',
    lessons: [
      { id: 'l3-1', title: '생성형 이미지 도구 한눈에', minutes: 18, free: true, videoId: DEMO_VID },
      { id: 'l3-2', title: '브랜드 무드 이미지 만들기', minutes: 26, free: true, videoId: DEMO_VID },
      { id: 'l3-3', title: '카드뉴스·썸네일·배너 제작', minutes: 24, free: true, videoId: DEMO_VID },
      { id: 'l3-4', title: '보정·확장·배경 제거 자동화', minutes: 20, free: true, videoId: DEMO_VID },
    ],
  },
  {
    id: 'm4', no: 4, title: '페이지 & 워크플로 자동화 완성',
    summary: '노코드로 홍보 페이지를 만들고, 콘텐츠→이미지→페이지를 하나로 잇습니다.',
    lessons: [
      { id: 'l4-1', title: '노코드로 랜딩·홍보 페이지 생성', minutes: 26, free: true, videoId: DEMO_VID },
      { id: 'l4-2', title: '콘텐츠를 페이지로 한 번에 연결', minutes: 22, free: true, videoId: DEMO_VID },
      { id: 'l4-3', title: '홍보 자동화 워크플로 설계', minutes: 24, free: true, videoId: DEMO_VID },
      { id: 'l4-4', title: '나만의 홍보 자동화 루틴 완성', minutes: 18, free: true, videoId: DEMO_VID },
    ],
  },
]

// =========================================================================
// 도장깨기 — 강의 내용을 "직접 만들어 보는" 8개 미션.
// 각 미션을 완료하면 도장을 찍는다(로컬 저장, 로그인 불필요).
// 강의를 듣고 끝내지 않고, 손으로 결과물을 남기며 내용을 정확히 체화한다.
// =========================================================================
export const stamps = [
  { id: 's1', no: 1, icon: '🎯', module: 1, title: '타깃 한 줄 정의',
    mission: '우리 브랜드/제품의 타깃과 핵심 메시지를 한 문장으로 정리한다.',
    tip: '“누구에게 / 무엇을 / 왜”를 한 줄에 — 프롬프트의 출발점.' },
  { id: 's2', no: 2, icon: '✍️', module: 2, title: 'AI 카피 3종',
    mission: '같은 제품으로 톤이 다른 헤드라인 카피 3개를 만든다.',
    tip: '감성형·정보형·도발형 — 세 가지 톤을 지정해 비교한다.' },
  { id: 's3', no: 3, icon: '📱', module: 2, title: 'SNS 캡션 세트',
    mission: 'SNS 게시물 캡션 1개 + 해시태그 10개를 생성한다.',
    tip: '플랫폼(인스타/스레드)과 글자 수 제한을 함께 알려준다.' },
  { id: 's4', no: 4, icon: '📰', module: 2, title: '보도자료 초안',
    mission: '블로그 글 또는 보도자료 1편의 초안을 자동 생성한다.',
    tip: '제목·리드·본문·인용 구조를 먼저 지정하면 완성도가 오른다.' },
  { id: 's5', no: 5, icon: '🎨', module: 3, title: '브랜드 이미지',
    mission: '브랜드 무드를 담은 생성형 이미지 1장을 만든다.',
    tip: '색·질감·구도·금지요소를 프롬프트에 명시한다.' },
  { id: 's6', no: 6, icon: '🖼️', module: 3, title: '카드뉴스 1세트',
    mission: '카드뉴스 또는 썸네일 비주얼 1세트를 제작한다.',
    tip: '동일 톤을 유지하려면 같은 스타일 키워드를 재사용한다.' },
  { id: 's7', no: 7, icon: '🚀', module: 4, title: '랜딩페이지 배포',
    mission: '노코드 도구로 홍보 랜딩페이지 1개를 만들어 공개한다.',
    tip: '앞서 만든 카피와 이미지를 그대로 가져와 채운다.' },
  { id: 's8', no: 8, icon: '⚙️', module: 4, title: '자동화 루틴',
    mission: '콘텐츠→이미지→페이지로 이어지는 나만의 워크플로를 정리한다.',
    tip: '반복되는 홍보 업무 한 가지를 골라 단계로 쪼갠다.' },
]

// =========================================================================
// 갤러리 — 강의에서 만들어 내는 결과물의 예시 쇼케이스.
// "이걸 만들게 됩니다"를 한눈에. 카테고리: content / image / page
// cover 는 팔레트 색으로 그려지는 플레이스홀더(실제 이미지로 교체 가능).
// =========================================================================
export const galleryCategories = [
  { key: 'all', label: '전체' },
  { key: 'content', label: '콘텐츠' },
  { key: 'image', label: '이미지' },
  { key: 'page', label: '페이지' },
]

export const gallery = [
  { id: 'g1', cat: 'content', emoji: '✍️', title: '광고 헤드라인 10종',
    desc: '하나의 제품을 톤별로 변주한 카피 모음.', tool: 'ChatGPT · Claude', stamp: 's2' },
  { id: 'g2', cat: 'content', emoji: '📱', title: 'SNS 캡션 & 해시태그',
    desc: '플랫폼 맞춤 캡션과 해시태그 세트.', tool: 'ChatGPT', stamp: 's3' },
  { id: 'g3', cat: 'content', emoji: '📰', title: '보도자료 초안',
    desc: '제목·리드·본문 구조를 갖춘 초안.', tool: 'Claude', stamp: 's4' },
  { id: 'g4', cat: 'image', emoji: '🎨', title: '브랜드 무드 이미지',
    desc: '색·질감·구도를 지정해 만든 비주얼.', tool: 'Midjourney · ImageFX', stamp: 's5' },
  { id: 'g5', cat: 'image', emoji: '🖼️', title: '카드뉴스 세트',
    desc: '동일 톤으로 이어지는 카드 시리즈.', tool: 'DALL·E · Canva AI', stamp: 's6' },
  { id: 'g6', cat: 'image', emoji: '🪄', title: '썸네일·배너',
    desc: '채널 규격에 맞춘 홍보 비주얼.', tool: 'ImageFX', stamp: 's6' },
  { id: 'g7', cat: 'page', emoji: '🚀', title: '제품 랜딩페이지',
    desc: '카피와 이미지를 채운 홍보 페이지.', tool: 'Framer · Genspark', stamp: 's7' },
  { id: 'g8', cat: 'page', emoji: '🔗', title: '원페이지 프로모션',
    desc: '이벤트/캠페인용 단일 페이지.', tool: 'Notion · Carrd', stamp: 's7' },
  { id: 'g9', cat: 'page', emoji: '⚙️', title: '홍보 자동화 워크플로',
    desc: '콘텐츠→이미지→페이지 연결 루틴.', tool: 'Make · Zapier', stamp: 's8' },
]

export const footerLinks = [
  { label: '커리큘럼', to: '/curriculum' },
  { label: '도장깨기', to: '/stamps' },
  { label: '갤러리', to: '/gallery' },
]
