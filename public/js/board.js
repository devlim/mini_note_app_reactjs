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
			notes: [
				'First note',
				'Second Note',
				'Third note'
			]
		}
	},
	remove: function(i){
		var arr = this.state.notes;
		arr.splice(i, 1);
		this.setState({
			notes: arr
		});
	},
	render: function(){
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-12 content-container">
					{
						this.state.notes.map(function(note, i){
							return (
								<Note key={i} index={i} onRemove={this.remove}>{note}</Note>
								)
						})
					}
					</div>
				</div>
			</div>
			)
	}
});