/**
 * Shopping API
 * KelkooGroup next generation shopping API. Documentation available at https://developers.kelkoogroup.com/.
 *
 * The version of the OpenAPI document: 4.21.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { MerchantCategoryDTO } from './merchantCategoryDTO';
import { MerchantDirectoryLinkDTO } from './merchantDirectoryLinkDTO';

export class MerchantDTO {
  'id': number;
  'name': string;
  'url': string;
  'summary': string;
  'logoUrl': string;
  'deliveryCountries': Array<string>;
  'categories': Array<MerchantCategoryDTO>;
  'directoryLinks': Array<MerchantDirectoryLinkDTO>;
  'supportsLinksOfferMatch': boolean;
  'supportsLinksMerchantMatch': boolean;
  'forbiddenTrafficTypes': Array<string>;
  'cpcType': string;
  'targetCos'?: object;
  'currency'?: string;
  'visibilityRecentlyChanged'?: object;
  'visible': boolean;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
    {
      name: 'id',
      baseName: 'id',
      type: 'number',
    },
    {
      name: 'name',
      baseName: 'name',
      type: 'string',
    },
    {
      name: 'url',
      baseName: 'url',
      type: 'string',
    },
    {
      name: 'summary',
      baseName: 'summary',
      type: 'string',
    },
    {
      name: 'logoUrl',
      baseName: 'logoUrl',
      type: 'string',
    },
    {
      name: 'deliveryCountries',
      baseName: 'deliveryCountries',
      type: 'Array<string>',
    },
    {
      name: 'categories',
      baseName: 'categories',
      type: 'Array<MerchantCategoryDTO>',
    },
    {
      name: 'directoryLinks',
      baseName: 'directoryLinks',
      type: 'Array<MerchantDirectoryLinkDTO>',
    },
    {
      name: 'supportsLinksOfferMatch',
      baseName: 'supportsLinksOfferMatch',
      type: 'boolean',
    },
    {
      name: 'supportsLinksMerchantMatch',
      baseName: 'supportsLinksMerchantMatch',
      type: 'boolean',
    },
    {
      name: 'forbiddenTrafficTypes',
      baseName: 'forbiddenTrafficTypes',
      type: 'Array<string>',
    },
    {
      name: 'cpcType',
      baseName: 'cpcType',
      type: 'string',
    },
    {
      name: 'targetCos',
      baseName: 'targetCos',
      type: 'object',
    },
    {
      name: 'currency',
      baseName: 'currency',
      type: 'string',
    },
    {
      name: 'visibilityRecentlyChanged',
      baseName: 'visibilityRecentlyChanged',
      type: 'object',
    },
    {
      name: 'visible',
      baseName: 'visible',
      type: 'boolean',
    },
  ];

  static getAttributeTypeMap() {
    return MerchantDTO.attributeTypeMap;
  }
}