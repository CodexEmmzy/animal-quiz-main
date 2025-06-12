import React from 'react';
import { FileText } from 'lucide-react';
import { ArchiveItem as ArchiveItemType } from '../data/archiveData';

interface ArchiveItemProps {
  item: ArchiveItemType;
}

const ArchiveItem: React.FC<ArchiveItemProps> = ({ item }) => {
  return (
    <div className="archive-item flex items-center justify-between">
      <div className="flex items-center">
        <FileText size={20} className="text-steel mr-3" />
        <div>
          <h3 className="text-text-light font-medium">{item.title}</h3>
          <p className="text-text-dark text-sm">{item.date}</p>
        </div>
      </div>
      
      <a 
        href={item.fileUrl} 
        download
        className="btn btn-outline py-1 px-3 text-xs"
      >
        PDF
      </a>
    </div>
  );
};

export default ArchiveItem;