const btnAddCart = $('btn-addCart');
const URL_API_SERVER = 'http://localhost:3000';

btnAddCart.addEventListener('click', async () =>{
    const id = btnAddCart.getAttribute('data-id')
        try {
          const objAlbumId = { albumId: id }
          const { ok } = await fetch(`${URL_API_SERVER}/api/cart/addProduct`, {
            method: "POST",
            body: JSON.stringify(objAlbumId),
            headers: {
              'Content-Type': 'application/json'
            }
          }).then((res)=>res.json());
      
         await Swal.fire({
            title: ok ? "Producto agregado a tu Carrito!" : "Lo sentimos, debes iniciar sesión",
            icon: ok ? 'success' : 'warning',
        showConfirmButton: false,
        timer: 1200
          })
          !ok && (location.href = "/users/login")
        } catch (error) {
          console.log(error)
        }
      
      })

    