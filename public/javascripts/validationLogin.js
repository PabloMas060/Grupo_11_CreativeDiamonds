const $ = id => document.getElementById(id);

window.addEventListener('load', function () {

    $('email').addEventListener('focus', function (e) {
        $('msgError-email').innerHTML = null
        this.classList.remove('is-invalid')
        this.classList.remove('is-valid')
    })

    $('email').addEventListener('blur', function (e) {

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
    })

    $('password').addEventListener('focus', function(e){
        $('msgError-password').innerHTML = null
        this.classList.remove('is-invalid')
        this.classList.remove('is-valid')
    })

    $('password').addEventListener('blur', function(e){

        switch (true) {
            case !this.value.trim():
                $('msgError-password').innerHTML = "Éste campo es obligatorio"
                this.classList.add('is-invalid')
                break;
            default:
                $('msgError-password').innerHTML = null
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    })

/*     $('password').addEventListener('change', async function(e){

        try {

            const response = await fetch(`/apis/check-password?password=${this.value.trim()}`)
            const result = await response.json()

            if(result.data){
                $('msgError-password').innerHTML = null
                this.classList.add('is-valid')
            }
            
        } catch (error) {
            console.log(error);
        }
    }) */

    $('login-form').addEventListener('submit', function(event) {
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
)