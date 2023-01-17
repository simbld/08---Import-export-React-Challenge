import React from 'react';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="titre-container">
      <h1 className="text-center">My contacts list 📱</h1>

      <div>
        <div>
          <Contact
            name="Emmanuel"
            email="emmanuel@email.com"
            phone="552312354"
            isDeletable={false}
          />
          <Contact
            name="Johana"
            email="johana@email.com"
            phone="92034902"
            isDeletable
          />
          <Contact
            name="Lucas"
            email="lucas@email.com"
            phone="234983499"
            isDeletable={false}
          />
          <Contact
            name="Marie"
            email="marie@email.com"
            phone="238942384"
            isDeletable
          />
          <Contact
            name="Pedro"
            email="pedro@email.com"
            phone="934584875"
            isDeletable
          />
        </div>
      </div>
    </div>
  );
}

export default App;
