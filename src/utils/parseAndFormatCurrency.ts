export function parseAndFormatCurrency(rawInput: string): {
  formatted: string;
  parsed: number | null;
} {
  const numericString = rawInput.replace(/\D/g, "");

  if (numericString === "") {
    return { formatted: "R$", parsed: null };
  }

  const parsed = parseFloat(numericString) / 100;

  const formatted = parsed.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  return { formatted, parsed };
}

export function formatInitialValue(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
}

