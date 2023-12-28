export function required(target: any, key: string) {
    let currentValue = target[key];
  
    Object.defineProperty(target, key, {
      set: (newValue: string) => {
        if (!newValue) {
          throw new Error(`${key} is required.`);
        }
        currentValue = newValue;
      },
      get: () => currentValue,
    });
  }