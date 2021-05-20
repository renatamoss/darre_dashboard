import { valida } from './validacao.js'

//cursor no input:
const cursorNome = () => {
    document.querySelector('[data-tipo="data-form-input"]').focus();
}

window.addEventListener('load', cursorNome);


const inputs = document.querySelectorAll('input');

inputs.forEach(input => {

    //importação da máscara:
    if (input.dataset.tipo === 'preco') {
        SimpleMaskMoney.setMask(input, {
            prefix: 'R$ ',
            fixed: true,
            fractionDigits: 2,
            decimalSeparator: ',',
            thousandsSeparator: '.',
            cursor: 'end'
        })
    }
    //fim importação da máscara.

    input.addEventListener('blur', (evento) => {
        valida(evento.target);
    })
})

