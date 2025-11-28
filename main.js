const persons = [
  {
    id: 1,
    firstname: "Dan",
    lastname: "Tiger",
    image: "url",
    birthday: "03.18.1990",
    gender: "male",
    hobbie: ["Football", "Reading"],
    nationality: "switzerland",
    friends: [325330, 325334],
    residence: 10041
  },
  {
    id: 2,
    firstname: "Fan",
    lastname: "Tiger",
    image: "url",
    birthday: "03.18.2005",
    gender: "male",
    hobbie: ["Football", "Reading"],
    nationality: "switzerland",
    friends: [325330, 325334],
    residence: 10041
  },
  {
    id: 3,
    firstname: "Frank",
    lastname: "Lion",
    image: "url",
    birthday: "10.05.1991",
    gender: "male",
    hobbie: ["walking", "basketball"],
    nationality: "syria",
    friends: ["", "", ""],
    residence: 10041
  },
  {
    id: 4,
    firstname: "Bilal",
    lastname: "Zakki",
    image: "url",
    birthday: "08.19.1999",
    gender: "female",
    hobbie: ["swimming", "walking"],
    nationality: "canda",
    friends: [325330, 325326],
    residence: 10012
  },
  {
    id: 10,
    firstname: "Omar",
    lastname: "Khaled",
    image: "url",
    birthday: "01.11.2001",
    gender: "male",
    hobbie: ["basketball", "swimming"],
    nationality: "jordan",
    friends: [],
    residence: 10041
  },
  {
    id: 11,
    firstname: "Maria",
    lastname: "Costa",
    image: "url",
    birthday: "02.24.1992",
    gender: "female",
    hobbie: ["traveling", "reading"],
    nationality: "portugal",
    friends: [325333],
    residence: 10025
  },
  {
    id: 12,
    firstname: "Eren",
    lastname: "Demir",
    image: "url",
    birthday: "05.10.1997",
    gender: "male",
    hobbie: ["gym", "movies"],
    nationality: "turkey",
    friends: [],
    residence: 10041
  },
  {
    id: 13,
    firstname: "Nora",
    lastname: "Schmidt",
    image: "url",
    birthday: "11.03.1989",
    gender: "female",
    hobbie: ["painting", "hiking"],
    nationality: "austria",
    friends: [325326, 325334],
    residence: 10010
  },
  {
    id: 14,
    firstname: "Hakim",
    lastname: "Rahman",
    image: "url",
    birthday: "03.03.1994",
    gender: "male",
    hobbie: ["football", "programming"],
    nationality: "morocco",
    friends: [],
    residence: 10014
  }
]



// 1. Verilen arrayda id-e gore find  işini gören function yazın
function FindId(Id){
   return persons.find(p=>p.id==Id)
}

// console.log(FindId(1))


// 2. Gender-ə əsasən filter işini gören function yazın. Gender qebul elesin ona uyğun userleri çıxarsın
function GenderAccess(gender) {
    persons.forEach(p => {
        if (p.gender==gender) {
            console.log(p)
        }
    });
}

// GenderAccess("male")

// 3. Yeni bir object əlavə edin həm əvvələ həm sonuna
persons.unshift({
    id: 15,
    firstname: "Ruslan",
    lastname: "Hamidov",
    image: "url",
    birthday: "01.01.2000",
    gender:"male",
    hobbie:["movie","book","Baleli watching"],
    nationality:"Inqilab",
    friends:[],
    residence:11111
})

persons.push({
    id: 16,
    firstname: "Hamida",
    lastname: "Allahverdiyeva",
    image: "url",
    birthday: "01.01.2000",
    gender:"male",
    hobbie:["movie","book","Draznit xocet"],
    nationality:"KUbinka danger zone",
    friends:[],
    residence:11111
})
console.log(persons);


// 4. 5ci indexə 3 element əlavə edib,3 element silin.


let person = {
    id: 16,
    firstname: "Mehemmed",
    lastname: "Atluxanov",
    image: "url",
    birthday: "01.01.2000",
    gender:"male",
    hobbie:["movie","book","movie Prezident_of_kolge"],
    nationality:"Montin Barbie zone",
    friends:[],
    residence:11111
}

persons.splice(5,3,person,person,person)
console.log(persons);


// TASK 2
// 1) Verilmiş ədəd massivində ən böyük elementi tapan function yazın.

let numbers = [1, 3, 5, 343, 3, 5, 5, 34, 34, 546, 45, 32, 21, 345, 456, 56];


function FindMaximum() {
  max = numbers[0];
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > max) {
      max = numbers[index];
    }
  }
  return max;
}

console.log(FindMaximum());

// 2) Verilmiş massivdə müəyyən bir target ədədinin indeksini tapan function yazın (linear search).

target = 10;
function FindTarget(target) {
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] == target) {
      return index;
    }
  }
  return "Not found " + target;
}

console.log(FindTarget(target));

// 3) Verilmiş massivdə minimum elementi tapan function yazın.

function FindMinimum() {
  min = numbers[0];
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] < min) {
      min = numbers[index];
    }
  }
  return min;
}

console.log(FindMinimum());

// 4) Verilmiş massivdəki bütün ədədlərin cəmini hesablayan function yazın.

function Sum() {
  sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];
  }
  return sum;
}
console.log(Sum());



// 5) Verilmiş n sayına qədər Fibonacci ardıcıllığını qaytaran function yazın.

fibonacci = [1, 1];
n = 15;
for (let index = 2; index < n; index++) {
  fibonacci.push(fibonacci[index - 1] + fibonacci[index - 2]);
}

console.log(fibonacci);



// 6) Verilmiş string-in palindrom olub olmadığını yoxlayan function yazın. =>  madam tərsidə düzüdə eyni sözdür-polindromdur


let text = "madam";
function IsPalindrome() {
    if (text == text.split("").reverse().join("")) {
        return true
    }
    return false
}

console.log(IsPalindrome(text));