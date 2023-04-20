import { Router } from 'express';

const routes = new Router();

routes.get('/', (request, response) => {
    response.send({message: "Oi"})
});


export default routes;