const Animal = {
  category: (parents, args, ctx) => {
    return categories.find((category) => {
      return category.id === parents.category;
    });
  },
};

module.exports = Animal;
