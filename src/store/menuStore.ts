import { create } from 'zustand';
import { MenuItem, MenuCategory } from '@/types';
import { mockMenuItems } from '@/lib/api';

interface MenuState {
  items: MenuItem[];
  categories: MenuCategory[];
  filteredItems: MenuItem[];
  selectedCategory: string | null;
  searchQuery: string;
  filters: {
    popular: boolean;
    featured: boolean;
    new: boolean;
  };
  setItems: (items: MenuItem[]) => void;
  setCategories: (categories: MenuCategory[]) => void;
  setSelectedCategory: (category: string | null) => void;
  setSearchQuery: (query: string) => void;
  setFilters: (filters: any) => void;
  applyFilters: () => void;
}

export const useMenuStore = create<MenuState>((set, get) => ({
  items: mockMenuItems as MenuItem[],
  categories: [
    { id: 'pizza', name: 'Pizza', slug: 'pizza', description: 'Our signature pizzas', displayOrder: 1 },
    { id: 'burger', name: 'Burger', slug: 'burger', description: 'Delicious burgers', displayOrder: 2 },
    { id: 'pasta', name: 'Pasta', slug: 'pasta', description: 'Italian favorites', displayOrder: 3 },
  ],
  filteredItems: mockMenuItems as MenuItem[],
  selectedCategory: null,
  searchQuery: '',
  filters: {
    popular: false,
    featured: false,
    new: false,
  },
  setItems: (items) => set({ items }),
  setCategories: (categories) => set({ categories }),
  setSelectedCategory: (category) => {
    set({ selectedCategory: category });
    get().applyFilters();
  },
  setSearchQuery: (query) => {
    set({ searchQuery: query });
    get().applyFilters();
  },
  setFilters: (filters) => {
    set({ filters });
    get().applyFilters();
  },
  applyFilters: () => {
    const { items, selectedCategory, searchQuery, filters } = get();
    let filtered = [...items];

    if (selectedCategory) {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filters.popular) {
      filtered = filtered.filter((item) => item.isPopular);
    }

    if (filters.featured) {
      filtered = filtered.filter((item) => item.isFeatured);
    }

    if (filters.new) {
      filtered = filtered.filter((item) => item.isNew);
    }

    set({ filteredItems: filtered });
  },
}));
