const Family = [{
        name: 'John',
        age: 13
    },
    {
        name: 'Mark',
        age: 56
    },
    {
        name: 'Rachel',
        age: 45
    },
    {
        name: 'Nate',
        age: 67
    },
    {
        name: 'Jeniffer',
        age: 65
    },
    {
        name: 'Martha',
        age: 25
    }
];

// Crea una función para encuentrar la diferencia de edad entre el miembro mas viejo y el más jóven de la familia
function findDifferencesBetweenAges(family) {
    ages = family.map(function (person) {
        return person.age;
    })

    youngest = ages.sort(function (a, b) {
        return a - b
    })[0]
    oldest = ages.sort(function (a, b) {
        return b - a
    })[0]

    // Regresa como resultado, sus respectivas edades y la diferencia de edad. 
    console.log(`El miebro mas joven tiene ${youngest} años, y el mas viejo tiene ${oldest} años`);
    console.log(`La diferencia entre estas dos edades es de ${oldest - youngest} años`);
}

findDifferencesBetweenAges(Family);