const productos = [
    {
        "id": 1,
        "title": "Escuadra",
        "price": 123.45,
        "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png"
    },
    {
        "id": 2,
        "title": "pepito",
        "price": 234.56,
        "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png"
    },
    {
        "id": 3,
        "title": "Globo Terráqueo",
        "price": 345.67,
        "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png"
    }

]

// let productPromise = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         resolve(productos);
//     }, 1000);
// });

export const getProductos = () => {
    return productos;
};

export const getProducto = (id) => {
    const index = productos.findIndex(producto => producto.id === parseInt(id));
    if (index === -1) {
        return aviso ='no existe el id buscado';
    }
    return productos[index];
}

export const deleteProducto = (id) => {
    const index = productos.findIndex(producto => producto.id === parseInt(id));
    if (index === -1) {
        console.log('no existe el id buscado')
    }
    productos.splice(index, 1);
}

export const addProducto = producto => {
    const productoNuevo = { ...producto, id: productos.length + 1 };
    productos.push(productoNuevo);
    return productoNuevo
};

export const updateProducto = (id, producto) => {
    const index = productos.findIndex(producto => producto.id === id);
    productos[index].title = producto.title;
    productos[index].price = producto.price;
    productos[index].thumbnail = producto.thumbnail;
    return productos[index];
}

console.table(getProducto(5));

