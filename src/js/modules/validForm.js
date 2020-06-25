let forms = document.querySelectorAll('.form-valid');

for (let i = 0; i < forms.length; i++) {
    let form = forms[i];
    let send = form.querySelector('.btn');
    let inputs = form.querySelectorAll('[required]');

    for (let j = 0; j < inputs.length; j++) {
        inputs[j].addEventListener('keyup', () => {
            let valid = validation(inputs);
            console.log(valid);
        });
    }

}

function validation(inputs) {

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

    return true
}
