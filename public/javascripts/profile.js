const $ = id => document.getElementById(id);
const baseURL = "https://apis.datos.gob.ar/georef/api"

window.onload = async function(e){

    $('first_name').addEventListener('blur', function(e){

        switch (true) {
            case !this.value.trim():
                $('msgError-firstName').innerHTML = "El nombre es obligatorio"
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length < 2:
                $('msgError-firstName').innerHTML = " Como minimo el nombre debe tener 2 letras";
                this.classList.add('is-invalid')
                break
            case !/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(this.value.trim()):
                $('msgError-firstName').innerHTML = "Se aceptan solo letras";
                this.classList.add('is-invalid')
                break
            default:
                $('msgError-firstName').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });


    $('last_name').addEventListener('blur', function(e){

        switch (true) {
            case !this.value.trim():
                $('msgError-lastName').innerHTML = "El apellido es obligatorio"
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length < 2:
                $('msgError-lastName').innerHTML = "Mínimo debe incluir 2 letras";
                this.classList.add('is-invalid')
                break
            case !/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(this.value.trim()):
                $('msgError-lastName').innerHTML = "Se aceptan solo letras";
                this.classList.add('is-invalid')
                break
            default:
                $('msgError-lastName').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });

    $('nick_name').addEventListener('blur', function(e){

        switch (true) {
            case !this.value.trim():
                $('msgError-nick_name').innerHTML = "El nick obligatorio"
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length < 2:
                $('msgError-nick_name').innerHTML = "Mínimo debe incluir 2 letras";
                this.classList.add('is-invalid')
                break
            case !/^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9]+$/.test(this.value.trim()):
                $('msgError-nick_name').innerHTML = "Se aceptan solo letras y numeros sin espacios";
                this.classList.add('is-invalid')
                break
            default:
                $('msgError-nick_name').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });

    $('zipcode').addEventListener('blur', function(e){

        switch (true) {
            
            case this.value.trim().length < 2:
                $('msgError-zipcode').innerHTML = "Mínimo debe incluir 2 numeros";
                this.classList.add('is-invalid')
                break
            case !/^\d+$/.test(this.value.trim()):
                $('msgError-zipcode').innerHTML = "Se aceptan solo numeros";
                this.classList.add('is-invalid')
                break
            default:
                $('msgError-zipcode').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });


    try {

        const response = await fetch(`${baseURL}/provincias`);
        const result = await response.json();

        result.provincias.sort((a,b) => a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? - 1 : 0).forEach(({nombre}) => {
            $('province').innerHTML += `<option value="${nombre}">${nombre}</option>`
        });
      
        
    } catch (error) {
        console.error(error);
    }

    $('province').addEventListener('change', async function(e){
        $('city').disabled = true

        try {
            const response = await fetch(`${baseURL}/localidades?provincia=${this.value}&max=1000`);
            const result = await response.json();

            if(result){
                $('city').disabled = false

                $('city').innerHTML = `<option value="">Seleccione...</option>`

                result.localidades.sort((a, b) => a.nombre.localeCompare(b.nombre)).forEach(({nombre}) => {
                    $('city').innerHTML += `<option value="${nombre}">${nombre}</option>`
                })
            }
            
        } catch (error) {
            console.error(error);

        }
    });


}