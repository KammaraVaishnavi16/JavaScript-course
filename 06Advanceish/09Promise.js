// Promises - resolve, reject, async, await

//Promise - this will be having two states :
//fullfilled
//Not fullfilled
const uno = () => {
  return `This is one`;
};

// const dos = () => {
//   setTimeout(() => {
//     return `This is two`;
//   }, 1000);
// };

const dos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`This is two`);
    }, 2000);
  });
};

const tres = () => {
  return `This is three`;
};

const callMe = async () => {
  let valOne = uno();
  console.log(valOne);
  let valTwo = await dos();
  console.log(valTwo);
  let valThree = tres();
  console.log(valThree);
};

callMe();
