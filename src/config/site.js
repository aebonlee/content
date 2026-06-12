// =========================================================================
// 사이트 설정 — contents (AI로 만드는 홍보 실무)
// 과정: [인재키움] AI로 만드는 홍보 실무 — 콘텐츠·이미지·페이지까지 자동화 완성
// 형태: 오프라인 집합교육(1일 워크숍, 8시간). 이 사이트는 그 "대면 강의 학습자료".
// 아이콘은 Font Awesome 클래스 문자열로 관리한다.
// =========================================================================

export const site = {
  brand: 'AI 홍보 스튜디오',
  tagline: '콘텐츠·이미지·페이지까지, AI로 한 번에',
  description:
    '하루 만에 끝내는 AI 홍보 실무 집합 워크숍. 콘텐츠·이미지·페이지부터 반복업무 자동화까지 강사와 마주 앉아 직접 만드는 8시간 대면 과정의 학습자료.',
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
  // M1~M6 = 1~6교시(각 1H), M7 = 7~8교시(2H)
  periods: [
    { label: '1교시', time: '09:00–09:50', part: 1 },
    { label: '2교시', time: '10:00–10:50', part: 2 },
    { label: '3교시', time: '11:00–11:50', part: 3 },
    { label: '점심', time: '11:50–13:00', lunch: true },
    { label: '4교시', time: '13:00–13:50', part: 4 },
    { label: '5교시', time: '14:00–14:50', part: 5 },
    { label: '6교시', time: '15:00–15:50', part: 6 },
    { label: '7교시', time: '16:00–16:50', part: 7 },
    { label: '8교시', time: '17:00–17:50', part: 7 },
  ],
  badges: ['초급', '8시간', '대면 워크숍', '실습 100%'],
  // 준비물 — 대면 워크숍 참석자 안내
  bring: [
    { icon: 'fa-solid fa-laptop', label: '노트북', desc: '실습은 본인 노트북으로 진행합니다.' },
    { icon: 'fa-solid fa-plug', label: '충전기', desc: '하루 종일 사용하니 어댑터를 챙기세요.' },
    { icon: 'fa-solid fa-key', label: 'AI 도구 계정', desc: 'ChatGPT·Google 계정 등 사전에 로그인해 두면 좋습니다.' },
    { icon: 'fa-solid fa-box-archive', label: '홍보 소재', desc: '실제 제품·서비스 정보를 가져오면 결과물이 살아납니다.' },
  ],
}

// 홈 히어로
export const hero = {
  eyeline: 'ONE-DAY WORKSHOP · AI MARKETING',
  title: ['하루 만에 짓는,', 'AI 홍보 실무'],
  highlight: '하루',           // 형광펜이 그어질 단어
  body:
    '강사와 마주 앉아 직접 만듭니다. 홍보 기획·콘텐츠·시각자료·페이지부터 반복업무 자동화까지 — 8시간 집합 워크숍에서 내 손으로 완성하는 홍보 자동화. 이 사이트는 그 학습자료입니다.',
  ctaPrimary: { label: '학습자료 열기', to: '/curriculum' },
  ctaGhost: { label: '도장깨기', to: '/stamps' },
}

// 사이트가 약속하는 가치 (3개 절제)
export const features = [
  { icon: 'fa-solid fa-pen-nib', title: '콘텐츠 자동화', body: '소개문·SNS·블로그·카드뉴스 문안을 AI로. 톤은 유지하고 분량은 늘립니다.' },
  { icon: 'fa-solid fa-palette', title: '시각자료 제작', body: '배너·카드뉴스·썸네일을 이미지 생성 AI로. 문구와 톤을 맞춥니다.' },
  { icon: 'fa-solid fa-window-maximize', title: '페이지 & 자동화', body: 'Google Stitch로 페이지를 기획하고, 반복 홍보업무를 템플릿화합니다.' },
]

