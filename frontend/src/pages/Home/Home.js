import React from 'react';
import './Home.css';
import Feed from '../../components/Feed/Feed';
import ForYou from '../../components/ForYou/ForYou';
import Header from '../../components/Header/Header';

function Home() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
             <Header />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-7">
              <Feed />
            </div>
            <div className="col-5">
              <ForYou />
            </div>
          </div>
        </div>
       
      </div>     
    </div>
  );
}
 
export default Home;
