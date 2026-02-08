export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  imageUrl: string;
  icon: string;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
}
