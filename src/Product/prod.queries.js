const getProduct = "select * from products";
const getProductById = "select * from products where p_id = $1";
const checkIdExists = "select s from products s where s.p_id = $1";
const addProduct = "insert into products (p_id,name) values ($1, $2)";
const removeProduct = "delete from products where p_id = $1";
const updateProduct = "update products set name = $1 where p_id = $2";


module.exports = {
    getProduct,
    getProductById,
    checkIdExists,
    addProduct,
    removeProduct,
    updateProduct,
};