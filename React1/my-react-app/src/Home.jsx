import Welcome from './Welcome';
import Skills from './Skills';

const Home = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section style={{
        textAlign: 'center',
        padding: 'var(--spacing-16) 0',
        marginBottom: 'var(--spacing-12)'
      }}>
        <h1 style={{
          fontSize: 'var(--font-size-4xl)',
          fontWeight: '700',
          color: 'var(--gray-900)',
          marginBottom: 'var(--spacing-6)',
          background: 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Welcome to Our Professional Platform
        </h1>
        <p style={{
          fontSize: 'var(--font-size-xl)',
          color: 'var(--gray-600)',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Discover our comprehensive solutions and cutting-edge technology stack designed to elevate your digital experience.
        </p>
      </section>

      {/* Content Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'var(--spacing-8)',
        marginBottom: 'var(--spacing-12)'
      }}>
        <div className="card slide-up">
          <Welcome name="Ragul" country="India" />
        </div>
        <div className="card slide-up">
          <Skills skill={['React', 'Node', 'Express', 'MongoDB']} />
        </div>
      </div>

      {/* React Features Showcase */}
      <section style={{
        backgroundColor: 'var(--white)',
        borderRadius: 'var(--radius-2xl)',
        padding: 'var(--spacing-12)',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid var(--gray-200)',
        marginBottom: 'var(--spacing-12)'
      }}>
        <h2 style={{
          fontSize: 'var(--font-size-3xl)',
          fontWeight: '600',
          color: 'var(--gray-900)',
          textAlign: 'center',
          marginBottom: 'var(--spacing-8)'
        }}>
          🚀 React Features Demo
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--spacing-6)'
        }}>
          <div style={{
            textAlign: 'center',
            padding: 'var(--spacing-6)',
            backgroundColor: 'var(--gray-50)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--gray-200)',
            transition: 'all var(--transition-fast)',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-4px)';
            e.target.style.boxShadow = 'var(--shadow-lg)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
          >
            <div style={{
              fontSize: 'var(--font-size-4xl)',
              marginBottom: 'var(--spacing-3)'
            }}>
              👍👎
            </div>
            <h3 style={{
              fontSize: 'var(--font-size-lg)',
              fontWeight: '600',
              color: 'var(--gray-900)',
              marginBottom: 'var(--spacing-2)'
            }}>
              Like/Dislike Counter
            </h3>
            <p style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--gray-600)',
              lineHeight: '1.5'
            }}>
              Interactive counter with state management and name toggle functionality.
            </p>
          </div>

          <div style={{
            textAlign: 'center',
            padding: 'var(--spacing-6)',
            backgroundColor: 'var(--gray-50)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--gray-200)',
            transition: 'all var(--transition-fast)',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-4px)';
            e.target.style.boxShadow = 'var(--shadow-lg)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
          >
            <div style={{
              fontSize: 'var(--font-size-4xl)',
              marginBottom: 'var(--spacing-3)'
            }}>
              🔄
            </div>
            <h3 style={{
              fontSize: 'var(--font-size-lg)',
              fontWeight: '600',
              color: 'var(--gray-900)',
              marginBottom: 'var(--spacing-2)'
            }}>
              useEffect Hook
            </h3>
            <p style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--gray-600)',
              lineHeight: '1.5'
            }}>
              Side effects, API calls, and document title updates with useEffect.
            </p>
          </div>

          <div style={{
            textAlign: 'center',
            padding: 'var(--spacing-6)',
            backgroundColor: 'var(--gray-50)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--gray-200)',
            transition: 'all var(--transition-fast)',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-4px)';
            e.target.style.boxShadow = 'var(--shadow-lg)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
          >
            <div style={{
              fontSize: 'var(--font-size-4xl)',
              marginBottom: 'var(--spacing-3)'
            }}>
              🔗
            </div>
            <h3 style={{
              fontSize: 'var(--font-size-lg)',
              fontWeight: '600',
              color: 'var(--gray-900)',
              marginBottom: 'var(--spacing-2)'
            }}>
              React Context
            </h3>
            <p style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--gray-600)',
              lineHeight: '1.5'
            }}>
              Global state management with multiple context providers.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        textAlign: 'center',
        padding: 'var(--spacing-12)',
        backgroundColor: 'var(--white)',
        borderRadius: 'var(--radius-2xl)',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid var(--gray-200)'
      }}>
        <h2 style={{
          fontSize: 'var(--font-size-3xl)',
          fontWeight: '600',
          color: 'var(--gray-900)',
          marginBottom: 'var(--spacing-4)'
        }}>
          Ready to Get Started?
        </h2>
        <p style={{
          fontSize: 'var(--font-size-lg)',
          color: 'var(--gray-600)',
          marginBottom: 'var(--spacing-6)'
        }}>
          Explore our services and discover how we can help you achieve your goals.
        </p>
        <div style={{
          display: 'flex',
          gap: 'var(--spacing-4)',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button className="btn btn-primary">
            Explore Services
          </button>
          <button className="btn btn-secondary">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
