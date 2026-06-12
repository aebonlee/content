// =========================================================================
// 프롬프트 학습 & 평가 — 데이터 + SCORE 채점 엔진.
// (data 프로젝트 dasco의 prompt-evaluation / PromptPractice 패턴 참고)
// 평가 기준은 우리 과정의 "프롬프트 5요소"(역할·맥락·과제·제약·출력형식),
// 각 20점, 합계 100점. 채점은 키워드·구조 기반 클라이언트 추정.
// =========================================================================

// 5대 평가 기준 (각 20점)
export const scoreCriteria = [
  { key: '역할', code: 'R', max: 20, icon: 'fa-solid fa-user-tie',
    desc: '적절한 전문가 역할을 지정했는가', detail: '"너는 15년차 홍보 카피라이터야"처럼 역할을 부여하면 답변의 전문성·톤이 안정된다.' },
  { key: '맥락', code: 'C', max: 20, icon: 'fa-solid fa-layer-group',
    desc: '브랜드·타깃·상황 배경을 충분히 줬는가', detail: '제품·타깃·목적·수치 등 구체적 배경이 많을수록 결과가 정확해진다.' },
  { key: '과제', code: 'T', max: 20, icon: 'fa-solid fa-pen-ruler',
    desc: '무엇을 만들지 명확히 지시했는가', detail: '"~를 작성해줘"처럼 동작이 분명해야 한다. 작업이 여러 개면 나눠 지시.' },
  { key: '제약', code: 'Co', max: 20, icon: 'fa-solid fa-ruler-combined',
    desc: '길이·톤·금지 등 조건을 명시했는가', detail: '글자 수·말투·금지어를 정하지 않으면 매번 결과가 달라진다.' },
  { key: '출력형식', code: 'F', max: 20, icon: 'fa-solid fa-table-list',
    desc: '결과를 어떤 구조·형태로 받을지 지정했는가', detail: '표·목록·섹션 구조를 지정하면 바로 쓸 수 있는 결과가 나온다.' },
]

// 등급 체계
export const gradeTable = [
  { grade: 'S', range: '90–100', label: '탁월', desc: '5요소가 완벽하게 갖춰진 프롬프트' },
  { grade: 'A', range: '80–89', label: '우수', desc: '대부분의 요소가 잘 갖춰짐' },
  { grade: 'B', range: '65–79', label: '보통', desc: '기본 요소는 있으나 개선 여지' },
  { grade: 'C', range: '50–64', label: '미흡', desc: '핵심 요소가 부족해 결과가 불안정' },
  { grade: 'D', range: '0–49', label: '부족', desc: '프롬프트로서 기본 기능을 못 함' },
]

export const GRADE_COLOR = { S: '#1D7A4F', A: '#1D4E89', B: '#3D6FE0', C: '#D4760A', D: '#C8102E' }

// 핵심 기법
export const techniques = [
  { icon: 'fa-solid fa-user-tie', title: '역할 부여(Role)', desc: '"너는 ~ 전문가야"로 시작하면 톤과 전문성이 올라간다.' },
  { icon: 'fa-solid fa-clone', title: '예시 제공(Few-shot)', desc: '원하는 톤의 예시 1~3개를 주면 모델이 그 스타일을 모방한다.' },
  { icon: 'fa-solid fa-ruler-combined', title: '제약 명시', desc: '글자 수·말투·금지어를 못 박아 재작업을 줄인다.' },
  { icon: 'fa-solid fa-list-ol', title: '단계 분해', desc: '복잡한 작업은 1)…2)…로 쪼개 지시하면 누락이 준다.' },
  { icon: 'fa-solid fa-table-list', title: '출력형식 지정', desc: '표·목록·섹션 구조를 지정해 바로 쓰는 결과를 받는다.' },
]

