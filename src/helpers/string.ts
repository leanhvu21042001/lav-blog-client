const makeShort = (value: string, max: number) => {
  const words = value.split(' ');

  if (words.length < max) {
    return value;
  }

  return words.slice(0, max).join(' ') + '...';
};

export default {
  makeShort,
};
