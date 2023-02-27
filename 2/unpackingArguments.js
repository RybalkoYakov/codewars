function spread(func, args) {
  return func(...args);
}

function someFunction(...args) {
  console.log(args);
}

spread(someFunction, [1, true, "Foo", "bar"] )