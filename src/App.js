import React from 'react';
import './styles.css';
import { Route } from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';
import { connect } from 'react-redux';

const App = (props) => {
  console.log('kitap listesi', props.bookList);

  return (
    <div className="App">
      <h1>
        Alışveriş Sepeti Yapımı
        <img
          src="https://avatars3.githubusercontent.com/u/60869810?v=4"
          alt="React Dersleri"
        />
        React Dersleri
      </h1>
      <Route exact path="/" component={Products} />
      <Route path="/cart" component={Cart} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  bookList: state.bookList,
});

export default connect(mapStateToProps)(App);