// 채점 예시 (개선 전/후)
export const scoreSample = {
  before: { prompt: '맥주 홍보 글 써줘', total: 22, grade: 'D' },
  after: {
    prompt: `[역할] 너는 15년차 홍보 카피라이터야.
[맥락] 제품은 무알콜 수제 맥주, 타깃은 30대 직장인, 핵심 메시지는 "부담 없이 즐기는 진짜 맥주맛".
[과제] 제품 소개문을 작성해줘.
[제약] 280자 내외, 정중·위트 톤, 과장 금지.
[출력형식] PAS(문제→공감→해결) 한 문단 + 마지막 줄 CTA.`,
    total: 92, grade: 'S',
  },
}

// 실습 시나리오 (홍보 실무 6종)
export const scenarios = [
  {
    id: 1, category: 'M3 · 콘텐츠', title: '제품 소개문 프롬프트',
    situation: '무알콜 수제 맥주의 제품 소개문을 AI로 만들려 합니다. 타깃은 30대 직장인입니다.',
    goal: '설득력 있는 제품 소개문을 요청하는 프롬프트를 작성하세요.',
    keywords: ['소개문', '제품', '타깃', '맥주', '이득', '메시지', '홍보'],
    roleKeywords: ['카피라이터', '마케터', '전문가', '담당자'],
    constraintKeywords: ['톤', '글자', '이내', '금지', '말투'],
    formatKeywords: ['문단', '구조', '형식', 'cta', '목록', 'pas'],
    exampleAnswer: `[역할] 너는 15년차 홍보 카피라이터야.
[맥락] 제품은 무알콜 수제 맥주, 타깃은 30대 직장인, 핵심 메시지는 "부담 없이 즐기는 진짜 맥주맛".
[과제] 제품 소개문을 작성해줘.
[제약] 280자 내외, 정중하지만 위트 있는 톤, 과장·허위 금지.
[출력형식] PAS(문제→공감→해결) 한 문단 + 마지막 줄에 행동유도(CTA) 한 문장.`,
  },
  {
    id: 2, category: 'M3 · SNS', title: '인스타 홍보 문구 프롬프트',
    situation: '카페 신메뉴 "흑임자 라떼"를 인스타그램에 올릴 홍보 문구가 필요합니다. 여러 톤으로 받아 고르고 싶습니다.',
    goal: '여러 버전의 SNS 홍보 문구를 요청하는 프롬프트를 작성하세요.',
    keywords: ['홍보', '신메뉴', '인스타', '타깃', '대상', '톤', '라떼'],
    roleKeywords: ['마케터', '카피라이터', '전문가', '에디터'],
    constraintKeywords: ['톤', '문장', '이내', '글자', '말투'],
    formatKeywords: ['개', '버전', '해시태그', '목록', '형식'],
    exampleAnswer: `[역할] 너는 카페 SNS 마케터야.
[맥락] 신메뉴 "흑임자 라떼"를 인스타에 홍보, 주 타깃은 20~30대 여성.
[과제] 홍보 문구를 5가지 톤(감성·유머·정보·짧고강렬·MZ말투)으로 만들어줘.
[제약] 각 2문장 이내, 과장 금지.
[출력형식] 버전명 + 문구 + 해시태그 5개 묶음, 번호 목록.`,
  },
  {
    id: 3, category: 'M3 · 보도자료', title: '신제품 보도자료 프롬프트',
    situation: '신제품 출시 소식을 언론에 배포할 보도자료가 필요합니다.',
    goal: '구조를 갖춘 보도자료 초안을 요청하는 프롬프트를 작성하세요.',
    keywords: ['보도자료', '신제품', '출시', '소식', '회사', '특징'],
    roleKeywords: ['홍보', '담당자', '기자', '전문가', 'pr'],
    constraintKeywords: ['사실', '분량', '톤', '금지'],
    formatKeywords: ['제목', '리드', '본문', '인용', '구조', '형식'],
    exampleAnswer: `[역할] 너는 PR 담당 기자 출신 보도자료 작성자야.
[맥락] 우리 회사가 무알콜 수제 맥주 신제품을 출시(출시일·특징·가격은 아래).
[과제] 보도자료 초안을 작성해줘.
[제약] 역피라미드 구조, 사실과 주장 분리, 대표 인용문은 [코멘트] 자리표시.
[출력형식] 제목 / 부제 / 리드 / 본문 2문단 / [대표 코멘트] / 회사 개요.`,
  },
  {
    id: 4, category: 'M4 · 시각자료', title: '카드뉴스 문구 프롬프트',
    situation: '제품 핵심 메시지를 5장짜리 카드뉴스 문구로 만들어야 합니다.',
    goal: '흐름이 있는 카드뉴스 문구를 요청하는 프롬프트를 작성하세요.',
    keywords: ['카드뉴스', '메시지', '제품', '흐름', '후킹', '홍보'],
    roleKeywords: ['에디터', '카피라이터', '기획', '전문가'],
    constraintKeywords: ['자 이내', '문장', '톤', '이내'],
    formatKeywords: ['장', '목록', '형식', '구조', '번호'],
    exampleAnswer: `[역할] 너는 카드뉴스 기획 에디터야.
[맥락] 제품의 핵심 메시지와 근거를 아래에 줄게.
[과제] 카드뉴스 5장 문구를 만들어줘.
[제약] 장당 한 문장·15자 이내, 1장 후킹 → 5장 CTA, 흐름이 이어질 것.
[출력형식] "1장~5장" 라벨 + 각 장 문구 + 괄호로 역할 표기.`,
  },
  {
    id: 5, category: 'M6 · 페이지', title: '랜딩페이지 히어로 카피 프롬프트',
    situation: '사전예약을 유도하는 랜딩페이지의 히어로 섹션 카피가 필요합니다.',
    goal: '전환을 노리는 히어로 카피를 요청하는 프롬프트를 작성하세요.',
    keywords: ['랜딩', '히어로', '사전예약', '전환', '타깃', '메시지', 'cta'],
    roleKeywords: ['카피라이터', 'cro', '마케터', '전문가'],
    constraintKeywords: ['자 이내', '톤', '글자', '이내'],
    formatKeywords: ['헤드라인', '보조문구', '세트', '목록', '형식'],
    exampleAnswer: `[역할] 너는 전환율 최적화(CRO) 카피라이터야.
[맥락] 랜딩 1차 행동은 사전예약, 타깃은 30대 직장인, 핵심 메시지는 "부담 없이 즐기는 진짜 맥주맛".
[과제] 히어로용 헤드라인 + 보조문구 세트를 만들어줘.
[제약] 헤드라인 20자·보조문구 35자 이내, 위트 있는 톤.
[출력형식] 톤이 다른 3세트, 각 "헤드라인 / 보조문구" 묶음.`,
  },
  {
    id: 6, category: 'M7 · 자동화', title: '홍보 자동화 워크플로 프롬프트',
    situation: '매주 반복되는 인스타+카드뉴스 발행 업무를 자동화 워크플로로 설계하려 합니다.',
    goal: '검수 단계를 포함한 자동화 워크플로 설계를 요청하는 프롬프트를 작성하세요.',
    keywords: ['워크플로', '자동화', '반복', '발행', '검수', '트리거'],
    roleKeywords: ['설계자', '전문가', '컨설턴트', '담당자'],
    constraintKeywords: ['검수', '조건', '단계', '시간'],
    formatKeywords: ['표', '단계', '칼럼', '형식', '구조'],
    exampleAnswer: `[역할] 너는 마케팅 자동화 워크플로 설계자야.
[맥락] 반복업무는 "매주 인스타 게시글 + 카드뉴스 발행"이다.
[과제] 트리거 → AI 생성 → 사람 검수 → 발행 단계로 설계해줘.
[제약] 각 단계에 도구·소요시간·검수 기준을 적고, 사람 검수 게이트를 반드시 포함.
[출력형식] 트리거·AI단계·사람검수·발행 칼럼의 표 + 총 소요시간.`,
  },
]

