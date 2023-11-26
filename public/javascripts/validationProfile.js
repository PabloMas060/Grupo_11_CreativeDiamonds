
window.addEventListener('load',function () {

    $('first_name').addEventListener('focus', function (e) {
        $('msgError-first_name').innerHTML = null
        this.classList.remove('is-invalid')
        this.classList.remove('is-valid')
    })

    $('first_name').addEventListener('blur', function (e) {
        switch (true) {
            case !this.value.trim():
                $('msgError-first_name').innerHTML = "Éste campo es obligatorio"
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length < 2:
                $('msgError-first_name').innerHTML = "Mínimo 2 caracteres"
                this.classList.add('is-invalid')
                break;
            case !/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(this.value.trim()):
                $('msgError-first_name').innerHTML = "Sólo se permiten letras"
                this.classList.add('is-invalid')
                break;
            default:
                $('msgError-first_name').innerHTML = null
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    })



    $('last_name').addEventListener('focus', function (e) {
        $('msgError-last_name').innerHTML = null
        this.classList.remove('is-invalid')
        this.classList.remove('is-valid')
    })

    $('last_name').addEventListener('blur', function (e) {
        switch (true) {
            case !this.value.trim():
                $('msgError-last_name').innerHTML = "Éste campo es obligatorio"
                this.classList.add('is-invalid')
                break;
            case !/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(this.value.trim()):
                $('msgError-last_name').innerHTML = "Sólo se permiten letras"
                this.classList.add('is-invalid')
                break;
            default:
                $('msgError-last_name').innerHTML = null
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    })

    $('nick_name').addEventListener('focus', function (e) {
        $('msgError-nick_name').innerHTML = null
        this.classList.remove('is-invalid')
        this.classList.remove('is-valid')
    })

    $('nick_name').addEventListener('blur', function (e) {
        switch (true) {
            case !this.value.trim():
                $('msgError-nick_name').innerHTML = "Éste campo es obligatorio"
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length < 2:
                $('msgError-nick_name').innerHTML = "Mínimo 2 caracteres"
                this.classList.add('is-invalid')
                break;
            case !/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(this.value.trim()):
                $('msgError-nick_name').innerHTML = "Sólo se permiten letras"
                this.classList.add('is-invalid')
                break;
            default:
                $('msgError-nick_name').innerHTML = null
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    })

    $('state').addEventListener('focus', function (e) {
        $('msgError-state').innerHTML = null
        this.classList.remove('is-invalid')
        this.classList.remove('is-valid')
    })

    $('state').addEventListener('blur', function (e) {
        switch (true) {
            case !this.value.trim():
                $('msgError-state').innerHTML = "Éste campo es obligatorio"
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length < 2:
                $('msgError-state').innerHTML = "Mínimo 2 caracteres"
                this.classList.add('is-invalid')
                break;
            default:
                $('msgError-state').innerHTML = null
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    })
    $('about').addEventListener('focus', function (e) {
        $('msgError-about').innerHTML = null
        this.classList.remove('is-invalid')
        this.classList.remove('is-valid')
    })

    $('about').addEventListener('blur', function (e) {
        switch (true) {
            case !this.value.trim():
                $('msgError-about').innerHTML = "Éste campo es obligatorio"
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length < 2:
                $('msgError-about').innerHTML = "Mínimo 2 caracteres"
                this.classList.add('is-invalid')
                break;
            default:
                $('msgError-about').innerHTML = null
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    })


    $('profile-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const elementsForm = this.elements;
        let error = false;

        for (let i = 0; i < elementsForm.length - 1; i++) {
            
            if(!elementsForm[i].value.trim() || elementsForm[i].classList.contains('is-invalid')){
                error = true;
                elementsForm[i].classList.add('is-invalid');
                $('msgError-empty').innerHTML = "El formulario tiene errors"
            }

        }

        !error && this.submit()
    })



})