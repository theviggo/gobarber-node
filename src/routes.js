import { Router } from 'express';

const routes = new Router();

routes.post('/', (req, res) => res.json({ ok: true }));

export default routes;
