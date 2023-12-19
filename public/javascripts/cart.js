console.log('Holiii');
const cartContainer = $('cartContainer');
const clearCart = $('clear-cart');
const btnBuy = $('btn-buy');
const outputTotal = $('output-total');
const URL_API_SERVER = 'http://localhost:3000'
const btnCheckout = $('btn-check');
const cartCheck = $('cart-check');


const getOrder = () => {
  return fetch('http://localhost:3000/api/cart/getOrderPending', {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => res.json())
}
const convertFormatPeso = (n) =>
  n.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });

const pintarTotal = (n) => {
  outputTotal.textContent = convertFormatPeso(n)
}

const pintarProducts = ({ products }) => {
  cartContainer.innerHTML = "";

  if (products.length) {
    products.forEach(({ id, title, price, discount, description, image, Cart,bandId }) => {
      const priceCalc = discount ? price - (price * discount) / 100 : price;
      const priceARG = convertFormatPeso(priceCalc)
      const template = `
      <div class="col-6">
      <div class="row align-items-center">

        <div class="col-4" style="padding: 5px;">
        <img class="col-12" src="/images/albums/${image}" alt="Imagen Producto">
        </div>

        <div class="col-8 align-items-center justify-content-between">

        <div class="card align-items-center justify-content-between">
        <div class="card-header">
        <h5 class="card-title">${title}</h5>
        </div>
        <div class="card-body">
        <p class="card-text col-lg-10">${description}</p>
          <h5 class="card-text">${priceARG} ${discount ? `<small>${discount}%OFF</small>` : ""}</h5>
        </div>
        <div class="card-footer">
        <p class="d-flex align-items-center gap-2">
            <button onclick="lessProduct(${id},${Cart.quantity})" class="btn btn-light">-</button>
            <output style="width:50px" class="form-control text-center">
              ${Cart.quantity}
            </output>
            <button class="btn btn-light" onclick="moreProduct(${id})">+</button>
            <a href="/products/artists/detail/${bandId}" class="btn btn-dark">Ver más</a>
          </p>
        </div>
        </div>
         
        </div>

     </div>
     </div>
     
     
     
     <button onclick="removeProductFromCart(${id})"
            class="fs-5 p-0 border-0 bg-transparent position-absolute text-danger " style="top:133px;right:344px"><i
              style="padding:2px" class="rounded-circle btn-clear far fa-times-circle"></i></button>
              
              
              `;
      cartContainer.innerHTML += template;
    }
    )
    return
  }
  cartContainer.innerHTML = "<h1>Tu carrito aún está vacío!</h1>";
}

window.addEventListener('load', async () => {
  try {
    const { ok, data } = await getOrder();
    if (ok) {
      pintarProducts({ products: data.cart })
      pintarTotal(data.total);
    }
  } catch (error) {
    console.log(error)
  }
})

const moreProduct = async (id) => {
  const objProductId = { albumId: id };
  const { ok } = await fetch(`${URL_API_SERVER}/api/cart/moreQuantity`, {
    method: "PUT",
    body: JSON.stringify(objProductId),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  if (ok) {
    const { ok, data } = await getOrder();
    if (ok) {
      pintarProducts({ products: data.cart });
      pintarTotal(data.total);
    }
  }
}
const lessProduct = async (id, quantity) => {
  const objProductId = {
    albumId: id
  };

  if (quantity > 1) {
    const { ok } = await fetch(`${URL_API_SERVER}/api/cart/lessQuantity`, {
      method: "PUT",
      body: JSON.stringify(objProductId),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    if (ok) {
      const { ok, data } = await getOrder();
      if (ok) {
        pintarProducts({ products: data.cart });
        pintarTotal(data.total);
      }
    }
  }
};

const removeProductFromCart = async (id) => {
  try {
    const result = await Swal.fire({
      title: "Ya casi es tuyo! ¿Estas seguro de eliminar el producto del carrito?",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    })
    if (result.isConfirmed) {
      const objProductId = {
        albumId: id
      }
      const { ok } = await fetch(`${URL_API_SERVER}/api/cart/removeProduct`, {
        method: "DELETE",
        body: JSON.stringify(objProductId),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());

      if (ok) {
        const { ok, data } = await getOrder();
        if (ok) {
          pintarProducts({ products: data.cart })
          pintarTotal(data.total)
        }

        Swal.fire({
          title: "Producto eliminado",
          icon: "success",
          timer: 1000,
          showConfirmButton: false,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
}
clearCart.addEventListener("click", async () => {
  try {
    const result = await Swal.fire({
      title: "¿Estas seguro de vaciar tu carrito?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Vaciar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    })
    if (result.isConfirmed) {
      const { ok } = await fetch(`${URL_API_SERVER}/api/cart/clearCart`, {
        method: "DELETE",
      }).then((res) => res.json());

      if (ok) {
        const { ok, data } = await getOrder();
        if (ok) {
          pintarProducts({ products: data.cart })
          pintarTotal(data.total)
        }
        Swal.fire({
          title: "Proceso completado",
          icon: "success",
          showConfirmButton: false,
          timer: 1400,
        })
      }
    }

  } catch (error) {
    console.log(error);
  }
})
btnBuy.addEventListener("click", async () => {
  const result = await Swal.fire({
    title: "¿Quieres confirmar la compra?",
    icon: "info",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Comprar",
    cancelButtonText: "Cancelar",
  });
  if (result.isConfirmed) {
    const { ok } = await fetch(`${URL_API_SERVER}/api/cart/statusOrder`, {
      method: "PUT",
      body: JSON.stringify({ status: "completed" }),
      headers: {
        "Content-Type": "application/json",
      }
    }).then((res) => res.json());

    let timerInterval;
    const result = await Swal.fire({
      title: "¡Confirmaste tu pedido!",
      text: "Espera mientras procesamos la venta",
      timer: 2000,
      timerProgressBar: true,
      showCancelButton: true,
      cancelButtonText: "Cancelar proceso",
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 200);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    })
    if (result.dismiss === Swal.DismissReason.timer) {

      await Swal.fire({
        title: ok ? "Gracias por tu compra" : "Lo sentimos, hubo un error",
        icon: ok ? "success" : "error",
        showConfirmButton: false,
        timer: 2000,
      })
      ok && (location.href = "/")
    }
  }
})