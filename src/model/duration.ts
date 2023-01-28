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
import { TemporalUnit } from './temporalUnit';

export class Duration {
  'seconds': number;
  'nano': number;
  'units': Array<TemporalUnit>;
  'zero': boolean;
  'negative': boolean;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
    {
      name: 'seconds',
      baseName: 'seconds',
      type: 'number',
    },
    {
      name: 'nano',
      baseName: 'nano',
      type: 'number',
    },
    {
      name: 'units',
      baseName: 'units',
      type: 'Array<TemporalUnit>',
    },
    {
      name: 'zero',
      baseName: 'zero',
      type: 'boolean',
    },
    {
      name: 'negative',
      baseName: 'negative',
      type: 'boolean',
    },
  ];

  static getAttributeTypeMap() {
    return Duration.attributeTypeMap;
  }
}
