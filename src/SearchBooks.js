import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {

  state = {
    booksFound: [],
  }

  findBooks = (query) => {
    this.setState({ booksFound: [] })

    BooksAPI.search(query).then(searchResults => {
      this.setState({ booksFound: searchResults })
    })

  }

  setShelfValue = (book) => {
    let myBooksIds
    let bookShelfValue
    myBooksIds = this.props.books.map(myBook => myBook.id)
    if(myBooksIds.indexOf(book.id) > -1) {
      bookShelfValue = this.props.books.filter(myBook => myBook.id === book.id)[0].shelf
    }
    else {
      bookShelfValue = "none"
    }
    return bookShelfValue
  }


  render() {

  const { onMoveBookToShelf } = this.props
	const { booksFound } = this.state

	booksFound.sort(sortBy('title'))

	return (
      <div className="search-books">
      	<div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
      		  type="text"
      		  placeholder="Search by title or author"
      		  onChange={(event) => this.findBooks(event.target.value)}
      		/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
      		{booksFound.map(book => (
      		  <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})` }}>
                    </div>
                    <div className="book-shelf-changer">
                      <select
                        value={this.setShelfValue(book)}
                        onChange={(event) =>
                          onMoveBookToShelf(book, event.target.value)
                      }>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                  <div className="book-authors">{book.shelf}</div>
                </div>
              </li>
      		))}
      	  </ol>
        </div>
      </div>
    )

  }

}

export default SearchBooks
