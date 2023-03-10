const makeShort = (value: string | number, max: number) => {
  const words = String(value).split(' ');

  if (words.length < max) {
    return value;
  }

  return words.slice(0, max).join(' ') + '...';
};

export default {
  makeShort,
};
