function validar() {
    var nome = form.nome.value;
    var email = form.email.value;

    if(nome=="") {
        alert("Preencha o campo com seu nome!")
        form.nome.focus();
        return false;
    }
    if(email=="") {
        alert("Preencha o campo com seu E-mail!")
        form.email.focus();
        return false;
    }
}