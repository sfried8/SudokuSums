export default function findSums(target, existingDigits, remainingDigits) {
  const currentSum = existingDigits.reduce((acc, cur) => acc + cur, 0);
  if (currentSum === target) {
    return [existingDigits];
  } else if (currentSum > target) {
    return [];
  }
  const ret = [];
  for (let i = 0; i < remainingDigits.length; i++) {
    const newRemainingDigits = [...remainingDigits];
    const newExistingDigits = [
      ...existingDigits,
      ...newRemainingDigits.splice(i, 1)
    ];
    ret.push(...findSums(target, newExistingDigits, newRemainingDigits));
  }
  ret.forEach(s => s.sort((a, b) => a - b));
  const dedupedret = ret
    .map(s => JSON.stringify(s))
    .filter((s, i, a) => a.indexOf(s) === i)
    .map(s => JSON.parse(s));
  return dedupedret;
}
