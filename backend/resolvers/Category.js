const Category = {
  animals: (parents, args, ctx) => {
    return animals.filter((animal) => {
      return animal.category === parents.id;
    });
  },
};

module.exports = Category;
