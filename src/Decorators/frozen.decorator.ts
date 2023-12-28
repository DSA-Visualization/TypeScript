export function frozen(target: Function) {
    Object.freeze(target);
    Object.freeze(target.prototype);
}