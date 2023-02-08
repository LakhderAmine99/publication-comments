import Express from "express";
import PublicationController from "../providers/publication.controller.js";

const publicationRouter = Express.Router();
const publicationController = new PublicationController();

publicationRouter.get('/',publicationController.index_get);

publicationRouter.get('/publications',publicationController.publications_all_get);

publicationRouter.get('/publication/:id',publicationController.publication_get);

export default publicationRouter;