import _ from 'lodash';

const takeOldest = (users, count = 1) => {
  const sorted = _.sortBy(users, (user) => Date.parse(user.birthday));
  return sorted.slice(0, count);
};

export default takeOldest;
