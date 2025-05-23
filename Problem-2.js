function generateSeries(n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(2 * i + 1);
  }

  return result;
}

const series = generateSeries(5);
console.log(series);
