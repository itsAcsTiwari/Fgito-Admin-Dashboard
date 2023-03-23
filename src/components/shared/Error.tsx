const ErrorComponent = ({ error }) => (
	<div>
		<h2>An error has occurred:</h2>
		<p>{error.message}</p>
	</div>
)

export default ErrorComponent