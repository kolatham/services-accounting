import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SERVICES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_SERVICES, {
    fetchPolicy: "no-cache"
  });

  const servicesList = data?.services || [];

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to Accounting!</h1>
      </div>
      <div className="card-body m-5">
        <h2>Here is a list of services you can vote on:</h2>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ul className="square">
            {servicesList.map((services) => {
              return (
                <li key={services._id}>
                  <Link to={{ pathname: `/services/${services._id}` }}>
                    {user.servicesLikes} vs. {user.servicesDislikes}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="card-footer text-center m-3">
        <h2>How was the Service?</h2>
        <Link to="/services">
          <button className="btn btn-lg btn-danger">Vote!</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
