const bcrypt = require("bcrypt");

const hashPassword = (plainPassword) => {
  const data = bcrypt.hashSync(plainPassword, 10);
  return data;
};

const comparePassword = (plainPassword, hashedPassword) => {
  const data = bcrypt.compareSync(plainPassword, hashedPassword);
  return data;
};

console.log(comparePassword('root1234', '$2b$10$FX4Nc5J94d8kwgoPwRJYFeNq2at3PCIibQWbz0mIEWhMbivp9HV1u'))

module.exports = {
    hashPassword,
    comparePassword
}
