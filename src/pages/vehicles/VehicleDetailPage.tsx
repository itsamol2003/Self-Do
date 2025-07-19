import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Tabs,
  Tab,
  Form,
} from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  Fuel,
  Users,
  Car,
  Map,
  Calendar,
  ShieldCheck,
  Star,
  Clock,
  Tag,
  Heart,
  Share2,
} from "lucide-react";

// Mock vehicle data
const vehicleData = {
  id: "1",
  name: "Tesla Model 3",
  description:
    "The Tesla Model 3 is an electric four-door sedan developed by Tesla. The Model 3 Standard Range Plus version delivers an EPA-rated all-electric range of 263 miles (423 km) and the Long Range versions deliver 353 miles (568 km).",
  images: [
    "https://images.pexels.com/photos/12262167/pexels-photo-12262167.jpeg",
    "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg",
    "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg",
  ],
  price: 120,
  discountPrice: 108,
  location: "San Francisco, CA",
  type: "Electric",
  rating: 4.8,
  reviewCount: 24,
  features: {
    seats: 5,
    doors: 4,
    transmission: "Automatic",
    fuelType: "Electric",
    range: "315 miles",
    year: 2023,
  },
  extras: [
    "Enhanced Autopilot",
    "Premium Sound System",
    "Heated Seats",
    "Glass Roof",
    "Mobile Charger",
  ],
  owner: {
    name: "Alex Johnson",
    rating: 4.9,
    responseTime: "1 hour",
    profileImage:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
  availability: [
    { date: "2025-06-15", available: true },
    { date: "2025-06-16", available: true },
    { date: "2025-06-17", available: true },
    { date: "2025-06-18", available: true },
    { date: "2025-06-19", available: false },
    { date: "2025-06-20", available: false },
    { date: "2025-06-21", available: true },
  ],
  reviews: [
    {
      id: "1",
      user: "Michael C.",
      date: "2 weeks ago",
      rating: 5,
      content:
        "Amazing vehicle! Very clean and drove perfectly. The owner was very responsive and helpful.",
      userImage:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
    {
      id: "2",
      user: "Sarah L.",
      date: "1 month ago",
      rating: 4,
      content:
        "Great car, very fun to drive. Pickup and dropoff were smooth. Would rent again.",
      userImage:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    },
  ],
};

const VehicleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [pickupDate, setPickupDate] = useState("2025-06-15");
  const [returnDate, setReturnDate] = useState("2025-06-18");
  const [isFavorite, setIsFavorite] = useState(false);

  const vehicle = vehicleData;

  const handleBooking = () => {
    // Store booking details in localStorage
    const bookingData = {
      vehicle,
      pickupDate,
      returnDate,
      price: vehicle.discountPrice || vehicle.price,
    };
    localStorage.setItem("booking", JSON.stringify(bookingData));

    // Redirect to booking page or payment page
    navigate("/payment");
  };

  const handlePayment = () => {
    // Handle payment action
    navigate("/payment");
  };

  return (
    <Container fluid>
      <div className="mb-4">
        <Link to="/vehicles" className="text-decoration-none text-muted">
          &larr; Back to search results
        </Link>
      </div>

      <Row>
        <Col lg={8} className="mb-4">
          <div className="vehicle-gallery mb-4">
            <div className="position-relative">
              <img
                src={vehicle.images[selectedImage]}
                alt={vehicle.name}
                className="img-fluid rounded w-100"
                style={{ height: "500px", objectFit: "cover" }}
              />
              <div className="position-absolute top-0 end-0 p-3">
                <Button
                  variant={isFavorite ? "primary" : "light"}
                  className="me-2 rounded-circle"
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <Heart size={18} className={isFavorite ? "text-white" : ""} />
                </Button>
                <Button variant="light" className="rounded-circle">
                  <Share2 size={18} />
                </Button>
              </div>
            </div>
            <div className="d-flex mt-2">
              {vehicle.images.map((img, index) => (
                <div
                  key={index}
                  className={`thumbnail me-2 ${
                    selectedImage === index ? "border border-primary" : ""
                  }`}
                  onClick={() => setSelectedImage(index)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={img}
                    alt={`${vehicle.name} - view ${index + 1}`}
                    className="img-fluid rounded"
                    style={{
                      width: "100px",
                      height: "70px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <h1 className="h3 mb-0">{vehicle.name}</h1>
            <div>
              <Badge bg="secondary" className="me-2">
                {vehicle.type}
              </Badge>
              <span className="d-flex align-items-center">
                <Star
                  size={18}
                  className="text-warning me-1"
                  fill="currentColor"
                />
                <strong>{vehicle.rating}</strong>
                <span className="text-muted ms-1">
                  ({vehicle.reviewCount} reviews)
                </span>
              </span>
            </div>
          </div>

          <p className="text-muted mb-4">
            <Map size={18} className="me-1" />
            {vehicle.location}
          </p>

          <p className="mb-4">{vehicle.description}</p>

          <Card className="mb-4">
            <Card.Body>
              <h5 className="mb-3">Vehicle Features</h5>
              <Row>
                <Col md={6}>
                  <ul className="list-unstyled">
                    <li className="mb-2 d-flex align-items-center">
                      <Users size={18} className="me-2 text-primary" />
                      <span>{vehicle.features.seats} Seats</span>
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                      <Car size={18} className="me-2 text-primary" />
                      <span>{vehicle.features.doors} Doors</span>
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                      <Tag size={18} className="me-2 text-primary" />
                      <span>{vehicle.features.year} Model Year</span>
                    </li>
                  </ul>
                </Col>
                <Col md={6}>
                  <ul className="list-unstyled">
                    <li className="mb-2 d-flex align-items-center">
                      <Fuel size={18} className="me-2 text-primary" />
                      <span>{vehicle.features.fuelType}</span>
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                      <Clock size={18} className="me-2 text-primary" />
                      <span>{vehicle.features.range} Range</span>
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                      <Car size={18} className="me-2 text-primary" />
                      <span>{vehicle.features.transmission} Transmission</span>
                    </li>
                  </ul>
                </Col>
              </Row>

              <h5 className="mb-3 mt-4">Extras & Add-ons</h5>
              <Row>
                {vehicle.extras.map((extra, index) => (
                  <Col md={6} key={index}>
                    <div className="mb-2 d-flex align-items-center">
                      <div className="me-2 text-success">✓</div>
                      <span>{extra}</span>
                    </div>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>

         <Button variant="primary" className="mt-3">
                    <Link
                      to="/payment-methods"
                      className="text-white text-decoration-none"
                    >
                      Book Now
                    </Link>
                  </Button>
        </Col>

        <Col lg={4}>
          <Card className="booking-card sticky-top" style={{ top: "20px" }}>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <h5 className="mb-0">Price Details</h5>
                  <div className="text-muted">per day</div>
                </div>
                <div className="text-end">
                  {vehicle.discountPrice ? (
                    <>
                      <h4 className="text-primary mb-0">
                        ${vehicle.discountPrice}
                      </h4>
                      <del className="text-muted small">${vehicle.price}</del>
                    </>
                  ) : (
                    <h4 className="text-primary mb-0">${vehicle.price}</h4>
                  )}
                </div>
              </div>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Pickup Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Return Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                  />
                </Form.Group>

                <div className="d-grid gap-2 mb-4">
                  <Button variant="primary" className="mt-3">
                    <Link
                      to="/payment-methods"
                      className="text-white text-decoration-none"
                    >
                      Proceed to Payment
                    </Link>
                  </Button>

                  <Button variant="outline-secondary">Message Owner</Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default VehicleDetailPage;
