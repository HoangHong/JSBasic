/**
 * 
 * switch........ case
 * 
 * syntax 
 * switch(expression) {
 *      case value1: 
 *          // do something
 *          break;
 *      case value2: 
 *          // do something
 *          break;
 *      ...
 *      default: 
 *          // do something
 *          break;
 * 
 * }
 */
// bronze(đồng) 2%, silver(bạc) 5%, gold 8%, diamond 10%
let memberCard = {
    tier: 'silver'
}
function getTotal(price, card) {
    let discountRate;
    switch(card.tier) {
        case 'bronze': 
            discountRate = 0.02;
            break;
        case 'silver':
            discountRate = 0.05;
            break;
        case 'gold':
            discountRate = 0.08;
            break;
        default: 
            discountRate = 0.1;
            
    }
    return price * (1 - discountRate);
}
console.log(getTotal(500000, memberCard));

// example 2

// red, orange, green
let trafficLight = 'orange';

function goOrNot(lightValue) {
    switch(lightValue) {
        case 'green': 
            console.log('go');
            break;
        case 'orange': 
        case 'red':
            console.log('stop');
            break;
    }
}

goOrNot(trafficLight);

// bt:
// 1. list students
// 2. create a new student
//3.save & exit