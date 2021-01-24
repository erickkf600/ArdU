import React from 'react';
import './App.scss';
import Routing from './router-config/Routing';
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";
import SetTheme from "./AppTheme"
import { Container } from "./assets/theme/body";
function App() {
  return (
    <ReduxProvider store={store}>
      <SetTheme>
        <Container>
          <div className='grid-wrapper'>
            <Routing  />    
          </div>
          
        </Container>
      </SetTheme>

    </ReduxProvider>
  );
}

export default App;
