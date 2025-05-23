function generateSeries(n) {
  const result = [];
  const count = n % 2 === 0 ? n - 1 : n;

  for (let i = 0; i < count; i++) {
    result.push(2 * i + 1);
  }

  return result;
}

const series = generateSeries(5);
console.log(series);
