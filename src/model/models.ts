import localVarRequest from 'request';

export * from './categoryElementOutput';
export * from './categoryTreeOutput';
export * from './constraintsAtProfileLevel';
export * from './duration';
export * from './errorDTOWithMetadata';
export * from './explanationError';
export * from './fieldCount';
export * from './fieldStats';
export * from './flatCategories';
export * from './flatCategory';
export * from './googleProductCategory';
export * from './imageSize';
export * from './linkResponse';
export * from './linkResult';
export * from './linksResponse';
export * from './linksResult';
export * from './merchantCategoryDTO';
export * from './merchantDTO';
export * from './merchantDirectoryLinkDTO';
export * from './merchantVisibilityChanges';
export * from './merchantVisibilityChangesData';
export * from './merchantVisibilityChangesDetails';
export * from './modelError';
export * from './privateMetaInformationDTO';
export * from './privateMetaResponseDTO';
export * from './profileDetails';
export * from './profileWithConstraints';
export * from './requestStatus';
export * from './searchDebugMetadata';
export * from './searchMetadata';
export * from './serviceType';
export * from './shoppingFeedsExplain';
export * from './shoppingFeedsExplainQuota';
export * from './shoppingOffer';
export * from './shoppingOfferBrand';
export * from './shoppingOfferCategory';
export * from './shoppingOfferCodes';
export * from './shoppingOfferFeature';
export * from './shoppingOfferFeatureValue';
export * from './shoppingOfferFlags';
export * from './shoppingOfferImageUrl';
export * from './shoppingOfferMerchant';
export * from './shoppingOfferUrls';
export * from './shoppingOffersResult';
export * from './temporalUnit';

import * as fs from 'fs';

