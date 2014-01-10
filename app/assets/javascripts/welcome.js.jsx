/** @jsx React.DOM */

var CommentBox = React.createClass({
  render: function () {
    return (
      <div className="commentBox">
        Hello, world from react comment box cls.
     </div>
    );
  }
});

$(document).ready(function() {
  React.renderComponent(
    <CommentBox />,
    document.getElementById('content')
  );
});
