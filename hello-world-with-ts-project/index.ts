const world = 'world with ts config';

export function hello(who: string = world): string {
    return `Hello ${who}! `;
}

console.log(hello('world with ts config'));