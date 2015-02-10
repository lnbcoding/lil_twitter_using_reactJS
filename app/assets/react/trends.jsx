//= require react
//= require components/hashtag
var Trends = React.createClass({
  render: function() {
    var trends = [];
    var data = ["sweet"]
    data.forEach(function(tag) {
      trends.push(<Hashtag tag={tag} />)
    })
    return (
      <section id="trends-container">
        <h3>Trends</h3>
        <a href="#all">All</a>
        <ul>
          {trends}
        </ul>
      </section>
    )
  }
})
