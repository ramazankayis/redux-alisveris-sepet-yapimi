import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as index from '../actions/index';

const Cart = (props) => {
  const totalPrice = props.cart
    .reduce((total, item) => (total += item.price * item.count), 0)
    .toFixed(2);

  console.log('cart', props.cart);

  return (
    <div>
      <h2>
        <Link to="/">Kitap Listesi</Link> <span>Sepetim</span>
      </h2>

      <h3>Toplam Sepet Tutarı: &#8378;{totalPrice}</h3>

      {props.cart.map((book) => (
        <div className="book" key={book.id}>
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>Yazar: {book.author}</p>
            <p>Fiyat: &#8378;{book.price}</p>
            <p>Toplam: &#8378;{(book.price * book.count).toFixed(2)}</p>
            <p>Sepetinizde bu kitaptan toplam {book.count} adet var.</p>
            <button onClick={() => props.actions.azalt(book)}>-</button>
            <button onClick={() => props.actions.removeFromCart(book)}>
              Sepetten Çıkar
            </button>
            <button onClick={() => props.actions.arttir(book)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};
const mapStateToProps = (state) => ({
  cart: state.cart,
});
const mapDispacthToProps = (dispatch) => ({
  actions: {
    removeFromCart: bindActionCreators(index.removeFromCart, dispatch),
    arttir: bindActionCreators(index.arttir, dispatch),
    azalt: bindActionCreators(index.azalt, dispatch),
  },
});

export default connect(mapStateToProps, mapDispacthToProps)(Cart);
