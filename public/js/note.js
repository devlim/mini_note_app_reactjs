var Note = React.createClass({
	render: function(){
		return (
			<div className="note">
				Note
			</div>
			)
	}
});

React.render(<Note />, document.querySelector('.container'));

