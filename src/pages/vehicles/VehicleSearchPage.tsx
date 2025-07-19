import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Car, Calendar, Fuel, Users, Filter, MapPin, Star } from 'lucide-react';

// Mock data for vehicles
const vehiclesData = [
  {
    id: '1',
    name: 'Tesla Model 3',
    image: 'https://images.pexels.com/photos/12262167/pexels-photo-12262167.jpeg',
    price: 120,
    type: 'Electric',
    rating: 4.8,
    seats: 5,
    transmission: 'Automatic',
    location: 'San Francisco, CA'
  },
  {
    id: '2',
    name: 'Toyota Camry',
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
    price: 75,
    type: 'Sedan',
    rating: 4.5,
    seats: 5,
    transmission: 'Automatic',
    location: 'San Francisco, CA'
  },
  {
    id: '3',
    name: 'Range Rover Evoque',
    image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg',
    price: 150,
    type: 'SUV',
    rating: 4.7,
    seats: 5,
    transmission: 'Automatic',
    location: 'San Francisco, CA'
  }
];

const VehicleSearchPage: React.FC = () => {
  const [searchLocation, setSearchLocation] = useState('San Francisco, CA');
  const [pickupDate, setPickupDate] = useState('2025-06-15');
  const [returnDate, setReturnDate] = useState('2025-06-20');
  const [vehicles, setVehicles] = useState(vehiclesData);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  // Filter handling
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange([0, parseInt(e.target.value)]);
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const type = e.target.value;
    setSelectedTypes((prev) =>
      e.target.checked ? [...prev, type] : prev.filter((t) => t !== type)
    );
  };

  // Apply filters
  const applyFilters = () => {
    let filteredVehicles = vehiclesData;

    // Filter by price
    filteredVehicles = filteredVehicles.filter((v) => v.price <= priceRange[1]);

    // Filter by type
    if (selectedTypes.length > 0) {
      filteredVehicles = filteredVehicles.filter((v) => selectedTypes.includes(v.type));
    }

    setVehicles(filteredVehicles);
  };

  // Reset filters
  const resetFilters = () => {
    setPriceRange([0, 200]);
    setSelectedTypes([]);
    setVehicles(vehiclesData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e1b2d] via-[#241d3e] to-[#1f1940] text-white">
      <Container fluid className="pt-8 pb-8">
        <h1 className="h3 mb-4 text-center">Find Your Perfect Ride</h1>

        <div className="search-filters mb-4">
          <Form>
            <Row>
              <Col lg={3} md={6} className="mb-3">
                <Form.Group>
                  <Form.Label className="d-flex align-items-center">
                    <MapPin size={16} className="me-2" /> Location
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Where do you want to drive?"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col lg={3} md={6} className="mb-3">
                <Form.Group>
                  <Form.Label className="d-flex align-items-center">
                    <Calendar size={16} className="me-2" /> Pick-up Date
                  </Form.Label>
                  <Form.Control
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col lg={3} md={6} className="mb-3">
                <Form.Group>
                  <Form.Label className="d-flex align-items-center">
                    <Calendar size={16} className="me-2" /> Return Date
                  </Form.Label>
                  <Form.Control
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col lg={3} md={6} className="mb-3 d-flex align-items-end">
                <Button variant="primary" className="w-100" onClick={applyFilters}>
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </div>

        <Row>
          <Col lg={3} className="mb-4">
            <Card>
              <Card.Header className="bg-white">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0 d-flex align-items-center">
                    <Filter size={18} className="me-2" /> Filters
                  </h5>
                  <Button variant="link" className="p-0 text-decoration-none" onClick={resetFilters}>
                    Reset
                  </Button>
                </div>
              </Card.Header>
              <Card.Body>
                <Accordion defaultActiveKey={['0', '1', '2']} alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Price Range</Accordion.Header>
                    <Accordion.Body>
                      <Form.Group>
                        <Form.Label>Max Price: ${priceRange[1]}/day</Form.Label>
                        <Form.Range
                          min={0}
                          max={200}
                          value={priceRange[1]}
                          onChange={handlePriceChange}
                        />
                      </Form.Group>
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Vehicle Type */}

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Vehicle Type</Accordion.Header>
                    <Accordion.Body>
                      <Form.Group>
                        {['Sedan', 'SUV', 'Sports', 'Electric'].map((type) => (
                          <Form.Check
                            key={type}
                            type="checkbox"
                            id={`type-${type}`}
                            label={type}
                            value={type}
                            checked={selectedTypes.includes(type)}
                            onChange={handleTypeChange}
                            className="mb-2"
                          />
                        ))}
                      </Form.Group>
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Transmission */}

                  {/* <Accordion.Item eventKey="2">
                    <Accordion.Header>Transmission</Accordion.Header>
                    <Accordion.Body>
                      <Form.Group>
                        {['Automatic', 'Manual'].map((transmission) => (
                          <Form.Check
                            key={transmission}
                            type="checkbox"
                            id={`transmission-${transmission}`}
                            label={transmission}
                            value={transmission}
                            checked={selectedTransmissions.includes(transmission)}
                            onChange={handleTransmissionChange}
                            className="mb-2"
                          />
                        ))}
                      </Form.Group>
                    </Accordion.Body>
                  </Accordion.Item> */}

                </Accordion>

                <div className="d-grid mt-3">
                  <Button variant="primary" onClick={applyFilters}>
                    Apply Filters
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={9}>
            <div className="d-flex justify-content-between mb-3">
              <p className="mb-0">{vehicles.length} vehicles found</p>
              <Form.Select style={{ width: 'auto' }}>
                <option>Sort by: Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating: High to Low</option>
              </Form.Select>
            </div>

            <Row>
              {vehicles.map((vehicle) => (
                <Col lg={4} md={6} className="mb-4" key={vehicle.id}>
                  <Card className="car-card h-100">
                    <Card.Img variant="top" src={vehicle.image} className="car-image" />
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <Card.Title className="mb-0">{vehicle.name}</Card.Title>
                        <span className="badge bg-primary">${vehicle.price}/day</span>
                      </div>
                      <div className="text-muted small mb-3">
                        <MapPin size={14} className="me-1" />
                        {vehicle.location}
                      </div>
                      <div className="car-features">
                        <span className="feature">
                          <Car size={16} /> {vehicle.type}
                        </span>
                        <span className="feature">
                          <Star size={16} /> {vehicle.rating}
                        </span>
                        <span className="feature">
                          <Users size={16} /> {vehicle.seats} seats
                        </span>
                      </div>
                      <div className="text-end mt-3">
                        {/* Link to vehicle details page */}
                        <Link to={`/vehicles/${vehicle.id}`} className="btn btn-outline-primary btn-sm">
                          View Details
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            {vehicles.length === 0 && (
              <div className="text-center py-5">
                <p className="text-muted mb-3">No vehicles match your search criteria</p>
                <Button variant="primary" onClick={resetFilters}>
                  Reset Filters
                </Button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default VehicleSearchPage;
