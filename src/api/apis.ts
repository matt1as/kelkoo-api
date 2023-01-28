export * from './changesApi';
import { ChangesApi } from './changesApi';
export * from './feedsApi';
import { FeedsApi } from './feedsApi';
export * from './linksApi';
import { LinksApi } from './linksApi';
export * from './searchOffersApi';
import { SearchOffersApi } from './searchOffersApi';
import * as http from 'http';

export class HttpError extends Error {
  constructor(public response: http.IncomingMessage, public body: any, public statusCode?: number) {
    super('HTTP request failed');
    this.name = 'HttpError';
  }
}

export { RequestFile } from '../model/models';

export const APIS = [ChangesApi, FeedsApi, LinksApi, SearchOffersApi];
