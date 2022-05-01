const dataStore = {
  1: [
    {
      label: 'Milk',
      done: false,
    },
    {
      label: 'Bread',
      done: false,
    },
    {
      label: 'Pasta',
      done: true,
    },
  ],
  2: [
    {
      label: 'Create a todo API',
      done: true,
    },
    {
      label: 'Create the getTodos query',
      done: false,
    },
    {
      label: 'Create the createTodo mutation',
      done: false,
    },
  ],
};

module.exports.handler = async function (event) {
  console.log(event);
  if (!dataStore.hasOwnProperty(event.source.id)) {
    throw new Error('Not found');
  }

  return dataStore[event.source.id];
};
