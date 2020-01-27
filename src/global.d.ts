declare type Car = { make: string, year_made: number }; 
declare type Person = { name: string, age: number };

declare type Entities<T extends Car | Person> = T extends Car | Person ? T[] :  unknown;