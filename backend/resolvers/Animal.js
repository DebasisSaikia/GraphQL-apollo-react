const Animal = {
  category: (parents, args, { categories }) => {
    return categories.find((category) => {
      return category.id === parents.category;
    });
  },
};

module.exports = Animal;
