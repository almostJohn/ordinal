interface Suffix {
  zero?: string;
  one: string;
  two: string;
  few: string;
  many?: string;
  other: string;
}

export function ordinal(count: number) {
  const pluralRules = new Intl.PluralRules('en', {
    type: 'ordinal',
  });

  const suffixes: Suffix = {
    one: 'st',
    two: 'nd',
    few: 'rd',
    other: 'th',
  }

  const extension = suffixes[pluralRules.select(count)];
  return (count + extension);
}