// =========================================================================
// 커리큘럼 — 공식 7개 모듈 / 14세션 (1일 8시간, M1~M6 각 1H + M7 2H).
// 50분 단위 8교시에 배치: M1~M6 → 1~6교시, M7 → 7~8교시.
// 각 lesson: objectives(학습목표) · keypoints(핵심개념) · practice(대면 실습) · tools(도구)
// =========================================================================
export const modules = [
  {
    id: 'm1', no: 1, period: '1교시', time: '09:00–09:50', hours: 1,
    title: 'AI 기반 업무효율화의 이해',
    summary: '생성형 AI와 홍보 업무 변화 이해.',
    lessons: [
      {
        id: 'l1-1', title: '생성형 AI의 개념과 홍보 업무의 변화',
        objectives: ['생성형 AI가 홍보 업무를 어떻게 바꾸는지 설명할 수 있다.'],
        keypoints: ['생성형 AI의 기본 개념', '기존 홍보 프로세스의 변화', '반복 업무와 창의 업무의 분리'],
        practice: '내 홍보 업무 중 AI로 바꿀 수 있는 일 3가지를 적어 공유합니다. → 미션 01',
        tools: ['ChatGPT', 'Claude'],
      },
      {
        id: 'l1-2', title: '중소기업 실무 적용 사례와 활용 포인트',
        objectives: ['업무효율화 관점에서 우리 회사의 AI 활용 포인트를 찾을 수 있다.'],
        keypoints: ['중소기업 실무 적용 사례', '업무효율화 관점의 활용 포인트', '비용 대비 효과'],
        practice: '우리 회사에 바로 적용할 수 있는 활용 포인트 1가지를 정리합니다.',
        tools: ['ChatGPT'],
      },
    ],
  },
  {
    id: 'm2', no: 2, period: '2교시', time: '10:00–10:50', hours: 1,
    title: 'AI 기반 홍보 기획 실무',
    summary: '홍보 목적 설정과 프롬프트 작성법.',
    lessons: [
      {
        id: 'l2-1', title: '홍보 목적 정리 → 타깃고객 설정 → 핵심 메시지 도출',
        objectives: ['홍보 목적·타깃·핵심 메시지를 한 문장으로 정리할 수 있다.'],
        keypoints: ['홍보 목적 정의', '타깃고객 페르소나 설정', '핵심 메시지 도출'],
        practice: '내 브랜드의 목적·타깃·핵심 메시지를 한 문장으로 정리합니다. → 미션 02',
        tools: ['ChatGPT', 'Claude'],
      },
      {
        id: 'l2-2', title: '결과 품질을 높이는 프롬프트 작성 원리와 실습',
        objectives: ['좋은 프롬프트의 구성 요소를 적용해 결과 품질을 높일 수 있다.'],
        keypoints: ['역할·맥락·작업·형식 4요소', '예시(few-shot) 제공', '반복 개선'],
        practice: '같은 요청을 막연한 버전과 구체적 버전으로 써서 결과를 비교합니다.',
        tools: ['ChatGPT'],
      },
    ],
  },
  {
    id: 'm3', no: 3, period: '3교시', time: '11:00–11:50', hours: 1,
    title: 'AI 기반 콘텐츠 작성 실습',
    summary: 'SNS·블로그·홍보문 자동화.',
    lessons: [
      {
        id: 'l3-1', title: '제품·서비스 소개문과 홍보 문안 작성',
        objectives: ['제품·서비스 소개문을 톤을 유지하며 작성할 수 있다.'],
        keypoints: ['소개문 구조', '톤앤매너 유지', '길이 조절'],
        practice: '내 제품·서비스 소개문 1편을 AI로 작성합니다. → 미션 03',
        tools: ['ChatGPT', 'Claude'],
      },
      {
        id: 'l3-2', title: 'SNS 게시글·블로그 초안·행사 안내문·카드뉴스 문구',
        objectives: ['채널별 홍보 문안을 한 번에 생성할 수 있다.'],
        keypoints: ['SNS 게시글·해시태그', '블로그 초안', '행사 안내문·카드뉴스 문구'],
        practice: 'SNS 게시글 1개 + 카드뉴스 문구 세트를 생성합니다.',
        tools: ['ChatGPT'],
      },
    ],
  },
  {
    id: 'm4', no: 4, period: '4교시', time: '13:00–13:50', hours: 1,
    title: 'AI 기반 시각자료 제작',
    summary: '이미지 생성 AI를 활용한 홍보물 제작.',
    lessons: [
      {
        id: 'l4-1', title: '배너·카드뉴스·썸네일 등 시각자료 초안 제작',
        objectives: ['이미지 생성 AI로 홍보용 시각자료 초안을 만들 수 있다.'],
        keypoints: ['이미지 프롬프트 구조', '채널 규격(배너·썸네일)', '무료 도구 활용'],
        practice: '배너 또는 썸네일 1종을 제작합니다. → 미션 04',
        tools: ['ImageFX', 'DALL·E', 'Canva AI'],
      },
      {
        id: 'l4-2', title: '이미지와 문구의 일관성 확보 방법',
        objectives: ['이미지와 카피의 톤을 일치시킬 수 있다.'],
        keypoints: ['동일 스타일 키워드 재사용', '컬러·폰트 일관성', '문구는 편집 도구에서 얹기'],
        practice: '앞서 만든 문구와 어울리는 카드뉴스 1세트를 완성합니다.',
        tools: ['Canva AI'],
      },
    ],
  },
  {
    id: 'm5', no: 5, period: '5교시', time: '14:00–14:50', hours: 1,
    title: 'AI 기반 UI 시안 제작',
    summary: 'Google Stitch를 활용한 홍보용 페이지 기획.',
    lessons: [
      {
        id: 'l5-1', title: '자연어 기반 UI 시안 생성 (Google Stitch)',
        objectives: ['자연어 설명으로 홍보용 UI 시안을 생성할 수 있다.'],
        keypoints: ['Google Stitch 개요', '자연어 → UI 시안 생성', '시안 수정·반복'],
        practice: 'Google Stitch로 홍보용 화면 시안 1개를 생성합니다. → 미션 05',
        tools: ['Google Stitch'],
      },
      {
        id: 'l5-2', title: '랜딩페이지·이벤트 페이지 구조 설계',
        objectives: ['홍보 페이지의 화면 구조와 흐름을 설계할 수 있다.'],
        keypoints: ['랜딩·이벤트 페이지 구조', '화면 흐름 설계', '핵심 화면 구성'],
        practice: '내 캠페인용 페이지 구조(와이어프레임)를 시안으로 잡습니다.',
        tools: ['Google Stitch'],
      },
    ],
  },
  {
    id: 'm6', no: 6, period: '6교시', time: '15:00–15:50', hours: 1,
    title: 'AI 기반 페이지 구성 실무',
    summary: '상세페이지 및 홍보페이지 구조 설계.',
    lessons: [
      {
        id: 'l6-1', title: '섹션 구성과 CTA 문구 작성',
        objectives: ['페이지 섹션 구성과 CTA 문구를 설계할 수 있다.'],
        keypoints: ['히어로·특징·후기·CTA 섹션', 'CTA 문구 작성 원리', '설득 흐름'],
        practice: '상세페이지 섹션 구성과 CTA 문구 3종을 작성합니다. → 미션 06',
        tools: ['ChatGPT', 'Google Stitch'],
      },
      {
        id: 'l6-2', title: '사용자 흐름 설계와 서비스 소개형 페이지 구성',
        objectives: ['사용자 흐름에 맞춰 서비스 소개형 페이지를 구성할 수 있다.'],
        keypoints: ['사용자 여정(인지→관심→행동)', '정보 우선순위', '서비스 소개형 구조'],
        practice: '서비스 소개형 페이지 1개를 사용자 흐름에 맞춰 구성합니다.',
        tools: ['Google Stitch', 'Framer'],
      },
    ],
  },
  {
    id: 'm7', no: 7, period: '7–8교시', time: '16:00–17:50', hours: 2,
    title: 'AI 기반 반복업무 자동화',
    summary: '홍보업무 템플릿화·재사용 전략 + 결과물 완성과 피드백.',
    lessons: [
      {
        id: 'l7-1', title: '홍보업무 템플릿화와 재사용 전략',
        objectives: ['반복 홍보업무를 템플릿화하고 실무 적용 프로세스를 설계할 수 있다.'],
        keypoints: ['반복 홍보업무 템플릿화', '콘텐츠 재활용 방법', '실무 적용 프로세스', '개인별 활용 시나리오'],
        practice: '내 반복 홍보업무 1개를 재사용 템플릿으로 만들고 활용 시나리오를 작성합니다. → 미션 07',
        tools: ['ChatGPT', '노션'],
      },
      {
        id: 'l7-2', title: '결과물 완성 및 피드백',
        objectives: ['오늘 만든 결과물을 완성하고 현업 적용 방안을 정리할 수 있다.'],
        keypoints: ['개인·팀별 결과물 완성', '발표 및 피드백', '현업 적용 방안', '실무 활용 체크리스트'],
        practice: '7개 미션 결과물을 모아 발표하고, 실무 활용 체크리스트를 작성합니다.',
        tools: ['노션', '구글 문서'],
      },
    ],
  },
]

