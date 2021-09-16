import React from 'react';
import ReactDOM from 'react-dom';
import { ContextProvider } from './utils/context';

import Hub from './Router';

ReactDOM.render(
  <React.StrictMode>
    
    <ContextProvider>
      
      <Hub /> 
      
      

    </ContextProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

