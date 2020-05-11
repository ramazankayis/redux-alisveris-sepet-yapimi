import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as index from '../actions/index';
import { bindActionCreators } from 'redux';

const Products = (props) => {
  console.log('product list', props.bookList);
  console.log('Cart', props.cart);

  return (
    <div>
      <h2>
        <span>Kitap Listesi</span>
        <Link to="/cart">Sepetim</Link>
      </h2>
      {props.bookList.map((book) => (
        <div className="book" key={book.id}>
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>Yazar: {book.author}</p>
            <p>Fiyat: &#8378; {book.price}</p>
            <button onClick={() => props.actions.sepeteEkle(book)}>
              Sepete Ekle
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
const mapStateToProps = (state) => ({
  bookList: state.bookList,
  cart: state.cart,
});

const mapDispacthToProps = (dispatch) => ({
  actions: {
    sepeteEkle: bindActionCreators(index.sepeteEkle, dispatch),
  },
});

export default connect(mapStateToProps, mapDispacthToProps)(Products);
