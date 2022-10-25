// js


//creo array di oggetti
const team = [

    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
    
]

//seleziono container da html
const container = document.querySelector('.cp_row');

//stampo su console le informazioni di ogni membro
for(let member of team){
    console.log(member);
}

//stampo tutto il team sotto forma di card
for(let member of team){
    const tempMember = `<div class="col-4 mb-3">
    <div class="card" style="width: 18rem;">
        <img src="img/${member.image}" class="card-img-top" alt="${member.name}">
        <div class="card-body">
          <p class="card-text fw-bold fs-5">${member.name}</p>
          <p class="card-text fw-lighter">${member.role}</p>
        </div>
      </div>
</div>`;
    container.innerHTML += tempMember;
}