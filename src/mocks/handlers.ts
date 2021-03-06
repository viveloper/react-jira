// src/mocks/handlers.js
import { rest } from 'msw';

export interface LoginBody {
  email: string;
  password: string;
}
export interface LoginResponse {
  email: string;
  accessToken: string;
  refreshToken: string;
}

export const handlers = [
  rest.get('/sample', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ messgae: 'this is sample api.' }));
  }),

  rest.post<LoginBody, LoginResponse>('/login', (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem('is-authenticated', 'true');
    const { email, password } = req.body;
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        email,
        accessToken: 'accessToken',
        refreshToken: 'refreshToken',
      }),
    );
  }),

  rest.get('/user', (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem('is-authenticated');
    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        }),
      );
    }
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      }),
    );
  }),
];
