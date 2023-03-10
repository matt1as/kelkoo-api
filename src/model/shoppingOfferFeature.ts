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
import { ShoppingOfferFeatureValue } from './shoppingOfferFeatureValue';

export class ShoppingOfferFeature {
  'label'?: string;
  'values': Array<ShoppingOfferFeatureValue>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
    {
      name: 'label',
      baseName: 'label',
      type: 'string',
    },
    {
      name: 'values',
      baseName: 'values',
      type: 'Array<ShoppingOfferFeatureValue>',
    },
  ];

  static getAttributeTypeMap() {
    return ShoppingOfferFeature.attributeTypeMap;
  }
}
