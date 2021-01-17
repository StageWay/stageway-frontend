import { domain, clientId } from '../../auth_config_prod.json';

export const environment = {
  production: false,
  auth: {
    domain,
    clientId,
    redirectUri: window.location.origin,
  },
};