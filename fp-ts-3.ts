import { Option, None, isNone} from 'fp-ts/lib/Option'

// export type Option<A> = None | Some<A>

const none: None  = { _tag: 'None' }
const none2: Option<string> = { _tag: 'None' }

console.log(isNone(none));
console.log(isNone(none2));