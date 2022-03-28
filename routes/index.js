import { Router } from "express";
import { getProductos, getProducto, deleteProducto, addProducto, updateProducto} from '../controllers/productos.js';
const router = Router();

router.get('/', (req, res) => {
    res.send('Esta es la ruta de prueba get')
});

router.get('/productos', (req, res) => {
    let productos = getProductos();
    res.send(productos);
});

router.get('/productos/:id', async (req, res) => {
    const id = req.params.id;
    let producto = getProducto(id);
    res.send(producto);
});

router.post('/productos',  (req, res) => {
    console.log(req.body);
    let productoNuevo = addProducto(req.body);
    res.send(`${productoNuevo} agregado, su id es ${productoNuevo.id}`);
});

router.put('/productos/:id', (req, res) => {
    const id = req.params.id;
    let producto = updateProducto(id, req.body);
    res.send(`${producto} actualizado`);
});

router.delete('/productos/:id',  (req, res) => {
    const id = req.params.id;
    let producto =  deleteProducto(id);
    res.send(`${producto} eliminado`);
});

export default router;