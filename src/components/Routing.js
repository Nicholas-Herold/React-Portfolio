import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Project from './Project';
import About from './About';
import Contact from './Contact'
import Resume from './Resume'








function Routing() {
    const [view,changeView] = useState("About")
    
    const renderPage = () => {
        console.log ('hello')

        if (view === 'About') {
          return <About />;
        }
        if (view === 'Projects') {
          return <Project />;
        }
        if (view === 'Contacts') {
          return <Contact />;
        }
        if (view==='Resume'){

            return <Resume />;
        }
        
      };

    const changePage = (page) => changeView(page)

  return (
    <div className="App">
      <Header changeView = {changeView} changePage={changePage}/>
      <h2>{view}</h2>
      {renderPage()}
     <Footer/>
    </div>
  );
}

export default Routing;