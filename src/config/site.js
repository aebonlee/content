// =========================================================================
// 사이트 설정 — contents (AI로 만드는 홍보 실무)
// 과정: [인재키움] AI로 만드는 홍보 실무 — 콘텐츠·이미지·페이지까지 자동화 완성
// 형태: 오프라인 집합교육(1일 워크숍). 이 사이트는 그 "대면 강의 학습자료".
// 아이콘은 Font Awesome 클래스 문자열로 관리한다.
// =========================================================================

export const site = {
  brand: 'AI 홍보 스튜디오',
  tagline: '콘텐츠·이미지·페이지까지, AI로 한 번에',
  description:
    '하루 만에 끝내는 AI 홍보 실무 집합 워크숍. 카피·SNS·생성형 이미지·랜딩페이지까지 강사와 마주 앉아 직접 만드는 8시간 대면 과정의 학습자료.',
  url: import.meta.env.VITE_SITE_URL || 'https://contents.dreamitbiz.com',
  contact: 'hello@dreamitbiz.com',
}

// 과정 메타 (휴넷 인재키움 — 오프라인 집합교육)
export const course = {
  fullTitle: 'AI로 만드는 홍보 실무 — 콘텐츠·이미지·페이지까지 자동화 완성',
  type: '인재키움 프리미엄 · 단과(초급)',
  format: '오프라인 집합교육 · 1일 워크숍',
  hours: 8,
  schedule: {
    online: '2026.06.26 — 사전 온라인 학습',
    offline: '2026.09.30(금) 09:00–18:00 — 집합 교육',
    place: '휴넷캠퍼스 비전룸',
    lunch: '11:50–13:00 점심',
    note: '오프라인 필수 참석(출석 80% 이상) · 선착순 30명',
  },
  // 50분 단위 8교시 시간표 (교시 사이 10분 휴식, 점심 11:50–13:00)
  periods: [
    { label: '1교시', time: '09:00–09:50', part: 1 },
    { label: '2교시', time: '10:00–10:50', part: 2 },
    { label: '3교시', time: '11:00–11:50', part: 2 },
    { label: '점심', time: '11:50–13:00', lunch: true },
    { label: '4교시', time: '13:00–13:50', part: 3 },
    { label: '5교시', time: '14:00–14:50', part: 3 },
    { label: '6교시', time: '15:00–15:50', part: 4 },
    { label: '7교시', time: '16:00–16:50', part: 4 },
    { label: '8교시', time: '17:00–17:50', part: 4 },
  ],
  badges: ['초급', '8시간', '대면 워크숍', '실습 100%'],
  // 준비물 — 대면 워크숍 참석자 안내
  bring: [
    { icon: 'fa-solid fa-laptop', label: '노트북', desc: '실습은 본인 노트북으로 진행합니다.' },
    { icon: 'fa-solid fa-plug', label: '충전기', desc: '하루 종일 사용하니 어댑터를 챙기세요.' },
    { icon: 'fa-solid fa-key', label: 'AI 도구 계정', desc: 'ChatGPT 등 사전에 로그인해 두면 좋습니다.' },
    { icon: 'fa-solid fa-box-archive', label: '홍보 소재', desc: '실제 제품·서비스 정보를 가져오면 결과물이 살아납니다.' },
  ],
}

// 홈 히어로
export const hero = {
  eyeline: 'ONE-DAY WORKSHOP · AI MARKETING',
  title: ['하루 만에 짓는,', 'AI 홍보 실무'],
  highlight: '하루',           // 형광펜이 그어질 단어
  body:
    '강사와 마주 앉아 직접 만듭니다. 카피 한 줄부터 이미지, 랜딩페이지까지 — 8시간 집합 워크숍에서 내 손으로 완성하는 홍보 자동화. 이 사이트는 그 학습자료입니다.',
  ctaPrimary: { label: '학습자료 열기', to: '/curriculum' },
  ctaGhost: { label: '도장깨기', to: '/stamps' },
}

