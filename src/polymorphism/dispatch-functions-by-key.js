const generateAttributesString = (attributes) => (
  Object.entries(attributes).map(([name, value]) => (
    ` ${name}="${value}"`
  )).join('')
);

const mapping = {
  single: (tag) => {
    const { name, tagType, ...attributes } = tag;
    return `<${name}${generateAttributesString(attributes)}>`;
  },

  pair: (tag) => {
    const {
      name,
      tagType,
      body,
      ...attributes
    } = tag;
    return `<${name}${generateAttributesString(attributes)}>${body}</${name}>`;
  },
};

const stringify = (tag) => mapping[tag.tagType](tag);

export default stringify;
