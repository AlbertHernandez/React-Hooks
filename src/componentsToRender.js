const componentsConfig = [
  {
    name: 'Counter',
    show: true
  },
  {
    name: 'Todos',
    show: true
  }
];

export default componentsConfig.filter(component => component.show);
