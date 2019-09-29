import React from 'react';
import ReactDOM from 'react-dom';
import apps from './apps/';
import componentsToRender from './componentsToRender';

import './styles.css';

const App = () => (
  <div className="App">
    {componentsToRender.map(({ name: appName }) => {
      const App = apps[appName];
      return (
        <div>
          <App />
          <hr />
        </div>
      );
    })}
  </div>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
