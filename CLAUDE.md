# content — AI 홍보 스튜디오 (AI로 만드는 홍보 실무)

휴넷 인재키움 과정 「AI로 만드는 홍보 실무 — 콘텐츠·이미지·페이지까지 자동화 완성」
(단과·초급·8시간) 온라인 학습사이트. [`templete03`](https://github.com/aebonlee/templete03)
(React 19 + Vite 7 + Supabase, 다크블루 아트디렉션) 베이스로 구축.

## 콘셉트
- **출결·결제 대시보드 없음** — 강의 내용 전달에 집중. 모든 레슨 공개(`free: true`).
- **도장깨기(`pages/Stamps.jsx`)** — 강의를 8개 실습 미션으로. 직접 만들어 도장을 찍는다.
  로그인 없이 `localStorage`(`content.stamps.v1`)에 진행 저장.
- **갤러리(`pages/Gallery.jsx`)** — 만들게 될 결과물 쇼케이스(콘텐츠/이미지/페이지 필터).

## 스택 / 배포
- React 19 · Vite 7 · React Router 7 · Supabase JS
- GitHub Actions(`.github/workflows/deploy.yml`) → **gh-pages 브랜치**
  (`peaceiris/actions-gh-pages`, `main` push 자동배포). Pages 소스 = gh-pages root.
- 커스텀 도메인: `content.dreamitbiz.com` (CNAME), `base: '/'`
- 인증/결제 코드는 템플릿에서 유지되나 현재 사이트 흐름에서는 미사용.

## Supabase 테이블 접두사
모든 테이블은 **`cnt_` 접두사**를 사용한다 (DreamIT 공용 Supabase 프로젝트 공유).
`VITE_TABLE_PREFIX=cnt_` · `supabase/schema.sql` 접두사. JS에서는 `lib/supabase.js`
의 `t('progress')` 헬퍼 사용. Supabase 미설정 시에도 정적 데이터로 동작.

## 환경변수 (.env.local — git 제외)
`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `VITE_SITE_URL`, `VITE_TABLE_PREFIX`.
`SUPABASE_ACCESS_TOKEN`(sbp_)은 CLI 전용 — **VITE_ 접두사 금지**. `.env.example` 참고.

## 디렉터리
- `src/config/site.js` — 모든 콘텐츠(과정/히어로/모듈/도장/갤러리). **수정은 주로 여기**
- `src/styles/tokens.css` — 아트디렉션 5색 팔레트 + 토큰
- `src/styles/layout.css` — 도장깨기·갤러리 등 컴포넌트 스타일
- `src/pages/` — Home · Curriculum · Lesson · Stamps · Gallery · Login
- `docs/DEVLOG.md` — 개발일지

---

## Art Direction

> 학습 = **중요한 것에 밑줄을 긋는 일**. 이 스펙을 디자인 기준선으로 삼는다.

### A. 무드
- **한 줄 선언**: "여기 머무는 동안, 나는 한 뼘 자란다."
- **키워드**: 깊은 / 집중되는 / 신뢰가는
- **피할 것**: 알록달록 에듀테크 캐릭터 / 보라색 SaaS 그라데이션 / 과장된 뱃지·카운터
- **레퍼런스**: 만년필 남색 잉크, 자정의 책상 스탠드, 청사진(blueprint), 모눈 노트

### B. 팔레트 (다크 블루 베이스 — 물 먼저, 안료 나중)
| 역할 | 이름 | HEX | 비율 |
|---|---|---|---|
| Paper | 푸른 종이 | `#F4F6FB` | 60% |
| Ink | 자정의 남색 | `#14213D` | 30% |
| Pigment | 학술 블루 | `#1D4E89` | 8% |
| Accent | 형광 호박 | `#E8A33D` | 2% |
| Wash | 블루 워시 | `#DCE6F2` | — |

### C. 타이포
- 디스플레이: **Noto Serif KR** (700, 절제해서 크게)
- 본문: **Pretendard** (행간 1.72, 자간 -0.02em)
- 유틸리티: **JetBrains Mono** (진도·수치·캡션)

### D. 이미지 스타일
수채 wet-on-wet / 여백 60%+ 좌측 네거티브 스페이스 / 부드러운 측광 /
모눈 종이결 / 색 지시 `#1D4E89 #DCE6F2 #F4F6FB` / 금지: 인물 얼굴·글자·네온·3D 광택

### E. 미드저니 프롬프트 (히어로)
```
abstract watercolor of a young sprout rising over a blueprint grid notebook,
translucent prussian-blue ink, wet-on-wet soft edges, late-night desk-lamp
side light, visible cold-press paper texture, color palette of #1D4E89
#DCE6F2 #F4F6FB, generous negative space on the left for headline, deep and
contemplative study mood --ar 21:9 --no people, text, neon, 3d render, characters
```

### F~G. 트리트먼트 / 모션
`--radius: 6px`, soft-light 팔레트 오버레이, 종이 그레인 0.05,
스크롤 리빌 1종(`Reveal`). 과감함은 시그니처 한 곳에만.

### H. 시그니처
> 제목·핵심 문장에 **형광펜(amber)이 좌→우로 그어지며 번지는** 단 하나의 장치
> (`.hl` / `Highlighter`). 배움 = 중요한 것에 밑줄 긋기. 섹션을 지날수록
> 형광 자국이 페이지에 쌓인다. 학습이라는 주제가 아니면 존재할 수 없는 장치.

### I. 감성 QA (배포 전, 사람의 눈)
- [ ] 3초 안에 "차분히 몰입하는 배움"이 느껴지는가
- [ ] 형광펜은 페이지에서 결정적인 순간에만 등장하는가 (남발 금지)
- [ ] 이미지와 UI가 한 팔레트(다크 블루)로 호흡하는가
- [ ] 모바일(380px)에서도 같은 감정이 유지되는가
