console.log("js está ok");

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
        envieMsg('Preencha todos os campos', 'erro');
        return true;
    } else if (!isURLValida(imgLink)) {
        envieMsg("URL da imagem inválida!", "error");
    } else {
        console.log("os inputs estao preenchidos");
        envieMsg('Cadstrado com sucesso', 'sucesso');
        return false;
    }
}



