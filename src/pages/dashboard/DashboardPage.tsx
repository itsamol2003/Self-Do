import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CalendarRange, Car, MapPin, Clock, Star } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { format } from 'date-fns';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  
  // Mock data for upcoming bookings
  const upcomingBookings = [
    {
      id: '1',
      vehicle: 'Tesla Model 3',
      image: 'https://images.pexels.com/photos/12262167/pexels-photo-12262167.jpeg',
      startDate: new Date(2025, 5, 15),
      endDate: new Date(2025, 5, 18),
      location: 'San Francisco, CA',
      status: 'confirmed'
    },
    {
      id: '2',
      vehicle: 'BMW X5',
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
      startDate: new Date(2025, 6, 10),
      endDate: new Date(2025, 6, 15),
      location: 'Los Angeles, CA',
      status: 'pending'
    }
  ];
  
  // Mock data for recommended vehicles
  const recommendedVehicles = [
    {
      id: '1',
      name: 'Tesla Model Y',
      image: 'https://images.pexels.com/photos/12262167/pexels-photo-12262167.jpeg',
      price: 135,
      rating: 4.9,
      type: 'Electric'
    },
    {
      id: '2',
      name: 'Audi Q5',
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg',
      price: 120,
      rating: 4.7,
      type: 'SUV'
    },
    {
      id: '3',
      name: 'Ford Mustang',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
      price: 110,
      rating: 4.8,
      type: 'Sports'
    }
  ];
  
  return (
    <Container fluid>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h3 mb-1">Welcome back, {user?.name || 'User'}!</h1>
          <p className="text-muted">Here's an overview of your rentals and activity</p>
        </div>
        <Link to="/vehicles">
          <Button variant="primary">Find a Vehicle</Button>
        </Link>
      </div>
      
      <div className="dashboard-stats mb-4">
        <div className="stat-card">
          <div className="stat-title">Upcoming Trips</div>
          <div className="stat-value">2</div>
        </div>
        <div className="stat-card">
          <div className="stat-title">Completed Trips</div>
          <div className="stat-value">8</div>
        </div>
        <div className="stat-card">
          <div className="stat-title">Favorite Vehicles</div>
          <div className="stat-value">4</div>
        </div>
        <div className="stat-card">
          <div className="stat-title">Reward Points</div>
          <div className="stat-value">250</div>
        </div>
      </div>
      
      <Row>
        <Col lg={8} className="mb-4">
          <Card>
            <Card.Header className="bg-white">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Upcoming Bookings</h5>
                <Link to="/bookings" className="text-decoration-none">View all</Link>
              </div>
            </Card.Header>
            <Card.Body>
              {upcomingBookings.length > 0 ? (
                upcomingBookings.map(booking => (
                  <Card key={booking.id} className={`booking-card mb-3 ${booking.status === 'confirmed' ? 'upcoming' : ''}`}>
                    <Card.Body>
                      <Row>
                        <Col md={3}>
                          <img src={booking.image} alt={booking.vehicle} className="img-fluid rounded" />
                        </Col>
                        <Col md={6}>
                          <h5 className="mb-1">{booking.vehicle}</h5>
                          <div className="d-flex align-items-center text-muted mb-2">
                            <MapPin size={16} className="me-1" />
                            <span>{booking.location}</span>
                          </div>
                          <div className="d-flex align-items-center mb-2">
                            <CalendarRange size={16} className="me-1 text-primary" />
                            <span>
                              {format(booking.startDate, 'MMM d')} - {format(booking.endDate, 'MMM d, yyyy')}
                            </span>
                          </div>
                          <Badge bg={booking.status === 'confirmed' ? 'success' : 'warning'} className="text-capitalize">
                            {booking.status}
                          </Badge>
                        </Col>
                        <Col md={3} className="d-flex align-items-center justify-content-end">
                        
                          {/* <Link to={`/bookings/${booking.id}`}> */}
                            <Button variant="outline-primary" size="sm">View Details</Button>
                          {/* </Link> */}

                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                ))
              ) : (
                <div className="text-center py-4">
                  <p className="text-muted mb-0">You don't have any upcoming bookings</p>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={4} className="mb-4">
          <Card className="mb-4">
            <Card.Header className="bg-white">
              <h5 className="mb-0">Profile Completion</h5>
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <span>Progress</span>
                <span>75%</span>
              </div>
              <div className="progress mb-4">
                <div 
                  className="progress-bar" 
                  role="progressbar" 
                  style={{ width: '75%' }} 
                  aria-valuenow={75} 
                  aria-valuemin={0} 
                  aria-valuemax={100}
                ></div>
              </div>
              <p className="small text-muted mb-3">Complete your profile to access all features</p>
              <div className="d-grid">
                <Link to="/profile">
                  <Button variant="outline-primary" className="w-100">Complete Profile</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>

          recent activity
          
          {/* <Card>
            <Card.Header className="bg-white">
              <h5 className="mb-0">Recent Activity</h5>
            </Card.Header>
            <Card.Body className="p-0">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex align-items-center py-3">
                  <div className="bg-light rounded-circle p-2 me-3">
                    <CalendarRange size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="mb-0">Booking #12345 confirmed</p>
                    <small className="text-muted">2 days ago</small>
                  </div>
                </li>
                <li className="list-group-item d-flex align-items-center py-3">
                  <div className="bg-light rounded-circle p-2 me-3">
                    <Clock size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="mb-0">Extended booking for BMW X5</p>
                    <small className="text-muted">1 week ago</small>
                  </div>
                </li>
                <li className="list-group-item d-flex align-items-center py-3">
                  <div className="bg-light rounded-circle p-2 me-3">
                    <Car size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="mb-0">Successfully returned Toyota Camry</p>
                    <small className="text-muted">2 weeks ago</small>
                  </div>
                </li>
              </ul>
            </Card.Body>
          </Card> */}


        </Col>

        
      </Row>
      
      <section className="mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4>Recommended for You</h4>
          <Link to="/vehicles" className="text-decoration-none">View all</Link>
        </div>
        
        <Row>
          {recommendedVehicles.map(vehicle => (
            <Col lg={4} md={6} className="mb-4" key={vehicle.id}>
              <Card className="car-card h-100">
                <Card.Img variant="top" src={vehicle.image} className="car-image" />
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <Card.Title className="mb-0">{vehicle.name}</Card.Title>
                    <span className="badge bg-primary">${vehicle.price}/day</span>
                  </div>
                  <div className="car-features">
                    <span className="feature">
                      <Car size={16} /> {vehicle.type}
                    </span>
                    <span className="feature">
                      <Star size={16} /> {vehicle.rating}
                    </span>
                  </div>
                  <div className="text-end mt-3">

                    {/* <Link to={`/vehicles/${vehicle.id}`}> */}
                      <Button variant="outline-primary" size="sm">View Details</Button>
                    {/* </Link> */}

                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default DashboardPage;