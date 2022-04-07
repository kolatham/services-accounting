import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import moment from 'moment'

const Service = props => {
  const [service, setService] = useState({
    id: null,
    title: "",
    description:"",
    reviews:"",
    })
  const getService = id =>{
    ServiceData.get(id)
      .then(response => {
        setService(response.data)
        console.log(response.data)
      })
      .catch(e =>{
        console.log(e)
      })
  }
  useEffect(()=>{
    getService(props.match.params.id)
  },[props.match.params.id])
  const deleteReview = (reviewId, index) =>{
   ServiceData.deleteReview(reviewId, props.user.id)
      .then(response => {
        setService((prevState) => {
          prevState.reviews.splice(index,1)
          return({
            ...prevState
          })
        })
      })
      .catch(e =>{
        console.log(e)
      })
  }
  return (
    <div>
      <Container>
        <Row>
          {/* <Col>
            <Image src={} fluid />
          </Col> */}
          <Col>
            <Card>
              <Card.Header as="h5">{service.title}</Card.Header>
              <Card.Body>
                <Card.Text>
                  {service.description}
                </Card.Text>
              {props.user &&
                <Link to={"/services-list/" + props.match.params.id + "/add-review"}>Add Review</Link>}
              </Card.Body>
            </Card>
            <br></br>
            <h2>Reviews</h2>
            <br></br>
            {service.reviews.map((review, index)=>{
              return (
                <Media key={index}>
                  <Media.Body>
                  <h5>
                     {review.name+" reviewed on "} {moment(review.date).format("Do MMMM YYYY")}
                  </h5>
                    <p>{review.review}</p>
                    {props.user && props.user.id === review.user_id &&
                      <Row>
                        <Col><Link to={{
                          pathname:"/services-list/"+props.match.params.id+"/add-review",
                          state: {currentReview: review}
                          }}>Edit</Link>
                        </Col>
                        <Col>
                        <Button variant="link" onClick={() => deleteReview(review._id, index)}>
                        Delete
                        </Button>
                        </Col>
                      </Row>
                    }
                  </Media.Body>
                </Media>
              )
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Service;