function calcAge(years) {
    return `
        Daqui a ${years} anos, ${this.name} terá ${this.age + years} anos de idade.
    `
}


const person1 = {
    name: "Alair",
    age: 30
}

const person2 = {
    name: "Brian",
    age: 31
}

const person3 = {
    name: "Thiago",
    age: 8
}


console.log(calcAge.call(person3, 10));

console.log(calcAge.apply(person2, [9]));