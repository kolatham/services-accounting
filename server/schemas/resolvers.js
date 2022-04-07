const { Services, User } = require('../models');

const resolvers = {
  Query: {
    services: async () => {
      return Services.find({});
    },
    singeUser: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return User.find(params);
    },
    users: async() => { 
        return User.find({})
    }
  },
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
    updateUser: async (parent, args) => {
        const user = await User.update(args);
        return user
    },
    deleteUser: async(parent, args) => {
        const user = await User.delete(args);
        return user;
    },
    createVote: async (parent, { _id, techNum }) => {
      const vote = await User.findOneAndUpdate(
        { _id },
        { $inc: { [`services${techNum}_votes`]: 1 } },
        { new: true }
      );
      return vote;
    },
  },
};

module.exports = resolvers;
