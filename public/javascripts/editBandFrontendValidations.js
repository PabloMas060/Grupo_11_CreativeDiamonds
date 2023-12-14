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


    $('phrase').addEventListener('focus', function (e) {
        $('msgError-phrase').innerHTML = null
        this.classList.remove('is-invalid')
        this.classList.remove('is-valid')
    })

    $('phrase').addEventListener('blur', function (e) {

        switch (true) {
            case !this.value.trim():
                $('msgError-phrase').innerHTML = "Éste campo es obligatorio"
                this.classList.add('is-invalid')
                break;
            default:
                $('msgError-phrase').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }

    });

    $('dateFounded').addEventListener('focus', function (e) {
        $('msgError-dateFounded').innerHTML = null
        this.classList.remove('is-invalid')
        this.classList.remove('is-valid')
    })

    $('dateFounded').addEventListener('blur', function (e) {

        switch (true) {
            case !this.value.trim():
                $('msgError-dateFounded').innerHTML = "Éste campo es obligatorio"
                this.classList.add('is-invalid')
                break;
            default:
                $('msgError-dateFounded').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }

    });
    $('dateEnded').addEventListener('focus', function (e) {
        $('msgError-dateEnded').innerHTML = null
        this.classList.remove('is-invalid')
        this.classList.remove('is-valid')
    })

    $('dateEnded').addEventListener('blur', function (e) {
     if(!this.value){
        this.value === 0
        this.classList.add('is-valid')
        this.classList.remove('is-invalid')
     }

    });

    $('totalShows').addEventListener('focus', function (e) {
        $('msgError-totalShows').innerHTML = null
        this.classList.remove('is-invalid')
        this.classList.remove('is-valid')
    })

    $('totalShows').addEventListener('blur', function (e) {

        switch (true) {
            case !this.value.trim():
                $('msgError-totalShows').innerHTML = "Éste campo es obligatorio"
                this.classList.add('is-invalid')
                break;
            case isNaN(this.value.trim()):
                $('msgError-totalShows').innerHTML = "Sólo se admiten números"
                this.classList.add('is-invalid')
                break;
            default:
                $('msgError-totalShows').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }

    });

    $('nextShows').addEventListener('focus', function (e) {
        $('msgError-nextShows').innerHTML = null
        this.classList.remove('is-invalid')
        this.classList.remove('is-valid')
    })

    $('nextShows').addEventListener('blur', function (e) {

        switch (true) {
            case !this.value.trim():
                $('msgError-nextShows').innerHTML = "Éste campo es obligatorio"
                this.classList.add('is-invalid')
                break;
            default:
                $('msgError-nextShows').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }

    });

    
    $('history').addEventListener('focus', function (e) {
        $('msgError-history').innerHTML = null
        this.classList.remove('is-invalid')
        this.classList.remove('is-valid')
    })

    $('history').addEventListener('blur', function (e) {

        switch (true) {
            case !this.value.trim():
                $('msgError-history').innerHTML = "Éste campo es obligatorio"
                this.classList.add('is-invalid')
                break;
            default:
                $('msgError-history').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }

    });
    
    
    $('resume').addEventListener('focus', function (e) {
        $('msgError-resume').innerHTML = null
        this.classList.remove('is-invalid')
        this.classList.remove('is-valid')
    })

    $('resume').addEventListener('blur', function (e) {

        switch (true) {
            case !this.value.trim():
                $('msgError-resume').innerHTML = "Éste campo es obligatorio"
                this.classList.add('is-invalid')
                break;
            default:
                $('msgError-resume').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }

    });

    

    $('editBandForm').addEventListener('submit', function(event){
        event.preventDefault();

        const elementsForm = this.elements;
        let error = false;

        for (let i = 0 ; i < elementsForm.length -3 ; i ++) {

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