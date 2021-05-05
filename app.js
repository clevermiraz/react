// // #1.variable
// function sayHello() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
//     // console.log(i);
// }

// sayHello();

// // var -> function
// // let -> block  # use let when only re_assign that variable
// // const -> block(for define constant) after cann't be re_assign.
// // we should always use let or const

// // #2. objects

// const person = {
//     name: 'Miraz',
//     walk() {}, //this is a method
//     talk() {}
// };

// person.talk();
// person.name = '';

// const targetMember = 'name';
// person['name'] = 'Jhon';

// // #3. the 'this' keyword
// const person = {
//     name: 'Miraz',
//     walk() {
//         console.log(this);
//     },
// };

// person.walk();
// const walk = person.walk;
// walk();

// // #4. binding this

// const person = {
//     name: 'Miraz',
//     walk() {
//         console.log(this);
//     },
// };

// person.walk();
// const walk = person.walk.bind(person);
// walk();

// // #5. Arrow function
// // const square = function (number) {
// //     return number * number;
// // };

// // const square2 = (number) => number * number;

// // console.log(square(5));
// // console.log(square2(5));

// const jobs = [{
//         id: 1,
//         isActive: true,
//     },
//     {
//         id: 2,
//         isActive: true,
//     },
//     {
//         id: 2,
//         isActive: false,
//     },
// ];

// // const activeJobs = jobs.filter(function (job) { return job.isActive; });
// const activeJobs = jobs.filter(job => job.isActive);

// console.log(activeJobs);


// // #6. Arrow functions and this
// const person = {
//     talk() {
//         // let self = this;
//         setTimeout(() => {
//             console.log('this', this);
//         }, 1000);
//     }
// };

// person.talk()
// // arrow function don't re_bind this keyword



// //#7. Array.map()
// const colors = ['red', 'green', 'blue'];
// const items = colors.map(color => `<li>${color}</li>`);

// console.log(items);


// // #8. object destructuring
// const address = {
//     street: 'ny-bronx',
//     city: 'ny',
//     country: 'us',
// };
// // // normal way
// // const street = address.street;
// // const city = address.city;
// // const country = address.country;

// // advance way 
// const { street, city, country } = address;
// const { street: st } = address;

// console.log(city);
// console.log(st);
// console.log(street);


// // #9. spread oparator
// const first = [1, 2, 3]; //this is Array
// const second = [4, 5, 6];

// // const combined = first.concat(second); //advance_level
// const combined = [...first, ...second, 'a'];  // pro😎

// const clone = [...first];

// console.log(combined);
// console.log(clone);
// //and we can same thing with object(usually we know dictionary in python😋)
