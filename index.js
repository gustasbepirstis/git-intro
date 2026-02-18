function iWillDefinitelyHaveConflicts(a, b) {
  const iWillCreateConflicts = () => {
    return a + b;
  }
  
  return iWillCreateConflicts();
}

console.log(iWillDefinitelyHaveConflicts(10, 12));
console.log(iWillDefinitelyHaveConflicts(10, 12));