// 사이트가 약속하는 가치 (3개 절제)
export const features = [
  { icon: 'fa-solid fa-pen-nib', title: '콘텐츠 자동화', body: '카피·SNS·보도자료를 AI로. 톤은 유지하고 분량은 늘립니다.' },
  { icon: 'fa-solid fa-palette', title: '이미지 자동화', body: '브랜드 무드 이미지·카드뉴스·썸네일을 프롬프트 한 줄로.' },
  { icon: 'fa-solid fa-window-maximize', title: '페이지 자동화', body: '노코드로 홍보 페이지를 만들고, 콘텐츠를 한 번에 연결해 배포합니다.' },
]

// =========================================================================
// 커리큘럼 — 1일(09:00–18:00) 4교시 / 15세션. 각 세션은 대면 학습자료를 가진다.
// 휴넷 상세 차시는 비공개 영역이라 과정명 기준으로 설계.
// 각 lesson: objectives(학습목표) · keypoints(핵심개념) · practice(대면 실습) · tools(도구)
// =========================================================================
export const modules = [
  {
    id: 'm1', no: 1, period: '1교시', time: '09:00–09:50', title: 'AI 홍보 실무 시작하기',
    summary: '왜 지금 AI 홍보 자동화인가. 도구 지도를 그리고 프롬프트 기본기를 잡습니다.',
    lessons: [
      {
        id: 'l1-1', title: '홍보 업무는 어떻게 바뀌는가', minutes: 25,
        objectives: ['AI 도입 전후 홍보 업무 흐름의 차이를 설명할 수 있다.'],
        keypoints: ['반복 작업과 창의 작업의 분리', 'AI는 초안 생성기 — 최종 판단은 사람', '시간 절약 지점 찾기'],
        practice: '내 홍보 업무 중 "매번 반복되는 일" 3가지를 포스트잇에 적어 벽에 붙이고 공유합니다.',
        tools: ['포스트잇', '화이트보드'],
      },
      {
        id: 'l1-2', title: '실무에 쓰는 AI 도구 지도', minutes: 30,
        objectives: ['콘텐츠·이미지·페이지 단계별 대표 도구를 구분할 수 있다.'],
        keypoints: ['글: ChatGPT·Claude', '이미지: Midjourney·DALL·E·ImageFX', '페이지: Framer·Genspark·Canva'],
        practice: '오늘 쓸 도구에 모두 로그인하고, 무료/유료 한도를 표에 정리합니다.',
        tools: ['ChatGPT', 'Claude', 'ImageFX'],
      },
      {
        id: 'l1-3', title: '타깃·톤 정의와 프롬프트 기본기', minutes: 25,
        objectives: ['좋은 프롬프트의 4요소(역할·맥락·작업·형식)를 적용할 수 있다.'],
        keypoints: ['누구에게/무엇을/왜', '톤앤매너 키워드 고정', '예시(few-shot)의 힘'],
        practice: '내 브랜드의 타깃과 톤을 한 문장으로 정의합니다. → 도장깨기 미션 01',
        tools: ['ChatGPT'],
      },
    ],
  },
  {
    id: 'm2', no: 2, period: '2–3교시', time: '10:00–11:50', title: 'AI 콘텐츠 자동화',
    summary: '카피·SNS 캡션·보도자료를 AI로. 같은 메시지를 톤 유지한 채 변주합니다.',
    lessons: [
      {
        id: 'l2-1', title: '한 줄 카피 10종 뽑기', minutes: 25,
        objectives: ['하나의 제품으로 톤이 다른 헤드라인을 대량 생성할 수 있다.'],
        keypoints: ['감성형·정보형·도발형 톤 지정', '글자 수 제약 주기', '베스트 3 고르는 기준'],
        practice: '내 제품으로 카피 10개를 뽑고, 옆 사람과 베스트 3을 교차 평가합니다. → 미션 02',
        tools: ['ChatGPT', 'Claude'],
      },
      {
        id: 'l2-2', title: 'SNS 캡션 + 해시태그 자동 생성', minutes: 25,
        objectives: ['플랫폼 규격에 맞는 캡션과 해시태그 세트를 만들 수 있다.'],
        keypoints: ['플랫폼별 길이·말투', '대형/중형/롱테일 해시태그 믹스', '이모지 대신 명료함'],
        practice: '인스타그램용 캡션 1개 + 해시태그 10개를 생성합니다. → 미션 03',
        tools: ['ChatGPT'],
      },
      {
        id: 'l2-3', title: '블로그·보도자료 초안 자동화', minutes: 25,
        objectives: ['제목·리드·본문·인용 구조의 초안을 자동 생성할 수 있다.'],
        keypoints: ['역피라미드 구조', '사실/주장 분리', '인용문 자리 비워두기'],
        practice: '우리 회사 소식으로 보도자료 1편 초안을 생성합니다. → 미션 04',
        tools: ['Claude'],
      },
      {
        id: 'l2-4', title: '톤앤매너 유지하며 대량 변주', minutes: 15,
        objectives: ['같은 메시지를 채널별로 일관된 톤으로 변주할 수 있다.'],
        keypoints: ['스타일 가이드를 프롬프트에 고정', '재사용 템플릿 만들기', '검수 체크리스트'],
        practice: '앞서 만든 카피를 블로그·문자·포스터 버전으로 변주합니다.',
        tools: ['ChatGPT', 'Claude'],
      },
    ],
  },
  {
    id: 'm3', no: 3, period: '4–5교시', time: '13:00–14:50', title: 'AI 이미지 자동화',
    summary: '생성형 이미지 도구로 브랜드 무드·카드뉴스·썸네일·배너를 만듭니다.',
    lessons: [
      {
        id: 'l3-1', title: '생성형 이미지 도구 한눈에', minutes: 20,
        objectives: ['용도별로 어떤 이미지 도구를 쓸지 판단할 수 있다.'],
        keypoints: ['무료/유료·상업적 이용 범위', '한글 프롬프트 vs 영어 프롬프트', '저작권·초상권 주의'],
        practice: '오늘 쓸 이미지 도구 1개를 정하고 첫 이미지를 테스트로 만들어 봅니다.',
        tools: ['ImageFX', 'DALL·E'],
      },
      {
        id: 'l3-2', title: '브랜드 무드 이미지 만들기', minutes: 30,
        objectives: ['색·질감·구도·금지요소를 명시해 의도한 비주얼을 얻을 수 있다.'],
        keypoints: ['프롬프트 구조: 피사체+스타일+조명+색', '--no 로 금지요소 빼기', '시드 고정으로 일관성'],
        practice: '브랜드 무드를 담은 이미지 1장을 완성합니다. → 미션 05',
        tools: ['Midjourney', 'ImageFX'],
      },
      {
        id: 'l3-3', title: '카드뉴스·썸네일·배너 제작', minutes: 30,
        objectives: ['동일 톤으로 이어지는 비주얼 세트를 만들 수 있다.'],
        keypoints: ['같은 스타일 키워드 재사용', '채널별 규격(1:1·16:9)', '텍스트는 편집 도구에서 얹기'],
        practice: '카드뉴스 또는 썸네일 1세트(2~3장)를 만듭니다. → 미션 06',
        tools: ['Canva AI', 'DALL·E'],
      },
      {
        id: 'l3-4', title: '보정·확장·배경 제거 자동화', minutes: 20,
        objectives: ['생성 이미지를 실무 규격으로 후처리할 수 있다.'],
        keypoints: ['배경 제거·확장(outpaint)', '업스케일', '브랜드 컬러 보정'],
        practice: '만든 이미지의 배경을 제거하고 채널 규격으로 확장합니다.',
        tools: ['Canva AI'],
      },
    ],
  },
  {
    id: 'm4', no: 4, period: '6–8교시', time: '15:00–17:50', title: '페이지 & 워크플로 자동화 완성',
    summary: '노코드로 홍보 페이지를 만들고, 콘텐츠→이미지→페이지를 하나로 잇습니다.',
    lessons: [
      {
        id: 'l4-1', title: '노코드로 랜딩·홍보 페이지 생성', minutes: 35,
        objectives: ['노코드 도구로 홍보 랜딩페이지를 만들 수 있다.'],
        keypoints: ['프롬프트로 페이지 생성', '섹션 구조(히어로·특징·CTA)', '모바일 미리보기'],
        practice: '앞서 만든 카피·이미지를 채워 랜딩페이지 1개를 만듭니다. → 미션 07',
        tools: ['Framer', 'Genspark'],
      },
      {
        id: 'l4-2', title: '콘텐츠를 페이지로 한 번에 연결', minutes: 30,
        objectives: ['만든 콘텐츠·이미지를 페이지에 일관되게 배치할 수 있다.'],
        keypoints: ['톤 일치 점검', '링크·연락처·폼 연결', '공개 URL 발급'],
        practice: '페이지를 공개하고 URL을 옆 사람에게 공유해 첫 피드백을 받습니다.',
        tools: ['Framer', 'Carrd'],
      },
      {
        id: 'l4-3', title: '홍보 자동화 워크플로 설계', minutes: 35,
        objectives: ['반복 홍보 업무를 단계로 쪼개 자동화 흐름을 설계할 수 있다.'],
        keypoints: ['트리거→생성→검수→발행', '사람 검수 지점 정하기', '노코드 자동화 도구 개요'],
        practice: '내 업무 1개를 콘텐츠→이미지→페이지 흐름으로 그립니다. → 미션 08',
        tools: ['Make', 'Zapier'],
      },
      {
        id: 'l4-4', title: '나만의 홍보 자동화 루틴 완성', minutes: 30,
        objectives: ['오늘 만든 결과물을 내 실무 루틴으로 정리할 수 있다.'],
        keypoints: ['재사용 프롬프트 모음', '체크리스트화', '다음 주에 바로 쓸 1가지'],
        practice: '오늘의 결과물을 갤러리처럼 정리하고, 현업 적용 계획 1줄을 발표합니다.',
        tools: ['노션', '구글 문서'],
      },
    ],
  },
]

