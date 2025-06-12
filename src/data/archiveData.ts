export interface ArchiveItem {
  id: string;
  title: string;
  category: string;
  date: string;
  fileUrl: string;
}

import archiveData from "./archive.json";

export const archiveItems: ArchiveItem[] = archiveData as ArchiveItem[];

export const getArchiveItemsByCategory = (category: string): ArchiveItem[] => {
  return archiveItems.filter((item) => item.category === category);
};

export const getCategories = (): string[] => {
  const categories = new Set(archiveItems.map((item) => item.category));
  return Array.from(categories);
};
