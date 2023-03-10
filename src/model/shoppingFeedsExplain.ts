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
import { ExplanationError } from './explanationError';
import { ProfileWithConstraints } from './profileWithConstraints';
import { ShoppingFeedsExplainQuota } from './shoppingFeedsExplainQuota';

export class ShoppingFeedsExplain {
  'errors': Array<ExplanationError>;
  'solrClause'?: string;
  'visibleComIds': Set<object>;
  'profile'?: ProfileWithConstraints;
  'quota': ShoppingFeedsExplainQuota;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
    {
      name: 'errors',
      baseName: 'errors',
      type: 'Array<ExplanationError>',
    },
    {
      name: 'solrClause',
      baseName: 'solrClause',
      type: 'string',
    },
    {
      name: 'visibleComIds',
      baseName: 'visibleComIds',
      type: 'Set<object>',
    },
    {
      name: 'profile',
      baseName: 'profile',
      type: 'ProfileWithConstraints',
    },
    {
      name: 'quota',
      baseName: 'quota',
      type: 'ShoppingFeedsExplainQuota',
    },
  ];

  static getAttributeTypeMap() {
    return ShoppingFeedsExplain.attributeTypeMap;
  }
}
