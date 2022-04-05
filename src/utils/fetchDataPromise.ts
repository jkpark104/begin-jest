export function fetchDataPromise(data: unknown, timeout = 1000, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldReject) {
        resolve(data);
      } else {
        reject({ message: '데이터 처리에 실패했습니다.' });
      }
    }, timeout);
  });
}
