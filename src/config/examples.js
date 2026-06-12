// =========================================================================
// 실습예제 — 모듈별 10개씩(총 70개). /examples 페이지에서 사용.
// 모든 프롬프트는 "프롬프트 5요소"를 빠짐없이 배치한다.
//   글 도구:  [역할] · [맥락] · [과제] · [제약] · [출력형식]
//   이미지:   [목적] · [스타일] · [구도·조명] · [색·금지] · [규격]
//   UI(Stitch): [목적] · [대상] · [구성] · [톤] · [형식]
// 각 예제: { no, title, task(실습 지시), prompt(5요소 완성 프롬프트), tool }
// 키는 모듈 id(m1~m7).
// =========================================================================

// 페이지 상단 안내용 — 프롬프트 5대 평가요소
export const promptElements = [
  { key: '역할', icon: 'fa-solid fa-user-tie', desc: 'AI에게 부여하는 전문가 역할 (예: 15년차 카피라이터)' },
  { key: '맥락', icon: 'fa-solid fa-layer-group', desc: '브랜드·타깃·상황 등 배경 정보' },
  { key: '과제', icon: 'fa-solid fa-pen-ruler', desc: '구체적으로 무엇을 만들지' },
  { key: '제약', icon: 'fa-solid fa-ruler-combined', desc: '길이·톤·금지·필수 조건' },
  { key: '출력형식', icon: 'fa-solid fa-table-list', desc: '결과를 어떤 구조·형태로 받을지' },
]

