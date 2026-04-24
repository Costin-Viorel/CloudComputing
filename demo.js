function testFunction (param) {
    if (param === true) {
        var var1 = 2;
        let let1 = 3;
        const const1 = 4;
    }

    console.log(var1);
    console.log(let1);
    console.log(const1);
}

// testFunction(true);

function testFunction2 (param) {
    if (param === true) {
        var var1 = 2;
        let let1 = 3;
        const const1 = 4;
    }

    console.log(var1);
    console.log(let1);
    console.log(const1);
}

// testFunction2(true);

const obj = {
    name: "Vio",
    age: "24"
}

obj.location = "Bucharest"

console.log(obj)