import React from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc'
import {booksLoaded} from "../../actions";
import {compose} from '../utils'

class BookList extends React.Component {

    componentDidMount() {
        const {bookstoreService, booksLoaded} = this.props;
        booksLoaded(bookstoreService.getBooks())
    }

    render() {
        const {books} = this.props;
        return (
            <ul>
                { books.map((book) => <li key={book.id}><BookListItem book={book}/></li>) }
            </ul>
        )
    }
}

const mapStateToProps = ({books}) => { return { books } }
const mapDispatchToProps = {booksLoaded};
export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);