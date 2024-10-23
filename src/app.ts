//
//  Using JavaScript (!) Libraries with TypeScript
//

import _ from 'lodash';

console.log(_.shuffle([1, 2, 3]));

//
//  Using "declare" as a "Last Resort"
//

declare var GLOBAL: string; // see index.html
console.log(GLOBAL);

//
//   No Types Needed: class-transformer
//

import { Product } from './product.model';

const products = [
  { title: 'A Carpet', price: 29.99 },
  { title: 'A Book', price: 10.99 },
];


// Option 1
const loadedProducts = products.map((prod) => {
  return new Product(prod.title, prod.price);
});

for (const product of loadedProducts) {
  console.log(product.getInformation());
}

// Using a third-party library
import "reflect-metadata";
import { plainToInstance } from 'class-transformer';

const loadedProducts2 = plainToInstance(Product, products);

for (const product of loadedProducts2) {
  console.log(product.getInformation());
}

//
//   TypeScript-embracing: class-validator
//

const newProduct = new Product('', -5.99);

import { validate } from 'class-validator';

validate(newProduct).then(errors => {
  if (errors.length > 0) {
    console.log('VALIDATION ERRORS');
    console.log(errors);
  }
  console.log(newProduct.getInformation());
});