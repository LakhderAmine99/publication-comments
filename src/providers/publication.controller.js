import {data} from '../db/db.js';

/**
 * 
 */
export default class PublicationController {

    constructor(){}

    /**
     * 
     * @param {Request} req 
     * @param {Response} res 
     */
    async index_get(req,res){

        res.render('index',{

            title:"Home"
        });
    }

    /**
     * 
     * @param {Request} req 
     * @param {Response} res 
     */
    async publications_all_get(req,res){

        let publications = data;

        // fetch all publications using fetch api
        

        res.render('publications',{

            title:"publications",
            publications:publications
        });
    }

    /**
     * 
     * @param {Request} req 
     * @param {Response} res 
     */
    async publication_get(req,res){

        let publication = data.find(publication => publication.id == req.params.id);

        res.render('publication',{

            title:publication.title,
            publication:publication
        });
    }
}
