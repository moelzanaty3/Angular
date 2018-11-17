import { ENV } from './../_core/env.config';
interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  CLINET_SECRET: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'UfOD3RHIy5hSNTOaMW7rGLJDd2vWK8PG',
  CLIENT_DOMAIN: 'mohamedelzanaty.auth0.com',
  CLINET_SECRET:
    'sM7ohnuptNdKGk5GnveBQwFjpnlPlq4IYEteNW_XPfOwlZlXwpbSClXbjxpMBkmX',
  AUDIENCE: 'http://localhost:8083/api/',
  REDIRECT: `${
    ENV.BASE_URI // e.g., you.auth0.com // e.g., http://localhost:8083/api/
  }/callback`,
  SCOPE: 'openid profile'
};
