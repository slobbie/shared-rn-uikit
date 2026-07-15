# Organisms

몰레큘·아톰을 조합한 독립 UI 블록 (예: Card, ProfileHeader, SettingRow, 검색바+필터).

아직 컴포넌트 없음 — 첫 organism 추가 시 규칙:

- 구조는 atoms/molecules와 동일: `X.types.ts` + `X.web.tsx` + `X.native.tsx`
- 치수·색은 `@shared/core` 토큰 사용
- `src/index.web.ts` / `src/index.native.ts`에 export 추가
- 문서: `docs/components/organisms/<이름소문자>.mdx` (docs:check가 분류 일치 검사함)
- 스토리: `__stories__/`에 play 함수 포함 스토리 추가
