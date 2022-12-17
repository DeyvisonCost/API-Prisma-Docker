import {create, getAll, getId} from "../controllers/user.controller"

export const userRoutes = app => {
    app.post("/user", create)
    app.get("/user", getAll)
    app.get("/user/:id", getId)

}
    