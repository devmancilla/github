const carrito = []

const verduras = [
  {imagen: '🥬', codigo: 1, nombre: 'Lechuga', precio: 50},
  {imagen: '🥒', codigo: 2, nombre: 'Pepino', precio: 60}, 
  {imagen: '🍅', codigo: 3, nombre: 'Tomate', precio: 80},
  {imagen: '🥕', codigo: 4, nombre: 'Zanahoria', precio: 70},
  {imagen: '🧅', codigo: 5, nombre: 'Cebolla', precio: 40},
  {imagen: '🥔', codigo: 6, nombre: 'Papa', precio: 90},
  {imagen: '🍆', codigo: 7, nombre: 'Berenjena', precio: 100},
  {imagen: '🥦', codigo: 8, nombre: 'Brócoli', precio: 120},
  {imagen: '🍄', codigo: 9, nombre: 'Champiñón', precio: 150},
  {imagen: '🥑', codigo: 10, nombre: 'Aguacate', precio: 200}
]

function buscarVerdura(codigo) {
  let verduraSeleccionada = verduras.find(verdura => verdura.codigo === codigo)
  return verduraSeleccionada
}

function comprar() {
    let codigo = prompt("Ingresa el código de la verdura. (el código numérico)")
    
    let verduraElegida = buscarVerdura(parseInt(codigo))
  
    if (verduraElegida !== undefined) {
  
      carrito.push(verduraElegida)
  
      alert(verduraElegida.nombre + " se agregó al carrito.")
  
      let respuesta = confirm("¿Deseas elegir otra verdura?")
  
      if (respuesta === true) {
        comprar() 
      } else {
        console.clear()
  
        const compra = new Compra(carrito)
        let subtotal = compra.obtenerSubtotal()
        
        console.table(carrito)
  
        function arrayToTable(data) {
          let table = `<table><tr><th>Código</th><th>Nombre</th><th>Precio</th></tr>`
        
          data.forEach(item => {
            table += `
              <tr>
                <td>${item.codigo}</td>
                <td>${item.imagen}</td>
                <td>${item.nombre}</td>
                <td>${item.precio}</td>  
              </tr>
            `
          })
        
          table += `</table>`
        
          return table 
        }

        const tablaHTML = arrayToTable(carrito)

        document.getElementById("tabla").innerHTML = tablaHTML

        console.log("🛍️ El costo de tu compra es: $", subtotal, "Muchas gracias!")

        document.getElementById("total").innerHTML = `Costo total $ ${subtotal}`



      }
    
    } else {
      alert("⛔️ Código incorrecto. Intenta nuevamente.")

      const compra = new Compra(carrito)
      let subtotal = compra.obtenerSubtotal()

      console.table(carrito)

      function arrayToTable(data) {
        let table = `<table><tr><th>Código</th><th>Nombre</th><th>Precio</th></tr>`
      
        data.forEach(item => {
          table += `
            <tr>
              <td>${item.codigo}</td>
              <td>${item.imagen}</td>
              <td>${item.nombre}</td>
              <td>${item.precio}</td>  
            </tr>
          `
        })
      
        table += `</table>`
      
        return table 
      }

      const tablaHTML = arrayToTable(carrito)

      document.getElementById("tabla").innerHTML = tablaHTML

      console.log("🛍️ El costo de tu compra es: $", subtotal, "Muchas gracias!")

      document.getElementById("total").innerHTML = `Costo total $ ${subtotal}`
    }
  }
  
  function eliminarProdDelCarrito() {
  
    console.clear()
    
    const compra = new Compra(carrito)
    let subtotal = compra.obtenerSubtotal()

    console.table(carrito)
    
    let cod = prompt("Ingresa el código a eliminar:")
  
    let indice = carrito.findIndex(verdura => verdura.codigo === parseInt(cod))
  
    if (indice !== -1) {

      carrito.splice(indice, 1)
      console.table(carrito)

      function arrayToTable(data) {
        let table = `<table><tr><th>Código</th><th>Nombre</th><th>Precio</th></tr>`
      
        data.forEach(item => {
          table += `
            <tr>
              <td>${item.codigo}</td>
              <td>${item.imagen}</td>
              <td>${item.nombre}</td>
              <td>${item.precio}</td>  
            </tr>
          `
        })
      
        table += `</table>`
      
        return table 
      }

      const tablaHTML = arrayToTable(carrito)

      document.getElementById("tabla").innerHTML = tablaHTML

      console.log("🛍️ El costo de tu compra es: $", subtotal, "Muchas gracias!")

      document.getElementById("total").innerHTML = `Costo total $ ${subtotal}`

    }
  
  }