export interface RequestDetailedFile {
  value: Buffer;
  options?: {
    filename?: string;
    contentType?: string;
  };
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;

import { CategoryElementOutput } from './categoryElementOutput';
import { CategoryTreeOutput } from './categoryTreeOutput';
import { ConstraintsAtProfileLevel } from './constraintsAtProfileLevel';
import { Duration } from './duration';
import { ErrorDTOWithMetadata } from './errorDTOWithMetadata';
import { ExplanationError } from './explanationError';
import { FieldCount } from './fieldCount';
import { FieldStats } from './fieldStats';
import { FlatCategories } from './flatCategories';
import { FlatCategory } from './flatCategory';
import { GoogleProductCategory } from './googleProductCategory';
import { ImageSize } from './imageSize';
import { LinkResponse } from './linkResponse';
import { LinkResult } from './linkResult';
import { LinksResponse } from './linksResponse';
import { LinksResult } from './linksResult';
import { MerchantCategoryDTO } from './merchantCategoryDTO';
import { MerchantDTO } from './merchantDTO';
import { MerchantDirectoryLinkDTO } from './merchantDirectoryLinkDTO';
import { MerchantVisibilityChanges } from './merchantVisibilityChanges';
import { MerchantVisibilityChangesData } from './merchantVisibilityChangesData';
import { MerchantVisibilityChangesDetails } from './merchantVisibilityChangesDetails';
import { ModelError } from './modelError';
import { PrivateMetaInformationDTO } from './privateMetaInformationDTO';
import { PrivateMetaResponseDTO } from './privateMetaResponseDTO';
import { ProfileDetails } from './profileDetails';
import { ProfileWithConstraints } from './profileWithConstraints';
import { RequestStatus } from './requestStatus';
import { SearchDebugMetadata } from './searchDebugMetadata';
import { SearchMetadata } from './searchMetadata';
import { ServiceType } from './serviceType';
import { ShoppingFeedsExplain } from './shoppingFeedsExplain';
import { ShoppingFeedsExplainQuota } from './shoppingFeedsExplainQuota';
import { ShoppingOffer } from './shoppingOffer';
import { ShoppingOfferBrand } from './shoppingOfferBrand';
import { ShoppingOfferCategory } from './shoppingOfferCategory';
import { ShoppingOfferCodes } from './shoppingOfferCodes';
import { ShoppingOfferFeature } from './shoppingOfferFeature';
import { ShoppingOfferFeatureValue } from './shoppingOfferFeatureValue';
import { ShoppingOfferFlags } from './shoppingOfferFlags';
import { ShoppingOfferImageUrl } from './shoppingOfferImageUrl';
import { ShoppingOfferMerchant } from './shoppingOfferMerchant';
import { ShoppingOfferUrls } from './shoppingOfferUrls';
import { ShoppingOffersResult } from './shoppingOffersResult';
import { TemporalUnit } from './temporalUnit';

/* tslint:disable:no-unused-variable */
let primitives = ['string', 'boolean', 'double', 'integer', 'long', 'float', 'number', 'any'];

let enumsMap: { [index: string]: any } = {};

let typeMap: { [index: string]: any } = {
  CategoryElementOutput: CategoryElementOutput,
  CategoryTreeOutput: CategoryTreeOutput,
  ConstraintsAtProfileLevel: ConstraintsAtProfileLevel,
  Duration: Duration,
  ErrorDTOWithMetadata: ErrorDTOWithMetadata,
  ExplanationError: ExplanationError,
  FieldCount: FieldCount,
  FieldStats: FieldStats,
  FlatCategories: FlatCategories,
  FlatCategory: FlatCategory,
  GoogleProductCategory: GoogleProductCategory,
  ImageSize: ImageSize,
  LinkResponse: LinkResponse,
  LinkResult: LinkResult,
  LinksResponse: LinksResponse,
  LinksResult: LinksResult,
  MerchantCategoryDTO: MerchantCategoryDTO,
  MerchantDTO: MerchantDTO,
  MerchantDirectoryLinkDTO: MerchantDirectoryLinkDTO,
  MerchantVisibilityChanges: MerchantVisibilityChanges,
  MerchantVisibilityChangesData: MerchantVisibilityChangesData,
  MerchantVisibilityChangesDetails: MerchantVisibilityChangesDetails,
  ModelError: ModelError,
  PrivateMetaInformationDTO: PrivateMetaInformationDTO,
  PrivateMetaResponseDTO: PrivateMetaResponseDTO,
  ProfileDetails: ProfileDetails,
  ProfileWithConstraints: ProfileWithConstraints,
  RequestStatus: RequestStatus,
  SearchDebugMetadata: SearchDebugMetadata,
  SearchMetadata: SearchMetadata,
  ServiceType: ServiceType,
  ShoppingFeedsExplain: ShoppingFeedsExplain,
  ShoppingFeedsExplainQuota: ShoppingFeedsExplainQuota,
  ShoppingOffer: ShoppingOffer,
  ShoppingOfferBrand: ShoppingOfferBrand,
  ShoppingOfferCategory: ShoppingOfferCategory,
  ShoppingOfferCodes: ShoppingOfferCodes,
  ShoppingOfferFeature: ShoppingOfferFeature,
  ShoppingOfferFeatureValue: ShoppingOfferFeatureValue,
  ShoppingOfferFlags: ShoppingOfferFlags,
  ShoppingOfferImageUrl: ShoppingOfferImageUrl,
  ShoppingOfferMerchant: ShoppingOfferMerchant,
  ShoppingOfferUrls: ShoppingOfferUrls,
  ShoppingOffersResult: ShoppingOffersResult,
  TemporalUnit: TemporalUnit,
};

export class ObjectSerializer {
  public static findCorrectType(data: any, expectedType: string) {
    if (data == undefined) {
      return expectedType;
    } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
      return expectedType;
    } else if (expectedType === 'Date') {
      return expectedType;
    } else {
      if (enumsMap[expectedType]) {
        return expectedType;
      }

      if (!typeMap[expectedType]) {
        return expectedType; // w/e we don't know the type
      }

      // Check the discriminator
      let discriminatorProperty = typeMap[expectedType].discriminator;
      if (discriminatorProperty == null) {
        return expectedType; // the type does not have a discriminator. use it.
      } else {
        if (data[discriminatorProperty]) {
          var discriminatorType = data[discriminatorProperty];
          if (typeMap[discriminatorType]) {
            return discriminatorType; // use the type given in the discriminator
          } else {
            return expectedType; // discriminator did not map to a type
          }
        } else {
          return expectedType; // discriminator was not present (or an empty string)
        }
      }
    }
  }

