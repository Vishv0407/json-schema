import type { Json } from "@hyperjump/json-pointer";
import type { JsonSchemaType } from "../lib/common.js";


export type JsonSchemaDraft202012 = boolean | {
  $schema?: "https://json-schema.org/draft/2020-12/schema";
  $id?: string;
  $anchor?: string;
  $ref?: string;
  $dynamicRef?: string;
  $dynamicAnchor?: string;
  $vocabulary?: Record<string, boolean>;
  $comment?: string;
  $defs?: Record<string, JsonSchemaDraft202012>;
  additionalItems?: JsonSchemaDraft202012;
  unevaluatedItems?: JsonSchemaDraft202012;
  prefixItems?: JsonSchemaDraft202012[];
  items?: JsonSchemaDraft202012;
  contains?: JsonSchemaDraft202012;
  additionalProperties?: JsonSchemaDraft202012;
  unevaluatedProperties?: JsonSchemaDraft202012;
  properties?: Record<string, JsonSchemaDraft202012>;
  patternProperties?: Record<string, JsonSchemaDraft202012>;
  dependentSchemas?: Record<string, JsonSchemaDraft202012>;
  propertyNames?: JsonSchemaDraft202012;
  if?: JsonSchemaDraft202012;
  then?: JsonSchemaDraft202012;
  else?: JsonSchemaDraft202012;
  allOf?: JsonSchemaDraft202012[];
  anyOf?: JsonSchemaDraft202012[];
  oneOf?: JsonSchemaDraft202012[];
  not?: JsonSchemaDraft202012;
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: number;
  minimum?: number;
  exclusiveMinimum?: number;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  maxContains?: number;
  minContains?: number;
  maxProperties?: number;
  minProperties?: number;
  required?: string[];
  dependentRequired?: Record<string, string[]>;
  const?: Json;
  enum?: Json[];
  type?: JsonSchemaType | JsonSchemaType[];
  title?: string;
  description?: string;
  default?: Json;
  deprecated?: boolean;
  readOnly?: boolean;
  writeOnly?: boolean;
  examples?: Json[];
  format?: "date-time" | "date" | "time" | "duration" | "email" | "idn-email" | "hostname" | "idn-hostname" | "ipv4" | "ipv6" | "uri" | "uri-reference" | "iri" | "iri-reference" | "uuid" | "uri-template" | "json-pointer" | "relative-json-pointer" | "regex";
  contentMediaType?: string;
  contentEncoding?: string;
  contentSchema?: JsonSchemaDraft202012;
};

export * from "../lib/index.js";