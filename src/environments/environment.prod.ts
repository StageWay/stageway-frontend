import { domain, clientId } from '../../auth_config_prod.json';

export const environment = {
  production: true,
  auth: {
    domain,
    clientId,
    redirectUri: window.location.origin,
  },
  baseAPIUrl: "https://stageway-api.azurewebsites.net/api"
};
