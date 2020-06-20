// export declare function findFirst<A>(predicate: Predicate<A>): (as: Array<A>) => Option<A>
// export interface Predicate<A> {
//   (a: A): boolean
// }
// export interface None {
//   readonly _tag: 'None'
// }
// /**
//  * @category model
//  * @since 2.0.0
//  */
// export interface Some<A> {
//   readonly _tag: 'Some'
//   readonly value: A
// }
// /**
//  * @category model
//  * @since 2.0.0
//  */
// export declare type Option<A> = None | Some<A>


import { findFirst } from 'fp-ts/lib/Array'
import { some } from 'fp-ts/lib/Option'

let list: number[] = [1, 2, 3, 4, 5];

console.log(
  findFirst(
    function(x: { a: number; b: string }):boolean  { return x.b === '2' })
    ([ { a: 1, b: '4' }, { a: 2, b: '2' }])
  )

// console.log(some({ a: 1, b: 1 }))


// A, B extends A
interface Animal {
  age: number,
  name: string
}

interface Dog extends Animal {
  foots: number
}

let animal01 : Animal = { name: 'animal01', age: 20 };
let listDog : Dog[] = [{ name: 'dog01', age: 22, foots: 4 }, { name: 'dog02', age: 25, foots: 5 }];

// export declare function findFirst<A, B extends A>(refinement: Refinement<A, B>): (as: Array<A>) => Option<B>
// export interface Refinement<A, B extends A> {
//   (a: A): a is B
// }

// console.log(
//   findFirst<Animal, Dog>(
//     (animalTmp: Dog): animalTmp is Dog => animalTmp.age === 22 )
//     (listDog)
//   )


//   function isFish(pet: Animal): pet is Dog {
//     return false;
// }
// if (isFish(dog02)) {
//   console.log(isFish(animal01));
//   console.log(dog02.age);
// }


import { Functor1 } from 'fp-ts/lib/Functor'

export const URI = 'Response'

export type URI = typeof URI
console.log(typeof URI)

declare module 'fp-ts/lib/HKT' {
  interface URItoKind<A> {
    Response: Response<A>
  }
}

export interface Response<A> {
  url: string
  status: number
  headers: Record<string, string>
  body: A
}

function map<A, B>(fa: Response<A>, f: (a: A) => B): Response<B> {
  return { ...fa, body: f(fa.body) }
}

// functor instance for `Response`
export const functorResponse: Functor1<URI> = {
  URI,
  map
}

