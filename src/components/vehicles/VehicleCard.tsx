import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Car, Star, Users } from 'lucide-react';

interface VehicleCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  type: string;
  rating: number;
  seats?: number;
  location?: string;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ 
  id, 
  name, 
  image, 
  price, 
  type, 
  rating, 
  seats, 
  location 
}) => {
  return (
    <Card className="car-card h-100">
      <Card.Img variant="top" src={image} className="car-image" />
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <Card.Title className="mb-0">{name}</Card.Title>
          <span className="badge bg-primary">${price}/day</span>
        </div>
        
        {location && (
          <div className="text-muted small mb-2">{location}</div>
        )}
        
        <div className="car-features">
          <span className="feature">
            <Car size={16} /> {type}
          </span>
          <span className="feature">
            <Star size={16} /> {rating}
          </span>
          {seats && (
            <span className="feature">
              <Users size={16} /> {seats} seats
            </span>
          )}
        </div>
        
        <div className="text-end mt-3">
          <Link to={`/vehicles/${id}`}>
            <Button variant="outline-primary" size="sm">View Details</Button>
          </Link>
        </div>
        
      </Card.Body>
    </Card>
  );
};

export default VehicleCard;