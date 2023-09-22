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

function calculateTax(income: number , taxYear = 2022): number{
    
    if (taxYear  < 2022)
        return income * 1.2;
        return income * 1.3;
}   
calculateTax(10_000, 2022, 1);