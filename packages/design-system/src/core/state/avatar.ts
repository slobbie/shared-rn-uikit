/** 이름에서 이니셜 추출 — 공백 기준 최대 2글자, 한글은 첫 글자 */
export const getInitials = (name: string): string => {
  const trimmed = name.trim();
  if (!trimmed) return '?';

  const parts = trimmed.split(/\s+/);
  if (parts.length === 1) {
    // 한글 등 단일 단어 — 첫 두 글자(라틴) 또는 첫 글자
    return /^[a-zA-Z]+$/.test(parts[0])
      ? parts[0].slice(0, 2).toUpperCase()
      : parts[0].slice(0, 1);
  }
  return (parts[0][0] + parts[1][0]).toUpperCase();
};
