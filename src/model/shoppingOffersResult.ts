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
import { ShoppingOffer } from './shoppingOffer';

export class ShoppingOffersResult {
  'offers': Array<ShoppingOffer>;
  'meta': object;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
    {
      name: 'offers',
      baseName: 'offers',
      type: 'Array<ShoppingOffer>',
    },
    {
      name: 'meta',
      baseName: 'meta',
      type: 'object',
    },
  ];

  static getAttributeTypeMap() {
    return ShoppingOffersResult.attributeTypeMap;
  }
}
