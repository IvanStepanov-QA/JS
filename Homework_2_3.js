// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
function checkAge(age) {
    let age_min = 18, age_max = 60;
    age = Number(age);
    if (Number.isNaN(age)) {
        console.log("Error")
    } else {
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
}
// Вывести в консоль результат работы функции с возрастами 17, 18, 61
checkAge(17);
checkAge(18);
checkAge(61);
checkAge("61");
checkAge("61!");
checkAge("привет!");