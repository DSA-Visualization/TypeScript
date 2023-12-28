export function deprecated(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalDef = descriptor.value;
     console.log(target)
    descriptor.value = function (...args: any[]) {
      console.log(`Warning: ${key}() is deprecated. Use other methods instead.`);
      return originalDef.apply(this, args);
    };
    return descriptor;
  }