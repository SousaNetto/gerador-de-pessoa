// criando as váriaveis
let url = "https://randomuser.me/api/"
let namePerson = document.querySelector('#name');
let gender = document.querySelector('#gender');
let picture = document.querySelector('#picture');
let age = document.querySelector('#age');
let date = document.querySelector('#date');
let email = document.querySelector('#email');
let cell = document.querySelector('#cell');
let city = document.querySelector('#city');
let postcode = document.querySelector('#postcode');
let generateNew = document.querySelector('#generate-new');

// função para gerar um novo usuário
generateNew.addEventListener('click', readData)

//função para ler os dados
async function readData() {
    //adicionando o carregando para não ficar em branco
    let dataContent = document.querySelector('#data');
    dataContent.innerHTML = 'CARREGANDO...'

    //lendo a api
    let response = await fetch(`${url}`)
    let json = await response.json();

    // limpar o conteúdo do carregando
    dataContent.innerHTML = ''

    //adicionando o conteúdo na página
    namePerson.innerHTML = `Nome: ${json.results[0].name.title} ` + `${json.results[0].name.last} ` + `${json.results[0].name.first}`;
    gender.innerHTML = `Gênero: ${json.results[0].gender} `;
    age.innerHTML = `Idade: ${json.results[0].registered.age}`
    date.innerHTML = `Data de Nacimento: ${json.results[0].registered.date}`
    cell.innerHTML = `Telefone: ${json.results[0].cell}`
    email.innerHTML = `Email: ${json.results[0].email}`
    city.innerHTML = `Localização: ${json.results[0].location.city} - ` + `${json.results[0].location.country}`
    postcode.innerHTML = `Código postal: ${json.results[0].location.postcode}`
    picture.innerHTML = `<img src="${json.results[0].picture.large}">`

    //console.log(json)
}
generateNew.addEventListener('click', readData())
// readData();