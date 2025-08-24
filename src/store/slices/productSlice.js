import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  filteredProducts: [],
  categories: [],
  isLoading: false,
  error: null,
  filters: {
    category: 'all',
    priceRange: [0, 1000],
    searchQuery: '',
    sortBy: 'name',
  },
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    updateFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    applyFilters: (state) => {
      let filtered = [...state.products];
      
      // Category filter
      if (state.filters.category !== 'all') {
        filtered = filtered.filter(product => product.category === state.filters.category);
      }
      
      // Price range filter
      filtered = filtered.filter(product => 
        product.price >= state.filters.priceRange[0] && 
        product.price <= state.filters.priceRange[1]
      );
      
      // Search query filter
      if (state.filters.searchQuery) {
        filtered = filtered.filter(product =>
          product.name.toLowerCase().includes(state.filters.searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(state.filters.searchQuery.toLowerCase())
        );
      }
      
      // Sort products
      filtered.sort((a, b) => {
        switch (state.filters.sortBy) {
          case 'price-low':
            return a.price - b.price;
          case 'price-high':
            return b.price - a.price;
          case 'name':
            return a.name.localeCompare(b.name);
          default:
            return 0;
        }
      });
      
      state.filteredProducts = filtered;
    },
    clearFilters: (state) => {
      state.filters = {
        category: 'all',
        priceRange: [0, 1000],
        searchQuery: '',
        sortBy: 'name',
      };
      state.filteredProducts = state.products;
    },
  },
});

export const { 
  setProducts, 
  setCategories, 
  setLoading, 
  setError, 
  updateFilters, 
  applyFilters, 
  clearFilters 
} = productSlice.actions;

export default productSlice.reducer;
