const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'password',
    database: 'firstapi',
    port: '5432'
})

const getUsers = async (req, res) => {
    const response = await pool.query('Select * from users');
    //console.log(response.rows);
    res.status(200).json(response.rows);
}

const getUserById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('Select * from users where id = $1', [id]);
    //console.log(response.rows);
    res.status(200).json(response.rows);
}

const createUser = async (req, res) => {
    const { name, email } = req.body;
    const response = await pool.query('insert into users (name, email) values ($1, $2)', [name, email]);
    //console.log(response);
    res.json({
        message: 'Usuário adicionado com sucesso',
        body: {
            users: {name, email}
        }
    })
}

const updateUser = async (req,res) => {
    const id = req.params.id;
    const { name, email } = req.body;
    const response = await pool.query('update users set name = $1, email = $2 where id = $3', [name, email, id]);
    //console.log(response);
    res.json('Usuário atualizado com sucesso!');
}

const deleteUser = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('delete from users where id = $1', [id]);
    res.send('Usuário ' + id + ' deletado com sucesso!');
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}