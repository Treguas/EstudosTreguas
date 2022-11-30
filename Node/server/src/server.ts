import express from 'express';
import { routes } from "./routes/routes";
import cors  from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP Server Running!');
});