num = 10;
result = num;
factorial: while (num > 1) {
  num--;
  console.log((result *= num));
  if (result === 3628800) {
    break factorial;
  }
}