export const practiceExamples = {
  // ---- M1. AI 기반 업무효율화의 이해 -------------------------------------
  m1: [
    { no: 1, title: '반복업무 진단표', tool: 'ChatGPT',
      task: '내 홍보 업무를 반복성·자동화 적합도로 분류한다.',
      prompt: `[역할] 너는 중소기업의 업무효율화를 돕는 홍보 컨설턴트야.
[맥락] 나는 직원 10명 규모 회사의 홍보 담당자이고, 반복 업무는 인스타 주 3회 게시글, 월 1회 보도자료, 행사 카드뉴스 제작이다.
[과제] 각 업무의 반복성·AI 자동화 적합도·추천 도구를 평가하고 자동화 우선순위를 정해줘.
[제약] 점수는 1~5점, 각 점수에 한 줄 근거를 달고, 추정이 필요한 항목은 '(추정)'으로 표시할 것.
[출력형식] 업무 · 반복성 · 자동화적합도 · 추천도구 · 우선순위 칼럼의 표 + 표 아래 1순위 선정 이유 3줄.` },
    { no: 2, title: 'AI 도구 지도', tool: 'ChatGPT',
      task: '콘텐츠·이미지·페이지 단계별 대표 도구를 비교한다.',
      prompt: `[역할] 너는 마케팅 AI 도구에 정통한 디지털 마케팅 강사야.
[맥락] 예산이 적은 중소기업 홍보팀이 글·이미지·페이지 제작에 쓸 도구를 처음 도입하려 한다.
[과제] 글·이미지·페이지 3단계로 나눠 단계별 대표 도구 3개씩과 핵심 특징을 정리해줘.
[제약] 무료 사용 가능 여부와 상업적 이용 가능 여부를 반드시 표기하고, 초급자 추천 도구를 ★로 표시.
[출력형식] 단계 · 도구명 · 무료여부 · 상업적이용 · 강점 · 추천(★) 칼럼의 표.` },
    { no: 3, title: '업무 시간 절감 추정', tool: 'ChatGPT',
      task: '업무별 AI 도입 전후 소요시간을 추정한다.',
      prompt: `[역할] 너는 업무 생산성 분석가야.
[맥락] 아래에 내 홍보 업무와 각 업무의 현재 소요시간·월간 빈도를 줄게.
[과제] 각 업무의 AI 도입 후 예상 소요시간과 월간 절감시간을 계산해줘.
[제약] 절감 가정(어떤 단계를 AI가 대체하는지)을 한 줄로 명시하고, 과장 없이 보수적으로 추정할 것.
[출력형식] 업무 · 현재시간 · 도입후시간 · 월빈도 · 월절감시간 표 + 총 월간 절감시간 합계.` },
    { no: 4, title: '자동화 1순위 선정', tool: 'ChatGPT',
      task: 'ROI 기준으로 자동화 우선순위를 매긴다.',
      prompt: `[역할] 너는 ROI 기반으로 업무 자동화를 자문하는 컨설턴트야.
[맥락] 자동화 후보 업무 목록과 각 업무의 절감시간·빈도·도구 학습난이도를 줄게.
[과제] (절감시간 × 빈도) − (학습·검수 비용) 관점에서 자동화 ROI 순위를 매겨줘.
[제약] 점수 산정 기준을 먼저 한 줄로 설명하고, 동점이면 학습난이도가 낮은 쪽을 우선할 것.
[출력형식] 순위 · 업무 · ROI점수 · 선정이유 표 + 가장 먼저 시작할 1건 추천 문장.` },
    { no: 5, title: '업무 절차 문서화', tool: 'ChatGPT',
      task: '반복업무를 입력→처리→출력 단계로 쪼갠다.',
      prompt: `[역할] 너는 업무 프로세스 설계자야.
[맥락] 자동화하려는 반복업무는 '매주 신제품 인스타 게시글 작성'이다.
[과제] 이 업무를 입력 → 처리 → 출력 단계로 분해하고, 각 단계에서 AI가 도울 수 있는 지점을 표시해줘.
[제약] 단계는 5개 이내로, 각 단계에 필요한 입력 자료를 함께 적을 것.
[출력형식] 단계 · 내용 · 필요입력 · AI지원여부 칼럼의 표.` },
    { no: 6, title: 'AI/사람 역할 분담', tool: 'ChatGPT',
      task: '단계별로 AI와 사람의 역할을 나눈다.',
      prompt: `[역할] 너는 사람-AI 협업 워크플로 설계자야.
[맥락] 앞서 정리한 인스타 게시글 작성 업무의 단계 목록을 줄게.
[과제] 각 단계를 'AI가 하는 일'과 '사람이 검수·결정할 점'으로 나눠줘.
[제약] 사실확인·톤조정·최종발행은 반드시 사람 단계로 둘 것.
[출력형식] 단계 · AI 역할 · 사람 검수 포인트 칼럼의 표.` },
    { no: 7, title: '도입 리스크 체크리스트', tool: 'Claude',
      task: '환각·저작권·톤 리스크를 점검한다.',
      prompt: `[역할] 너는 AI 거버넌스·리스크 자문가야.
[맥락] 중소기업 홍보팀이 생성형 AI로 외부 공개용 홍보물을 제작하려 한다.
[과제] 발행 전 점검해야 할 리스크 체크리스트를 만들어줘.
[제약] 환각(사실오류)·저작권·초상권·톤 일관성·민감정보 5개 영역을 모두 포함하고, 각 항목을 점검 질문 형태로 작성할 것.
[출력형식] 영역 · 점검질문 · 위반 시 대응 칼럼의 표(8~10행).` },
    { no: 8, title: '주간 홍보 캘린더', tool: 'ChatGPT',
      task: '반복 홍보 일정을 캘린더로 정리한다.',
      prompt: `[역할] 너는 콘텐츠 운영 매니저야.
[맥락] 우리는 인스타·블로그·뉴스레터 3개 채널을 운영하고, 주간 단위로 반복 발행한다.
[과제] 요일별 주간 홍보 캘린더를 설계해줘.
[제약] 각 항목에 채널·콘텐츠유형·예상 소요시간·자동화 가능 여부를 표시하고, 하루 업무가 과하지 않게 분산할 것.
[출력형식] 요일 · 채널 · 콘텐츠유형 · 소요시간 · 자동화가능 칼럼의 표.` },
    { no: 9, title: 'AI 활용 시나리오', tool: 'ChatGPT',
      task: '우리 회사 맞춤 적용 시나리오를 만든다.',
      prompt: `[역할] 너는 중소기업 디지털 전환 컨설턴트야.
[맥락] 우리 회사 정보(업종·제품·홍보채널·인력)를 아래에 줄게.
[과제] 가장 효과가 큰 AI 홍보 자동화 시나리오 1개를 단계별로 설계해줘.
[제약] 각 단계의 사용 도구와 사람 검수 지점을 표시하고, 도입 첫 달에 실현 가능한 범위로 한정할 것.
[출력형식] 시나리오 제목 + 단계별 표(단계·내용·도구·검수) + 기대효과 3줄.` },
    { no: 10, title: '효율화 한 장 보고', tool: 'Claude',
      task: '상사 보고용 1장 요약을 만든다.',
      prompt: `[역할] 너는 경영진 보고서를 잘 쓰는 기획자야.
[맥락] 아래에 홍보업무 AI 자동화 진단 결과와 예상 절감시간을 줄게.
[과제] 경영진 보고용 한 장 요약을 작성해줘.
[제약] 현황 → 문제 → 도입안 → 기대효과 순서로, 전문용어는 풀어 쓰고 A4 한 장 분량을 넘기지 말 것.
[출력형식] 소제목이 달린 4개 단락 + 마지막에 핵심 KPI(절감시간·비용) 3줄 요약.` },
  ],

  // ---- M2. AI 기반 홍보 기획 실무 ----------------------------------------
  m2: [
    { no: 1, title: '타깃 페르소나 3종', tool: 'ChatGPT',
      task: '제품의 타깃을 3개 페르소나로 구체화한다.',
      prompt: `[역할] 너는 브랜드 전략가이자 소비자 리서처야.
[맥락] 제품은 '무알콜 수제 맥주'이고, 건강은 챙기되 분위기는 즐기고 싶은 소비자를 노린다.
[과제] 서로 다른 3개 타깃 페르소나를 만들어줘.
[제약] 각 페르소나에 이름·연령·직업·핵심 고민·구매 동기·자주 쓰는 채널을 포함하고, 너무 비슷하지 않게 차별화할 것.
[출력형식] 페르소나별 카드(이름/속성/한 줄 인용구) 3개.` },
    { no: 2, title: '메시지 하우스 도출', tool: 'Claude',
      task: '핵심 메시지 1 + 근거 3을 세운다.',
      prompt: `[역할] 너는 메시지 전략을 설계하는 브랜드 컨설턴트야.
[맥락] 제품·타깃·차별점을 아래에 줄게(무알콜 수제 맥주 / 30대 직장인 / 진짜 맥주맛·칼로리 30%↓).
[과제] 핵심 메시지 1문장과 이를 뒷받침하는 근거 3개로 메시지 하우스를 만들어줘.
[제약] 핵심 메시지는 기능이 아니라 고객 이득으로 쓰고, 근거 3개는 서로 겹치지 않게 할 것.
[출력형식] '지붕(핵심 메시지)' 1줄 + '기둥(근거)' 3줄 구조로 들여쓰기 표현.` },
    { no: 3, title: '가치 제안 한 문장', tool: 'ChatGPT',
      task: '"누구에게/어떤 문제/어떻게" 한 문장을 만든다.',
      prompt: `[역할] 너는 포지셔닝 전문 카피라이터야.
[맥락] 제품 정보와 타깃을 아래에 줄게.
[과제] '누구에게 / 어떤 문제를 / 어떻게 해결하는가'가 드러나는 가치 제안 문장을 만들어줘.
[제약] 서로 톤이 다른 3가지 버전(담백형·감성형·도발형)으로, 각 40자 이내.
[출력형식] 버전명 + 문장 형태의 목록 3개.` },
    { no: 4, title: '경쟁사 메시지 비교', tool: 'Claude',
      task: '경쟁사와 우리의 차별 포인트를 찾는다.',
      prompt: `[역할] 너는 경쟁 분석을 하는 마케팅 전략가야.
[맥락] 경쟁사 3곳의 홍보 슬로건·핵심 메시지를 아래에 줄게.
[과제] 경쟁사들의 공통점과 차별점을 분석하고, 우리가 차지할 빈 포지션을 제안해줘.
[제약] 추측은 '(가설)'로 표시하고, 우리의 차별점은 실제 제품 사실에 근거할 것.
[출력형식] 경쟁사 비교표(브랜드·핵심메시지·강조점) + 우리 포지셔닝 제안 3줄.` },
    { no: 5, title: '핵심 키워드 추출', tool: 'ChatGPT',
      task: '콘텐츠·검색용 핵심 키워드를 뽑는다.',
      prompt: `[역할] 너는 SEO·SNS 키워드 리서처야.
[맥락] 아래 제품 소개 문단을 줄게.
[과제] 콘텐츠와 검색에 쓸 핵심 키워드를 뽑아줘.
[제약] 대형(노출)·중형(관련)·롱테일(전환) 세 그룹으로 분류하고 각 5개씩, 총 15개.
[출력형식] 그룹 · 키워드 · 사용 추천 채널 칼럼의 표.` },
    { no: 6, title: 'R-C-T-F+제약 프롬프트', tool: 'ChatGPT',
      task: '5요소를 모두 갖춘 프롬프트를 직접 만든다.',
      prompt: `[역할] 너는 15년차 카피라이터야.
[맥락] 타깃은 30대 직장인, 브랜드 톤은 위트 있지만 과하지 않다.
[과제] 무알콜 수제 맥주의 인스타 헤드라인 5개를 써줘.
[제약] 각 25자 이내, 텍스트만(이모지 금지), 같은 표현 반복 금지.
[출력형식] 번호가 매겨진 5줄 목록 + 각 줄 옆에 노린 감정(괄호) 표기.` },
    { no: 7, title: 'few-shot 예시 세트', tool: 'ChatGPT',
      task: '톤 고정용 예시를 만들고 모방시킨다.',
      prompt: `[역할] 너는 우리 브랜드 보이스를 학습한 카피라이터야.
[맥락] 우리 브랜드 톤은 '따뜻하고 위트 있는 존댓말'이다.
[과제] 먼저 그 톤을 보여주는 예시 카피 3개를 만든 뒤, 같은 톤으로 신제품 카피 5개를 새로 써줘.
[제약] 예시와 새 카피의 톤이 일관되게 유지되고, 각 30자 이내.
[출력형식] '예시 3개' 블록과 '신규 5개' 블록을 구분해 출력.` },
    { no: 8, title: '톤앤매너 가이드', tool: 'Claude',
      task: '말투·금지표현을 1줄 가이드로 고정한다.',
      prompt: `[역할] 너는 브랜드 보이스 가이드를 설계하는 에디터야.
[맥락] 우리 브랜드는 30대 대상의 프리미엄·친근 콘셉트다.
[과제] 모든 프롬프트에 붙여 쓸 톤앤매너 가이드를 만들어줘.
[제약] 말투·존댓말 여부·권장 표현·금지 표현을 모두 포함하되 전체를 2~3줄로 압축할 것.
[출력형식] 'TONE:' 한 블록(말투/권장/금지 라벨) 형태.` },
    { no: 9, title: '막연 vs 구체 비교', tool: 'ChatGPT',
      task: '같은 요청을 두 방식으로 생성해 비교한다.',
      prompt: `[역할] 너는 프롬프트 엔지니어링을 가르치는 강사야.
[맥락] 같은 제품으로 카피를 만들되, 프롬프트 품질 차이를 보여주려 한다.
[과제] (A) "카피 써줘" 같은 막연한 프롬프트와 (B) 5요소를 갖춘 구체 프롬프트로 각각 카피를 생성하고 결과 차이를 분석해줘.
[제약] A·B의 프롬프트 원문도 함께 보여주고, 차이를 톤·구체성·재사용성 관점에서 평가할 것.
[출력형식] A결과 / B결과 / 비교표(항목·A·B) 세 블록.` },
    { no: 10, title: '캠페인 한 줄 컨셉', tool: 'Claude',
      task: '캠페인을 관통하는 한 줄을 만든다.',
      prompt: `[역할] 너는 캠페인 크리에이티브 디렉터야.
[맥락] 아래에 우리 메시지 하우스(핵심 메시지+근거)를 줄게.
[과제] 캠페인 전체를 관통하는 한 줄 슬로건을 제안해줘.
[제약] 톤이 다른 후보 5개를 내고, 각 후보가 어떤 감정을 노리는지 한 줄로 설명, 마지막에 추천 1개를 근거와 함께 고를 것.
[출력형식] 후보 5개 목록(슬로건+노린 감정) + 최종 추천 1개와 이유.` },
  ],

  // ---- M3. AI 기반 콘텐츠 작성 실습 --------------------------------------
  m3: [
    { no: 1, title: '제품 소개문(PAS)', tool: 'ChatGPT',
      task: '문제→공감→해결 구조로 소개문을 쓴다.',
      prompt: `[역할] 너는 전환을 잘 만드는 세일즈 카피라이터야.
[맥락] 제품은 무알콜 수제 맥주, 핵심 메시지는 '부담 없이 즐기는 진짜 맥주맛'이다.
[과제] PAS(문제→공감→해결) 구조로 제품 소개문을 써줘.
[제약] 280자 내외, 특징은 반드시 고객 이득으로 번역, 과장·허위 표현 금지.
[출력형식] 한 문단의 소개문 + 마지막 줄에 행동유도(CTA) 한 문장.` },
    { no: 2, title: '인스타 캡션 + 해시태그', tool: 'ChatGPT',
      task: '캡션 1개와 해시태그 10개를 만든다.',
      prompt: `[역할] 너는 인스타그램 운영 전문 콘텐츠 에디터야.
[맥락] 신제품 출시 게시물이고, 타깃은 30대 직장인이다.
[과제] 인스타 캡션 1개와 해시태그 10개를 만들어줘.
[제약] 캡션 120자 이내, 따뜻·위트 톤, 해시태그는 대형 3·중형 4·롱테일 3으로 구성.
[출력형식] '캡션' 블록 + '해시태그(그룹별)' 블록.` },
    { no: 3, title: '블로그 도입부(SEO)', tool: 'Claude',
      task: '검색 키워드를 넣은 도입 3문단을 쓴다.',
      prompt: `[역할] 너는 검색 노출을 고려하는 블로그 에디터야.
[맥락] 핵심 검색 키워드는 '무알콜 맥주'이고, 독자는 건강·미식에 관심 있는 직장인이다.
[과제] 블로그 글의 도입부 3문단을 써줘.
[제약] 키워드를 첫 문단에 자연스럽게 1회 포함, 독자의 고민으로 시작, 키워드 남용 금지.
[출력형식] 3개 문단 + 글 전체에 쓸 추천 소제목 3개.` },
    { no: 4, title: '보도자료 초안', tool: 'Claude',
      task: '제목·리드·본문·인용 구조 초안을 만든다.',
      prompt: `[역할] 너는 PR 담당 기자 출신 보도자료 작성자야.
[맥락] 우리 회사가 신제품을 출시했고, 핵심 사실(출시일·특징·가격)을 아래에 줄게.
[과제] 보도자료 초안을 작성해줘.
[제약] 역피라미드 구조, 사실과 주장을 분리, 대표 인용문은 [대표 코멘트] 자리표시자로 비워둘 것.
[출력형식] 제목 / 부제 / 리드 / 본문(2~3문단) / [대표 코멘트] / 회사 개요 순.` },
    { no: 5, title: '행사 안내문', tool: 'ChatGPT',
      task: '핵심 정보를 담은 안내문을 만든다.',
      prompt: `[역할] 너는 행사 커뮤니케이션 담당자야.
[맥락] 신제품 시음 행사를 연다. 일시·장소·대상·신청방법·혜택을 아래에 줄게.
[과제] 고객에게 보낼 행사 안내문을 작성해줘.
[제약] 200자 내외, 정중한 존댓말, 신청 마감과 혜택을 눈에 띄게 강조.
[출력형식] 인사 → 행사 핵심정보(불릿) → 신청 안내 → 마무리 인사 구조.` },
    { no: 6, title: '카드뉴스 5장 문구', tool: 'ChatGPT',
      task: '장당 한 문장씩 5장 문구를 만든다.',
      prompt: `[역할] 너는 카드뉴스 기획 에디터야.
[맥락] 제품의 핵심 메시지와 근거를 아래에 줄게.
[과제] 카드뉴스 5장의 문구를 만들어줘.
[제약] 장당 한 문장·15자 이내, 1장은 후킹·5장은 CTA, 흐름이 자연스럽게 이어질 것.
[출력형식] '1장 ~ 5장' 라벨 + 각 장 문구 + 괄호로 각 장 역할 표기.` },
    { no: 7, title: '짧은 광고 카피 10종', tool: 'ChatGPT',
      task: '톤이 다른 헤드라인 10개를 뽑는다.',
      prompt: `[역할] 너는 광고 헤드라인 전문 카피라이터야.
[맥락] 제품은 무알콜 수제 맥주, 타깃은 30대 직장인이다.
[과제] 같은 제품으로 헤드라인 10개를 써줘.
[제약] 감성형·정보형·도발형을 섞고, 각 25자 이내, 중복 표현 금지.
[출력형식] 번호 목록 10개 + 각 줄 끝에 유형(감성/정보/도발) 표기.` },
    { no: 8, title: 'FAQ 5문답', tool: 'Claude',
      task: '구매 망설임을 줄이는 Q&A를 만든다.',
      prompt: `[역할] 너는 고객 경험(CX) 콘텐츠 라이터야.
[맥락] 신제품에 대해 고객이 자주 가질 의문을 줄게(맛·칼로리·배송·환불·선물).
[과제] 구매 망설임을 줄이는 FAQ 5문답을 만들어줘.
[제약] 답변은 2~3문장으로 간결하게, 부정 표현보다 안심 표현 사용.
[출력형식] Q/A 쌍 5개 목록.` },
    { no: 9, title: '뉴스레터 제목 10종', tool: 'ChatGPT',
      task: '열어보고 싶은 메일 제목을 만든다.',
      prompt: `[역할] 너는 이메일 마케팅 카피라이터야.
[맥락] 신제품 소식 뉴스레터이고, 구독자는 기존 고객이다.
[과제] 오픈율을 높일 메일 제목 10개를 만들어줘.
[제약] 각 30자 이내, 과장·낚시 금지, 호기심형·이득형·긴급형을 고루 섞을 것.
[출력형식] 번호 목록 10개 + 각 제목 유형 표기 + 추천 A/B 2개 표시.` },
    { no: 10, title: '후기 요청 메시지', tool: 'ChatGPT',
      task: '고객에게 보낼 후기 요청 문구를 만든다.',
      prompt: `[역할] 너는 고객 리텐션 담당 라이터야.
[맥락] 제품을 구매·수령한 고객에게 후기를 부탁하려 한다.
[과제] 후기 요청 메시지를 작성해줘.
[제약] 부담을 주지 않게, 1분 안에 답할 수 있는 질문 1~2개 포함, 정중하고 짧게(120자 내).
[출력형식] 문자/카톡용 1개 + 이메일용 1개, 두 버전.` },
  ],

  // ---- M4. AI 기반 시각자료 제작 (이미지 5요소: 목적·스타일·구도·색/금지·규격) --
  m4: [
    { no: 1, title: '홍보 배너 배경', tool: 'ImageFX',
      task: '텍스트 여백을 둔 배너 배경을 만든다.',
      prompt: `[목적] 무알콜 수제 맥주 홍보용 웹 배너 배경 (헤드라인 텍스트를 얹을 것)
[스타일] minimal, premium product banner, soft photographic mood
[구도·조명] soft studio side-light, clean negative space on the left for text
[색·금지] warm amber + deep navy palette --no text, logo, real people, neon, watermark
[규격] 16:9, high resolution` },
    { no: 2, title: '유튜브 썸네일', tool: 'ImageFX',
      task: '시선을 끄는 16:9 썸네일 배경을 만든다.',
      prompt: `[목적] 제품 리뷰 영상용 유튜브 썸네일 배경 (제목 텍스트는 편집에서 얹음)
[스타일] high-contrast, bold, eye-catching thumbnail
[구도·조명] single focal subject on one side, dramatic light, empty color block for title
[색·금지] vivid amber accent on navy --no text, faces, small details, watermark
[규격] 16:9, 1280x720` },
    { no: 3, title: '카드뉴스 배경 세트', tool: 'ImageFX',
      task: '동일 톤 배경 3장을 만든다.',
      prompt: `[목적] 5장짜리 카드뉴스용 일관된 배경 세트
[스타일] flat minimal, soft grain, editorial
[구도·조명] generous top margin for a one-line title, balanced empty center
[색·금지] warm amber + navy, identical mood across all --no text, busy pattern, clutter
[규격] 1:1, generate 3 variations keeping the same style` },
    { no: 4, title: '제품 무드컷', tool: 'DALL·E',
      task: '브랜드 분위기를 담은 무드 이미지를 만든다.',
      prompt: `[목적] 브랜드 무드를 보여주는 제품 분위기 컷
[스타일] moody product photography, premium minimal
[구도·조명] shallow depth of field, warm rim light, product slightly off-center
[색·금지] navy backdrop with warm highlights --no text, logo, hands, faces
[규격] 4:5 vertical` },
    { no: 5, title: '인스타 1:1 그래픽', tool: 'Canva AI',
      task: '피드용 정사각 그래픽 배경을 만든다.',
      prompt: `[목적] 인용구를 얹을 인스타 피드용 정사각 배경
[스타일] simple geometric, modern brand graphic
[구도·조명] large clear space in the center for a quote, subtle accent shape in a corner
[색·금지] brand amber + navy, flat lighting --no text, gradient overload
[규격] 1:1, 1080x1080` },
    { no: 6, title: '이벤트 포스터 배경', tool: 'ImageFX',
      task: '행사 포스터용 세로 배경을 만든다.',
      prompt: `[목적] 신제품 시음 행사 포스터 배경
[스타일] festive but minimal, premium
[구도·조명] vertical composition, open space at center for title and date
[색·금지] warm gradient over navy --no text, crowd, faces, watermark
[규격] 4:5 (or 2:3) vertical poster` },
    { no: 7, title: '배경 제거·확장', tool: 'Canva AI',
      task: '생성 이미지를 채널 규격에 맞게 후처리한다.',
      prompt: `[목적] 제품 컷을 인스타 스토리 규격으로 재활용
[작업] 배경을 제거하고, 자연스러운 배경으로 9:16까지 확장(outpaint)
[제약] 제품 비율·그림자 자연스럽게 유지, 원본 색감 보존
[보정] 밝기·대비 가볍게 정리
[규격] 9:16, 1080x1920` },
    { no: 8, title: '브랜드 컬러 보정', tool: 'Canva AI',
      task: '여러 이미지를 브랜드 팔레트로 통일한다.',
      prompt: `[목적] 카드뉴스 3장의 톤을 한 시리즈로 통일
[작업] 3장의 색감을 amber+navy 팔레트로 맞추고 밝기·채도 균일화
[제약] 인물·제품 본연의 색은 왜곡하지 않기, 과한 필터 금지
[기준] 첫 번째 이미지를 기준 톤으로 사용
[규격] 원본 비율 유지(1:1)` },
    { no: 9, title: '아이콘 스타일 세트', tool: 'ImageFX',
      task: '일관된 스타일의 아이콘 세트를 만든다.',
      prompt: `[목적] 홍보 페이지 특징 섹션용 라인 아이콘 세트
[스타일] simple line icons, consistent stroke width, minimal
[구도·조명] centered, equal padding, flat
[색·금지] navy on transparent background --no text, color fill, 3d, shadow
[규격] square, set of 4 (beer, leaf, clock, heart)` },
    { no: 10, title: '시즌 프로모션 비주얼', tool: 'DALL·E',
      task: '시즌 캠페인용 키 비주얼을 만든다.',
      prompt: `[목적] 여름 시즌 프로모션 키 비주얼 (헤드라인 텍스트는 편집에서 얹음)
[스타일] refreshing, seasonal, premium minimal
[구도·조명] bright highlights, condensation/cool mood, space for headline on the right
[색·금지] amber + navy with light accents --no text, logo, clutter
[규격] 16:9 key visual` },
  ],

  // ---- M5. AI 기반 UI 시안 (Stitch 5요소: 목적·대상·구성·톤·형식) ---------
  m5: [
    { no: 1, title: '랜딩페이지 브리프', tool: 'Google Stitch',
      task: '목적·섹션·톤을 담은 브리프로 시안을 만든다.',
      prompt: `[Goal] Landing page for a craft non-alcoholic beer; primary action: pre-order.
[Audience] Health-conscious office workers in their 30s.
[Sections] Hero with one-line headline + CTA button, 3 feature cards, customer quotes, FAQ, final CTA.
[Tone] Warm, premium, minimal — amber + navy palette.
[Format] Mobile-first, single-column, one clear primary CTA.` },
    { no: 2, title: '이벤트 페이지 시안', tool: 'Google Stitch',
      task: '단일 이벤트용 원페이지 시안을 만든다.',
      prompt: `[Goal] Event landing page; primary action: register for a tasting event.
[Audience] Existing customers and local foodies.
[Sections] Hero with date/place, agenda, host intro, register form, FAQ.
[Tone] Inviting, clean, premium.
[Format] One page, single goal (register), sticky register button.` },
    { no: 3, title: '제품 상세 시안', tool: 'Google Stitch',
      task: '상세페이지 구조 시안을 만든다.',
      prompt: `[Goal] Product detail page; primary action: add to cart / buy.
[Audience] First-time buyers comparing options.
[Sections] Hero image + price + CTA, key benefits, specs, reviews, related products, sticky buy bar.
[Tone] Trustworthy, clean, premium.
[Format] Mobile-first, sticky CTA, scannable sections.` },
    { no: 4, title: '히어로 섹션 변형', tool: 'Google Stitch',
      task: '히어로를 3가지로 변형한다.',
      prompt: `[Goal] Explore hero section options for the same landing page (pre-order).
[Audience] 30s office workers.
[Sections] 3 hero variations — A) image-left, B) centered text, C) full-bleed background.
[Tone] Warm premium minimal.
[Format] Keep exactly one CTA in each; show all 3 side by side.` },
    { no: 5, title: '모바일 우선 레이아웃', tool: 'Google Stitch',
      task: '모바일 기준으로 화면을 재구성한다.',
      prompt: `[Goal] Rework the existing page to be mobile-first.
[Audience] Users mostly arriving from Instagram on phones.
[Sections] Same content, reordered for small screens.
[Tone] Keep current brand tone.
[Format] Single column, large tap targets, sticky CTA bar, shorter sections.` },
    { no: 6, title: '가격표 섹션', tool: 'Google Stitch',
      task: '플랜 비교 가격표 섹션을 만든다.',
      prompt: `[Goal] Add a pricing section that drives selection.
[Audience] Buyers choosing between options.
[Sections] 2 plans side by side, recommended one highlighted, 4 perks each.
[Tone] Clear, confident, premium.
[Format] Cards with a CTA button per plan; recommended badge on one.` },
    { no: 7, title: '후기 섹션', tool: 'Google Stitch',
      task: '신뢰를 주는 후기 섹션을 만든다.',
      prompt: `[Goal] Add social proof to increase trust.
[Audience] Skeptical first-time buyers.
[Sections] 3 customer quotes with name/role, a row of partner logos, an aggregate rating.
[Tone] Authentic, reassuring.
[Format] Quote cards + logo strip + one big rating number.` },
    { no: 8, title: 'FAQ 아코디언', tool: 'Google Stitch',
      task: '자주 묻는 질문 섹션을 만든다.',
      prompt: `[Goal] Reduce purchase hesitation with an FAQ.
[Audience] Buyers with questions about taste, calories, shipping, returns, gifting.
[Sections] Accordion with 5 question-answer pairs.
[Tone] Friendly, clear.
[Format] Collapsible accordion, one open by default.` },
    { no: 9, title: '신청 폼 섹션', tool: 'Google Stitch',
      task: '전환용 신청/문의 폼 섹션을 만든다.',
      prompt: `[Goal] Capture sign-ups with minimal friction.
[Audience] Visitors ready to act.
[Sections] Short form (name, email, optional message), one benefit line, primary submit button.
[Tone] Simple, trustworthy.
[Format] Minimal fields, clear button label, privacy note under the form.` },
    { no: 10, title: '시안 부분 수정 지시', tool: 'Google Stitch',
      task: '반복 수정으로 시안을 다듬는다.',
      prompt: `[Goal] Refine the current draft toward higher conversion.
[Audience] Same as before.
[Changes] Move the primary CTA into the hero; add a sticky top bar with the CTA; reduce to hero / benefits / social proof / CTA.
[Tone] Keep current brand tone.
[Format] Single goal (pre-order); remove distractions.` },
  ],

  // ---- M6. AI 기반 페이지 구성 실무 --------------------------------------
  m6: [
    { no: 1, title: '히어로 카피', tool: 'ChatGPT',
      task: '헤드라인+보조문구를 만든다.',
      prompt: `[역할] 너는 랜딩페이지 전문 카피라이터야.
[맥락] 핵심 메시지는 '부담 없이 즐기는 진짜 맥주맛', 타깃은 30대 직장인이다.
[과제] 히어로용 헤드라인 1줄 + 보조문구 1줄 세트를 만들어줘.
[제약] 헤드라인 20자 이내, 보조문구 35자 이내, 톤이 다른 3세트.
[출력형식] 세트별로 '헤드라인 / 보조문구' 묶음 3개.` },
    { no: 2, title: '특징 3개 이득형 카피', tool: 'ChatGPT',
      task: '스펙을 고객 이득으로 번역한다.',
      prompt: `[역할] 너는 베네핏 중심으로 쓰는 카피라이터야.
[맥락] 제품 특징(스펙)을 아래에 줄게.
[과제] 각 특징을 [소제목 + 이득 한 줄]로 바꿔줘.
[제약] 스펙 나열 금지, 고객이 얻는 결과 중심, 각 이득 한 줄 25자 이내.
[출력형식] 특징 3개의 [소제목 / 이득] 묶음.` },
    { no: 3, title: 'CTA 문구 A/B 3종', tool: 'ChatGPT',
      task: '이득형 버튼 문구를 만든다.',
      prompt: `[역할] 너는 전환율 최적화(CRO) 카피라이터야.
[맥락] 랜딩 1차 행동은 사전예약이다.
[과제] CTA 버튼 문구 3종을 A/B 테스트 후보로 만들어줘.
[제약] 이득형 동사 사용("지금 ~받기" 형태), 각 12자 이내, 모호한 표현('더보기') 금지.
[출력형식] 후보 3개 + 각 후보가 강조하는 동기(괄호).` },
    { no: 4, title: '사회적 증거 문구', tool: 'Claude',
      task: '후기·숫자로 신뢰 섹션 문구를 만든다.',
      prompt: `[역할] 너는 신뢰 설계를 잘하는 콘텐츠 라이터야.
[맥락] 누적 판매·후기 등 실제 수치를 아래에 줄게(없으면 자리표시자).
[과제] 사회적 증거 섹션 문구를 만들어줘.
[제약] 과장 금지, 수치는 [N]으로 자리표시, 후기는 1~2문장으로 자연스럽게.
[출력형식] 섹션 헤드라인 1줄 + 핵심 수치 1줄 + 후기 3개.` },
    { no: 5, title: 'AIDA 흐름 재배열', tool: 'Claude',
      task: '섹션 순서를 전환 흐름으로 바꾼다.',
      prompt: `[역할] 너는 랜딩페이지 구조를 진단하는 UX 라이터야.
[맥락] 현재 섹션 순서는 특징→히어로→FAQ→후기→CTA이다.
[과제] AIDA(주의→관심→욕구→행동) 관점에서 더 잘 전환되는 순서로 재배열해줘.
[제약] 각 섹션을 AIDA 단계에 매핑하고, 바꾼 이유를 한 줄씩 달 것.
[출력형식] 추천 순서 목록 + 섹션·AIDA단계·이유 표.` },
    { no: 6, title: '섹션 우선순위 정리', tool: 'ChatGPT',
      task: '핵심만 남기고 군더더기를 덜어낸다.',
      prompt: `[역할] 너는 미니멀 랜딩을 지향하는 콘텐츠 전략가야.
[맥락] 현재 페이지의 섹션 목록을 아래에 줄게.
[과제] '한 페이지 한 목표' 원칙으로 꼭 필요한 섹션만 남기고 순서를 정리해줘.
[제약] 제거할 섹션은 이유를 적고, 핵심 전환 경로를 해치지 않을 것.
[출력형식] 유지 섹션(순서) / 제거 섹션(이유) 두 목록.` },
    { no: 7, title: '모바일 흐름 점검', tool: 'ChatGPT',
      task: '모바일에서 메시지 흐름을 점검한다.',
      prompt: `[역할] 너는 모바일 UX 점검 전문가야.
[맥락] 사용자 대부분이 인스타에서 모바일로 유입된다.
[과제] 이 페이지가 모바일 첫 화면에서 핵심 메시지+CTA를 보여주는지 점검하고 개선점을 제안해줘.
[제약] 개선점은 3개로, 각 항목을 '문제 → 개선안'으로 적을 것.
[출력형식] 진단 요약 1줄 + 개선점 3개(문제/개선안).` },
    { no: 8, title: '신뢰 요소 배치', tool: 'Claude',
      task: '보증·후기·로고 배치를 제안한다.',
      prompt: `[역할] 너는 전환 설계를 하는 CRO 컨설턴트야.
[맥락] 구매 망설임이 큰 신규 방문자가 주 타깃이다.
[과제] 신뢰 요소(보증·후기·로고·반품정책)를 페이지 어디에 배치할지 제안해줘.
[제약] 각 요소의 배치 위치와 그 이유(어떤 망설임을 해소하는지)를 함께 적을 것.
[출력형식] 요소 · 배치 위치 · 해소하는 망설임 표.` },
    { no: 9, title: '이탈 줄이는 카피', tool: 'ChatGPT',
      task: '망설임 포인트를 해소하는 카피를 만든다.',
      prompt: `[역할] 너는 이탈 방지 카피에 능한 라이터야.
[맥락] 결제 직전 이탈이 잦은 페이지다.
[과제] 고객이 이탈하는 주요 이유 3개를 가정하고 각각을 해소하는 안심 카피를 써줘.
[제약] 각 카피 1줄, 부정어보다 안심·확신 표현 사용.
[출력형식] 이탈 이유 · 안심 카피 표 3행.` },
    { no: 10, title: '마무리 CTA 강화', tool: 'ChatGPT',
      task: '페이지 끝 CTA를 강화한다.',
      prompt: `[역할] 너는 클로징 카피 전문가야.
[맥락] 페이지 맨 아래 마지막 전환 섹션이다.
[과제] 마무리 CTA 섹션 문구를 만들어줘.
[제약] 요약 한 줄 + 이득형 버튼 문구 + 한정·긴급 요소 1개(과장·허위 금지).
[출력형식] 헤드라인 / 보조문구 / 버튼문구 / 긴급요소 4줄.` },
  ],

  // ---- M7. AI 기반 반복업무 자동화 ---------------------------------------
  m7: [
    { no: 1, title: '워크플로 설계', tool: 'ChatGPT',
      task: '트리거→생성→검수→발행 흐름을 설계한다.',
      prompt: `[역할] 너는 마케팅 자동화 워크플로 설계자야.
[맥락] 반복업무는 '매주 인스타 게시글 + 카드뉴스 발행'이다.
[과제] 이 업무를 트리거 → AI 생성 → 사람 검수 → 발행 단계로 설계해줘.
[제약] 각 단계에 사용 도구·예상 소요시간·검수 기준을 적고, 사람 검수 게이트를 반드시 포함.
[출력형식] 트리거 · AI단계 · 사람검수 · 발행 칼럼의 표 + 총 소요시간.` },
    { no: 2, title: '프롬프트 라이브러리', tool: '노션',
      task: '재사용 프롬프트를 용도별로 정리한다.',
      prompt: `[역할] 너는 지식관리(KM) 담당자야.
[맥락] 오늘 워크숍에서 쓴 프롬프트들을 자산으로 남기려 한다.
[과제] 재사용 프롬프트 라이브러리 구조를 설계하고 예시 항목 5개를 채워줘.
[제약] 각 항목에 용도·입력변수·사용팁을 포함, 카테고리(카피·이미지·페이지)로 분류.
[출력형식] 카테고리 · 프롬프트명 · 입력변수 · 사용팁 칼럼의 표.` },
    { no: 3, title: '콘텐츠 리퍼포징 계획', tool: 'ChatGPT',
      task: '하나의 콘텐츠를 여러 채널로 재활용한다.',
      prompt: `[역할] 너는 원소스 멀티유즈 콘텐츠 전략가야.
[맥락] 원본 콘텐츠는 블로그 글 1편이다.
[과제] 이 글을 인스타·카드뉴스·뉴스레터·릴스로 재가공하는 계획을 만들어줘.
[제약] 채널별 변형 포인트(길이·톤·형식)와 재사용할 핵심 메시지를 명시.
[출력형식] 채널 · 형식 · 변형 포인트 · 예상 제작시간 표.` },
    { no: 4, title: '주간 발행 캘린더', tool: 'ChatGPT',
      task: '반복 발행 일정을 템플릿화한다.',
      prompt: `[역할] 너는 콘텐츠 운영 매니저야.
[맥락] 인스타·블로그·뉴스레터를 주간 단위로 반복 발행한다.
[과제] 재사용 가능한 주간 발행 캘린더 템플릿을 만들어줘.
[제약] 요일·채널·콘텐츠유형·담당(AI/사람)·상태 칼럼 포함, 업무가 특정 요일에 몰리지 않게 분산.
[출력형식] 표 형태의 캘린더 템플릿 + 사용 방법 2줄.` },
    { no: 5, title: '검수 체크리스트', tool: '노션',
      task: '발행 전 검수 체크리스트를 만든다.',
      prompt: `[역할] 너는 콘텐츠 품질관리(QA) 담당자야.
[맥락] AI로 만든 콘텐츠를 외부에 발행하기 전 단계다.
[과제] 발행 전 검수 체크리스트를 만들어줘.
[제약] 사실확인·톤·오타·저작권·CTA·규격을 포함해 8~10개 항목, 각 항목을 체크 가능한 문장으로.
[출력형식] 체크박스(□) 형태의 항목 목록.` },
    { no: 6, title: 'Make/Zapier 시나리오', tool: 'Make',
      task: '단계를 자동 연결하는 시나리오를 그린다.',
      prompt: `[역할] 너는 노코드 자동화(Make/Zapier) 설계자야.
[맥락] '새 블로그 글 발행'을 트리거로 후속 작업을 자동화하려 한다.
[과제] "블로그 발행 → 요약 생성 → SNS 초안 작성 → 검수 알림" 시나리오를 설계해줘.
[제약] 각 모듈을 트리거/액션으로 구분하고, 사람 검수 알림 단계를 반드시 포함.
[출력형식] 단계 번호 · 트리거/액션 · 사용 앱 · 설명 표.` },
    { no: 7, title: '검수 게이트 정의', tool: 'ChatGPT',
      task: '사람이 반드시 확인할 지점을 정한다.',
      prompt: `[역할] 너는 AI 운영 거버넌스 담당자야.
[맥락] 자동화 워크플로에서 품질·리스크 사고를 막아야 한다.
[과제] 사람이 반드시 검수해야 할 게이트와 통과 기준을 정의해줘.
[제약] 게이트별로 '무엇을 확인 / 통과 기준 / 실패 시 조치'를 명시.
[출력형식] 게이트 · 확인사항 · 통과기준 · 실패 시 조치 표.` },
    { no: 8, title: '결과물 패키지 정리', tool: '구글 문서',
      task: '오늘 산출물을 한 문서로 묶는다.',
      prompt: `[역할] 너는 포트폴리오 정리를 돕는 에디터야.
[맥락] 오늘 만든 결과물은 메시지 하우스·소개문·카드뉴스·UI 시안·랜딩페이지다.
[과제] 이를 한 문서로 묶는 목차와 양식을 만들어줘.
[제약] 각 결과물마다 '무엇을·어떤 도구로·어디에 쓸지'를 적는 칸을 포함.
[출력형식] 문서 목차 + 결과물 항목 양식(반복 사용 가능한 표).` },
    { no: 9, title: '발표 스크립트', tool: 'Claude',
      task: '2분 발표용 스크립트를 만든다.',
      prompt: `[역할] 너는 발표 코치야.
[맥락] 오늘 만든 결과물 목록을 아래에 줄게.
[과제] 2분 발표용 스크립트를 작성해줘.
[제약] '만든 것 → 배운 점 → 현업 적용 계획' 흐름, 말하듯 자연스러운 구어체, 2분 분량.
[출력형식] 도입/본론/마무리 라벨이 붙은 스크립트.` },
    { no: 10, title: '30일 적용 계획', tool: 'ChatGPT',
      task: '현업 적용 30일 실행 계획을 만든다.',
      prompt: `[역할] 너는 실행 코칭을 하는 생산성 컨설턴트야.
[맥락] 워크숍에서 배운 내용을 현업에 정착시키려 한다.
[과제] 30일 적용 계획을 주차별로 만들어줘.
[제약] 매주 실행 1가지를 요일·시간까지 구체화하고, 측정 가능한 목표를 붙일 것.
[출력형식] 주차 · 실행 과제 · 요일/시간 · 성공 기준 표.` },
  ],
}
