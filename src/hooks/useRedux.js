import { useDispatch, useSelector } from 'react-redux';

// Typed useSelector hook
export const useAppSelector = useSelector;

// Typed useDispatch hook
export const useAppDispatch = useDispatch;

// Custom hooks for specific slices
export const useAuth = () => {
  return useAppSelector((state) => state.auth);
};

export const useCart = () => {
  return useAppSelector((state) => state.cart);
};

export const useProduct = () => {
  return useAppSelector((state) => state.product);
};

export const useUI = () => {
  return useAppSelector((state) => state.ui);
};
