export function enumerable(isEnumerable: boolean) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
    console.log(target,key);
      descriptor.enumerable = isEnumerable;
      console.log("The enumerable property of this member is set to: " + descriptor.enumerable);
    };
  }