// =========================================================================
// SCORE 채점 엔진 — 입력 프롬프트를 5요소 기준으로 0~20점씩 추정.
// 키워드·정규식·구조·길이 기반(휴리스틱). 실제 LLM 채점이 아닌 학습용 추정.
// =========================================================================
export function evaluatePrompt(input, scenario) {
  const text = input.toLowerCase().replace(/\s+/g, ' ')
  const len = input.trim().length
  const feedback = []

  // 역할 (Role)
  let role = 0
  const roleHit = scenario.roleKeywords.filter((k) => text.includes(k.toLowerCase())).length
  const hasRole = /(너는|당신은|역할|전문가|담당자|으로서|act as|you are)/.test(input)
  if (hasRole) role += 12
  if (roleHit > 0) role += 8
  role = Math.min(role, 20)
  if (role < 12) feedback.push('역할을 지정하세요 — 예: "너는 15년차 홍보 카피라이터야"')

  // 맥락 (Context)
  let context = 0
  const ctxHit = scenario.keywords.filter((k) => text.includes(k.toLowerCase())).length
  if (ctxHit >= 5) context += 12
  else if (ctxHit >= 3) context += 9
  else if (ctxHit >= 2) context += 6
  else if (ctxHit >= 1) context += 3
  if (/\d/.test(input)) context += 3
  if (/\[.+\]|"""|타깃|브랜드|대상|고객/.test(input)) context += 5
  context = Math.min(context, 20)
  if (context < 12) feedback.push(`맥락(브랜드·타깃·상황)을 더 담으세요 — 예: ${scenario.keywords.slice(0, 3).join(', ')}`)

  // 과제 (Task)
  let task = 0
  const actionRe = /(작성|만들|써|분석|정리|요약|생성|제안|기획|설계|평가|비교|추천|도출|변주|번역)/
  const actionCount = (input.match(new RegExp(actionRe, 'g')) || []).length
  if (actionRe.test(input)) task += 10
  if (actionCount >= 2) task += 5
  if (len >= 120) task += 5
  task = Math.min(task, 20)
  if (task < 12) feedback.push('무엇을 만들지 명확한 지시문을 넣으세요 — 예: "~를 작성해줘"')

  // 제약 (Constraints)
  let constraint = 0
  const conHit = (scenario.constraintKeywords || []).filter((k) => text.includes(k.toLowerCase())).length
  if (/(자 이내|이내|글자|단어|분량|줄|문단|페이지|a4)/i.test(input)) constraint += 7
  if (/(톤|말투|어투|존댓말|반말|친근|정중|위트)/.test(input)) constraint += 6
  if (/(금지|하지 ?마|제외|제한|단,|주의|없이)/.test(input)) constraint += 4
  if (conHit > 0) constraint += 3
  constraint = Math.min(constraint, 20)
  if (constraint < 10) feedback.push('제약(길이·톤·금지어)을 명시하면 결과가 안정됩니다')

  // 출력형식 (Format)
  let format = 0
  const fmtHit = scenario.formatKeywords.filter((k) => text.includes(k.toLowerCase())).length
  if (fmtHit >= 2) format += 8
  else if (fmtHit >= 1) format += 4
  if (/[1-9][.)]\s|[-·•]\s|#{1,3}\s|\[출력|\[형식|①②③/.test(input)) format += 7
  if (/(표|목록|불릿|json|마크다운|구조|칼럼)/i.test(input)) format += 5
  format = Math.min(format, 20)
  if (format < 10) feedback.push('출력형식(표·목록·섹션 구조)을 지정하세요')

  const total = role + context + task + constraint + format
  if (len < 50) feedback.unshift('프롬프트가 너무 짧습니다. 100자 이상으로 5요소를 모두 담아보세요.')
  if (total >= 85) feedback.push('5요소가 균형 있게 잘 갖춰졌습니다! 👍')

  let grade = 'D'
  if (total >= 90) grade = 'S'
  else if (total >= 80) grade = 'A'
  else if (total >= 65) grade = 'B'
  else if (total >= 50) grade = 'C'

  return {
    total, grade, feedback,
    scores: { 역할: role, 맥락: context, 과제: task, 제약: constraint, 출력형식: format },
  }
}
