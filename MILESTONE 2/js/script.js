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
const container = document.querySelector('.row');

//stampo su console le informazioni di ogni membro
for(let member of team){
    console.log(member);
}

//stampo tutto il team sotto forma di stringhe
for(let member of team){
    const tempMember = `Nome: ${member.name}, Ruolo: ${member.role} <br>`;
    container.innerHTML += tempMember;
}