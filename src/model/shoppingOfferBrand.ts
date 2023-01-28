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

export class ShoppingOfferBrand {
  'id'?: object;
  'name'?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
    {
      name: 'id',
      baseName: 'id',
      type: 'object',
    },
    {
      name: 'name',
      baseName: 'name',
      type: 'string',
    },
  ];

  static getAttributeTypeMap() {
    return ShoppingOfferBrand.attributeTypeMap;
  }
}
