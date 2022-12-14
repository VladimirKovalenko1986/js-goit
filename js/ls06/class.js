// !==================!=====================!
// Методи this

function foo(num) {
    console.log('foo:', num);

    this.count++;
}

foo.count = 0;

foo(5);
foo(10);
foo(12);
foo(22);

console.log(foo.count);
