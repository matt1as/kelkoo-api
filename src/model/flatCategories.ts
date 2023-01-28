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
import { FlatCategory } from './flatCategory';

export class FlatCategories {
  'categories': Array<FlatCategory>;
  'format': string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
    {
      name: 'categories',
      baseName: 'categories',
      type: 'Array<FlatCategory>',
    },
    {
      name: 'format',
      baseName: 'format',
      type: 'string',
    },
  ];

  static getAttributeTypeMap() {
    return FlatCategories.attributeTypeMap;
  }
}
