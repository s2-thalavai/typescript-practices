// let message: string = 'Hello World';
// console.log(message);

const world = 'world';

export function hello(who: string = world): string {
    return `Hello ${who}! `;
}

console.log(hello('world'));