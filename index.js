function iWillDefinitelyHaveConflicts(a, b) {
  const iWillCreateConflicts = () => {
    return a + b + 1;
  }
  
  return iWillCreateConflicts();
}

console.log(iWillDefinitelyHaveConflicts(10, 12));
console.log(iWillDefinitelyHaveConflicts(10, 12));