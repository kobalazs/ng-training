export function Timekeeper(): PropertyDecorator {
  let getGmtTime = () => {
    return Date.now() + (new Date()).getTimezoneOffset() * 60 * 1000;
  };

  return (target: number, key: string) => {
    target[key] = getGmtTime();
    setInterval(() => {
      target[key] = getGmtTime();
    }, 1000);
  }
}