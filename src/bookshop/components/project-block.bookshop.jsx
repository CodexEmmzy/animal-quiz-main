// Bookshop component for a single project block
// This will be auto-detected by CloudCannon Bookshop
import React from 'react';

export default function ProjectBlock({
  title = '',
  summary = '',
  description = '',
  objectives = [],
  elements = [],
  scenarios = [],
  extensions = [],
  imageUrl = '',
  featured = false
}) {
  return (
    <div className="project-card">
      {imageUrl && <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded mb-4" />}
      <h3 className="text-xl font-heading mb-2">{title}</h3>
      <p className="text-text-dark mb-4">{summary}</p>
      <p className="mb-4">{description}</p>
      <ul className="mb-2">
        {objectives.map((o, i) => <li key={i}>Objective: {o}</li>)}
      </ul>
      <ul className="mb-2">
        {elements.map((e, i) => <li key={i}>Element: {e}</li>)}
      </ul>
      <ul className="mb-2">
        {scenarios.map((s, i) => <li key={i}>Scenario: {s}</li>)}
      </ul>
      <ul className="mb-2">
        {extensions.map((ex, i) => <li key={i}>Extension: {ex}</li>)}
      </ul>
      {featured && <span className="inline-block bg-steel text-white px-2 py-1 rounded text-xs">Featured</span>}
    </div>
  );
}
