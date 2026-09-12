export interface MenuItem {
  id: string;
  name: string;
  subtitle: string;
  category: 'espresso' | 'signature' | 'frappe' | 'pastries';
  price: string;
  rating: number;
  description: string;
  image: string;
  badge?: string;
  foodpandaUrl?: string;
  notes: string[];
}

export interface Branch {
  id: string;
  name: string;
  designation: string;
  tagline: string;
  address: string;
  coords: string;
  hours: string;
  phone: string;
  status: 'Open Now' | 'Closing Soon';
  features: string[];
  image: string;
  foodpandaUrl: string;
  vibeDescription: string;
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  category: 'Event' | 'Promo' | 'Announcement' | 'Brew Guide';
  date: string;
  readTime: string;
  tag: string;
  image: string;
  featured?: boolean;
  linkText?: string;
  actionUrl?: string;
  author: {
    name: string;
    role: string;
  };
}
