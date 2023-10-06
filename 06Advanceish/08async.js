//concurrency model and event loop

const uno = () => {
  console.log(`This is one`);
};

const dos = () => {
  setTimeout(() => {
    console.log(`wohoooo`);
  }, 1000);
  console.log(`This is two`);
};

const three = () => {
  console.log(`This is three`);
};

uno();
dos();
three();
