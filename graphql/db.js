export const people = [
  {
    id: 1,
    name: "hyo",
    age: 23,
    gender: "female",
  },
  {
    id: 2,
    name: "dong",
    age: 11,
    gender: "female",
  },
  {
    id: 3,
    name: "doo",
    age: 33,
    gender: "female",
  },
  {
    id: 4,
    name: "kimdo",
    age: 16,
    gender: "female",
  },
  {
    id: 5,
    name: "ken",
    age: 44,
    gender: "female",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === id);
  return filteredPeople[0];
};