// =========================================================================
// 도장깨기 — 7개 모듈 = 7개 미션 (M1~M7 각 1개). 모듈마다 핵심 결과물 1개.
// 각 미션을 완료하면 도장을 찍는다(로컬 저장, 로그인 불필요).
// module: 해당 미션이 속한 모듈 번호.
// =========================================================================
export const stamps = [
  { id: 's1', no: 1, icon: 'fa-solid fa-magnifying-glass-chart', module: 1, title: '반복 업무 찾기',
    mission: '내 홍보 업무 중 AI로 자동화할 반복 업무 3가지를 정리한다.',
    tip: '“매번 똑같이 하는 일”부터 — 자동화 1순위를 고른다.' },
  { id: 's2', no: 2, icon: 'fa-solid fa-bullseye', module: 2, title: '홍보 메시지 정의',
    mission: '홍보 목적·타깃고객·핵심 메시지를 한 문장으로 정리한다.',
    tip: '“누구에게 / 무엇을 / 왜”를 한 줄에 — 모든 프롬프트의 출발점.' },
  { id: 's3', no: 3, icon: 'fa-solid fa-pen-fancy', module: 3, title: '홍보 콘텐츠 작성',
    mission: '제품 소개문 1편 + SNS·카드뉴스 문구 세트를 만든다.',
    tip: '톤앤매너 키워드를 고정하면 채널이 달라도 톤이 유지된다.' },
  { id: 's4', no: 4, icon: 'fa-solid fa-image', module: 4, title: '홍보 시각자료',
    mission: '배너·카드뉴스·썸네일 등 홍보 시각자료 1세트를 제작한다.',
    tip: '문구와 톤을 맞추려면 같은 스타일 키워드를 재사용한다.' },
  { id: 's5', no: 5, icon: 'fa-solid fa-object-group', module: 5, title: 'UI 시안(Stitch)',
    mission: 'Google Stitch로 홍보용 페이지 UI 시안 1개를 생성한다.',
    tip: '원하는 화면을 자연어로 설명하고, 시안을 반복 수정한다.' },
  { id: 's6', no: 6, icon: 'fa-solid fa-window-maximize', module: 6, title: '홍보페이지 구성',
    mission: '상세페이지 섹션 구성과 CTA 문구 3종을 작성한다.',
    tip: '사용자 흐름(인지→관심→행동) 순으로 섹션을 배치한다.' },
  { id: 's7', no: 7, icon: 'fa-solid fa-gears', module: 7, title: '자동화 루틴 완성',
    mission: '반복 홍보업무를 템플릿화해 나만의 자동화 루틴을 정리한다.',
    tip: '오늘 만든 결과물을 재사용 템플릿으로 묶는다.' },
]

