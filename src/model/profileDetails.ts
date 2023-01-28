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
import { ImageSize } from './imageSize';
import { ServiceType } from './serviceType';

export class ProfileDetails {
  'id': number;
  'country': string;
  'trafficGroup': string;
  'trackingIds': Array<object>;
  'fallbackEnabled': boolean;
  'feedsImageSize': ImageSize;
  'serviceTier': string;
  'searchAllowHighNumberOfOffers': boolean;
  'searchExposeInternalMetadata': boolean;
  'offerTieringEnabled': boolean;
  'serviceType'?: object;
  'getServiceType'?: ServiceType;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
    {
      name: 'id',
      baseName: 'id',
      type: 'number',
    },
    {
      name: 'country',
      baseName: 'country',
      type: 'string',
    },
    {
      name: 'trafficGroup',
      baseName: 'trafficGroup',
      type: 'string',
    },
    {
      name: 'trackingIds',
      baseName: 'trackingIds',
      type: 'Array<object>',
    },
    {
      name: 'fallbackEnabled',
      baseName: 'fallbackEnabled',
      type: 'boolean',
    },
    {
      name: 'feedsImageSize',
      baseName: 'feedsImageSize',
      type: 'ImageSize',
    },
    {
      name: 'serviceTier',
      baseName: 'serviceTier',
      type: 'string',
    },
    {
      name: 'searchAllowHighNumberOfOffers',
      baseName: 'searchAllowHighNumberOfOffers',
      type: 'boolean',
    },
    {
      name: 'searchExposeInternalMetadata',
      baseName: 'searchExposeInternalMetadata',
      type: 'boolean',
    },
    {
      name: 'offerTieringEnabled',
      baseName: 'offerTieringEnabled',
      type: 'boolean',
    },
    {
      name: 'serviceType',
      baseName: 'serviceType',
      type: 'object',
    },
    {
      name: 'getServiceType',
      baseName: 'getServiceType',
      type: 'ServiceType',
    },
  ];

  static getAttributeTypeMap() {
    return ProfileDetails.attributeTypeMap;
  }
}
