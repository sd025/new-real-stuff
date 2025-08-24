import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMobileMenuOpen: false,
  isCartOpen: false,
  isSearchOpen: false,
  isLoading: false,
  theme: 'light',
  scrollY: 0,
  isScrolled: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false;
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
    toggleSearch: (state) => {
      state.isSearchOpen = !state.isSearchOpen;
    },
    closeSearch: (state) => {
      state.isSearchOpen = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setScrollY: (state, action) => {
      state.scrollY = action.payload;
      state.isScrolled = action.payload > 50;
    },
    resetUI: (state) => {
      state.isMobileMenuOpen = false;
      state.isCartOpen = false;
      state.isSearchOpen = false;
    },
  },
});

export const { 
  toggleMobileMenu, 
  closeMobileMenu, 
  toggleCart, 
  closeCart, 
  toggleSearch, 
  closeSearch, 
  setLoading, 
  setTheme, 
  setScrollY, 
  resetUI 
} = uiSlice.actions;

export default uiSlice.reducer;
