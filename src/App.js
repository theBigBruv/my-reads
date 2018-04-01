import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import MyReads from './MyReads'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends Component {

  state = {
      books: []
  }

  componentDidMount() {
  	BooksAPI.getAll().then((books) => {
    	this.setState({ books })
    })
  }

  moveBookToShelf = (targetBook, newShelf) => {
    BooksAPI.update(targetBook, newShelf).then(result => {
      targetBook.shelf = newShelf
      this.setState((state) => ({
        books: this.state.books.concat([ targetBook ])
      }))
    }).then(() => {
      BooksAPI.getAll().then((books) => {
      	this.setState({ books })
      })
    })
  }

  render() {

    const { books } = this.state

    return (

    <div className="app">
    	<Route path="/search" render={({ history }) => (
    	  <SearchBooks books={books} onMoveBookToShelf={this.moveBookToShelf}/>
        )}/>
		    <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <MyReads books={books} onMoveBookToShelf={this.moveBookToShelf}/>

            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
