import { Link, useNavigate } from 'react-router-dom';

function HomePage(){

	const navigate = useNavigate();
	return (
		<>
			<h1>HomePage</h1>
			<p><Link to="/products">link to products</Link></p>
		</>
	)
};

export default HomePage;