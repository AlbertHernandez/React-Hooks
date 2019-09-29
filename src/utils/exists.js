const exists = value => value !== undefined || value !== null;
const ifExists = value => callback => exists(value) && callback(value);

module.exports = {
  exists,
  ifExists
};
