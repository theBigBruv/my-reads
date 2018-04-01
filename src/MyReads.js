import React, { Component } from 'react'
import Shelves from './Shelves'
import './App.css'

class MyReads extends Component {

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
            <Shelves activeShelf={currentlyReadingBooks} onMoveBookToShelf={onMoveBookToShelf}/>
          </div>

          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <Shelves activeShelf={wantToReadBooks} onMoveBookToShelf={onMoveBookToShelf}/>
          </div>

          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <Shelves activeShelf={readBooks} onMoveBookToShelf={onMoveBookToShelf}/>
          </div>

        </div>
      </div>
    )
  }
}

export default MyReads
