import { BASE_URL } from 'configs';
import { rest } from 'msw';

const handlers = [
  rest.get(`${BASE_URL}/ports`, (req, res, ctx) => {
    const mockApiResponse = [
      {
        code: 'NOOSL',
        name: 'Oslo',
      },
      {
        code: 'CNSGH',
        name: 'Shanghai',
      },
      {
        code: 'CNSTG',
        name: 'Shantou',
      },
    ];
    return res(ctx.json(mockApiResponse));
  }),
];

export { handlers };
