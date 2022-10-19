const getSubCategory = "select * from subcategories";
const getSubCategoryById = "select * from subcategories where subc_id = $1";
const checkIdExists = "select s from subcategories s where s.subc_id = $1";
const addSubCategory = "insert into subcategories (subc_id,name) values ($1, $2)";
const removeSubCategory = "delete from subcategories where subc_id = $1";
const updateSubCategory = "update subcategories set name = $1 where subc_id = $2";


module.exports = {
    getSubCategory,
    getSubCategoryById,
    checkIdExists,
    addSubCategory,
    removeSubCategory,
    updateSubCategory,
};