
document.querySelector('#btCep').addEventListener('click',getCep);

async function getCep() {

    const txCep = document.querySelector('#txCep').value;

    const res = await fetch(`https://viacep.com.br/ws/${txCep}/json/`);
    const dados = await res.json();

    const listaEnd = document.querySelector('#lsEnd');
    listaEnd.innerHTML = `
    <li>${dados.logradouro}</li>
    <li>${dados.bairro}</li>
    <li>${dados.localidade}</li>
    <li>${dados.uf}</li>
    <li>${dados.ddd}</li>
    `;

}
