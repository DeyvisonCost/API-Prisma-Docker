import express  from "express";
import cors from "cors";
import dotenv from "dotenv";
import {routes} from "./routes";

dotenv.config();
const app = express();
const port = 3001  

app.use(cors());
app.use(express.json());

routes(app);

app.listen(port);
console.log(`Server is running at ${port}`);
