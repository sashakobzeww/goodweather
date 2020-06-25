let forms = document.querySelectorAll('.form-valid');

for (let i = 0; i < forms.length; i++) {
    let form = forms[i];
    let send = form.querySelector('.btn');
    let inputs = form.querySelectorAll('[required]');
    let personalData = form.querySelector('.personal-data__input');

    for (let j = 0; j < inputs.length; j++) {
        inputs[j].addEventListener('keyup', () => {
            let valid = validTextInputs(inputs, personalData);
            if (valid) {
                send.disabled = false;
            } else {
                send.disabled = true;
            }
        });

    }
    personalData.addEventListener('change', () => {
        let valid = validPersonalData(inputs, personalData);
        if (valid) {
            send.disabled = false;
        } else {
            send.disabled = true;
        }
    })

}

function validTextInputs(inputs, personalData) {

    for (let j = 0; j < inputs.length; j++) {
        let input = inputs[j];

        if (input.tagName === 'TEXTAREA') {
            if (input.textLength === 0) {
                return false
            }
        }

        if (input.type === 'tel') {
            let lastSymbol = input.value[input.value.length-1];
            if (lastSymbol === '_') {
                return false
            }
        }
    }

    if (validPersonalData(inputs, personalData)) {
        return true
    }

    return true
}

function validPersonalData(inputs, personalData) {

    for (let j = 0; j < inputs.length; j++) {
        let input = inputs[j];

        if (input.tagName === 'TEXTAREA') {
            if (input.textLength === 0) {
                return false
            }
        }

        if (input.type === 'tel') {
            let lastSymbol = input.value[input.value.length-1];
            if (lastSymbol === '_') {
                return false
            }
        }
    }

    if (personalData.checked) {
        return true
    } else {
        return false
    }
}
