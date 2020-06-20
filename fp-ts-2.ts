import { Either, left, right, chain, map } from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/pipeable'
import { sequenceT } from 'fp-ts/lib/Apply'
import { getSemigroup } from 'fp-ts/lib/NonEmptyArray'
import { getValidation } from 'fp-ts/lib/Either'

const applicativeValidation = getValidation(getSemigroup<string>())
const minLength = (s: string): Either<string, string> =>
  s.length >= 6 ? right(s) : left('at least 6 characters')

const oneCapital = (s: string): Either<string, string> =>
  /[A-Z]/g.test(s) ? right(s) : left('at least one capital letter')

const oneNumber = (s: string): Either<string, string> =>
  /[0-9]/g.test(s) ? right(s) : left('at least one number')

// export declare const chain: <E, A, B>(f: (a: A) => Either<E, B>) => (ma: Either<E, A>) => Either<E, B>
// const validatePassword = (s: string): Either<string, string> =>
//   pipe(
//     minLength(s),
//     chain(oneCapital),
//     chain(oneNumber)
//   )


// console.log(validatePassword('ab'))
// // => left("at least 6 characters")

// console.log(validatePassword('abcdef'))
// // => left("at least one capital letter")

// console.log(validatePassword('Abcde2f'))
// => left("at least one number")


// import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray'
// import { mapLeft } from 'fp-ts/lib/Either'

// function lift<E, A>(check: (a: A) => Either<E, A>): (a: A) => Either<NonEmptyArray<E>, A> {
//   return a =>
//     pipe(
//       check(a),
//       mapLeft(a => [a])
//     )
// }

// const minLengthV = lift(minLength)
// const oneCapitalV = lift(oneCapital)
// const oneNumberV = lift(oneNumber)


// console.log(minLengthV);
// console.log(oneCapitalV);
// console.log(oneNumberV);



// function validatePassword(s: string): Either<NonEmptyArray<string>, string> {
//   return pipe(
//     sequenceT(getValidation(getSemigroup<string>()))(
//       minLengthV(s),
//       oneCapitalV(s),
//       oneNumberV(s)
//     ),
//     map(() => s)
//   )
// }
// console.log(validatePassword('ab'))
import { some, fold, exists, Option, None, Some, none } from 'fp-ts/lib/Option'

// export declare type Option<A> = None | Some<A>

// export interface None {
//   readonly _tag: 'None'
// }


// export interface Some<A> {
//   readonly _tag: 'Some'
//   readonly value: A
// }


// export declare function some<A>(a: A): Option<A>

type Person = number | string;
const a : Person = 1;
const b : Person = 'www';
// export declare function fold<A, B>(onNone: () => B, onSome: (a: A) => B): (ma: Option<A>) => B

// const fa: Option<number> = {
//   _tag: 'Some',
//   value: 2
// }
// console.log(fold(() => 2, a => 4)(fa));



//   console.log(
//     fold(
//       () => 'a none',
//       (a) => `a some containing ${a}`
//     )(some(1))
//   );
//   // 'a some containing 1'


//   console.log( 
//     fold(
//       () => 'a none',
//       (a) => `a some containing ${a}`
//     )(none)
//   )
 // 'a none'

// export declare type Option<A> = None | Some<A>
// export declare function some<A>(a: A): Option<A>
//export declare const none: Option<never>

// export interface None {
//   readonly _tag: 'None'
// }


// export interface Some<A> {
//   readonly _tag: 'Some'
//   readonly value: A
// }
