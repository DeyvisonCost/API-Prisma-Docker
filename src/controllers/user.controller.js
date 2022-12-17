import bcrypt from "bcrypt"
import {userValidation} from "../validations/user.validation"
import {createUser, getAllUsers, getById} from "../repositories/user.repositories"

export const create = async (request, response) =>{
    try {
        await userValidation.validate(request.body)

        const hashPassword = await bcrypt.hash(request.body.password, 10)
        request.body.password = hashPassword

        const user = await createUser(request.body)
        response.status(200).send(user)

    } catch (err){
        response.status(400).send(err)
    }
} 

export const getAll = async (request, response) =>{
    try {
        const users = await getAllUsers();
        response.status(200).send(users)
    } catch (err) {
        response.status(400).send(err)
    }
}

export const getId = async (request, response) => {
    try{
        const user = await getById(Number(request.params.id))
        response.status(200).send(user)
    } catch (err) {
        response.status(400).send(err)
    }

}