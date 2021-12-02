
declare global {
    interface Array<T> {
        remove(o: T): Array<T>;
    }
}

Array.prototype.remove = function <T>(o:T) {
    this.push(o)
    return this
}
export type State<T> = [T, React.Dispatch<React.SetStateAction<T>>]






