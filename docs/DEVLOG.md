# 개발일지 — content (AI 홍보 스튜디오)

## 2026-06-11 · 초기 구축

### 개요
휴넷 인재키움 과정 **「AI로 만드는 홍보 실무 — 콘텐츠·이미지·페이지까지 자동화 완성」**(단과·초급·8시간)을
온라인 학습사이트로 구축. 베이스 템플릿은 [`templete03`](https://github.com/aebonlee/templete03)
(React 19 + Vite 7 + Supabase, 다크블루 아트디렉션 + 형광펜 시그니처).

- 리포: `aebonlee/contents` (초기 `content` → 복수형 `contents`로 변경)
- 도메인: `contents.dreamitbiz.com` (CNAME)
- 배포: GitHub Actions → **gh-pages 브랜치** (`peaceiris/actions-gh-pages`, main push 자동)
- 테이블 접두사: `cnt_` (DreamIT 공용 Supabase 프로젝트 공유)

### 콘셉트 결정
- **출결/결제 대시보드는 제외** — 강의 내용 전달에 집중.
- 대신 두 가지 핵심 장치 추가:
  1. **도장깨기(Stamp Rally)** — 강의를 8개 실습 미션으로 쪼개 직접 만들며 도장을 찍는다.
     로그인 없이 `localStorage`에 진행 저장. 듣고 끝내지 않고 손으로 결과물을 남겨 체화.
  2. **갤러리(Gallery)** — "이걸 만들게 됩니다"를 한눈에. 콘텐츠/이미지/페이지 3카테고리 필터.
- 모든 레슨 `free: true` — 콘텐츠를 막지 않고 누구나 열람.

### 커리큘럼 (과정명 기준 설계, 4모듈 15레슨 ≈ 8시간)
> 휴넷 상세 차시는 로그인 비공개 영역이라 추출 불가 → 과정명 기준으로 설계. 실제 강의 준비 시 `videoId`만 교체.
1. **AI 홍보 실무 시작하기** — 도구 지도 + 프롬프트 기본기 (3레슨)
2. **AI 콘텐츠 자동화** — 카피·SNS·보도자료 (4레슨)
3. **AI 이미지 자동화** — 생성형 비주얼·카드뉴스·썸네일 (4레슨)
4. **페이지 & 워크플로 자동화 완성** — 노코드 페이지 + 자동화 루틴 (4레슨)

### 도장깨기 8미션
타깃 한 줄 정의 → AI 카피 3종 → SNS 캡션 세트 → 보도자료 초안 →
브랜드 이미지 → 카드뉴스 1세트 → 랜딩페이지 배포 → 자동화 루틴.

### 변경 파일
- `src/config/site.js` — 과정 콘텐츠 전면 교체 (course/hero/modules/stamps/gallery)
- `src/pages/Stamps.jsx` — 신규(도장깨기, localStorage)
- `src/pages/Gallery.jsx` — 신규(갤러리, 카테고리 필터)
- `src/pages/Home.jsx` — 가격 섹션 제거, 도장깨기·갤러리 미리보기 추가
- `src/components/Header.jsx` — 네비 교체(커리큘럼/도장깨기/갤러리), 로그인 제거
- `src/components/Footer.jsx`, `src/styles/layout.css` — 신규 컴포넌트 스타일
- `index.html`, `package.json`, `vite.config.js`, `.env.*` — content 메타/접두사
- `.github/workflows/deploy.yml` — gh-pages 브랜치 배포로 전환
- `supabase/schema.sql` — 접두사 `tpl_` → `cnt_`

### 빌드/배포
- `npm run build` 정상 (100 modules, 에러 없음).
- main push → Actions가 gh-pages 브랜치로 배포. Pages 소스 = gh-pages 브랜치 root.

### TODO
- [ ] 실제 강의 영상 확보 시 `modules[].lessons[].videoId` 교체
- [ ] 갤러리 placeholder → 실제 결과물 이미지 교체
- [ ] (선택) Supabase `cnt_` 테이블 생성 — 진도·노트 기능 활성화 시
