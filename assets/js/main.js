console.log('Sample JavaScript #3 HW #17');
console.log('===================')

/*
 * #1
 *
 * Создайте функцию counter(), которая должна реализовать счетчик с помощью замыкания:
 * функция может принимать число в качестве аргумента counter(n)
 * если число передано в функцию – счет начинается с указанного числа
 * если нет – то счет продолжается
 */

let counter = (function () {
    let count = 0;

    return function (num) {
        count = num === undefined ? count : num;

        return count++;
    };
}());

console.log(counter());
console.log(counter());
console.log(counter(350));
console.log(counter());
console.log(counter());
console.log(counter(22));
console.log(counter());
console.log(counter(33));
console.log(counter(1));
console.log(counter());
console.log(counter());

console.log('===================')



/*
 * #2
 *
 * Создайте функцию counting, которая должна реализовать три метода с помощью замыкания:
 * первоначальное значение счетчика – 0
 * counting.value() – возвращает значение счетчика
 * counting.value(n) – устанавливает значение счетчика, возвращает новое значение
 * counting.increment() – увеличивает значение счетчика на 1
 * counting.decrement() – уменьшает значение счетчика на 1
 */

let counting = (function () {
    let count = 0;

    return {
        value(num) {
            if (num !== undefined) count = num;

            return count;
        },
        decrement() {
            count--;
        },
        increment() {
            count++;
        }
    };
}());

console.log(counting.value());
counting.increment();
counting.increment();
counting.increment();
console.log(counting.value());
counting.decrement();
counting.decrement();
console.log(counting.value());
console.log(counting.value(50));
counting.decrement();
console.log(counting.value());
console.log(counting.value(100));
counting.increment();
console.log(counting.value());

console.log('===================')

/*
 * #3
 *
 * Создайте функцию myPow(a, b, myPrint). Внутри реализуйте рекурсию для подсчета результата возведения числа a в степень b.
 * функция myPrint(a, b, res) – глобальная функция, которая должна генерировать из параметров a, b, res строку вида 'a^b=res' и возвращать ее
 * myPrint() должна быть передана в myPow() как параметр и вызвана внутри как callback-функция
 * функция myPow() в качестве возвращаемого значения принимает результат myPrint()
 * Например:
 * console.log(myPow(3, 4, myPrint)); // 3^4=81
 * console.log(myPow(2, 3, myPrint)); // 2^3=8
 */

let myPrint = (a, b, res) => `${a}^${b}=${res}`;
let myPow = (a, b, callback) => {
    let pow = (x, n) => {
        if (n !== 1) return x *= pow(x, n - 1);

        return x;
    };

    return callback(a, b, pow(a, b));
};

console.log(myPow(3, 4, myPrint));
console.log(myPow(2, 3, myPrint));

/*
 * #4
 *
 * Создайте несколько однотипных объектов для описания автомобиля. Соблюдайте следующие правила, используйте следующие поля:
 * имя объекта car – обязательно и необходимое для тестирования, дальнейшее именование объектов – на ваше усмотрение
 * car.engine – объем двигателя, числовое поле
 * car.model – модель авто, строка
 * car.name – бренд авто, строка
 * car.year – год выпуска, число
 * car.used – строка для описания состояния авто, допускаются значения 'used' и 'new'
 *
 * #5
 *
 * Для созданных ранее объектов определите метод info(), используя ключевое слово this.
 * данный метод должен формировать и возвращать строку с полной информацией об автомобиле, например:
 * Chevrolet Lacetti, 2000cc, year 2010, used
 * Infinite FX50 AWD, 5000cc, year 2019, new
 * пробелы, запятые, символы cc и текст – имеют значение и проверяются при тестировании кода
 *
 * #6
 *
 * Для созданных ранее объектов измените свойство used, используя аксессоры (геттер и сеттер).
 * - используйте текущий год либо непосредственно в своем коде, либо с помощью глобальной переменной, например, yearNow
 * - если год выпуска автомобиля отличается от текущего года, геттер used должен выводить текст 'used'
 * - если год выпуска автомобиля совпадает с текущим годом, геттер used должен выводить текст 'new'
 * - если сеттеру used присвоено значение 'new', при этом года выпуска автомобиля отличается от текущего года,
 * - необходимо изменить год выпуска автомобиля, установив в качестве значения текущий год
 * - если сеттеру used присвоено значение 'used', ничего делать не нужно
 */

function fullInfo() {
    return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
}

let yearNow = new Date().getFullYear();
let car = {
    engine: 2000,
    model: 'Lacetti',
    name: 'Chevrolet',
    year: 2010,
    info: fullInfo,
    get used() {
        return this.year !== yearNow ? 'used' : 'new';
    },
    set used(value) {
        if (value === 'new' && this.year < yearNow) this.year = yearNow;
    }
};
let car2 = {
    engine: 5000,
    model: 'FX50 AWD',
    name: 'Infinite',
    year: 2019,
    info: fullInfo,
    get used() {
        return yearNow - this.year ? 'used' : 'new';
    },
    set used(value) {
        if (value === 'new' && this.year < yearNow) this.year = yearNow;
    }
};

console.log(car.info());
car.used = 'new';
console.log(car.info());
car.used = 'used';
console.log(car.info());
console.log(car2.info());
car.used = 'used';
console.log(car2.info());

/*
 * #7
 * Создайте функцию myMax(arr), которая в качестве параметра принимает
 * произвольный числовой массив и возвращает максимальное число из переданного ей массива.
 * В реализации функции должен быть применен метод Math.max() и apply().
 */

// let list = [12, 23, 100, 34, 56, 9, 233];

// console.log(myMax(list)); // 233

/*
 * #8
 *
 * Создайте функцию myMul(a, b), которая будет умножать числа а и b, возвращая результат.
 */

/*
 * создайте функции myDouble(n), которая принимает один параметр и  удваивает его.
 * Использовать умножение или другие математические операции внутри функции – запрещено, только bind() и myMul().
 * Функция возвращает результат вычисления.
 */

// console.log(myDouble(3)); // = myMul(2, 3) = 6

// console.log(myDouble(4)); // = myMul(2, 4) = 8

// console.log(myDouble(5)); // = myMul(2, 5) = 10

// аналогичным образом создайте функцию myTriple(n), которая утраивает принимающий параметр, возвращая результат.

// console.log(myTriple(3)); // = myMul(3, 3) = 9

// console.log(myTriple(4)); // = myMul(3, 4) = 12

// console.log(myTriple(5)); // = myMul(3, 5) = 15

/*
 * #9
 *
 * Постройте функцию myUniq(arr), которая будет принимать произвольный массив
 * повторяющихся примитивных значений (например, имена пользователей или числа ).
 * Функция должна вернуть коллекцию уникальных значений.
 * В реализации разрешено использование set.
 * Любые условные операторы – запрещены и объекты.
 */

// let notUniqNums = [1, 1, 2, 3, 4, 5, 6, 7];

// let notUniqStrings = ['Bob', 'Kate', 'Jhon', 'Tom', 'Jhon', 'Kate', 'Tom', 'Bob', 'Jhon', 'Tom'];

// console.log(myUniq(notUniqNums));

// console.log(myUniq(notUniqStrings));