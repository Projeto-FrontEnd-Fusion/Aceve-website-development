export function parseCurrencyInput(input: string): number | null {
  if (!input.startsWith("R$")) input = "R$" + input;

  const cleaned = input.replace("R$", "").replace(",", ".").replace(/[^\d.]/g, "");
  const numericValue = Number(cleaned);

  const hasTooManyDecimals = (() => {
    const decimals = cleaned.split(".")[1];
    return decimals ? decimals.length > 2 : false;
  })();

  if (!isNaN(numericValue) && !hasTooManyDecimals) {
    return numericValue;
  }

  return null;
}
