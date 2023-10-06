var Counter = (n) => {
  let count = n;
  return () => {
    return count++;
  };
};

console.log(Counter(10));
// Counter();
// Counter();
