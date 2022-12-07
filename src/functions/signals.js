import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

const getFreeDomainsCount = (emails) => (
  emails
    .map((email) => {
      const [, domain] = email.split('@');
      return domain;
    })
    .filter((domain) => freeEmailDomains.includes(domain))
    .reduce((acc, domain) => {
      const count = get(acc, domain, 0) + 1;
      return { ...acc, [domain]: count };
    }, {})
);

export default getFreeDomainsCount;
