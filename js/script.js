const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// creiamo una funzione che ci permetta di aggiungere i membri del team nel DOM
const createMemberCard = (member) => {

  // aggiungiamo ad una nuova variabile il codice della singola card scritta in HTML
  const card = `<div class="col">
                <div class="team-card bg-dark d-flex">
                    <div class="card-image">
                        <img src="./img/${member.img}" alt="" class="img-fluid">
                    </div>
                    <div class="card-body py-2 px-3">
                        <h3 class="card-title text-light fs-5 mb-2">${member.name}</h4>
                        <h4 class="card-subtitle text-light fs-6 mb-3">${member.role}</h4>
                        <a href="#">${member.email}</a>
                    </div>
                </div>
            </div>`;

  console.log(card)
}

// ciclo l'array di oggetti per inserire uno ad uno i membri
for (let i=0; i<teamMembers.length; i++){
  createMemberCard(teamMembers[i]);
}