const simulator = window.document.getElementById('simulator_shop');
const capital = window.document.getElementById('produt_valor');
const entrada = window.document.getElementById('entrada_money');
const parcela = window.document.getElementById('parcelas_num');
const section = window.document.querySelector('#secao');
const valInput = window.document.getElementById('val_input');
const valorMoney = window.document.getElementById('valor_money');
const resultPar = window.document.getElementById('result_parcelas');
const resultValFin = window.document.getElementById('result_valorFinal');

var juros = [
    0.0000, 1.0990,
    0.5754, 0.4014, 
    0.3148, 0.2631, 
    0.2289, 0.2047, 
    0.1868, 0.1730, 
    0.1620, 0.1533
]

function cancel_simu() {
    simulator.style.display = 'none'
}
function confirm_simu() {
    let C = parseInt(capital.textContent.replace(/[.]/g, '').replace(/[,]/g, '.'), 10);
    let ParNum = parcela.value;
    let ParVal = (C - valorMoney.value) * (juros[ParNum]);
    let VF = ((ParVal * ParNum) + parseInt(valorMoney.value)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});

    resultPar.innerText = `${ParNum}x___R$ ${ParVal.toFixed(2)}`
    resultValFin.innerText = VF

    console.log(VF)
}

function chagingEntrada() {
    let entradaVal = entrada.value;
    let calc = document.getElementById('calcPar');
            let C = parseInt(capital.textContent.replace(/[.]/g, '').replace(/[,]/g, '.'), 10);
    switch (entradaVal) {
        case 'sim':
            valInput.style.backgroundColor = '#fff'
            valInput.style.cursor = 'unset'
            valInput.style.color = '#000'
            valorMoney.disabled = false
            valorMoney.min = C * 0.3;
            valorMoney.value = C * 0.3;

            calc.disabled = false
            break;
                
        case 'nao':
            valInput.style.backgroundColor = '#272d3f'
            valInput.style.color = '#414141'
            valInput.style.cursor = 'no-drop'
            valorMoney.disabled = true
            valorMoney.value = 0

            calc.disabled = true
            break;
    }
}
    
function var_min() {
    let C = parseInt(capital.textContent.replace(/[.]/g, '').replace(/[,]/g, '.'), 10);
    if(valorMoney.value <= C * 0.3) {
        valorMoney.value = C * 0.3;
    } 
}
function chaging() {
    let input = document.querySelector("#input_fake").innerText;
    let cards = document.querySelectorAll('.card');
    let sec = document.querySelectorAll('#secao');
    let err = document.querySelector('#search_err');
    
    cards.forEach((elem) => {
        if(elem.getAttribute("data-hashtag").includes(input.toLowerCase())){
            elem.style.display = "flex"
            err.style.display = "none"
        }else{
            elem.style.display = "none"
        }
        
        
    })
}
