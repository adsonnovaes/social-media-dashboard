import { useContext } from 'react';
import { ThemeContext } from '../contexts/themeContext';

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('Nenhum contexto encontrado');
  }

  return context;
}

export default useTheme;