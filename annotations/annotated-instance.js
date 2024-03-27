import { toAbsoluteIri } from "@hyperjump/uri";
import { nil as nilInstance, get } from "../lib/instance.js";
import { getKeywordId } from "../lib/keywords.js";


const defaultDialectId = "https://json-schema.org/validation";

export const nil = { ...nilInstance, annotations: {} };
export const cons = (instance, id = undefined) => ({
  ...nil,
  id: id ? toAbsoluteIri(id) : "",
  instance,
  value: instance
});

export const annotation = (instance, keyword, dialectId = defaultDialectId) => {
  const keywordId = getKeywordId(keyword, dialectId);
  return instance.annotations[instance.pointer]?.[keywordId] || [];
};

export const annotate = (instance, keyword, value) => {
  return Object.freeze({
    ...instance,
    annotations: {
      ...instance.annotations,
      [instance.pointer]: {
        ...instance.annotations[instance.pointer],
        [keyword]: [
          value,
          ...instance.annotations[instance.pointer]?.[keyword] || []
        ]
      }
    }
  });
};

export const annotatedWith = (instance, keyword, dialectId = defaultDialectId) => {
  const instances = [];

  const keywordId = getKeywordId(keyword, dialectId);
  for (const instancePointer in instance.annotations) {
    if (keywordId in instance.annotations[instancePointer]) {
      instances.push(get(`#${instancePointer}`, instance));
    }
  }

  return instances;
};

export { get, uri, value, has, typeOf, step, iter, keys, values, entries, length } from "../lib/instance.js";
