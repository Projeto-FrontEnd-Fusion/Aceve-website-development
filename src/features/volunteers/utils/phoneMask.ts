export const phoneMask = (value: string) => {
  const digits = value.replace(/\D/g, '');

  const part1 = digits.slice(0, 2);
  const part2 = digits.slice(2, 7);
  const part3 = digits.slice(7, 11);

  if (digits.length <= 2) {
    return `(${part1}`;
  }

  if (digits.length <= 6) {
    return `(${part1}) ${part2}`;
  }

  return `(${part1}) ${part2}-${part3}`;
};

