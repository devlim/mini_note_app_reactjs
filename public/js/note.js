var Note = React.createClass({
	remove: function(){
		console.log("delete note");
	},
	edit: function(){
		console.log("editing text");
	},
	render: function(){
		return (
			<div className="note col-md-2">
				<p>
					{this.props.children}
				</p>
				<span>
					<button className="btn btn-primary glyphicon glyphicon-pencil" onClick={this.edit}></button>
					<button className="btn btn-danger glyphicon glyphicon-trash" onClick={this.remove}></button>
				</span>
			</div>
			)
	}
});

React.render(<Note>empty note</Note>, document.querySelector('.content-container'));

