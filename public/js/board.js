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
	render: function(){
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12 board">
					{this.props.count}
					</div>
				</div>
			</div>
			)
	}
});