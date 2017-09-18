/** @jsx React.DOM */
(function(){
    'use strict';
    var Quiz = React.createClass({
        propTypes:{
            books: React.PropTypes.array.isRequired
        },
        render: function(props) {
          return    (<div>
                        <div>
                            {this.props.books.map(function(b){
                                return <Book title={b} /> ;
                            })}
                        </div>
          </div>);
        }
      });
      
      var Book = React.createClass({
          propTypes: function(){
              title: React.PropTypes.string.isRequired
          },
          render: function(){
              return (<div><h4>{this.props.title}</h4></div>);
          }
      });

      React.renderComponent(<Quiz books={['book1','book2']} />, document.getElementById('app'));

})();