import orderbyprops from './orderbyprops';
import destructuring from './destructuring';
import Validator from './validator';
import ErrorRepository from './errorRepository';

window.errorRepository = new ErrorRepository();
window.validator = new Validator();
window.orderbyprops = orderbyprops;
window.destructuring = destructuring;
