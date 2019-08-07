import React from 'react';
import './shopping-cart-table.css'
import {connect} from "react-redux";
import {
    bookAddedToCart,
    bookRemovedFromCart,
    allBookRemovedFromCart
} from '../../actions';

const ShoppingCartTable = ({items, total, onIncrease, onDescrease, onDelete}) => {
    const renderRow = (item, idx) => {
        const {id, title, count, total} = item;
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>{total}</td>
                <td>
                    <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => onDelete(id)}
                    >
                        <i className="fa fa-trash-o"/>
                    </button>
                    <button
                        className="btn btn-sm btn-outline-success"
                        onClick={() => onIncrease(id)}
                    >
                        <i className="fa fa-plus-circle"/>
                    </button>
                    <button
                        className="btn btn-sm btn-outline-warning"
                        onClick={() => onDescrease(id)}
                    >
                        <i className="fa fa-minus-circle"/>
                    </button>
                </td>
            </tr>
        );
    }

    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { items.map(renderRow) }
                </tbody>
            </table>
            <div className="total">
                Total: ${total}
            </div>
        </div>
    )
}

const mapStateToProps = ({cartItems, orderTotal}) => {
    return {
        items: cartItems,
        total: orderTotal
    };
};
const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDescrease: bookRemovedFromCart,
    onDelete: allBookRemovedFromCart
};
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