// =========================================================================
// 도장깨기 — 대면 워크숍에서 "직접 만들어 보는" 8개 미션.
// 각 미션을 완료하면 도장을 찍는다(로컬 저장, 로그인 불필요).
// =========================================================================
export const stamps = [
  { id: 's1', no: 1, icon: 'fa-solid fa-bullseye', module: 1, title: '타깃 한 줄 정의',
    mission: '우리 브랜드/제품의 타깃과 핵심 메시지를 한 문장으로 정리한다.',
    tip: '“누구에게 / 무엇을 / 왜”를 한 줄에 — 프롬프트의 출발점.' },
  { id: 's2', no: 2, icon: 'fa-solid fa-pen-fancy', module: 2, title: 'AI 카피 3종',
    mission: '같은 제품으로 톤이 다른 헤드라인 카피 3개를 만든다.',
    tip: '감성형·정보형·도발형 — 세 가지 톤을 지정해 비교한다.' },
  { id: 's3', no: 3, icon: 'fa-solid fa-hashtag', module: 2, title: 'SNS 캡션 세트',
    mission: 'SNS 게시물 캡션 1개 + 해시태그 10개를 생성한다.',
    tip: '플랫폼(인스타/스레드)과 글자 수 제한을 함께 알려준다.' },
  { id: 's4', no: 4, icon: 'fa-solid fa-newspaper', module: 2, title: '보도자료 초안',
    mission: '블로그 글 또는 보도자료 1편의 초안을 자동 생성한다.',
    tip: '제목·리드·본문·인용 구조를 먼저 지정하면 완성도가 오른다.' },
  { id: 's5', no: 5, icon: 'fa-solid fa-palette', module: 3, title: '브랜드 이미지',
    mission: '브랜드 무드를 담은 생성형 이미지 1장을 만든다.',
    tip: '색·질감·구도·금지요소를 프롬프트에 명시한다.' },
  { id: 's6', no: 6, icon: 'fa-solid fa-images', module: 3, title: '카드뉴스 1세트',
    mission: '카드뉴스 또는 썸네일 비주얼 1세트를 제작한다.',
    tip: '동일 톤을 유지하려면 같은 스타일 키워드를 재사용한다.' },
  { id: 's7', no: 7, icon: 'fa-solid fa-rocket', module: 4, title: '랜딩페이지 배포',
    mission: '노코드 도구로 홍보 랜딩페이지 1개를 만들어 공개한다.',
    tip: '앞서 만든 카피와 이미지를 그대로 가져와 채운다.' },
  { id: 's8', no: 8, icon: 'fa-solid fa-gears', module: 4, title: '자동화 루틴',
    mission: '콘텐츠→이미지→페이지로 이어지는 나만의 워크플로를 정리한다.',
    tip: '반복되는 홍보 업무 한 가지를 골라 단계로 쪼갠다.' },
]