  public static serialize(data: any, type: string) {
    if (data == undefined) {
      return data;
    } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data;
    } else if (type.lastIndexOf('Array<', 0) === 0) {
      // string.startsWith pre es6
      let subType: string = type.replace('Array<', ''); // Array<Type> => Type>
      subType = subType.substring(0, subType.length - 1); // Type> => Type
      let transformedData: any[] = [];
      for (let index = 0; index < data.length; index++) {
        let datum = data[index];
        transformedData.push(ObjectSerializer.serialize(datum, subType));
      }
      return transformedData;
    } else if (type === 'Date') {
      return data.toISOString();
    } else {
      if (enumsMap[type]) {
        return data;
      }
      if (!typeMap[type]) {
        // in case we dont know the type
        return data;
      }

      // Get the actual type of this object
      type = this.findCorrectType(data, type);

      // get the map for the correct type.
      let attributeTypes = typeMap[type].getAttributeTypeMap();
      let instance: { [index: string]: any } = {};
      for (let index = 0; index < attributeTypes.length; index++) {
        let attributeType = attributeTypes[index];
        instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
      }
      return instance;
    }
  }

  public static deserialize(data: any, type: string) {
    // polymorphism may change the actual type.
    type = ObjectSerializer.findCorrectType(data, type);
    if (data == undefined) {
      return data;
    } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data;
    } else if (type.lastIndexOf('Array<', 0) === 0) {
      // string.startsWith pre es6
      let subType: string = type.replace('Array<', ''); // Array<Type> => Type>
      subType = subType.substring(0, subType.length - 1); // Type> => Type
      let transformedData: any[] = [];
      for (let index = 0; index < data.length; index++) {
        let datum = data[index];
        transformedData.push(ObjectSerializer.deserialize(datum, subType));
      }
      return transformedData;
    } else if (type === 'Date') {
      return new Date(data);
    } else {
      if (enumsMap[type]) {
        // is Enum
        return data;
      }

      if (!typeMap[type]) {
        // dont know the type
        return data;
      }
      let instance = new typeMap[type]();
      let attributeTypes = typeMap[type].getAttributeTypeMap();
      for (let index = 0; index < attributeTypes.length; index++) {
        let attributeType = attributeTypes[index];
        instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
      }
      return instance;
    }
  }
}

export interface Authentication {
  /**
   * Apply authentication settings to header and query params.
   */
  applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
  public username: string = '';
  public password: string = '';

  applyToRequest(requestOptions: localVarRequest.Options): void {
    requestOptions.auth = {
      username: this.username,
      password: this.password,
    };
  }
}

export class HttpBearerAuth implements Authentication {
  public accessToken: string | (() => string) = '';

  applyToRequest(requestOptions: localVarRequest.Options): void {
    if (requestOptions && requestOptions.headers) {
      const accessToken = typeof this.accessToken === 'function' ? this.accessToken() : this.accessToken;
      requestOptions.headers['Authorization'] = 'Bearer ' + accessToken;
    }
  }
}

export class ApiKeyAuth implements Authentication {
  public apiKey: string = '';

  constructor(private location: string, private paramName: string) {}

  applyToRequest(requestOptions: localVarRequest.Options): void {
    if (this.location == 'query') {
      (<any>requestOptions.qs)[this.paramName] = this.apiKey;
    } else if (this.location == 'header' && requestOptions && requestOptions.headers) {
      requestOptions.headers[this.paramName] = this.apiKey;
    } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
      if (requestOptions.headers['Cookie']) {
        requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
      } else {
        requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
      }
    }
  }
}

export class OAuth implements Authentication {
  public accessToken: string = '';

  applyToRequest(requestOptions: localVarRequest.Options): void {
    if (requestOptions && requestOptions.headers) {
      requestOptions.headers['Authorization'] = 'Bearer ' + this.accessToken;
    }
  }
}

export class VoidAuth implements Authentication {
  public username: string = '';
  public password: string = '';

  applyToRequest(_: localVarRequest.Options): void {
    // Do nothing
  }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => Promise<void> | void;
