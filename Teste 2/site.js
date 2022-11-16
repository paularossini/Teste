function Salvar(){
    var cep = document.getElementById("cep");
    var url = "http://viacep.com.br/ws/" + cep.value + "/json/";

    var rua = document.getElementById("logradouro");
    var bairro = document.getElementById("bairro");
    var cidade = document.getElementById("localidade");
    var estado = document.getElementById("uf");

    fetch(url)
    .then(Response => {
        Response.json()
        .then(info => {
            rua.value = info.logradouro;
            bairro.value = info.bairro;
            cidade.value = info.localidade;
            estado.value = info.uf;
        })
    })
    .catch(erro =>{
        rua.value = " ";
        bairro.value = " ";
        cidade.value = " ";
        estado.value = " ";
    })
}

