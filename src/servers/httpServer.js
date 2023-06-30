import express from 'express';
import { createMatchService } from '../factories/matchServiceFactory.js';
import { createPointsService } from '../factories/pointsServiceFactory.js';

const pointsService = createPointsService();
const matchService = createMatchService();

const configureHTTPServer = (app) => {
  app.set('view engine', 'ejs');
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.get('/', (_, res) => {
    return res.render('index');
  });

  app.get('/match/:id', async (req, res) => {
    const id = req.params.id;

    const result = await matchService.findOne(id);
    const { code, data } = result;

    return res.status(code).json(data);
  });

  app.get('/matches', async (_, res) => {
    const result = await matchService.findAll();
    const { code, data } = result;

    return res.status(code).json(data);
  });

  app.get('/create/match', (_, res) => {
    return res.render('admin/createMatch');
  });

  app.get('/update/match/:id', async (req, res) => {
    const result = await matchService.findOne(req.params.id);

    const { code, data } = result;

    return res.status(code)
      .render('admin/updateMatch', { match: data[0] });
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

  app.post('/update/match/:id', async (req, res) => {
    const id = req.params.id;

    const result = await matchService.update(id, { ...req.body });
    const { code, data } = result;
    return res.status(code).json(data);
  });

  app.post('/delete/match/:id', async (req, res) => {
    const id = req.params.id;

    const result = await matchService.delete(id);
    const { code, data } = result;
    return res.status(code).json(data);
  })

  app.get('/adm', (_, res) => {
    return res.render('admin');
  });

  app.get('/session/points/:id', async (req, res) => {
    const result = await pointsService.findOne(req.params.id);
    const { code, data } = result;
    return res.status(code).json(data);
  });
};

export { configureHTTPServer };
