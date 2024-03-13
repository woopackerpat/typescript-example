// let aNumber: number = 5;
// const bString: string = "Hello";
// const cBoolean: boolean = true;
// const dUndefined: undefined = undefined;
// const eObject: object = {};
// const fArray: object = [];
// const gNull: null = null;

// let hAny: any = "Hello";
// hAny = 5;

// let a = 5;

// a = "hello";

// aNumber.toString();
// bString.split("");

// การสร้าง Function

// function myFunction1(name: string): string {
//   return `My name is ${name}`;
// }

// const myFunction2 = (age: number): string => {
//   return `I am ${age} years old`;
// };

// const myUnknownFunc = (text: unknown): void => {
//   if (typeof text === "number") {
//     text.toString();
//   }
//   console.log(text);
// };

// Exercise 1

// const concatString = (str1: string, str2: string): string => {
//   return str1 + str2;
// };

// const convertToNumber = (str: string): number => {
//   if (!isNaN(Number(str))) {
//     return Number(str);
//   }

//   return -1;
// };

// const findMax = (num1: number, num2: number, num3: number): number => {
//   return Math.max(num1, num2, num3);
// };

// const compare = (a: number, b: number): boolean => {
//   return a > b;
// };

// const add = (a: number, b: number, c?: number): number => {
//   if (!c) {
//     if (!isFinite(a) || !isFinite(b)) {
//       return -1;
//     }

//     return a + b;
//   }

//   if (!isFinite(a) || !isFinite(b) || !isFinite(c)) {
//     return -1;
//   }

//   return a + b + c;
// };

// const isNullorUndefined = (value: unknown) => {
//   if (value === null || value === undefined) {
//     return -1;
//   }

//   return 1;
// };

// type Eobject = { id: number; text: string; isDone: boolean };

// const eObject: Eobject = {
//   id: 5,
//   text: "Hello",
//   isDone: true,
// };

// const aArray: string[] = [];

// aArray.push("Hello");

// const cTuple: [string, number] = ["Hello", 5];

// enum Gender {
//   MAN,
//   WOMAN,
//   OTHER,
// }

// const showMyGender = (gender: Gender) => {
//   console.log(gender);
// };

// showMyGender(Gender.MAN);

// const combineArrays = (arr1: number[], arr2: number[]): number[] => {
//   const combinedArray = [...arr1, ...arr2];

//   combinedArray.sort((a, b) => a - b);

//   return combinedArray;
// };

// const double = (arr: number[]): number[] => {
//   return arr.map((el) => el * 2);
// };

// const doSth = (arr: number[], func: (arr: number[]) => number[]) => {
//   return func(arr);
// };

// const array = [1, 2, 3];

// doSth(array, double);

// type Person = {
//   name: string;
//   age: number;
//   isPremium: boolean;
// };

// const hasPremium = (person: Person): string => {
//   return `${person.name} อายุ ${person.age} และ ${
//     person.isPremium ? "มี" : "ไม่มี"
//   } การเข้าถึงแบบพรีเมียม`;
// };

// enum UserRole {
//   ADMIN = 1,
//   USER,
//   GUEST,
// }

// const greetingRole = (role: UserRole) => {
//   if (role === UserRole.ADMIN) {
//     return "Welcome Admin";
//   }

//   if (role === UserRole.USER) {
//     return "Hello, User";
//   }

//   if (role === UserRole.GUEST) {
//     return "Greeting, Guest";
//   }

//   return "Role not recognized";
// };

// Union

// type Person = {
//   name: string;
//   age: number;
//   isPremium: boolean;
// };

// type Creature = {
//   name: string;
//   type: string;
// };

// type PersonCreature = Person | Creature;

// const personCreature: PersonCreature = {
//   name: "Woody",
//   type: "Human",
// };

// const logMessage = (message: string | number): void => {
//   if (typeof message === "number") {
//     console.log(String(message));
//   }
//   console.log(message);
// };

// Intersection

// type Person = {
//   name: string;
//   age: number;
//   isPremium: boolean;
// };

// type Creature = {
//   name: string;
//   type: string;
// };

// type PersonAndCreature = Person & Creature;

// const personAndCreature: PersonAndCreature = {
//   name: "Woody",
//   age: 30,
//   isPremium: true,
//   type: "Human",
// };

// Literal type
// type GenderLiteral = "man" | "woman" | "other";

// const gender: GenderLiteral = "woman";

// Exercise 3

// type Product = {
//   id: number;
//   name: string;
//   price: number;
//   available: boolean;
// };

// type Person = {
//   name: string;
//   age: number;
// };

// type Employee = {
//   company: "A" | "B";
// };

// type EmployeeDetails = Person & Employee;

// const employee: EmployeeDetails = {
//   name: "Woody",
//   age: 30,
//   company: "A",
// };

// type Size = "small" | "medium" | "large";

// let value: number | string;

// value = "Hello";

// let strLength = (value as string).length;

// const neverReturn = (): never => {
//   while (true) {}
// };

// Exercise 4

// type Brand = { name: string; value: number };

// const calCompanyValue = (name: string, age: number, asset: number): Brand => {
//   return {
//     name: name,
//     value: asset * (1 + age / 100),
//   };
// };

// const move = (direction: "left" | "right" | "up" | "down"): string => {
//   if (
//     direction === "left" ||
//     direction === "right" ||
//     direction === "up" ||
//     direction === "down"
//   ) {
//     return `Move ${direction}`;
//   } else {
//     const _exgaustiveCheck: never = direction;
//     return _exgaustiveCheck;
//   }
// };

