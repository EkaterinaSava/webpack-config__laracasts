'use strict';

//__например, добавим класс Form и посмотрим, что с ним сделает babel при сборке
class Form {

  constructor() {
    alert('Yay!');
  }

}

new Form();
