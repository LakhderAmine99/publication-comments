import Express from "express";
import publicationRouter from "../routes/publications.routes.js";

const router = Express.Router();

router.use(publicationRouter);

export default router;