// Typescript OOP

// class Person {
//   name: string;
//   email: string;

//   constructor(name: string, email: string) {
//     this.name = name;
//     this.email = email;
//   }

//   dance() {
//     console.log(`${this.name} is dancing`);
//   }
// }

// const person = new Person("Woody", "mail.com");

// console.log(person instanceof Person);

// class Person {
//   readonly id: number;
//   public name: string;
//   private _email: string;
//   public nickName?: string;

//   constructor(name: string, email: string, nickName?: string) {
//     this.id = new Date().getTime();
//     this.name = name;
//     this._email = email;

//     if (nickName) {
//       this.nickName = nickName;
//     }
//   }

//   dance() {
//     console.log(`${this.name} is dancing`);
//   }
// }

// const person = new Person("Woody", "mail.com");

// console.log(person.email);

// class Person {
//   readonly id: number;

//   constructor(
//     public name: string,
//     private _email: string,
//     public nickName?: string
//   ) {
//     this.id = new Date().getTime();
//   }

//   get email() {
//     return this._email;
//   }

//   set email(newEmail: string) {
//     if (newEmail.includes("@")) {
//       this._email = newEmail;
//     }
//   }

//   dance() {
//     console.log(`${this.name} is dancing`);
//   }
// }

// const person = new Person("Woody", "mail.com");

// person.email = "CCmail";

// console.log(person.email);

// Static member

// class Car {
//   public static totalStock: number = 0;
//   private _brand: "HONDA" | "TOYOTA";

//   constructor(brand: "HONDA" | "TOYOTA") {
//     this._brand = brand;
//   }

//   add() {
//     Car.totalStock++;
//   }

//   get brand() {
//     return this._brand;
//   }
// }

// const car1 = new Car("HONDA");
// const car2 = new Car("TOYOTA");

// car1.add();
// car1.add();

// car2.add();

// console.log(Car.totalStock);

// console.log(car1.brand);
// console.log(car2.brand);

// Exercise 5

// class Person {
//   name: string;
//   private _age: number;
//   private _secret: string;

//   constructor(name: string, age: number) {
//     this._secret = "mySecret";
//     this.name = name;
//     this._age = age;
//   }

//   getSecret() {
//     return this._secret;
//   }

//   get age() {
//     return String(this._age);
//   }

//   set age(age: string) {
//     if (age && !isNaN(Number(age))) {
//       this._age = Number(age);
//     }
//   }
// }

// const person = new Person("Woody", 30);

// person.age = "dddd";

// console.log(person.age);

// Extend class

// abstract class Animal {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }

//   makeSound() {
//     console.log(`Animal name ${this.name} make sound`);
//   }
// }

// // const animal = new Animal("Ho");

// class Dog extends Animal {
//   type: string;
//   breed: string;

//   constructor(breed: string, name: string) {
//     super(name);
//     this.type = "DOG";
//     this.breed = breed;
//   }

//   makeSound() {
//     console.log(`Animal name ${this.name} is barking`);
//   }
// }

// const dog = new Dog("Golden", "Ho");

// dog.makeSound();

// interface InterfaceAnimal {
//   name: string;
//   makeSound: () => void;
// }

// class Dog implements InterfaceAnimal {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   makeSound() {
//     console.log(`Dog name ${this.name} is barking`);
//   }
// }

// Exercise 6

// interface Account {
//   accountNumber: number;
//   balance: number;
//   deposite: (amount: number) => number;
//   withdraw: (amount: number) => number;
// }

// class BaseAccount implements Account {
//   accountNumber: number;
//   balance: number;

//   constructor(acountNumber: number, balance: number) {
//     this.accountNumber = acountNumber;
//     this.balance = balance;
//   }

//   deposite(amount: number) {
//     this.balance = this.balance + amount;
//     return this.balance;
//   }

//   withdraw(amount: number) {
//     this.balance = this.balance - amount;
//     return this.balance;
//   }
// }

// class SavingsAccount extends BaseAccount {
//   interestRate: number;
//   withdrawLimit: number;

//   constructor(
//     accountNumber: number,
//     balance: number,
//     interestRate: number,
//     withdrawLimit: number
//   ) {
//     super(accountNumber, balance);

//     this.interestRate = interestRate;
//     this.withdrawLimit = withdrawLimit;
//   }

//   withdraw(amount: number) {
//     if (amount > this.withdrawLimit) {
//       console.log("Withdraw amount exceed withdraw limit");
//     } else if (this.balance - amount < 0) {
//       console.log("Withdrawl would result in balance falling");
//     }

//     return this.balance;
//   }
// }

// function getFirstElement<T>(array: T[]): T {
//   return array[0];
// }

// type Product = {
//   id: number;
//   title: string;
// };

// const products: Product[] = [
//   { id: 1, title: "Computer" },
//   { id: 2, title: "Mouse" },
// ];

// getFirstElement<Product>(products);

// const getSecondElement = <T>(array: T[]): T => {
//   return array[1];
// };

// class Queue<T> {
//   data: T[] = [];

//   enqueue(item: T) {
//     this.data.push(item);
//   }

//   dequeue() {
//     this.data.shift();
//   }
// }

// type CreatePerson = {
//   name: string;
//   age: number;
// };

// type Optional<T> = {
//   [P in keyof T]?: T[P];
// };

// type UpdatePerson = Optional<CreatePerson>;

// const toUpdatePerson: UpdatePerson = { name: "test" };
