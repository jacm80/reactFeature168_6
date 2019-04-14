const faker = require('faker');

faker.locale = 'es';
faker.phone.phoneFormats(1);

const genRecord = () => ({
  id: faker.random.number(),
  fullname: `${faker.name.firstName()} ${faker.name.lastName()}`,
  phone: faker.phone.phoneNumber(),
  address: `${faker.address.streetName()} ${faker.random.number()}, ${faker.address.city()} / ${faker.address.city()}`
});

const generateData = (n) => {
  const records = [];
  for (let i = 0; i <= n; i += 1) records.push(genRecord());
  return records;
};

export default generateData;
