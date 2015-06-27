<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="lib/css/bootstrap.min.css">
		<link rel="stylesheet" href="public/css/style.css">
		<script type="text/javascript" src="lib/js/react-0.13.3.js"></script>
		<script type="text/javascript" src="lib/js/JSXTransformer-0.13.3.js"></script>
	</head>
	<body>
		<div class="container">
			<div class="row">
				<div class="col-md-12 content-container">

				</div>
			</div>
		</div>
		<script type="text/jsx">
			var CheckComponenet = React.createClass({
				getInitialState: function(){
					return {
						checked: false
					}
				},
				changeState: function(){
					this.setState({
						checked: !this.state.checked
					});
				},
				render: function(){
					var msg = this.state.checked? "Checkbox is check" : "Checkbox is not check";

					return (
						<div>
							<input type="checkbox" onChange={this.changeState}></input>
							<p>{msg}</p>
						</div>
						)
				}
			});

			React.render(<CheckComponenet/>, document.querySelector('.container'));
		</script>
	</body>
</html>