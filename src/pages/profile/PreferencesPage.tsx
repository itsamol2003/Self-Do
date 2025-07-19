import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Badge } from 'react-bootstrap';
import { Star, Car, MapPin, Heart } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

// Mock Data for Recommendations and Favorites
const recommendedVehicles = [
  {
    id: '1',
    name: 'Tesla Model S',
    type: 'Electric',
    price: 200,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/1421206/pexels-photo-1421206.jpeg',
    location: 'San Francisco, CA'
  },
  {
    id: '2',
    name: 'BMW 5 Series',
    type: 'Luxury',
    price: 150,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/3772056/pexels-photo-3772056.jpeg',
    location: 'Los Angeles, CA'
  },
];

const vehicleTypes = ['SUV', 'Sedan', 'Sports', 'Electric', 'Luxury'];

const locations = ['San Francisco, CA', 'Los Angeles, CA', 'New York, NY', 'Chicago, IL'];

const PreferencesPage: React.FC = () => {
  const { user } = useAuth();

  const [favorites, setFavorites] = useState<string[]>([]);
  const [preferredVehicleTypes, setPreferredVehicleTypes] = useState<string[]>([]);
  const [preferredLocations, setPreferredLocations] = useState<string[]>([]);
  const [selectedRecommendations, setSelectedRecommendations] = useState<string[]>([]);

  // Handle adding/removing vehicles to favorites
  const handleFavoriteToggle = (vehicleId: string) => {
    setFavorites((prev) =>
      prev.includes(vehicleId) ? prev.filter((id) => id !== vehicleId) : [...prev, vehicleId]
    );
  };

  // Handle setting preferred vehicle types
  const handleVehicleTypeChange = (type: string) => {
    setPreferredVehicleTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  // Handle setting preferred locations
  const handleLocationChange = (location: string) => {
    setPreferredLocations((prev) =>
      prev.includes(location) ? prev.filter((loc) => loc !== location) : [...prev, location]
    );
  };

  return (
    <Container fluid className="p-4 bg-light">
      <h2 className="text-center mb-5">Preferences & Recommendations</h2>

      {/* Favorites Section */}
      <Row className="mb-5">
        <Col lg={6}>
          <h4 className="mb-3">Favorite Vehicles</h4>
          <Card className="shadow-lg p-4">
            <Row>
              {recommendedVehicles.map((vehicle) => (
                <Col md={6} lg={4} key={vehicle.id}>
                  <Card className="mb-3">
                    <Card.Img variant="top" src={vehicle.image} />
                    <Card.Body>
                      <Card.Title>{vehicle.name}</Card.Title>
                      <Card.Text>{vehicle.type}</Card.Text>
                      <div className="d-flex justify-content-between">
                        <span className="text-muted">${vehicle.price}/day</span>
                        <Button
                          variant={favorites.includes(vehicle.id) ? 'danger' : 'outline-danger'}
                          onClick={() => handleFavoriteToggle(vehicle.id)}
                        >
                          {favorites.includes(vehicle.id) ? <Heart size={16} /> : <Heart size={16} />}
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>
        </Col>

        {/* Recommendations Section */}
        <Col lg={6}>
          <h4 className="mb-3">Recommended Vehicles</h4>
          <Card className="shadow-lg p-4">
            {recommendedVehicles.map((vehicle) => (
              <div className="d-flex justify-content-between align-items-center mb-3" key={vehicle.id}>
                <div className="d-flex align-items-center">
                  <Car size={24} className="me-2" />
                  <div>
                    <h5>{vehicle.name}</h5>
                    <p className="text-muted">{vehicle.type} - {vehicle.location}</p>
                    <div className="d-flex align-items-center">
                      <Star size={16} className="text-warning" />
                      <span className="ms-2">{vehicle.rating}</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="outline-primary"
                  onClick={() =>
                    setSelectedRecommendations((prev) =>
                      prev.includes(vehicle.id) ? prev.filter((id) => id !== vehicle.id) : [...prev, vehicle.id]
                    )
                  }
                >
                  {selectedRecommendations.includes(vehicle.id) ? 'Remove' : 'Add to Recommendations'}
                </Button>
              </div>
            ))}
          </Card>
        </Col>
      </Row>

      {/* Preferences Section */}
      <Row>
        <Col lg={6}>
          <h4 className="mb-3">Set Your Preferences</h4>
          <Card className="shadow-lg p-4">
            <h5>Preferred Vehicle Types</h5>
            <div className="d-flex flex-wrap gap-3">
              {vehicleTypes.map((type) => (
                <Form.Check
                  key={type}
                  type="checkbox"
                  id={`vehicle-type-${type}`}
                  label={type}
                  checked={preferredVehicleTypes.includes(type)}
                  onChange={() => handleVehicleTypeChange(type)}
                  className="mb-2"
                />
              ))}
            </div>

            <h5 className="mt-4">Preferred Locations</h5>
            <div className="d-flex flex-wrap gap-3">
              {locations.map((location) => (
                <Form.Check
                  key={location}
                  type="checkbox"
                  id={`location-${location}`}
                  label={location}
                  checked={preferredLocations.includes(location)}
                  onChange={() => handleLocationChange(location)}
                  className="mb-2"
                />
              ))}
            </div>
          </Card>
        </Col>

        <Col lg={6}>
          <h4 className="mb-3">Your Preferences Summary</h4>
          <Card className="shadow-lg p-4">
            <h5>Your Selected Vehicle Types:</h5>
            <div>
              {preferredVehicleTypes.length > 0 ? (
                preferredVehicleTypes.map((type, index) => (
                  <Badge key={index} bg="primary" className="me-2 mb-2">
                    {type}
                  </Badge>
                ))
              ) : (
                <p>No preferences selected.</p>
              )}
            </div>

            <h5 className="mt-4">Your Selected Locations:</h5>
            <div>
              {preferredLocations.length > 0 ? (
                preferredLocations.map((location, index) => (
                  <Badge key={index} bg="primary" className="me-2 mb-2">
                    {location}
                  </Badge>
                ))
              ) : (
                <p>No preferences selected.</p>
              )}
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PreferencesPage;
