import React from 'react'
import './App.css'

class MyReads extends React.Component {

  render() {

    const { books, onMoveBookToShelf } = this.props

    let currentlyReadingBooks
    let wantToReadBooks
    let readBooks

    currentlyReadingBooks = books.filter((book) => book.shelf === "currentlyReading")
    wantToReadBooks = books.filter((book) => book.shelf === "wantToRead")
    readBooks = books.filter((book) => book.shelf === "read")

    return (
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
      			    {currentlyReadingBooks.map(book => (
                  <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
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
          </div>

          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
      			    {wantToReadBooks.map(book => (
                  <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
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
          </div>

          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
      			    {readBooks.map(book => (
                  <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
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
          </div>

        </div>
      </div>
    )
  }
}

export default MyReads
