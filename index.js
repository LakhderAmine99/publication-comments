import Express from "express";
import path from "path";
import {fileURLToPath} from 'url';

import router from "./src/routes/@index.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = Express();

app.set('views',path.join(__dirname,'./src/views'));
app.set('view engine','pug');

app.use(Express.static(path.join(__dirname,'./public')));
app.use(router);

app.listen(8089,() => {

    console.log(`Server running on http://localhost:8089`);
});