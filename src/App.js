import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import MyReads from './MyReads'

class BooksApp extends React.Component {

  state = {
      books: [],
  }

  componentDidMount() {
  	BooksAPI.getAll().then((books) => {
    	this.setState({ books: books })
    })
  }

  moveBookToShelf = (targetBook, newShelf) => {
    BooksAPI.update(targetBook, newShelf).then(() => {
      BooksAPI.getAll().then((books) => {
      	this.setState({ books: books })
      })
    })
  }

  render() {

    return (

    <div className="app">
    	<Route path="/search" render={({ history }) => (
    	  <SearchBooks books={this.state.books} onMoveBookToShelf={this.moveBookToShelf}/>
        )}/>
		    <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <MyReads books={this.state.books} onMoveBookToShelf={this.moveBookToShelf}/>

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
