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
import { LinksResult } from './linksResult';

export class LinksResponse {
  'result': LinksResult;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
    {
      name: 'result',
      baseName: 'result',
      type: 'LinksResult',
    },
  ];

  static getAttributeTypeMap() {
    return LinksResponse.attributeTypeMap;
  }
}