const pool = require('../../../db');
const queries = require('../subc.queries');

const getSubCategory = (req, res) => {
    pool.query(queries.getSubCategory, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getSubCategoryById = (req, res) => {
    const subc_id = parseInt(req.params.id);
    pool.query(queries.getSubCategoryById, [subc_id], (error, results) =>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const addSubCategory = (req, res) => {
    //destructuring
    const { subc_id, name } = req.body;

    //check if id exists
    pool.query(queries.checkIdExists, [subc_id], (error, result) =>{
        if (result.rows.length){
            res.send("Sub-Category Id aleady exists.");
        }
    });

    //adding sub-category to db
    pool.query(queries.addSubCategory,
        [subc_id, name],
        (error, results) => {
        if(error) throw error;
        res.status(201).send("Sub-Category Created Succesfully!");
    }
    );
};

const removeSubCategory = (req, res) => {
    const subc_id = parseInt(req.params.id);
    
    pool.query(queries.getSubCategoryById, [subc_id], (error, results) => {
        const noSubCategoryFound = !results.rows.length;
        if (noSubCategoryFound){
            res.send("Sub-Category does not exist in the database!");
        }

        pool.query(queries.removeSubCategory, [subc_id], (error,results) => {
            if (error) throw error;
            res.status(200).send("Sub-Category removed succesfully!");
        });
    });
};

const updateSubCategory = (req, res) => {
    const subc_id = parseInt(req.params.id);
    const { name } = req.body;

    pool.query(queries.getSubCategoryById, [subc_id], (error, results) => {
        const noSubCategoryFound = !results.rows.length;
        if (noSubCategoryFound){
            res.send("Sub-Category does not exist in the database!");
        }

        pool.query(queries.updateSubCategory, [name, subc_id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Sub-Category updated successfully!");
        });
    });
}

module.exports = {
    getSubCategory,
    getSubCategoryById,
    addSubCategory,
    removeSubCategory,
    updateSubCategory,
};