// js


//creo array di oggetti
const team = [

    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
        adjectives: 'Our leader. Determination and ambition to achieve the goal.'
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
        adjectives: 'The one who transforms good ideas into fantastic projects.'
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
        adjectives: 'Everything we need for the management of our offices.'
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
        adjectives: 'The one who makes our social pages fantastic. Follow us!'
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
        adjectives: 'Behind great projects there is a great code. Our developer.'
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
        adjectives: 'Our projects passes through the hands of our fantastic designer.'
    }
    
]

//seleziono container da html
const container = document.querySelector('.cp_row');

//stampo su console le informazioni di ogni membro
for(let member of team){
    console.log(member);
}

//stampo tutto il team sotto forma di card
getTeamCards();



// funzioni
function getTeamCards(){
    for(let member of team){
        const tempMember = `<div class="col-4 mb-5">
        <div class="card cp_card m-auto" style="width: 18rem;">
            <img src="img/${member.image}" class="card-img-top" alt="${member.name}">
            <div class="card-body">
              <p class="card-text fw-bold fs-5">${member.name}</p>
              <p class="card-text fw-lighter">${member.role}</p>
              <p class="card-text fw-lighter _adjectives">${member.adjectives}</p>
            </div>
          </div>
    </div>`;
        container.innerHTML += tempMember;
    }
}