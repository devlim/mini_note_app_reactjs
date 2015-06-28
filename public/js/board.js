var Board = React.createClass({
	propTypes: {
		count: function(props, propName){
			if(typeof props[propName] !== 'number'){
				return new Error('Count must be number');
			}

			if(props[propName] > 100){
				return new Error("Creating" + props[propName] + "is too much!");
			}
		}
	},
	getInitialState: function(){
		return {
			notes: [],
			defaultTextForNewNote: 'New notes'
		}
	},
	update: function(newText, i){
		var arr = this.state.notes;
		arr[i] = newText;
		this.setState({notes:arr});
	},
	remove: function(i){
		var arr = this.state.notes;
		arr.splice(i, 1);
		this.setState({
			notes: arr
		});
	},
	add: function(){
		var arr = this.state.notes;
		arr.push(this.state.defaultTextForNewNote);
		this.setState({
			notes:arr
		});
	},
	eachNote: function(note, i){
		return (
			<Note key={i} index={i} onChange={this.update} onRemove={this.remove}>{note}</Note>
		)
	},
	render: function(){
		return (
			<div className="container">
				<div className="row">
					<button className="btn btn-primary glyphicon glyphicon-plus" onClick={this.add}></button>
				</div>
				<div className="row">
					<div className="col-sm-12 content-container">
					{
						this.state.notes.map(this.eachNote)
					}
					</div>
				</div>
			</div>
			)
	}
});