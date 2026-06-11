# contents — AI 홍보 스튜디오

휴넷 인재키움 과정 **「AI로 만드는 홍보 실무 — 콘텐츠·이미지·페이지까지 자동화 완성」**(단과·초급·8시간,
**오프라인 집합교육 1일 워크숍**)의 **대면 강의 학습자료** 사이트. React 19 + Vite 7.
[`templete03`](https://github.com/aebonlee/templete03) 베이스.

🔗 https://contents.dreamitbiz.com

## 특징
- **학습자료(커리큘럼)** — 하루 타임테이블(4교시 15세션, 09:00–18:00). 세션마다 학습목표·핵심개념·대면 실습·도구
- **도장깨기** — 워크숍을 8개 실습 미션으로. 직접 만들어 도장을 찍는다(로그인 불필요, localStorage 저장)
- **갤러리** — 워크숍에서 만들게 될 결과물 쇼케이스(콘텐츠/이미지/페이지 필터)
- 동영상 강의 아님 · 출결/로그인/결제 없음 — **완전 정적 + localStorage**, 아이콘은 Font Awesome

## 개발
```bash
npm install
npm run dev      # 로컬 개발 서버
npm run build    # dist/ 프로덕션 빌드
```

## 배포
GitHub Actions → **gh-pages 브랜치** 자동 배포(`main` push). 커스텀 도메인 `contents.dreamitbiz.com`.
GitHub Pages 소스는 `gh-pages` 브랜치 root로 설정.

## 구조
- `src/config/site.js` — 모든 콘텐츠(과정·일정·타임테이블·세션자료·도장·갤러리). **수정은 주로 여기서**
- `src/components/Icon.jsx` — Font Awesome 아이콘 래퍼
- `src/styles/tokens.css` — 다크블루 5색 팔레트 + 디자인 토큰
- `src/pages/` — Home · Curriculum · Lesson · Stamps · Gallery

자세한 작업 이력은 [`docs/DEVLOG.md`](docs/DEVLOG.md).
