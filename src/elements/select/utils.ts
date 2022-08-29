export const isElementInScrollView = (element: Element) => {
  const { top, bottom } = element.getBoundingClientRect();
  const parentRect = element.parentElement!.getBoundingClientRect();

  return (bottom < parentRect.bottom && top > parentRect.top);
};

export const shouldBeChecked = (value: string, option: string) => {
  return value.includes(option);
};

export const applySearchHighlight = (options: string[], value: string) => {
  if (!value) {
    return options.map((option) => ({ search: undefined, option }));
  }

  const matches = [];
  const noMatches = [];

  for (const option of options) {
    const match = option.match(new RegExp(value, 'i'));

    if (match?.index !== undefined) {
      const begin = option.slice(0, match.index);
      const middle = option.slice(match.index, match.index + value.length);
      const end = option.slice(match.index + value.length);
      matches.push({
        search: [begin, middle, end],
        option,
      });
    } else {
      noMatches.push({
        search: undefined,
        option,
      });
    }
  }

  matches.sort((a, b) => {
    if (a.option.indexOf(a.search[1]!) < b.option.indexOf(b.search[1]!)) {
      return -1;
    }

    return 1;
  });

  return [...matches, ...noMatches];
};
