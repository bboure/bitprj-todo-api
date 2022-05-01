const dataStore = {
  1: {
    id: 1,
    title: 'Shoppinglist',
  },
  2: {
    id: 2,
    title: 'Work tasks',
  },
};

module.exports.handler = async function (event) {
  console.log(event);
  if (!dataStore.hasOwnProperty(event.arguments.id)) {
    throw new Error('Not found');
  }

  return dataStore[event.arguments.id];
};