// =========================================================================
// 갤러리 — 대면 워크숍에서 만들어 내는 결과물의 예시 쇼케이스.
// 카테고리: content / image / page · icon 은 Font Awesome 클래스.
// =========================================================================
export const galleryCategories = [
  { key: 'all', label: '전체' },
  { key: 'content', label: '콘텐츠' },
  { key: 'image', label: '이미지' },
  { key: 'page', label: '페이지' },
]

export const gallery = [
  { id: 'g1', cat: 'content', icon: 'fa-solid fa-pen-fancy', title: '광고 헤드라인 10종',
    desc: '하나의 제품을 톤별로 변주한 카피 모음.', tool: 'ChatGPT · Claude', stamp: 's2' },
  { id: 'g2', cat: 'content', icon: 'fa-solid fa-hashtag', title: 'SNS 캡션 & 해시태그',
    desc: '플랫폼 맞춤 캡션과 해시태그 세트.', tool: 'ChatGPT', stamp: 's3' },
  { id: 'g3', cat: 'content', icon: 'fa-solid fa-newspaper', title: '보도자료 초안',
    desc: '제목·리드·본문 구조를 갖춘 초안.', tool: 'Claude', stamp: 's4' },
  { id: 'g4', cat: 'image', icon: 'fa-solid fa-palette', title: '브랜드 무드 이미지',
    desc: '색·질감·구도를 지정해 만든 비주얼.', tool: 'Midjourney · ImageFX', stamp: 's5' },
  { id: 'g5', cat: 'image', icon: 'fa-solid fa-images', title: '카드뉴스 세트',
    desc: '동일 톤으로 이어지는 카드 시리즈.', tool: 'DALL·E · Canva AI', stamp: 's6' },
  { id: 'g6', cat: 'image', icon: 'fa-solid fa-wand-magic-sparkles', title: '썸네일·배너',
    desc: '채널 규격에 맞춘 홍보 비주얼.', tool: 'ImageFX', stamp: 's6' },
  { id: 'g7', cat: 'page', icon: 'fa-solid fa-rocket', title: '제품 랜딩페이지',
    desc: '카피와 이미지를 채운 홍보 페이지.', tool: 'Framer · Genspark', stamp: 's7' },
  { id: 'g8', cat: 'page', icon: 'fa-solid fa-link', title: '원페이지 프로모션',
    desc: '이벤트/캠페인용 단일 페이지.', tool: 'Notion · Carrd', stamp: 's7' },
  { id: 'g9', cat: 'page', icon: 'fa-solid fa-diagram-project', title: '홍보 자동화 워크플로',
    desc: '콘텐츠→이미지→페이지 연결 루틴.', tool: 'Make · Zapier', stamp: 's8' },
]

