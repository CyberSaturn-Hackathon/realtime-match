import express from 'express';
import { createMatchService } from '../factories/matchServiceFactory.js';

const matchService = createMatchService();

const configureHTTPServer = (app)=>{
  app.set('view engine', 'ejs');
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.get('/', (_, res) => {
    return res.render('index');
  });

  app.get('/create/match', (_, res) => {
    return res.render('admin/createMatch');
  });

  app.post('/save/match', async (req, res) => {
    const { teamA, teamB, tournament, place, modality } = req.body;
    const result = await matchService.create({
      teamA,
      teamB,
      tournament,
      place,
      modality,
    });

    const { data, message, code } = result;

    return res.status(code).json({ message, data });
  });

  app.get('/adm', (_, res) => {
    return res.render('admin');
  });

  app.get('/session/points', (_, res) => {
    return res.json(SESSION_POINTS_DATA);
  });
}

export { configureHTTPServer };