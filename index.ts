// let age: number = 20;
// if (age < 50)
//     age += 10;
// console.log(age);

// let sales = 12_4434_432;
// let course = 'typescript';
// let is_published = true;
// let level;
// level = 1;
// level = 'a';

// function render(document ) {
//     console.log(document);
// }


// let numbers: number[] = [];
// numbers[0] = 1;
// numbers.forEach(n => n.)

//1, 'mosh'
// let user: [number, string] = [1, 'Mosh'];
// user.push(1);

// const small = 1;
// const medium = 2;
// const large = 3;

//pascal Case
// enum Size { small = 1, medium, large };
// let mySize: Size = Size.medium;
// console.log(mySize)

// function calculateTax(income: number , taxYear = 2022): number{
    
//     if (taxYear  < 2022)
//         return income * 1.2;
//         return income * 1.3;
// }
// calculateTax(10_000, 2022, 1);
 
// let a: string[] = ['2', '3']

// interface Student {
//     name: string,
//     age: number
// }

// let person: Student = {
//     name: '2',
//     age: 3
// }

// let student = {
//     name: 'dave',
//     age: 18
// }

// type Employee = {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
    

// }
// let employee: Employee = {
//     id: 1,
//     name: 'mosh',
//     retire: (date: Date) => {
//         console.log(date);
//     }
// };

// function kgTolbs(weight: number | string): number{
//     //Narrowing
// if (typeof weight === 'number')
//     return weight * 2.2;
// else
//     return parseInt(weight) * 2.2;
// }

// kgTolbs(10);
// kgTolbs('10kg');


// type Draggable = {
//     drag: () => void
// };

// type Resizable = {
//     resize: {} => void
// };

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//     drag: () => {},
//     resize: () => {}
// }

// type Quantity = 50 | 100;
// let quantity: Quantity = 100;
 
// function greet(name: string | null | undefined ) {
//     if (name)
//         console.log(name.toUpperCase());
//     else
//         console.log('Hola!');
// }
// greet(undefined);


// type Customer = {
//     birthday?: Date
// };

// function getCustomer(id: number): Customer | null |undefined{
//     return id === 0 ? null : { birthday: new Date() };
// }
// let customer = getCustomer(0);
// optional property access operator
// console.log(customer?.birthday?.getFullYear());

//optionaal element access operator
//if (customers !== null && customers !== undefined)
//customers[0]