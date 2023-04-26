const userArr = [{
        id: 1,
        name: "Mark Zuckerberg",
        age: 38,
        photo: 'img/photo-MarkZuckerberg.png',
        gender: 'female',
        place: 'White-Plains, New York, USA'
    },
    {
        id: 2,
        name: "Claire Boucher",
        age: 35,
        photo: 'img/photo-ClaireBoucher.png',
        gender: 'female',
        place: 'Vancouver, British Columbia, Canada',
    },
    {
        id: 3,
        name: "Ty Simpkins",
        age: 21,
        photo: 'img/photo-TySimpkins.png',
        gender: 'male',
        place: 'New York City, USA',
    },
    {
        id: 4,
        name: "Tom Holland",
        age: 26,
        photo: 'img/photo-TomHolland.png',
        gender: 'male',
        place: 'London, England',
    },
    {
        id: 5,
        name: "Bill Gates",
        age: 67,
        photo: 'img/photo-BillGates.png',
        gender: 'male',
        place: 'Seattle, Washington, USA',
    },

]



console.log('1', );

window.addEventListener('load', function () {
    console.log('2', );
 

    const [rangeAge, peopleContainer, radioList] = [
        document.querySelector('#ageFilter'),
        document.querySelector('.users-container'),
        document.querySelectorAll('input[type=radio]'),
    ]

    const renderTemplate = (users) => {
        const list = users.map(person => {
            return (`
                <div class="user">
                <div class="person-photo">
                <img src="${person.photo}" class="img-fluid" alt="${person.id}"></div>
                <div class="person-name">${person.name}</div>
                <div class="person-age">${person.age}</div>
                <div class="person-gender">${person.gender}</div>
            </div>
            `)
        }).join("")

        peopleContainer.innerHTML = list
    }
    renderTemplate(userArr)
    
    const config = {
        sex: "all",
        age: 56,
    }

    radioList.forEach(radio => {
        radio.addEventListener('click', function(e){
          
            config.sex = e.target.value
            const filteredBySex = sexFilter()
            renderTemplate(filteredBySex)
        })
    })

    rangeAge.addEventListener('change', function(e){
        config.age = e.target.value

        const filteredByAge = ageFilter()
        console.log(filteredByAge);

        renderTemplate(filteredByAge)
    })


    function ageFilter() {
        return userArr.filter(user => user.age <= config.age)
    }

    function sexFilter() {
       
        return (config.sex === 'all' ? userArr :
        userArr.filter(user => user.gender === config.sex)
    )}



})
 