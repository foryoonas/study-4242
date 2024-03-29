//월을 영어로 변환한다.(11->'November')
var month = 11;
var monthName;

switch (month) {
    case 1: monthName='January';
    break;
    case 2: monthName='February';
    break;
    case 3: monthName='March';
    break;
    case 4: monthName='April';
    break;
    case 5: monthName='May';
    break;
    case 6: monthName='june';
    break;
    case 7: monthName='july';
    break;
    case 8: monthName= 'August';
    break;
    case 9: monthName='september';
    break;
    case 10: monthName='October';
    break;
    case 11: monthName='November';
    break;
    case 12: monthName='December';
    break;
    default: monthName='Invalid month';
}
console.log(monthName);