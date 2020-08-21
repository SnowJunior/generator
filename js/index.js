// var cc = prompt("Enter your birthday century e.g 19 or 20");

// var yy = prompt("Enter your birthday year e.g 99:");

// var mm = prompt("Enter your birthday month number e.g 1,2,3:");

// var dd = prompt("Enter your birthday date e.g 21,25,03:");



// var day = function(cc, yy, mm, dd){
//     let d = (((cc/4)-2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10))+Number(dd))%7;
//     return d;
// }

// alert(day(cc, yy, mm, dd))

let maleNames=[
    'Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame' 
]

let femaleNames=[
    'Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama' 
]
let birthday = document.getElementById("birthday")

let gender = document.querySelectorAll('input[name="gender"]')

let submit = document.getElementById("submit")

submit.addEventListener("click", function(e){
    let birthdate = birthday.value;
    let selectedGender;
    for (const g of gender) {
        if (g.checked) {
            selectedGender = g.value
            break
        }
    }

    let birthdate_parts = birthdate.split('-')

    let year = birthdate_parts[0]
    let month = birthdate_parts[1]
    let date = birthdate_parts[2]
    let cc = year.slice(0,2)
    let yy = year.slice(2,4)
    

    let d =(((cc/4)-2*cc-1) + ((5*yy/4)) + ((26*(month+1)/10)) +date)%7;
    let ghanaName;
    if (selectedGender === 'male') {
        ghanaName = maleNames[parseInt(d)]
    } else if (selectedGender === 'female') {
        ghanaName = femaleNames[parseInt(d)]
    }

    alert(ghanaName);

    e.preventDefault()

})

