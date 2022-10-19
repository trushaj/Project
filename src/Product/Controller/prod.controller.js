const pool = require('../../../db');
const queries = require('../prod.queries');

const getProduct = (req, res) => {
    pool.query(queries.getProduct, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getProductById = (req, res) => {
    const p_id = parseInt(req.params.id);
    pool.query(queries.getProductById, [p_id], (error, results) =>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const addProduct = (req, res) => {
    //destructuring
    const { p_id, name } = req.body;

    //check if id exists
    pool.query(queries.checkIdExists, [p_id], (error, result) =>{
        if (result.rows.length){
            res.send("Product Id aleady exists.");
        }
    });

    //adding category to db
    pool.query(queries.addProduct,
        [p_id, name],
        (error, results) => {
        if(error) throw error;
        res.status(201).send("Product Created Succesfully!");
    }
    );
};

const removeProduct = (req, res) => {
    const p_id = parseInt(req.params.id);
    
    pool.query(queries.getProductById, [p_id], (error, results) => {
        const noProductFound = !results.rows.length;
        if (noProductFound){
            res.send("Product does not exist in the database!");
        }

        pool.query(queries.removeProduct, [p_id], (error,results) => {
            if (error) throw error;
            res.status(200).send("Product removed succesfully!");
        });
    });
};

const updateProduct = (req, res) => {
    const p_id = parseInt(req.params.id);
    const { name } = req.body;

    pool.query(queries.getProductById, [p_id], (error, results) => {
        const noCategoryFound = !results.rows.length;
        if (noCategoryFound){
            res.send("Product does not exist in the database!");
        }

        pool.query(queries.updateProduct, [name, p_id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Product updated successfully!");
        });
    });
}

module.exports = {
    getProduct,
    getProductById,
    addProduct,
    removeProduct,
    updateProduct,
};