var Note = React.createClass({
	getInitialState: function(){
		return {
			editing:false,
		}
	},
	remove: function(){
		this.props.onRemove(this.props.index);
	},
	edit: function(){
		this.setState({
			editing: !this.state.editing
		});
	},
	update: function(){
		this.props.onChange(this.refs.newText.getDOMNode().value, this.props.index)
		this.setState({
			editing: !this.state.editing
		});
	},
	displayEdit: function(){
		return (
			<div className="note col-md-2">
				<textarea ref="newText" className="form-group">
					{this.props.children}
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
					{this.props.children}
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

