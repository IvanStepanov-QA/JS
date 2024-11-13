// Напишите валидационный скрипт используя функции 

//  1. Скрипт должен на вход принимать строку.
//  2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
//  3. Минимум 5 символов в строке
//  4. Максимум 64 символа в строке
//  5. В строке должны быть буквы
//  6. Должна быть хотя бы одна буква в верхнем регистре
//  7. Должна быть хотя бы одна цифра
//  8. Должна быть хотя бы одна @
//  9. Строка не должна быть пустой

function checkString(string1) {
    if (typeof string1 !== "string" || string1.trim() === "") {
        console.log("Строка не должна быть пустой и должна быть текстом.");
        return;
    }

    checkMin(string1);
    checkMax(string1);
    checkABC(string1);
    checkUppercase(string1);
    checkDigit(string1);
    checkAtSymbol(string1);
}

function checkMin(string1) {
    if (string1.length < 5) {
        console.log("Минимум 5 символов в строке");
    }
}

function checkMax(string1) {
    if (string1.length > 64) {
        console.log("Максимум 64 символа в строке");
    }
}

function checkABC(string1) {
    if (!/[a-zа-яё]/i.test(string1)) {
        console.log("В строке должны быть буквы");
    }
}

function checkUppercase(string1) {
    if (!/[A-ZА-ЯЁ]/.test(string1)) {
        console.log("Должна быть хотя бы одна буква в верхнем регистре");
    }
}

function checkDigit(string1) {
    if (!/\d/.test(string1)) {
        console.log("Должна быть хотя бы одна цифра");
    }
}

function checkAtSymbol(string1) {
    if (!/@/.test(string1)) {
        console.log("Должен быть хотя бы один символ '@'");
    }
}

// Пример вызова функции
checkString(" d");  // Пример, когда строка не соответствует требованиям
checkString("Пример123@");  // Пример, когда строка соответствует требованиям