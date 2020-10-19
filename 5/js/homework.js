/*1. getSportTypes
2. оформить в виде функции game
3. сумма чисел от 1 до 10 рекурсивным способом
*/

console.log("******************** Sport Types ********************");

(function(){
    let foodProducts = {
        "Картофельное пюре" :   90,
        "Курица"            :   241,
        "Помидоры"          :   23,
        "Компот"            :   60,
        "Сметана"           :   210
    };
    function getProductCals(title, weight){
        let cals = 0;
            if(foodProducts[title]){
                cals = foodProducts[title] * weight / 100;
            }
            else{
                console.log(`Продукта ${title} нет в нашей БД. Проверьте, пожалуйста, название продукта`);
            }
            return cals;
        };
    function getDinnerCals(dinner){
        let dinnerCals = 0;
        for(title in dinner){
            dinnerCals += getProductCals(title, dinner[title]);
        }
        return Math.round(dinnerCals);
    }
    let myDinner = {
        "Картофельное пюре" :   200,
        "Курица"            :   150,
        "Помидоры"          :   200,
        "Компот"            :   30,
        "Сметана"           :   150
    };
    let SportTypes = {
        "Прогулка" : 204,
        "Езда на велосипеде" : 292,
        "Бег" : 606,
        "Плаванье"  : 423,
        "Йога" : 175,
        "Пилатес" : 280,
        "Прыжки на скакалке" : 800
    };
    let calsToBurn = getDinnerCals(myDinner);
    console.log("Обед:", calsToBurn, "ккал");

    function getActivityTime(calsToBurn, activityType){
        return Math.round((calsToBurn / SportTypes[activityType]) * 60);
    }
    for(type in SportTypes){
        console.log("Чтобы сжечь", calsToBurn, "ккал", "рекомендуется занятие:", type, getActivityTime(calsToBurn, type), "минут");      
    }
}());

console.log("******************** Game ********************");
const   ANSWERS = ["rock", "paper", "scissors"],
        TABLE           = {
            "rock"      : {
                "rock"      : 0,
                "paper"     : -1,
                "scissors"  : 1
            },
            "paper"     : {
                "rock"      : 1,
                "paper"     : 0,
                "scissors"  : -1
            },
            "scissors"  : {
                "rock"      : -1,
                "paper"     : 1,
                "scissors"  : 0
            }
        },
        MESSAGES = {
            "-1" : "победа",
            "0"  : "ничья",
            "1"  : "проигрыш"
        };

function getComputerAnswer(){
    let M = 0,
        N = ANSWERS.length - 1,
        randIndex = Math.floor(Math.random() * (N - M + 1)) + M,
        computerAnswer  = ANSWERS[randIndex];
        return computerAnswer;
}
function gameResult(userAnswer, computerAnswer){
    return MESSAGES[TABLE[userAnswer][computerAnswer]];
}
let userAnswer = "scissors",
    computerAnswer = getComputerAnswer();
    
console.log(userAnswer, computerAnswer, gameResult(userAnswer, computerAnswer));

console.log("******************** Сумма чисел ********************");

function factorial(N){
    return N <= 1 ? 1 : N+factorial(N-1);
};
console.log(factorial(10));