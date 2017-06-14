'use strict';

//__способы импортировать, исходя из саособа экспорта (см.файл notify.js)
//__1.
//import notify from './Notify';

//__2.
//import {notify, log} from './Notify';

//__3.
import notify from './Notify';

// notify('Hello, I\'m alert');
// log('Hello, I\'m console log')

//__для третьего случая мы получим объект, поэтому обращаться к функциям внутри будем как к методам объекта
//console.log(notify);
notify.announce('I\'m alert');
notify.log('I\'m console log');

//__подключим css:
require('./main.css');
