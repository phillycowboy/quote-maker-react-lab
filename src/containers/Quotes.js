import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes'

class Quotes extends Component {

  render() {
    const {quotes, removeQuote, upvoteQuote, downvoteQuote } = this.props
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
               {quotes.map(quote => <QuoteCard key={quote.id} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} removeQuote={removeQuote} qoute={quote}/>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapToStateToProps = (state) => {
  return({
    quotes: state.quotes
  })
}

//add arguments to connect as needed
export default connect(mapToStateToProps, {removeQuote, upvoteQuote, downvoteQuote})(Quotes);
