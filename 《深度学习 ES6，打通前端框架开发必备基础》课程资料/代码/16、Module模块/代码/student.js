//  let userName = 'zs';
//  let userAge = 18;
//  export function add(num1, num2) {
//      return num1 + num2;
//  }
//  export { userName, userAge }

// let userName = 'zs';
// let userAge = 18;
// export { userName, userAge }
// export default function add(num1, num2) {
//     return num1 + num2;
// }

export default class Person {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    getShow() {
        return this.num1 + this.num2;
    }
}