function solution(n) {
  // √n 이하 수의 배수를 제거하고 남는 수는 모두 소수

  const upToN = [...Array(n + 1)].fill(true, 2).fill(false, 0, 2);

  for (let i = 2; i <= Math.sqrt(n); i++) {
    for (let multiple = i * 2; multiple <= n; multiple += i) {
      if (upToN[multiple] === false) continue;

      upToN[multiple] = false;
    }
  }

  return upToN.filter((num) => !!num).length;
}
