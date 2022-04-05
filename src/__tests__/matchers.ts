test('toBeNull', () => {
  const emptyValue = null;

  expect(emptyValue).toBeNull();
  expect(emptyValue).toBe(null);
});

test('toBeUndefined', () => {
  let notDefinedYet;

  expect(notDefinedYet).toBeUndefined();
  expect(notDefinedYet).toBe(undefined);
});

test('toBeDefiend', () => {
  const definedValue = 'Zero';

  expect(definedValue).toBeDefined();
  expect(definedValue).toBe('Zero');
});

test('toBeTruthy', () => {
  const trueValue = true;

  expect(trueValue).toBeTruthy();
  expect(trueValue).toBe(true);
});

test('toBeFalsy', () => {
  const falseValue = false;

  expect(falseValue).toBeFalsy();
  expect(falseValue).toBe(false);
});

test('toBeGreateThan, not.toBeLessThan', () => {
  const specialNumber = 9;

  expect(specialNumber).toBeGreaterThan(7);
  expect(specialNumber).not.toBeLessThan(9);
});

test('toBeGreateThanOrEqual, not.toBeLessThanOrEqual', () => {
  const specialNumber = 9;

  expect(specialNumber).toBeGreaterThanOrEqual(9);
  expect(specialNumber).not.toBeLessThanOrEqual(7);
});

// 배열 안에 포함된 항목과 비교 항목이 같아 테스트는 성공합니다. ✅
test('toContain()', () => {
  const favoriteNumbers = [9, 12, 157, 1091];
  const pickNumber = 12;

  expect(favoriteNumbers).toContain(pickNumber);
});

// 특정 구조와 값을 가진 항목이 배열에 포함되어 있는지 검사할 때 사용하는 매처입니다.
// 이 매처는 배열 항목이 가진 모든 필드의 동일성을 재귀적으로 확인합니다.
test('toContainEqual()', () => {
  const getUserList = () => [
    { id: 1, name: '이민지' },
    { id: 2, name: '최수성' },
  ];
  const lee = { id: 1, name: '이민지', age: 22 };

  expect(getUserList()).toContainEqual(lee);
});
