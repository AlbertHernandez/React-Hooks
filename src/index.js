import React from 'react';
import ReactDOM from 'react-dom';
import Components from './components/';
import componentsToRender from './componentsToRender';

import './styles.css';

const App = () => (
  <div className="App">
    {componentsToRender.map(({ name: componentName }) => {
      const Component = Components[componentName];
      return (
        <div>
          <Component />
          <hr />
        </div>
      );
    })}
  </div>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
