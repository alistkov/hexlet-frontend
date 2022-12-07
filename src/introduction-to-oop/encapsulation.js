const makeUser = ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice();
  },
});

const getMutualFriends = (firstUser, secondUser) => {
  const firstUserFriends = firstUser.getFriends();
  const secondUserFriends = secondUser.getFriends();
  const firstUserFriendsId = firstUserFriends.map(({ id }) => id);
  return secondUserFriends.filter(({ id }) => firstUserFriendsId.includes(id));
};

export { makeUser, getMutualFriends };
