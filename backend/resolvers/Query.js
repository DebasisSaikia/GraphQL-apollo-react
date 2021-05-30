const Query = {
  cards: (parents, args, { cards }) => cards,
  animals: (parents, args, { animals }) => animals,
  animal: (parents, args, { animals }) => {
    let animal = animals.find((animal) => {
      return animal.slug === args.slug;
    });
    return animal;
  },
  categories: (parents, args, { categories }) => categories,
  category: (parents, args, { categories }) => {
    let category = categories.find((category) => {
      return category.slug === args.slug;
    });
    return category;
  },
};

module.exports = Query;
