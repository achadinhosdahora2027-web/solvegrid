export const SOLVEGRID_LOCALES = [
  'en-us', 'pt-br', 'es-es', 'de-de', 'fr-fr', 'ja-jp', 'zh-cn'
] as const;

export type SupportedLocale = typeof SOLVEGRID_LOCALES[number];

export function getHreflangAlternates(baseUrl: string, facet: string, format: string) {
  const cleanBase = baseUrl.replace(/\/+$/, '');
  const alternates: Record<string, string> = {};

  for (const loc of SOLVEGRID_LOCALES) {
    alternates[loc] = `${cleanBase}/growth/${loc}/${facet}/${format}`;
  }
  alternates['x-default'] = `${cleanBase}/growth/en-us/${facet}/${format}`;

  return alternates;
}

export function isRtlLocale(locale: string): boolean {
  return false;
}
