import React from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';

class BookList extends React.Component {
    render() {
        const {books} = this.props;
        return (
            <ul>
                { books.map((book) => <li key={book.id}><BookListItem book={book}/></li>) }
            </ul>
        )
    }
}

const mapStateToProps = ({books}) => {
    return { books }
}
export default connect(mapStateToProps)(BookList);