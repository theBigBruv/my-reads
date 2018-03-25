import React from 'react'
import './App.css'
import Shelves from './Shelves'

class MyReads extends React.Component {

  render() {

    const { books } = this.props

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

            <Shelves activeShelf={currentlyReadingBooks} onMoveBookToShelf={this.props.onMoveBookToShelf}/>

          </div>

          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>

            <Shelves activeShelf={wantToReadBooks} onMoveBookToShelf={this.props.moveBookToShelf}/>

          </div>

          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>

            <Shelves activeShelf={readBooks} onMoveBookToShelf={this.props.moveBookToShelf}/>

          </div>

        </div>
      </div>
    )
  }
}

export default MyReads
