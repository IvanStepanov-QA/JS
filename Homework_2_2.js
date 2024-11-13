// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
function checkAge(age) {
    let age_min = 18, age_max = 60;
    if (Number.isInteger(age)) {
        if (age < age_min) {
            console.log("You don’t have access cause your age is " + age + ". It’s less then " + age_min)
        } else if (age >= age_min & age < age_max) {
            console.log("Welcome")
        } else if (age > age_max) {
            console.log("Keep calm and look Culture channel")
        } else {
            console.log("Technical work")
        }
    }
    else {
        console.log("Error")
    }
}
// Вывести в консоль результат работы функции с возрастами 17, 18, 61
checkAge(17);
checkAge(18);
checkAge(61);
checkAge("61");
