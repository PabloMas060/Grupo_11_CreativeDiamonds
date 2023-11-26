
window.addEventListener('load',function () {

    $('title').addEventListener('focus', function (e) {
        $('msgError-title').innerHTML = null
        this.classList.remove('is-invalid')
        this.classList.remove('is-valid')
    })

    $('title').addEventListener('blur', function (e) {

        switch (true) {
            case !this.value.trim():
                $('msgError-title').innerHTML = "Éste campo es obligatorio"
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length < 2:
                $('msgError-title').innerHTML = "Mínimo 2 caracteres"
                this.classList.add('is-invalid')
                break;
            default:
                $('msgError-title').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }

    });


    $('discography').addEventListener('focus', function (e) {
        $('msgError-discography').innerHTML = null
        this.classList.remove('is-invalid')
        this.classList.remove('is-valid')
    })

    $('discography').addEventListener('blur', function (e) {

        switch (true) {
            case !this.value.trim():
                $('msgError-discography').innerHTML = "Éste campo es obligatorio"
                this.classList.add('is-invalid')
                break;
            default:
                $('msgError-discography').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }

    });

    $('year').addEventListener('focus', function (e) {
        $('msgError-year').innerHTML = null
        this.classList.remove('is-invalid')
        this.classList.remove('is-valid')
    })

    $('year').addEventListener('blur', function (e) {

        switch (true) {
            case !this.value.trim():
                $('msgError-year').innerHTML = "Éste campo es obligatorio"
                this.classList.add('is-invalid')
                break;
                case isNaN(this.value.trim()):
                $('msgError-year').innerHTML = "Sólo caracteres numéricos"
                this.classList.add('is-invalid')
                break;
            default:
                $('msgError-year').innerHTML = null;
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

    $('bandId').addEventListener('focus', function (e) {
        $('msgError-bandId').innerHTML = null
        this - classList.remove('is-invalid')
        this - classList.remove('is-valid')
    })

    $('bandId').addEventListener('blur', function (e) {

        switch (true) {
            case !this.value:
                $('msgError-bandId').innerHTML = "Debe seleccionar una categoría"
                this.classList.add('is-invalid')
                break;
            default:
                $('msgError-bandId').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    })

    $('genreId').addEventListener('focus', function (e) {
        $('msgError-genreId').innerHTML = null
        this - classList.remove('is-invalid')
        this - classList.remove('is-valid')
    })

    $('genreId').addEventListener('blur', function (e) {

        switch (true) {
            case !this.value:
                $('msgError-genreId').innerHTML = "Debe seleccionar una categoría"
                this.classList.add('is-invalid')
                break;
            default:
                $('msgError-genreId').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    })
    
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
                case this.value.trim().length < 20 || this.value.trim().length > 500:
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

    $('albumForm').addEventListener('submit', function(event){
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