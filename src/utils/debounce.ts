export default (func: Function, timeout = 100) => {
  let timer: ReturnType<typeof setTimeout>;

  return async (...args: Array<object> | any) => {
    clearTimeout(timer);
    return new Promise((resolve) => {
      timer = setTimeout(async () => {
        await func.apply(this, args);
        resolve(true);
      }, timeout);
    });
  };
};
