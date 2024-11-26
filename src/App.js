import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <List/>
      <Footer>
            <Footer />

      </Footer>
   
    </div>
  );
}

export default App;
