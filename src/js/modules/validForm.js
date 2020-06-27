let forms = document.querySelectorAll('.form-valid');

for (let i = 0; i < forms.length; i++) {
    let form = forms[i];
    let send = form.querySelector('.btn');
    let inputs = form.querySelectorAll('[required]');

    for (let j = 0; j < inputs.length; j++) {

        if (inputs[j].tagName === 'TEXTAREA' || inputs[j].type === 'text' || inputs[j].type === 'tel') {
            inputs[j].addEventListener('keyup', () => valid(inputs, send));
        }

        if (inputs[j].classList.contains('personal-data__input')) {
            inputs[j].addEventListener('change', () => valid(inputs, send));
        }
    }
}

function valid(inputs, send) {

    for (let i = 0; i < inputs.length; i++) {

        if (inputs[i].tagName === 'TEXTAREA' || inputs[i].type === 'text') {
            if (inputs[i].textLength === 0) {
                send.disabled = true;
                break
            }
        } else if (inputs[i].type === 'tel') {
            let lastSymbol = inputs[i].value[inputs[i].value.length - 1];
            if (lastSymbol === '_') {
                send.disabled = true;
                break
            }
        } else if (inputs[i].classList.contains('personal-data__input') && inputs[i].checked === false) {
            send.disabled = true;
            break
        } else {
            send.disabled = false;
        }

    }

}
