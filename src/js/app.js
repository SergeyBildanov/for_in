// TODO: write your code here
import orderByProps from './for_in';

console.log('worked');

console.log(orderByProps({
    name: 'мечник', 
    health: 10, 
    level: 2, 
    attack: 80, 
    defence: 40
}, ["name", "level"]));
