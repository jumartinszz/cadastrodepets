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


class Contato {
    constructor(nome, telfixo, telcelular, imgLink, data, email, cep, cidade, instagram, github, idade) {
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
        this.idade = this.ContatoAge();;
    }

    ContatoAge(data) {
        const date = this.data;
        const niverData = new Date(date).getFullYear();
        const nossoAno = new Date().getFullYear();
        const niverMes = new Date(data).getMonth() + 1;
        const nossoMes = new Date().getMonth() + 1;

        const idade = nossoAno - niverData;

        if (niverMes > nossoMes) {
            return idade - 1;
        }
        else {
            return idade;
        }
    }

    getZodiacSign() {
        let birthdate = new Date(this.birthdate);
        let day = birthdate.getDate();
        let month = birthdate.getMonth() + 1;
        console.log("Passou pelo getSigno() da class User");

        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
            return "Capricórnio ♑";
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
            return "Aquário ♒";
        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            return "Peixes ♓";
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
            return "Áries ♈";
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
            return "Touro ♉";
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
            return "Gêmeos ♊";
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
            return "Câncer ♋";
        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
            return "Leão ♌";
        } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
            return "Virgem ♍";
        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
            return "Libra ♎";
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
            return "Escorpião ♏";
        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
            return "Sagitário ♐";
        }
    }
}

class listaContatos {
    constructor() {
        this.listaContatosArray = [];
    }
    addCont(parametro) {
        if (verificarInputs() == false && isURLValida(parametro.imgLink) == true) {
            this.listaContatosArray.push(parametro);
            limparInputs();
        }
    }
}

// const contatoTeste = new listaContatos;
// console.log(contatoTeste);

const bibliotecaContatos = new listaContatos();
console.log(bibliotecaContatos);


function limparInputs() {
    document.getElementById("input-nome").value = "";
    document.getElementById("input-telfixo").value = "";
    document.getElementById("input-telcelular").value = "";
    document.getElementById("input-imgLink").value = "";
    document.getElementById("input-data").value = "";
    document.getElementById("input-email").value = "";
    document.getElementById("input-cep").value = "";
    document.getElementById("input-cidade").value = "";
    document.getElementById("input-instagram").value = "";
    document.getElementById("input-github").value = "";
}


function produzirContato() {
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

    const contatar = new Contato(nome, telfixo, telcelular, imgLink, data, email, cep, cidade, instagram, github);
    console.log(contatar);

    bibliotecaContatos.addCont(contatar)
    renderizarConteudo()
    console.log(bibliotecaContatos);
    

}

// const contTeste = new Contato("Julia", "123", "321", "url", "000000", "kkkkkk", "0987654321", "campinas", "juliamartinsz", "jumartinz");
// console.log(contTeste);


function renderizarConteudo() {
    let content = "";
    const array = bibliotecaContatos.listaContatosArray;

    array.forEach((contato) => {
        content += `
            <div class="list-ctts">
                <img src= "${contato.imgLink}">
                <p> ${contato.nome}</p>
                <p><strong>Celular:</strong> ${contato.telcelular}</p>
                <p><strong>Telefone:</strong> ${contato.telfixo}</p>
            </div>
           `;
    });
    document.getElementById("user-list").innerHTML = content;
}

function formatedCellphone(telcelular) {
    console.log("Passou pela funcao formatedCellphone()");

    let cellphoneArray = telcelular.split("");
    let cellphoneFormated = "(" + cellphoneArray[0] + cellphoneArray[1] + ")"
        + " " + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4]
        + cellphoneArray[5] + cellphoneArray[6] + "-"
        + cellphoneArray[7] + cellphoneArray[8]
        + cellphoneArray[9] + cellphoneArray[10];
    return cellphoneFormated;
}

function gerarLinkWhats (telcelular){
    let link = "https://api.whatsapp.com/send?phone=55" + telcelular;
    return link;
}

function gerarLinkInsta (instagram){
    let link = "https://instagram.com/@" + instagram;
    return link;
}

function gerarLinkGithub (github){
    let link = "https://api.github.com/" + github;
    return link;
}


function isURLValida(url) {
    if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return true;
    } else {
        return false;
    }
}