// =========================================================================
// 갤러리 — 대면 워크숍에서 만들어 내는 결과물의 예시 쇼케이스.
// 카테고리: content / image / page · icon 은 Font Awesome 클래스.
// =========================================================================
// 7개 모듈 = 7개 결과물 (M1~M7 각 1개). cat 은 커버 색만 결정.
export const gallery = [
  { id: 'g1', module: 1, cat: 'content', icon: 'fa-solid fa-magnifying-glass-chart', title: 'AI 업무 진단표',
    desc: 'AI로 자동화할 반복 홍보업무 목록.', tool: 'ChatGPT', stamp: 's1' },
  { id: 'g2', module: 2, cat: 'content', icon: 'fa-solid fa-bullseye', title: '홍보 기획 한 장',
    desc: '목적·타깃·핵심 메시지 + 프롬프트.', tool: 'ChatGPT · Claude', stamp: 's2' },
  { id: 'g3', module: 3, cat: 'content', icon: 'fa-solid fa-pen-fancy', title: '홍보 콘텐츠 세트',
    desc: '소개문·SNS·블로그·카드뉴스 문구.', tool: 'ChatGPT · Claude', stamp: 's3' },
  { id: 'g4', module: 4, cat: 'image', icon: 'fa-solid fa-image', title: '홍보 시각자료',
    desc: '배너·카드뉴스·썸네일 비주얼.', tool: 'ImageFX · Canva AI', stamp: 's4' },
  { id: 'g5', module: 5, cat: 'page', icon: 'fa-solid fa-object-group', title: 'UI 시안',
    desc: '자연어로 만든 홍보 페이지 시안.', tool: 'Google Stitch', stamp: 's5' },
  { id: 'g6', module: 6, cat: 'page', icon: 'fa-solid fa-window-maximize', title: '홍보 페이지',
    desc: '섹션·CTA를 갖춘 상세·랜딩 페이지.', tool: 'Google Stitch · Framer', stamp: 's6' },
  { id: 'g7', module: 7, cat: 'page', icon: 'fa-solid fa-gears', title: '자동화 루틴',
    desc: '재사용 템플릿으로 묶은 홍보 자동화.', tool: 'Make · 노션', stamp: 's7' },
]