// =========================================================================
// 상단 네비게이션 — About / 커리큘럼 / 학습강의안 / 갤러리 / 도장깨기 / 커뮤니티
// =========================================================================
export const nav = [
  { label: 'About', to: '/about' },
  { label: '커리큘럼', to: '/curriculum' },
  { label: '학습강의안', to: '/lecture' },
  { label: '갤러리', to: '/gallery' },
  { label: '도장깨기', to: '/stamps' },
  { label: '커뮤니티', to: '/community' },
]

// =========================================================================
// About — 과정 소개
// =========================================================================
export const about = {
  lead: 'AI로 홍보 실무 전 과정을 자동화한다. 듣기만 하는 강의가 아니라, 강사와 마주 앉아 내 손으로 결과물을 만드는 하루짜리 집합 워크숍입니다.',
  intro:
    '카피 한 줄을 다듬는 데 한나절, 이미지 한 장을 받는 데 며칠. 홍보 담당자의 시간은 늘 부족합니다. 이 과정은 반복되는 홍보 업무를 AI 도구로 자동화하는 법을 콘텐츠 → 이미지 → 페이지 순서로 직접 만들며 익힙니다. 하루가 끝나면 "오늘 만든 결과물"과 "내일 바로 쓸 자동화 루틴"이 손에 남습니다.',
  outcomes: [
    '톤이 다른 광고 카피를 한 번에 여러 개 뽑아낼 수 있다.',
    'SNS 캡션·해시태그·보도자료 초안을 AI로 자동 생성할 수 있다.',
    '브랜드 무드에 맞는 이미지·카드뉴스·썸네일을 만들 수 있다.',
    '노코드로 홍보 랜딩페이지를 만들어 공개할 수 있다.',
    '콘텐츠→이미지→페이지로 이어지는 나만의 자동화 루틴을 설계할 수 있다.',
  ],
  audience: [
    '홍보·마케팅 실무를 맡고 있는 중소기업 재직자',
    'AI 도구를 써보고 싶지만 어디서 시작할지 막막한 분',
    '혼자 콘텐츠·이미지·페이지를 모두 챙겨야 하는 1인 담당자',
  ],
}

