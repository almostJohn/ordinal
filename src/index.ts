interface Suffix {
  zero?: string;
  one: string;
  two: string;
  few: string;
  many?: string;
  other: string;
}

/* originally I would use export function but this is more like a template*/
function ordinal(count: number) {
  const pluralRules = new Intl.PluralRules('en', {
    type: 'ordinal',
  });

  const suffixes: Suffix = {
    one: 'st',
    two: 'nd',
    few: 'rd',
    other: 'th',
  }

  const ordinalExt = suffixes[pluralRules.select(count)];
  return (count + ordinalExt);
}
