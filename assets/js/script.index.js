console.log("js está ok");

function verificarInputs() {
    let nome = document.getElementById("input-nome").value;
    let telfixo = document.getElementById("input-telfixo").value;
    let telcelular = document.getElementById("input-telcelular").value;
    let imgLink = document.getElementById("input-imgLink").value;
    let data = document.getElementById("input-data").value;
    let email = document.getElementById("input-email").value;
    let cep = document.getElementById("input-cep").value;
    let cidade = document.getElementById("input-cidade").value;
    let instagram = document.getElementById("input-instagram").value;
    let github = document.getElementById("input-github").value;

    console.log(nome);
    console.log(telfixo);
    console.log(telcelular);
    console.log(imgLink);
    console.log(data);
    console.log(email);
    console.log(cep);
    console.log(cidade);
    console.log(instagram);
    console.log(github);

    if (nome == "" || telfixo == "" || telcelular == "" || imgLink == "" || data == "" || email == "" || cep == "" || cidade == "" || instagram == "" || github == "") {
        console.log("os inputs estao vazios")
        envieMsg('Preencha todos os campos', 'error');
        return true;
    } else if (!isURLValida(imgLink)) {
        envieMsg("URL da imagem inválida!", "error");
    } else {
        console.log("os inputs estao preenchidos");
        envieMsg('Cadastrado com sucesso', 'sucesso');
        return false;
    }
}

function envieMsg(msg, tipoMsg) {

    let msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = '';

    let msgParaTela = `
    <p class='${tipoMsg}'>${msg}</p>`

    msgDiv.innerHTML = msgParaTela;

    setTimeout(function () {
        msgDiv.innerHTML = '';
    }, 3000)
}


class Pet {
    constructor(nome, telfixo, telcelular, imgLink, data, email, cep, instagram, github, idade ) {
        this.nome = nome;
        this.telfixo = telfixo;
        this.telcelular = telcelular;
        this.imgLink = imgLink;
        this.data = data;
        this.email = email;
        this.cep = cep;
        this.cidade = cidade;
        this.instagram = instagram;
        this.github = github;
        this.idade = this.petAge();;
    }
}


function isURLValida(url) {
    if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return true;
    } else {
        return false;
    }
}
