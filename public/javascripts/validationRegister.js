
window.onload = function () {
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


    $('email').addEventListener('focus', function(e){
        $('msgError-email').innerHTML = null
        this.classList.remove('is-invalid');
        this.classList.remove('is-valid')
    })

    $('email').addEventListener('blur', function(e){

        switch (true) {
            case !this.value.trim():
                $('msgError-email').innerHTML = "Éste campo es obligatorio"
                this.classList.add('is-invalid')
                break;
            case !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.value.trim()):
                $('msgError-email').innerHTML = "El formato es inválido";
                this.classList.add('is-invalid')
                break
            default:
                $('msgError-email').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });

     $('email').addEventListener('change', async function(e){

        try {

            const response = await fetch(`/apis/check-email?email=${this.value.trim()}`)
            const result = await response.json()

            if(result.data) {
                $('msgError-email').innerHTML = "El email ya se encuentra registrado"
                this.classList.add('is-invalid')
            }
            
            
        } catch (error) {
            console.error(error);
        }
    }) 


    $('password').addEventListener('focus', function(e){
        $('msgError-password').innerHTML = null
        this.classList.remove('is-invalid');
        this.classList.remove('is-valid')
    })

    $('password').addEventListener('blur', function(e){

        switch (true) {
            case !this.value.trim():
                $('msgError-password').innerHTML = "Éste campo es obligatorio"
                this.classList.add('is-invalid')
                break;
            case (this.value.trim().length < 6 || this.value.trim().length > 12):
                $('msgError-password').innerHTML = "Entre 6 y 12 caracteres";
                this.classList.add('is-invalid')
                break
            default:
                $('msgError-password').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });



    $('password2').addEventListener('focus', function(e){
        $('msgError-password2').innerHTML = null
        this.classList.remove('is-invalid');
        this.classList.remove('is-valid')
    })

    $('password2').addEventListener('blur', function(e){

        switch (true) {
            case !this.value.trim():
                $('msgError-password2').innerHTML = "Debes confirmar tu contraseña"
                this.classList.add('is-invalid')
                break;
            case this.value.trim() !== $('password').value.trim():
                $('msgError-password2').innerHTML = "Las contraseñas no coinciden";
                this.classList.add('is-invalid')
                break
            default:
                $('msgError-password2').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });




    $('register-form1').addEventListener('submit', function(event) {
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






}