import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="container-custom mx-auto py-24 text-center">
      <h1 className="text-4xl md:text-5xl font-heading font-medium mb-4">404</h1>
      <p className="text-xl mb-8">The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">
        Return Home
      </Link>
    </div>
  );
};

export default NotFoundPage;