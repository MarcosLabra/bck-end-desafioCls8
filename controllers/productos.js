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

let productPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve(productos);
    }, 1000);
});

export const getProductos = () => {
    return productPromise;
};

export const getProducto = (id) => {
    return productos.find(prod => prod.id == id);
}

// export const deleteProducto =  (id) => {
//     return  productos.find(prod => prod.id == id);
// }

export const addProducto =  producto => {
    const productoNuevo =  {...producto, id: productos.length + 1};
    console.log(productoNuevo);
    productos.push(productoNuevo);
    return productoNuevo
};

// export const deleteUser = user => {
//     console.log('borrar usuario');
// };