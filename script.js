/* js block 1 start */
age = prompt('Введите свой возраст__')

if (age > 0 && age <= 18) {
    alert('Вы еще молоды. Вам нужно учиться')
} else if (age == 0) {
    alert('Тогда вы еще не родились 😂')
} else if (age > 18 && age <= 50) {
    alert('Вам нужно работать');
} else if (age > 50 && age <= 59) {
    alert('Вам скоро на пенсию');
} else if (age > 59 && age <= 150) {
    alert('Вы пенсионер');
} else if (age > 150) {
    alert('Скорее всего уже вас нет в живых 😂');
} else {
    if(isNaN(age)) {
        alert('НЕ ПРАВИЛЬНО...( Введите пожалуйста возраст 🤨')
    }
}
