'use strict';

console.log('Start');

setTimeout(() => console.log('Stop'), 500);

const obj = {
  name: 'Kolyan',
  age: 18
};

const fn = object => {
  const { name, age } = object;
  console.log(`Hello, ${name}. \nYour age ${age}`);
};

fn(obj);
