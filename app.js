
// // #1


const myButton = document.querySelector('#my-button');
console.log (myButton);
const removal = (event) => {
    myButton.remove();
    console.log(event);
}

myButton.addEventListener('click', removal);

// // #2

// const imgTag = document.createElement('img');
// imgTag.setAttribute ( 'href',  'https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg');
// const body = document.body;
// body.append(imgTag);

// #4

const users = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg"
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg"
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg"
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg"
  },
];

const body = document.body;

function renderUsers(){
    const usersElements = users.map(user => {
        return `<div class="user-item"><img src=${user.avatar}></img><p> ${user.first_name} ${user.last_name}</p>
        <button class="bin"><img src=images/bin.png class="icons">
        </button><button class="info"><img src=images/info.png class="icons"></button><p class="mail"> ${user.email}</p></div>`
    });
    const usersDiv = document.querySelector('#user-list');
    usersDiv.innerHTML = usersElements.join('');
    const binButtons = document.querySelectorAll('.bin');
    const infoButtons = document.querySelectorAll( '.info');
   
    binButtons.forEach(x => {
        x.addEventListener('click', e => {
            x.parentNode.remove();
        });
    });
    infoButtons.forEach(x => {
        x.addEventListener('click', e => {
            x.parentNode.querySelector('.mail').style.display = "block";
        });
    });
}

renderUsers()

