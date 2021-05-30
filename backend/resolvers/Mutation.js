const { v4 } = require("uuid");
const Mutation = {
  addData: (
    parents,
    { slug, image, title, rating, price, description, stock, onSale, category },
    { animals }
  ) => {
    let newAnimal = {
      id: v4(),
      slug,
      image,
      title,
      rating,
      price,
      description,
      stock,
      onSale,
      category,
    };
    animals.push(newAnimal);
    return newAnimal;
  },

  removeData: (parents, { id }, { animals }) => {
    let index = animals.findIndex((animal) => {
      return animal.id === id;
    });
    animals.splice(index, 1);
    return true;
  },
};

module.exports = Mutation;
