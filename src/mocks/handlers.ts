import { rest } from 'msw';
import fixtures from '../../fixtures';

const BASE_URL = 'http://localhost:3000';

const handlers = [
  rest.get(`${BASE_URL}/restaurants`, (req, res, ctx) => {
    const { restaurants } = fixtures;
    return res(ctx.json({ restaurants }));
  }),
];

export default handlers;
