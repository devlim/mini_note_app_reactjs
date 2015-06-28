var Note = React.createClass({
	getInitialState: function(){
		return {
			editing:false,
			text: this.props.children
		}
	},
	remove: function(){
		console.log("delete note");
	},
	edit: function(){
		console.log("editing text");
		this.setState({
			editing: !this.state.editing
		});
	},
	update: function(){
		this.setState({
			editing: !this.state.editing,
			text: this.refs.newText.getDOMNode().value
		});
	},
	displayEdit: function(){
		return (
			<div className="note col-md-2">
				<textarea ref="newText" class="form-group">
					{this.state.text}
				</textarea>
				<span>
					<button className="btn btn-success glyphicon glyphicon-floppy-disk" onClick={this.update}></button>
				</span>
			</div>
			)
	},
	displayNonEdit: function(){
		return (
			<div className="note col-md-2">
				<p>
					{this.state.text}
				</p>
				<span>
					<button className="btn btn-primary glyphicon glyphicon-pencil" onClick={this.edit}></button>
					<button className="btn btn-danger glyphicon glyphicon-trash" onClick={this.remove}></button>
				</span>
			</div>
			)
	},
	render: function(){
		if(this.state.editing){
			return this.displayEdit();
		}else{
			return this.displayNonEdit();
		}
	}
});

