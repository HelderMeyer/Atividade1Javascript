const nome = document.getElementById('name');
const cpf = document.getElementById('cpf');
const email = document.getElementById('email');
const telefone = document.getElementById('phone');
const buttonRegister = document.getElementById('register');
const buttonShowHideTable = document.getElementById('button-show-hide-table');

buttonShowHideTable.addEventListener('click', esconder);

const sectionTabela = document.getElementById('section-tabela');

buttonShowHideTable.value = 'Esconder tabela';

function esconder() {

    if (sectionTabela.className.indexOf('esconder') == -1) {
        sectionTabela.classList.add('esconder');
        buttonShowHideTable.value = 'Mostrar tabela';
        buttonShowHideTable.style.backgroundColor = '#05244f';
    } else if (sectionTabela.className.indexOf('esconder') != -1) {
        sectionTabela.classList.remove('esconder');
        buttonShowHideTable.value = 'Esconder tabela';
        buttonShowHideTable.style.backgroundColor = '#2d7be8';
    }

}

//
// MÁSCARA CPF
//

let entradaCpf = document.getElementById('cpf');

entradaCpf.addEventListener('input', addMascaraCpf);

function addMascaraCpf() {

    let digitosCpf = entradaCpf.value
    let arrayCpf = []

    if (digitosCpf.length == 11 && digitosCpf.indexOf('.') == -1) {

        for (let i = 0; i < 11; i++) {

            if (i == 2 || i == 5) {
                arrayCpf.push(digitosCpf[i]);
                arrayCpf.push('.');
            } else if (i == 8) {
                arrayCpf.push(digitosCpf[i]);
                arrayCpf.push('-');
            } else {
                arrayCpf.push(digitosCpf[i]);
            }

        }

        console.log(arrayCpf.join(''));
        entradaCpf.value = arrayCpf.join('');

    } else if (digitosCpf.indexOf('.') != -1) {

        let w = 0
        while (digitosCpf.indexOf('.') != -1 && w <= 3) {

            digitosCpf = digitosCpf.replace('.', '');
            digitosCpf = digitosCpf.replace('-', '');
            console.log(digitosCpf);
            entradaCpf.value = digitosCpf;
            w++

        }
    }
}

//
// MÁSCARA NÚMERO
//

let entradaTelefone = document.getElementById('phone');

entradaTelefone.addEventListener('input', addMascaraTelefone);

function addMascaraTelefone() {

    let digitosTelefone = entradaTelefone.value
    let arrayTelefone = []

    if (digitosTelefone.length == 11 && digitosTelefone.indexOf('.') == -1) {

        for (let i = -1; i < 11; i++) {

            if (i == -1) {
                arrayTelefone.push(digitosTelefone[i]);
                arrayTelefone.push('(');
            } else if (i == 1) {
                arrayTelefone.push(digitosTelefone[i]);
                arrayTelefone.push(')');
                arrayTelefone.push(' ');
            } else if(i == 2) {
                arrayTelefone.push(digitosTelefone[i]);
                arrayTelefone.push(' ');
            } else if (i == 6) {
                arrayTelefone.push(digitosTelefone[i]);
                arrayTelefone.push('-');
            } else {
                arrayTelefone.push(digitosTelefone[i]);
            }

        }

        console.log(arrayTelefone.join(''));
        entradaTelefone.value = arrayTelefone.join('');

    } else if (digitosTelefone.indexOf(' ') != -1) {

        let z = 0
        while (digitosTelefone.indexOf(' ') != -1 && z <= 3) {

            digitosTelefone = digitosTelefone.replace('(', '');
            digitosTelefone = digitosTelefone.replace(' ', '');
            digitosTelefone = digitosTelefone.replace(')', '');
            digitosTelefone = digitosTelefone.replace('-', '');
            console.log(digitosTelefone);
            entradaTelefone.value = digitosTelefone;
            z++

        }
    }
}

//
// ADD TABELA COM DADOS
//

buttonRegister.addEventListener('click', addTabela);

const tabela = document.getElementById('tbody-tabela');

let i = 0;
function addTabela() {

    if (
        nome.value == '' ||
        cpf.value == '' ||
        email.value == '' ||
        telefone.value == ''
    ) {
        window.alert('Por favor, prencha todo o formulário!')
    } else if (
        nome.value != '' ||
        cpf.value != '' ||
        email.value != '' ||
        telefone.value != ''
    ) {
        if (
            nome.value.indexOf(0) != -1 ||
            nome.value.indexOf(1) != -1 ||
            nome.value.indexOf(2) != -1 ||
            nome.value.indexOf(3) != -1 ||
            nome.value.indexOf(4) != -1 ||
            nome.value.indexOf(5) != -1 ||
            nome.value.indexOf(6) != -1 ||
            nome.value.indexOf(7) != -1 ||
            nome.value.indexOf(8) != -1 ||
            nome.value.indexOf(9) != -1
        ) {
            window.alert('Nome inválido! Por favor, remova o(s) número(s)!')
        } else if (
            nome.value.indexOf(0) == -1 ||
            nome.value.indexOf(1) == -1 ||
            nome.value.indexOf(2) == -1 ||
            nome.value.indexOf(3) == -1 ||
            nome.value.indexOf(4) == -1 ||
            nome.value.indexOf(5) == -1 ||
            nome.value.indexOf(6) == -1 ||
            nome.value.indexOf(7) == -1 ||
            nome.value.indexOf(8) == -1 ||
            nome.value.indexOf(9) == -1
        ) {
            if (addTabela) {
                i++;
            }
            const addTBody = document.getElementById('tbody-tabela');
            const tr = document.createElement('tr');
            const tdNum = document.createElement('td')
            const tdEmail = document.createElement('td');
            const tdName = document.createElement('td');
            const tdCpf = document.createElement('td');
            const tdTelefone = document.createElement('td');

            tdNum.append(i);
            tdName.append(nome.value);
            tdCpf.append(cpf.value);
            tdEmail.append(email.value);
            tdTelefone.append(telefone.value);

            tr.append(tdNum)
            tr.append(tdName);
            tr.append(tdCpf);
            tr.append(tdEmail);
            tr.append(tdTelefone);

            addTBody.append(tr);
        }
    }

}





