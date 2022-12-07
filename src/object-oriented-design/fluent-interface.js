const normalize = (collection) => (
  collection
    .map(({ name, country }) => ({
      name: name.toLowerCase().trim(),
      country: country.toLowerCase().trim(),
    }))
    .sort((a, b) => {
      if (a.country === b.country) {
        return 0;
      }
      return a.country > b.country ? 1 : -1;
    })
    .reduce((acc, { name, country }) => {
      if (Object.keys(acc).includes(country)) {
        const cities = new Set(acc[country]);
        cities.add(name);
        acc[country] = Array.from(cities).sort();
      } else {
        acc[country] = [name];
      }
      return acc;
    }, {})
);

export default normalize;
