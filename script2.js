const peopleArr = [{
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




window.addEventListener('load', function () {
    const usersContainer = document.querySelector('.users-container')
    const genderRadio = document.querySelectorAll('[type="radio"]')
    const ageRange = document.querySelector('#ageFilter')


    const renderPerson = (persons) => {

        const list = persons.map(person => {
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

        usersContainer.innerHTML = list;

    }
    renderPerson(peopleArr)

    const state = {
        gender: "all",
        age: "100"
    }

    function getGenderVal() {
        genderRadio.forEach(item => {
            item.addEventListener("click", (event) => {
                let val = event.target.value;
                state.gender = val;
                
                const filteredForGender = genferFilter();

                renderPerson(filteredForGender)
            })
        })
    }
    getGenderVal()

    function getAgeVal() {
        ageRange.addEventListener('click', (event) => {
            let val = event.target.value;
            state.age = val;
            
            const filteredForAge = ageFilter();

            renderPerson(filteredForAge)
        })
    } 
    getAgeVal()


    function ageFilter() {
        return peopleArr.filter(item => item.age <= state.age)
    }

    function genferFilter() {
        return (state.gender === 'all' ? peopleArr :
        peopleArr.filter(item => item.gender === state.gender)
        )
    }
})