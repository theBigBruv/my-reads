import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'
import './App.css'

class SearchBooks extends Component {

  state = {
    booksFound: []
  }

  findBooks = (query) => {
    const { books } = this.props

    this.setState({ booksFound: [] })

    BooksAPI.search(query).then(searchResults => {
      let myBooksIds
      myBooksIds = books.map(myBook => myBook.id)
      searchResults.forEach((book) => {
        if(myBooksIds.indexOf(book.id) > -1) {
          book.shelf = books.filter(myBook => myBook.id === book.id)[0].shelf
        }
        else {
          book.shelf = "none"
        }
      })
      this.setState((state) => ({ booksFound: searchResults }))
    })
  }

  render() {

	const { booksFound } = this.state
  const { onMoveBookToShelf } = this.props

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
      		  <li key={book.id + book.title + booksFound.indexOf(book)}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})` }}>
                    </div>
                    <div className="book-shelf-changer">
                      <select
                        value={book.shelf}
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
