import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Form from './Form';
import LikeDislike from './LikeDislike';
import Effect from './Effect';
import ContextDemo from './ContextDemo';

// Navigation component with active state
const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav style={{
      backgroundColor: 'var(--white)',
      boxShadow: 'var(--shadow-md)',
      borderBottom: '1px solid var(--gray-200)',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '4rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link 
              to="/" 
              style={{
                fontSize: 'var(--font-size-2xl)',
                fontWeight: '700',
                color: 'var(--primary-color)',
                textDecoration: 'none',
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--primary-dark)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--primary-color)'}
            >
              ReactApp
            </Link>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--spacing-4)',
            flexWrap: 'wrap'
          }}>
            <Link 
              to="/" 
              style={{
                padding: 'var(--spacing-2) var(--spacing-3)',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'all var(--transition-fast)',
                ...(isActive('/') ? {
                  backgroundColor: 'var(--primary-color)',
                  color: 'var(--white)'
                } : {
                  color: 'var(--gray-700)'
                })
              }}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              style={{
                padding: 'var(--spacing-2) var(--spacing-3)',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'all var(--transition-fast)',
                ...(isActive('/about') ? {
                  backgroundColor: 'var(--primary-color)',
                  color: 'var(--white)'
                } : {
                  color: 'var(--gray-700)'
                })
              }}
            >
              About
            </Link>
            <Link 
              to="/services" 
              style={{
                padding: 'var(--spacing-2) var(--spacing-3)',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'all var(--transition-fast)',
                ...(isActive('/services') ? {
                  backgroundColor: 'var(--primary-color)',
                  color: 'var(--white)'
                } : {
                  color: 'var(--gray-700)'
                })
              }}
            >
              Services
            </Link>
            <Link 
              to="/form" 
              style={{
                padding: 'var(--spacing-2) var(--spacing-3)',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'all var(--transition-fast)',
                ...(isActive('/form') ? {
                  backgroundColor: 'var(--primary-color)',
                  color: 'var(--white)'
                } : {
                  color: 'var(--gray-700)'
                })
              }}
            >
              Contact
            </Link>
            <Link 
              to="/like-dislike" 
              style={{
                padding: 'var(--spacing-2) var(--spacing-3)',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'all var(--transition-fast)',
                ...(isActive('/like-dislike') ? {
                  backgroundColor: 'var(--primary-color)',
                  color: 'var(--white)'
                } : {
                  color: 'var(--gray-700)'
                })
              }}
            >
              Like/Dislike
            </Link>
            <Link 
              to="/effect" 
              style={{
                padding: 'var(--spacing-2) var(--spacing-3)',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'all var(--transition-fast)',
                ...(isActive('/effect') ? {
                  backgroundColor: 'var(--primary-color)',
                  color: 'var(--white)'
                } : {
                  color: 'var(--gray-700)'
                })
              }}
            >
              Effect
            </Link>
            <Link 
              to="/context" 
              style={{
                padding: 'var(--spacing-2) var(--spacing-3)',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'all var(--transition-fast)',
                ...(isActive('/context') ? {
                  backgroundColor: 'var(--primary-color)',
                  color: 'var(--white)'
                } : {
                  color: 'var(--gray-700)'
                })
              }}
            >
              Context
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: 'var(--gray-50)' 
    }}>
      <Navigation />
      <main style={{ padding: 'var(--spacing-8) 0' }}>
        <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/form" element={<Form />} />
            <Route path="/like-dislike" element={<LikeDislike />} />
            <Route path="/effect" element={<Effect />} />
            <Route path="/context" element={<ContextDemo />} />
      </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
