console.log("js está ok");

let pets = [];

function verificarInputs() {
    let tutor = document.getElementById("input-tutor").value;
    let nomepet = document.getElementById("input-nomepet").value;
    let especie = document.getElementById("input-especie").value;
    let data = document.getElementById("input-data").value;
    let imgLink = document.getElementById("input-imgLink").value;

    console.log(tutor);
    console.log(nomepet);
    console.log(especie);
    console.log(data);
    console.log(imgLink);

    if (tutor == "" || nomepet == "" || especie == "" || data == "" || imgLink == "") {
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
    constructor(tutor, nomepet, especie, data, imgLink, idade, mes) {
        this.tutor = tutor;
        this.nomepet = nomepet;
        this.especie = especie;
        this.data = data;
        this.imgLink = imgLink;
        this.idade = this.petAge();;
        this.mes = this.petMonth();
    }

    petAge(data) {
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

    petMonth(){
        const date = this.data;
        const niverMes = new Date(date).getMonth() + 1;
        const nossoMes = new Date().getMonth() + 1;

        if(niverMes > nossoMes){
            return niverMes - nossoMes;
        } else {
            return nossoMes - niverMes;
        }
    }
}

function produzirPet() {
    let tutor = document.getElementById("input-tutor").value;
    let nomepet = document.getElementById("input-nomepet").value;
    let especie = document.getElementById("input-especie").value;
    let data = document.getElementById("input-data").value;
    let imgLink = document.getElementById("input-imgLink").value;

    const pet = new Pet(tutor, nomepet, especie, data, imgLink);
    console.log(pet);

    bibliotecaPets.addPet(pet)
    console.log(bibliotecaPets);
}

// const petTeste = new Pet("Julia", "scooty", "especie", "3333", "url");
// console.log(petTeste);

class listaPet {
    constructor() {
        this.listaPetArray = [];
    }
    addPet(parametro) {
        if (verificarInputs() == false && isURLValida(parametro.imgLink) == true) {
            this.listaPetArray.push(parametro);
            limparInputs();
        }
    }
}

// const listaTeste = new listaPet;
// console.log(listaTeste);

const bibliotecaPets = new listaPet();
console.log(bibliotecaPets);

function limparInputs() {
    document.getElementById("input-tutor").value = "";
    document.getElementById("input-nomepet").value = "";
    document.getElementById("input-especie").value = "";
    document.getElementById("input-data").value = "";
    document.getElementById("input-imgLink").value = "";
}

function renderizarConteudo() {
    let content = "";
    const array = bibliotecaPets.listaPetArray;

    array.forEach((pet) => {
        content += `
            <div class="list-Pets">
                <p><strong>Tutor:</strong> ${pet.tutor}</p>
                <p><strong>Nome do pet:</strong> ${pet.nomepet}</p>
                <p><strong>Espécie:</strong> ${pet.especie}</p>
                <p><strong>Data de nascimento:</strong> ${pet.data}</p>
                <img src= "${pet.imgLink}"/>
                <p>Idade: ${pet.idade} mês: ${pet.mes}</p>
            </div>
           `;
    });
    document.getElementById("user-list").innerHTML = content;
}


function removerItem(index) {
    pets.splice(index, 1);
    atualizarLista();
  }

  function atualizarLista() {
    const lista = document.getElementById("user-list");
    let listaHTML = "";
  
    renderizarConteudo();
  
    lista.innerHTML = listaHTML;
  }

function isURLValida(url) {
    if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return true;
    } else {
        return false;
    }
}

function showRegister() {
    if (bibliotecaPets.listaPetArray.length < 1) {
        msg("não tem nenhum cadastro feito")
    } else {
        document.getElementById("sub-div").style.display = "block";
        document.getElementById("conteiner-principal").style.display = "none";
        renderizarConteudo()
    }
}

function backRegister() {
    document.getElementById("sub-div").style.display = "none";
    document.getElementById("conteiner-principal").style.display = "block"
}

