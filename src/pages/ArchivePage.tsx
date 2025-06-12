import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { archiveItems, getCategories } from '../data/archiveData';
import ArchiveItem from '../components/ArchiveItem';

const ArchivePage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = getCategories();
  
  const filteredItems = selectedCategory 
    ? archiveItems.filter(item => item.category === selectedCategory)
    : archiveItems;

  return (
    <div className="animate-fade-in">
      <section className="py-16 md:py-24">
        <div className="container-custom mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-medium mb-4 animate-slide-up">
            {t('archive.title')}
          </h1>
          
          <p className="text-text-dark mb-12 max-w-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {t('archive.subtitle')}
          </p>
          
          <div className="mb-8 flex flex-wrap gap-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-md text-sm transition-colors ${
                selectedCategory === null 
                  ? 'bg-steel text-white' 
                  : 'bg-background-light text-text-dark hover:bg-gray-800'
              }`}
            >
              All
            </button>
            
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md text-sm transition-colors ${
                  selectedCategory === category 
                    ? 'bg-steel text-white' 
                    : 'bg-background-light text-text-dark hover:bg-gray-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="bg-background-light rounded-lg overflow-hidden animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {filteredItems.map((item, index) => (
              <ArchiveItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArchivePage;