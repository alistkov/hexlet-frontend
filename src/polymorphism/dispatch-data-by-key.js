const attributes = {
  a: 'href',
  link: 'href',
  img: 'src',
};

const getLinks = (tags) => (
  tags
    .map((tag) => tag[attributes[tag.name]])
    .filter((link) => !!link)
);

export default getLinks;
