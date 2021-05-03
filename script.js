class Producto {
    constructor(producto = {}) {
        this.nombre = producto.nombre || ''
        this.descripcion = producto.descripcion || ''
        this.precio = producto.precio || 0
    }
}
var app = new Vue({
    el: '#app',
    data: {
        error: false,
        titulo: 'Mantenedor de productos',
        productos: [],
        nuevoProducto: '',
        editarProducto: '',
        nuevaDescripcion: '',
        editarDescripcion: '',
        nuevoPrecio: 0,
        editarPrecio: '',
        editIndex: -1
    },
    methods: {
        agregarProducto() {
            if(this.nuevoProducto.length > 0 && 
                this.nuevaDescripcion.length > 0 && 
                this.nuevoPrecio > 0) {
                this.error = false;
                this.productos.push(new Producto({
                    nombre: this.nuevoProducto,
                    descripcion: this.nuevaDescripcion,
                    precio: this.nuevoPrecio
                }));
                this.nuevoProducto = '';
                this.nuevaDescripcion = '';
                this.nuevoPrecio = 0;
            } else {
                this.error = true;
            }
            
        },
        setProducto(index) {
            this.editIndex = index;
            this.editarProducto = this.productos[index].nombre;
            this.editarDescripcion = this.productos[index].descripcion;
            this.editarPrecio = this.productos[index].precio;
        },
        eliminarProducto(index) {
            this.productos.splice(index, 1);
        },
        actualizarProducto(index) {
            this.productos[index].nombre = this.editarProducto;
            this.productos[index].descripcion = this.editarDescripcion;
            this.productos[index].precio = this.editarPrecio;
            this.editIndex = -1;
        }
    }
})
