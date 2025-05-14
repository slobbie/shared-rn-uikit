const hexToRgba = (hex: string, opacity: number): string => {
  // # 제거
  const hexValue = hex.replace('#', '');

  // 3자리 hex인 경우 6자리로 변환
  const fullHex =
    hexValue.length === 3
      ? hexValue
          .split('')
          .map((char) => char + char)
          .join('')
      : hexValue;

  // 6자리 hex를 r, g, b로 분리
  const r = parseInt(fullHex.substring(0, 2), 16);
  const g = parseInt(fullHex.substring(2, 4), 16);
  const b = parseInt(fullHex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export const withOpacity = (color: string, opacity: number): string => {
  if (color.startsWith('rgba')) {
    return color.replace(/[\d.]+(?=\s*\)$)/, opacity.toString());
  }

  if (color.startsWith('rgb')) {
    return color.replace(')', `, ${opacity})`).replace('rgb', 'rgba');
  }

  if (color.startsWith('#')) {
    return hexToRgba(color, opacity);
  }

  return color;
};
