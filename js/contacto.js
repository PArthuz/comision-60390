document.addEventListener('DOMContentLoaded', function() {
    const productos = [
      { id: 'cantidad-masa-fina', precio: 10 },
      { id: 'cantidad-brownie', precio: 15 }
    ];
  
    function actualizarTotal() {
      let total = 0;
      productos.forEach(producto => {
        const cantidad = document.getElementById(producto.id).value;
        total += cantidad * producto.precio;
      });
      document.getElementById('total-compra').innerText = `Total: $${total}`;
    }
  
    document.getElementById('actualizar-compra').addEventListener('click', actualizarTotal);
  
    // Inicializar total al cargar la página
    actualizarTotal();
  });
  