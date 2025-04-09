
import { v4 as uuidv4 } from 'uuid';


const users = []


export const getUsers = (req, res) => {
    res.send((users))
}


export const getUserById = (req, res) => {
    const {id } = req.params
    const user = users.find((user) => {
        return user.id === id
    })
    res.send((user))
}


export const createUser = (req, res) => {
    const {username, gender, age, email} = req.body 

    const duplicated = users.find((user) => user.email == email)

    if (duplicated) {
        return res.send({
        success:false,
        message : "Email already created"
    }).end()}
    users.push({ username, gender, age ,email , id : uuidv4()})

    res.send({success : true,
        message: "user created"
    })
}



export const userUpdate = (req, res) => {
    const { id, username, gender, age, email } = req.body;
    users.map((user) => {
        if (user.id === id) {
            user.username = username;
            user.gender = gender;
            user.age = age;
            user.email = email;
        }
    });

    res.send({
        success: true,
        message: "user info is updated"
    });
}


export const deleteUser = (req, res) => {
    const { id } = req.body;
    users = users.filter((user) => user.id !== id);
        res.send({
            success : true,
            message : "User is deleted"
        })
}
