import { useQuery, useMutation } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { CREATE_VOTE } from '../utils/mutations';
import { QUERY_SERVICES } from '../utils/queries';

const Vote = () => {
  let { id } = useParams();

  const { loading, data } = useQuery(QUERY_SERVICES, {
    variables: { _id: id },
  });

  const services = data?.services || [];

  const [createVote, { error }] = useMutation(CREATE_VOTE);

  const handleVote = async (techNum) => {
    try {
      await createVote({
        variables: { _id: id, techNum: techNum },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Here are the services!</h1>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="card-body text-center mt-3">
          <h2>
            {services[0].servicesLikes} vs. {services[0].servicesDislikes}
          </h2>
          <h3>
            {services[0].servicesLikes_votes} : {services[0].serviceDislikes_votes}
          </h3>
          <button className="btn btn-info" onClick={() => handleVote(1)}>
            Vote for {services[0].servicesLikes}
          </button>{' '}
          <button className="btn btn-info" onClick={() => handleVote(2)}>
            Vote for {services[0].servicesDislikes}
          </button>
          <div className="card-footer text-center m-3">
            <br></br>
            <Link to="/">
              <button className="btn btn-lg btn-danger">
                View all services
              </button>
            </Link>
          </div>
        </div>
      )}
      {error && <div>Something went wrong...</div>}
    </div>
  );
};

export default Vote;
