import { template } from 'lodash';
import { API_KEY } from '../common/config';

/**
 * Contains the Paths in the application available to route to
 */
export default {
  newsApi:template(`https://newsapi.org/v2/top-headlines?sources=<%= newsSourceId %>&apiKey=${API_KEY}`)
};
