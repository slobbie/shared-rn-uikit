export const deepMerge = <T extends Record<string, any>>(
  target: T,
  source: Partial<T>
): T => {
  const output = { ...target };

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      const sourceValue = source[key as keyof typeof source];
      const targetValue = target[key as keyof typeof target];

      if (isObject(sourceValue)) {
        if (!(key in target)) {
          Object.assign(output, { [key]: sourceValue });
        } else {
          output[key as keyof T] = deepMerge(
            targetValue as any,
            sourceValue as any
          );
        }
      } else {
        Object.assign(output, { [key]: sourceValue });
      }
    });
  }

  return output;
};

const isObject = (item: any): item is Record<string, any> => {
  return item && typeof item === 'object' && !Array.isArray(item);
};
