
// TODO: Escribe pruebas unitarias para isPalindrome.
// Sugerencias: "radar" -> true; "anita lava la tina" -> true; "python" -> false; "" -> true; "Radar" -> true

test('ejemplo siembra', () => {
  expect(true).toBe(true);
});

test ('isPalindrome con "radar" devuelve true', () => {
  expect(isPalindrome("radar")).toBe(true);
});

test ('isPalindrome con "anita lava la tina" devuelve true', () => {
  expect(isPalindrome("anita lava la tina")).toBe(true);
});

test ('isPalindrome con "python" devuelve false', () => {
  expect(isPalindrome("python")).toBe(false);
});

test ('isPalindrome con "" devuelve true', () => {
  expect(isPalindrome("")).toBe(true);
});

test ('isPalindrome con "Radar" devuelve true', () => {
  expect(isPalindrome("Radar")).toBe(true);
});