// =========================================================================
// 커뮤니티 — 정적 사이트이므로 외부 채널 안내 + FAQ 중심
// =========================================================================
export const community = {
  lead: '워크숍은 하루지만, 배움은 이어집니다. 만든 결과물을 나누고, 막히는 부분을 함께 풉니다.',
  channels: [
    { icon: 'fa-solid fa-comments', label: '오픈 채팅', desc: '실습 중 막힌 부분을 바로 묻고 답하는 실시간 채널.', cta: '참여 안내' },
    { icon: 'fa-solid fa-share-nodes', label: '결과물 공유', desc: '오늘 만든 카피·이미지·페이지를 서로 보여주고 피드백.', cta: '갤러리 보기', to: '/gallery' },
    { icon: 'fa-solid fa-folder-open', label: '자료실', desc: '재사용 프롬프트·도구 링크·치트시트 모음.', cta: '학습강의안', to: '/lecture' },
  ],
  faq: [
    { q: '비전공자도 따라갈 수 있나요?', a: '네. 초급 과정으로, 코딩 없이 노코드·생성형 AI 도구만 사용합니다. 처음부터 함께 만들어 갑니다.' },
    { q: '어떤 AI 도구를 쓰나요?', a: 'ChatGPT·Claude(글), Midjourney·DALL·E·ImageFX(이미지), Framer·Canva(페이지) 등을 용도별로 다룹니다. 무료 도구 위주로 진행합니다.' },
    { q: '준비물이 있나요?', a: '노트북·충전기, 그리고 실제 홍보할 제품/서비스 정보를 가져오면 결과물이 훨씬 좋아집니다. About 페이지의 준비물을 참고하세요.' },
    { q: '결과물은 실무에 바로 쓸 수 있나요?', a: '네. 본인 제품·브랜드로 실습하므로, 워크숍이 끝나면 실제 카피·이미지·랜딩페이지가 남습니다.' },
  ],
}

export const footerLinks = [
  { label: 'About', to: '/about' },
  { label: '커리큘럼', to: '/curriculum' },
  { label: '학습강의안', to: '/lecture' },
  { label: '갤러리', to: '/gallery' },
  { label: '도장깨기', to: '/stamps' },
  { label: '커뮤니티', to: '/community' },
]
