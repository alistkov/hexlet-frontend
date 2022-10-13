const groupBy = (collection, property) => (
  collection.reduce((acc, item) => {
    const key = item[property];
    const group = acc[key] ?? [];
    return { ...acc, [key]: group.concat(item) };
  }, {})
);

export default groupBy;
