import { ifExists } from './exists';

export default {
  save: (name, data) => {
    localStorage.setItem(name, JSON.stringify(data));
  },
  get: data => {
    const rawData = localStorage.getItem(data);
    return ifExists(rawData)(JSON.parse);
  }
};
