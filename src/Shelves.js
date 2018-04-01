import React, { Component } from 'react'
import './App.css'

class Shelves extends Component {

  render() {

    const { activeShelf, onMoveBookToShelf } = this.props

    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
			    {activeShelf.map(book => (
            <li key={book.id + book.title + activeShelf.indexOf(book)}>
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
                <div className="book-authors">{book.authors[0]}</div>
              </div>
            </li>
		      ))}
        </ol>
      </div>
    )
  }
}

export default Shelves
