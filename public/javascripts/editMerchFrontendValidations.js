window.addEventListener('load',function () {

    $('name').addEventListener('focus', function (e) {
        $('msgError-name').innerHTML = null
        this.classList.remove('is-invalid')
        this.classList.remove('is-valid')
    })

    $('name').addEventListener('blur', function (e) {

        switch (true) {
            case !this.value.trim():
                $('msgError-name').innerHTML = "Éste campo es obligatorio"
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length < 2:
                $('msgError-name').innerHTML = "Mínimo 2 caracteres"
                this.classList.add('is-invalid')
                break;
            default:
                $('msgError-name').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }

    });


    $('price').addEventListener('focus', function (e) {
        $('msgError-price').innerHTML = null
        this.classList.remove('is-invalid')
        this.classList.remove('is-valid')
    })

    $('price').addEventListener('blur', function (e) {

        switch (true) {
            case !this.value.trim():
                $('msgError-price').innerHTML = "Éste campo es obligatorio"
                this.classList.add('is-invalid')
                break;
                case isNaN(this.value.trim()):
                $('msgError-price').innerHTML = "Sólo se admiten números"
                this.classList.add('is-invalid')
                break;
            default:
                $('msgError-price').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }

    });

    $('description').addEventListener('focus', function (e) {
        $('msgError-description').innerHTML = null
        this.classList.remove('is-invalid')
        this.classList.remove('is-valid')
    })

    $('description').addEventListener('blur', function (e) {

        switch (true) {
            case !this.value.trim():
                $('msgError-description').innerHTML = "Éste campo es obligatorio"
                this.classList.add('is-invalid')
                break;
                case this.value.trim().length < 2 || this.value.trim().length > 500: 
                $('msgError-description').innerHTML = "Entre 20 y 500 caracteres"
                this.classList.add('is-invalid')
                break;
            default:
                $('msgError-description').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }

    });


    $('editMerchForm').addEventListener('submit', function(event){
        event.preventDefault();

        const elementsForm = this.elements;
        let error = false;

        for (let i = 0 ; i < elementsForm.length -1 ; i ++) {

            if(!elementsForm[i].value.trim() || elementsForm[i].classList.contains('is-invalid')) {
                error = true;
                elementsForm[i].classList.add('is-invalid');
                $('msgError-empty').innerHTML = "El formulario tiene errores"
            }
        }
        !error && this.submit()
    })
}
)