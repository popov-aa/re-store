import React from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc'
import {booksLoaded, bookRequested, booksError} from "../../actions";
import {compose} from '../utils'
import './book-list.css'
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

class BookList extends React.Component {

    componentDidMount() {
        const {fetchBooks} = this.props;
        fetchBooks();
    }

    render() {
        const {books, loading, error} = this.props;
        if (loading) {
            return <Spinner/>;
        }
        if (error) {
            return <ErrorIndicator/>;
        }
        return (
            <ul className="book-list">
                { books.map((book) => <li key={book.id}><BookListItem book={book}/></li>) }
            </ul>
        )
    }
}

const mapStateToProps = ({books, loading, error}) => { return {books, loading, error} }
// const mapDispatchToProps = {booksLoaded, bookRequested, booksError};
const mapDispatchToProps = (dispatch, ownProps) => {
    const {bookstoreService} = ownProps;
    return {
        fetchBooks: () => {
            dispatch(bookRequested());
            bookstoreService.getBooks().then((data) => {
                dispatch(booksLoaded(data));
            }).catch((error) => {
                dispatch(booksError(error));
            });
        }
    }
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);