// =========================================================================
// 상단 네비게이션 — About / 커리큘럼 / 학습강의안 / 갤러리 / 도장깨기 / 커뮤니티
// =========================================================================
export const nav = [
  { label: 'About', to: '/about' },
  { label: '커리큘럼', to: '/curriculum' },
  { label: '학습강의안', to: '/lecture' },
  { label: '실습예제', to: '/examples' },
  { label: '프롬프트 학습 & 평가', to: '/prompt' },
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
    '카피 한 줄을 다듬는 데 한나절, 이미지 한 장을 받는 데 며칠. 홍보 담당자의 시간은 늘 부족합니다. 이 과정은 업무효율화의 이해부터 홍보 기획·콘텐츠·시각자료·UI 시안·페이지 구성, 그리고 반복업무 자동화까지 7개 모듈을 직접 만들며 익힙니다. 하루가 끝나면 "오늘 만든 결과물"과 "내일 바로 쓸 자동화 루틴"이 손에 남습니다.',
  outcomes: [
    '생성형 AI로 홍보 업무를 어디서 줄일지 판단할 수 있다.',
    '홍보 목적·타깃·핵심 메시지를 정리하고 고품질 프롬프트를 쓸 수 있다.',
    '제품 소개문·SNS·블로그·카드뉴스 문구를 자동으로 작성할 수 있다.',
    '배너·카드뉴스·썸네일 등 홍보 시각자료를 만들 수 있다.',
    'Google Stitch로 홍보용 UI 시안과 페이지 구조를 설계할 수 있다.',
    '반복 홍보 업무를 템플릿화해 나만의 자동화 루틴을 만들 수 있다.',
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
    { icon: 'fa-solid fa-share-nodes', label: '결과물 공유', desc: '오늘 만든 콘텐츠·시각자료·페이지를 서로 보여주고 피드백.', cta: '갤러리 보기', to: '/gallery' },
    { icon: 'fa-solid fa-folder-open', label: '자료실', desc: '재사용 프롬프트·도구 링크·치트시트 모음.', cta: '학습강의안', to: '/lecture' },
  ],
  faq: [
    { q: '비전공자도 따라갈 수 있나요?', a: '네. 초급 과정으로, 코딩 없이 노코드·생성형 AI 도구만 사용합니다. 처음부터 함께 만들어 갑니다.' },
    { q: '어떤 AI 도구를 쓰나요?', a: 'ChatGPT·Claude(글), ImageFX·DALL·E·Canva(이미지), Google Stitch·Framer(페이지) 등을 용도별로 다룹니다. 무료 도구 위주로 진행합니다.' },
    { q: '준비물이 있나요?', a: '노트북·충전기, 그리고 실제 홍보할 제품/서비스 정보를 가져오면 결과물이 훨씬 좋아집니다. About 페이지의 준비물을 참고하세요.' },
    { q: '결과물은 실무에 바로 쓸 수 있나요?', a: '네. 본인 제품·브랜드로 실습하므로, 워크숍이 끝나면 실제 문안·시각자료·페이지가 남습니다.' },
  ],
}

export const footerLinks = [
  { label: 'About', to: '/about' },
  { label: '커리큘럼', to: '/curriculum' },
  { label: '학습강의안', to: '/lecture' },
  { label: '실습예제', to: '/examples' },
  { label: '프롬프트 학습 & 평가', to: '/prompt' },
  { label: '갤러리', to: '/gallery' },
  { label: '도장깨기', to: '/stamps' },
  { label: '커뮤니티', to: '/community' },
]
