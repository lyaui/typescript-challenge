/**
 * 任務：實作一個函式 `classifyAge`，根據年齡進行分類。
 *
 * 範例：
 * classifyAge(10) 應該回傳 "Child"
 * classifyAge(15) 應該回傳 "Teenager"
 * classifyAge(30) 應該回傳 "Adult"
 * classifyAge(70) 應該回傳 "Senior"
 *
 * @param age - 一個需要被分類的年齡
 * @returns - 回傳年齡的分類結果
 */

enum Identity {
  Child = 'Child',
  Teenager = 'Teenager',
  Adult = 'Adult',
  Senior = 'Senior',
}

export function classifyAge(age: number): Identity {
  switch (age) {
    case 10:
      return Identity.Child;
    case 15:
      return Identity.Teenager;
    case 30:
      return Identity.Adult;
    case 70:
    default:
      return Identity.Senior;
  }
}
