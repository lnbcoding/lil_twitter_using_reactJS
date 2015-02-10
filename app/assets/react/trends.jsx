//= require react
//= require components/hashtag
var Trends = React.createClass({
  render: function() {
    return (
      <section id="trends-container">
        <h3>Trends</h3>
        <a href="#all">All</a>
        <ul>
          {this.renderTrends()}
        </ul>
      </section>
    )
  },
  renderTrends: function() {
    var data = ["sweet"]
    var trends = data.map(function(tag, i) {
      return(<Hashtag key={i} tag={tag} />)
    })
    return trends;
  }
})
