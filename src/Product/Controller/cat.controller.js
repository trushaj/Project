const pool = require('../../../db');
const queries = require('../cat.queries');
const User = require('../../../models/user');

const getCategory = (req, res) => {
    pool.query(queries.getCategory, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
        res.send(req.user);
    User.findByIdAndRemove({_id: req.user});
    });
};

const getCategoryById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getCategoryById, [id], (error, results) =>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const addCategory = (req, res) => {
    //destructuring
    const { id, name } = req.body;

    //check if id exists
    pool.query(queries.checkIdExists, [id], (error, result) =>{
        if (result.rows.length){
            res.send("Id aleady exists.");
        }
    });

    //adding category to db
    pool.query(queries.addCategory,
        [id, name],
        (error, results) => {
        if(error) throw error;
        res.status(201).send("Category Created Succesfully!");
    }
    );
};

const removeCategory = (req, res) => {
    const id = parseInt(req.params.id);
    
    pool.query(queries.getCategoryById, [id], (error, results) => {
        const noCategoryFound = !results.rows.length;
        if (noCategoryFound){
            res.send("Category does not exist in the database!");
        }

        pool.query(queries.removeCategory, [id], (error,results) => {
            if (error) throw error;
            res.status(200).send("Category removed succesfully!");
        });
    });
};

const updateCategory = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    pool.query(queries.getCategoryById, [id], (error, results) => {
        const noCategoryFound = !results.rows.length;
        if (noCategoryFound){
            res.send("Category does not exist in the database!");
        }

        pool.query(queries.updateCategory, [name, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Category updated successfully!");
        });
    });
}

module.exports = {
    getCategory,
    getCategoryById,
    addCategory,
    removeCategory,
    updateCategory,
};