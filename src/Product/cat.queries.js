const getCategory = "select * from categories";
const getCategoryById = "select * from categories where id = $1";
const checkIdExists = "select s from categories s where s.id = $1";
const addCategory = "insert into categories (id,name) values ($1, $2)";
const removeCategory = "delete from categories where id = $1";
const updateCategory = "update categories set name = $1 where id = $2";


module.exports = {
    getCategory,
    getCategoryById,
    checkIdExists,
    addCategory,
    removeCategory,
    updateCategory,
};