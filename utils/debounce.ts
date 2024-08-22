type FuncType = (...args: any[]) => void;

function debounce(func: FuncType, wait: number): FuncType {
  let timeout: ReturnType<typeof setTimeout> | null;

  return function (this: FuncType, ...args: any[]) {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
}

export default debounce;
