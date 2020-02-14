module.exports = {
  get: async () =>
    Promise.resolve([
      { id: 1, name: "First" },
      { id: 2, name: "Second" },
      { id: 3, name: "Third" }
    ])
};
