/**
 * 這個函式的目的是將一個數字陣列進行排序。
 * 你需要使用 JavaScript 的 Array.prototype.sort 方法來實現這個功能。
 * 在 sort 方法的比較函式中，你應該返回 a - b 來實現升序排序。
 *
 * 範例:
 * 輸入: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
 * 輸出: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
 */

export function sortNumbers(numbers: number[]): number[] {
  let result = [...numbers];
  for (let i = numbers.length - 1; 0 <= i; i--) {
    for (let k = 0; k <= numbers.length - 1; k++) {
      let currentVal = result[k];
      if (currentVal > result[k + 1]) {
        result[k] = result[k + 1];
        result[k + 1] = currentVal;
      }
    }
  }
  return result;
}
