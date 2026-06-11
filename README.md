# content — AI 홍보 스튜디오

휴넷 인재키움 과정 **「AI로 만드는 홍보 실무 — 콘텐츠·이미지·페이지까지 자동화 완성」**(단과·초급·8시간)
온라인 학습사이트. React 19 + Vite 7 + Supabase. [`templete03`](https://github.com/aebonlee/templete03) 베이스.

🔗 https://content.dreamitbiz.com

## 특징
- **커리큘럼** — 4모듈 15레슨(≈8시간): 콘텐츠 · 이미지 · 페이지 · 워크플로 자동화
- **도장깨기** — 강의를 8개 실습 미션으로. 직접 만들어 도장을 찍는다(로그인 불필요, localStorage 저장)
- **갤러리** — 강의에서 만들게 될 결과물 쇼케이스(콘텐츠/이미지/페이지 필터)
- 출결·결제 대시보드 없음 — 강의 내용 전달에 집중, 모든 레슨 공개

## 개발
```bash
npm install
npm run dev      # 로컬 개발 서버
npm run build    # dist/ 프로덕션 빌드
```

`.env.example` → `.env.local` 복사 후 값 입력. (Supabase 미설정 시에도 정적 데이터로 동작)

## 배포
GitHub Actions → **gh-pages 브랜치** 자동 배포(`main` push). 커스텀 도메인 `content.dreamitbiz.com`.
GitHub Pages 소스는 `gh-pages` 브랜치 root로 설정.

## 구조
- `src/config/site.js` — 모든 콘텐츠(과정·커리큘럼·도장·갤러리). **수정은 주로 여기서**
- `src/styles/tokens.css` — 다크블루 5색 팔레트 + 디자인 토큰
- `src/pages/` — Home · Curriculum · Lesson · Stamps · Gallery · Login
- `supabase/schema.sql` — `cnt_` 접두사 테이블(선택)

자세한 작업 이력은 [`docs/DEVLOG.md`](docs/DEVLOG.md).
