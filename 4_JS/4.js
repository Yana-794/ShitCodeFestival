var empList = [
  {
    name: "Andrew Clark",
    level: "junior",
    monthlyWage: 5000,
    tenure: 2,
  },
  {
    name: "Dan Abramov",
    level: "middle",
    monthlyWage: 6000,
    tenure: 4,
  },
  {
    name: "Sebastian Markbåge",
    level: "teamlead",
    monthlyWage: 10000,
    tenure: 10,
  },
  {
    name: "Sophie Alpert",
    level: "senior",
    monthlyWage: 9000,
    tenure: 9,
  },
  {
    name: "Tianyu Yao",
    level: "middle",
    monthlyWage: 7000,
    tenure: 3,
  },
];

function calculateTotalIncome(emp) {
    var total = 0;
    
    for (var i = 0; i < emp.length; i++) {
        var person = emp[i];
        var yearly = person.monthlyWage * 12;
        var extra = 0;
        
        if (person.level === "junior") {
            total = total + yearly;
        } else if (person.level === "middle") {
            extra = yearly * 0.1;
            total = total + yearly + extra;
        } else if (person.level === "senior") {
            extra = yearly * 0.1;
            for (var j = 0; j < person.tenure; j++) {
                extra = extra + (yearly * 0.05);
            }
            total = total + yearly + extra;
        } else if (person.level === "teamlead") {
            extra = yearly * 0.2;
            var years = person.tenure;
            var k = 0;
            while (k < years) {
                extra = extra + (yearly * 0.1);
                k = k + 1;
            }
            total = total + yearly + extra;
        }
    }
    
    return total;
}

var result = calculateTotalIncome(empList);
document.write("<h1>Итого: " + result + "</h1>");
document.write("<div class='img'><img src='/styles/image/4_1.jpg'></div>")
console.log("Сумма посчитана: " + result);
alert("Ваш результат: " + result + " денег");