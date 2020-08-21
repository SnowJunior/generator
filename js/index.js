// define days of the week
let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// male names
let maleNames = {
    'Sunday': 'Kwasi',
    'Monday': 'Kwadwo',
    'Tuesday': 'Kwabena',
    'Wednesday': 'Kwaku',
    'Thursday': 'Yaw',
    'Friday': 'Kofi',
    'Saturday': 'Kwame'
}

// female names
let femaleNames = {
    'Sunday': 'Akosua',
    'Monday': 'Adwoa',
    'Tuesday': 'Abenaa',
    'Wednesday': 'Akua',
    'Thursday': 'Yaa',
    'Friday': 'Afua',
    'Saturday': 'Ama'
}

// get details
let birthday = document.getElementById("birthday")
let gender = document.querySelectorAll('input[name="gender"]')
let submit = document.getElementById("submit")

// handle form submit
submit.addEventListener("click", function(e){
    // get values
    let birthdate = birthday.value;
    let selectedGender;
    for (const g of gender) {
        if (g.checked) {
            selectedGender = g.value
            break
        }
    }

    // calculate date
    let birthdate_parts = birthdate.split('-')
    let year = parseInt(birthdate_parts[0])
    let month = parseInt(birthdate_parts[1])
    let day = parseInt(birthdate_parts[2])

    // validate date
    if (day <= 0 || day > 31) {
        alert("Enter a valid date");
        return false;
    }

    //validate months
    if (month <= 0 || month > 12){
        alert("Enter a valid month");
        return false;
    }

    // create date using Date object
    // day of the week will be calculated using d.getDay()
    let d = new Date(year, month - 1, day)
    let day_of_week = d.getDay()
    
    // translate ghana name by gender
    let ghanaName;
    if (selectedGender === 'male') {
        ghanaName = maleNames[week[day_of_week]]
    } else if (selectedGender === 'female') {
        ghanaName = femaleNames[week[day_of_week]]
    }

    // alert name
    alert(ghanaName);

    // prevent form submit
    e.preventDefault()

})

