import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ 
  rating, 
  maxRating = 5, 
  size = 16,
  className = ''
}) => {
  return (
    <div className={`d-flex ${className}`}>
      {Array.from({ length: maxRating }).map((_, index) => (
        <Star 
          key={index} 
          size={size} 
          className={index < rating ? 'text-warning' : 'text-muted'} 
          fill={index < rating ? 'currentColor' : 'none'}
        />
      ))}
    </div>
  );
};

export default StarRating;