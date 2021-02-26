import { domain, clientId } from '../../auth_config_prod.json';

export const environment = {
  production: true,
  auth: {
    domain,
    clientId,
    redirectUri: window.location.origin,
  },
  baseAPIUrl: "http://localhost:9000/api"
};