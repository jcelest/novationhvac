import { useState, useEffect } from 'react';
import { reviews, googleReviewsUrl } from '../data/reviews';
import './HeroReviews.css';

function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function HeroReviews() {
  const [shuffledReviews] = useState(() => shuffleArray(reviews));
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (reviews.length <= 1) return;

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % shuffledReviews.length);
        setIsVisible(true);
      }, 400);
    }, 5500);

    return () => clearInterval(interval);
  }, [shuffledReviews.length]);

  if (!reviews.length) return null;

  const review = shuffledReviews[index];

  return (
    <div className="hero-reviews">
      <div className={`hero-review-card ${isVisible ? 'visible' : ''}`}>
        <div className="hero-review-stars">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < review.rating ? 'star filled' : 'star'}>★</span>
          ))}
        </div>
        <blockquote className="hero-review-text">"{review.text}"</blockquote>
        <div className="hero-review-author-row">
          {review.photo && (
            <img src={review.photo} alt="" className="hero-review-avatar" />
          )}
          <cite className="hero-review-author">— {review.name}</cite>
        </div>
        <a
          href={googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-review-badge"
          aria-label="View on Google"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Google Review
        </a>
      </div>
    </div>
  );
}
