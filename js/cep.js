const inputCep = document.querySelector('#cep');
const btnCadastro = document.querySelector('#cadastrar');
const logradouro = document.querySelector('#logradouro');
const bairro = document.querySelector('#bairro');
const cidade = document.querySelector('#cidade');
const estado = document.querySelector('#estado');

let cadastro = []

inputCep.addEventListener("blur", function consultaCep(){
    let nome = document.querySelector('#nome').value
    let cep = document.querySelector('#cep').value;
    

    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(response =>{
            logradouro.value = (response.logradouro)
            bairro.value = (response.bairro)
            cidade.value = (response.localidade)
            estado.value = (response.uf)

            cadastro.push(nome);
            cadastro.push(response.logradouro)
            cadastro.push(response.bairro)
            cadastro.push(response.localidade)
            cadastro.push(response.uf)

        })

})  

cadastrar.addEventListener("click", function cadastrar(){
    console.log(cadastro)
})

