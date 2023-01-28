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
import { ConstraintsAtProfileLevel } from './constraintsAtProfileLevel';
import { ProfileDetails } from './profileDetails';

export class ProfileWithConstraints {
  'details': ProfileDetails;
  'constraints': ConstraintsAtProfileLevel;
  'trackingId': number;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
    {
      name: 'details',
      baseName: 'details',
      type: 'ProfileDetails',
    },
    {
      name: 'constraints',
      baseName: 'constraints',
      type: 'ConstraintsAtProfileLevel',
    },
    {
      name: 'trackingId',
      baseName: 'trackingId',
      type: 'number',
    },
  ];

  static getAttributeTypeMap() {
    return ProfileWithConstraints.attributeTypeMap;
  }
}
