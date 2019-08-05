import React from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc'
import {booksLoaded, bookRequested} from "../../actions";
import {compose} from '../utils'
import './book-list.css'
import Spinner from "../spinner";

class BookList extends React.Component {

    componentDidMount() {
        const {bookstoreService, booksLoaded, bookRequested} = this.props;
        bookRequested();
        bookstoreService.getBooks().then((data) => {
            booksLoaded(data);
        });
    }

    render() {
        const {books, loading} = this.props;
        if (loading) {
            return <Spinner/>;
        }
        return (
            <ul className="book-list">
                { books.map((book) => <li key={book.id}><BookListItem book={book}/></li>) }
            </ul>
        )
    }
}

const mapStateToProps = ({books, loading}) => { return {books, loading} }
const mapDispatchToProps = {booksLoaded, bookRequested};
export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);
