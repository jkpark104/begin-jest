import { fetchDataPromise } from '../utils';

test('Promise : 데이터는 `피넛 버터`입니다. fulfill', () => {
  return expect(fetchDataPromise('모카 버터')).resolves.toBe('모카 버터');
});

test('Promise : 데이터는 `피넛 버터`입니다. reject', () => {
  return expect(fetchDataPromise('피넛 버터', 120)).resolves.toBe('피넛 버터');
});

test('Async : 데이터는 `피넛 버터`입니다.', async () => {
  try {
    const data = await fetchDataPromise('피넛 버터');
    expect(data).toBe('피넛 버터');
  } catch (error) {
    // expect(error).toMatch('error');
  }
});
