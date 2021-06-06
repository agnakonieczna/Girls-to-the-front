import Header from './Header';
import LanguageProvider from '../../context/LanguageContext';

const Layout = ({ children, handleOverflow }) => {
  return (
    <LanguageProvider>
      <Header handleOverflow={handleOverflow} />
      {children}
    </LanguageProvider>
  );
};

export default Layout;
