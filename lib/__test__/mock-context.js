module.exports = function mockContext({
  callbackSpy,
  resourcePath,
  exclude,
  resourceQuery = '?vue&type=template&id=21aa4478&',
}) {
  return {
    callback(...args) {
      callbackSpy && callbackSpy(...args);
    },
    resourcePath,
    resourceQuery,
    query: {
      exclude,
    },
  };
};
