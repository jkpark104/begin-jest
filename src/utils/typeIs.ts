export const typeIs = (data: unknown) => {
  return Object.prototype.toString.call(data).toLowerCase().slice(8, -1);
};
