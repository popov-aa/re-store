import React from 'react';
import BookListItem from "../book-list-item";

class BookList extends React.Component {
    render() {
        const {books} = this.props;
        return (
            <ul>
                { books.map((book) => <li><BookListItem book={book}/></li>) }
            </ul>
        )
    }
}
export default BookList;