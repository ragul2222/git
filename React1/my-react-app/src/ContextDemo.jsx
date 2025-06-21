import { useContext } from 'react';
import { userContext } from './hooks/UserContext';
import { InfoContext } from './hooks/InfoContext';

const ContextDemo = () => {
  const user = useContext(userContext);
  const info = useContext(InfoContext);

  return (
    <div className="fade-in">
      <div style={{
        textAlign: 'center',
        padding: 'var(--spacing-12) 0',
        marginBottom: 'var(--spacing-12)'
      }}>
        <h1 style={{
          fontSize: 'var(--font-size-4xl)',
          fontWeight: '700',
          color: 'var(--gray-900)',
          marginBottom: 'var(--spacing-6)'
        }}>
          🔗 React Context Demo
        </h1>
        <p style={{
          fontSize: 'var(--font-size-xl)',
          color: 'var(--gray-600)',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Demonstrating React Context API for global state management across components.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'var(--spacing-8)',
        marginBottom: 'var(--spacing-12)'
      }}>
        <div className="card slide-up">
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: 'var(--primary-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto var(--spacing-6)',
            fontSize: 'var(--font-size-3xl)',
            color: 'var(--white)'
          }}>
            👤
          </div>
          <h3 style={{
            fontSize: 'var(--font-size-2xl)',
            fontWeight: '600',
            color: 'var(--gray-900)',
            marginBottom: 'var(--spacing-4)',
            textAlign: 'center'
          }}>
            User Context
          </h3>
          <div style={{
            backgroundColor: 'var(--gray-50)',
            padding: 'var(--spacing-4)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--gray-200)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: 'var(--spacing-2)'
            }}>
              <span style={{ fontWeight: '600', color: 'var(--gray-700)' }}>Name:</span>
              <span style={{ color: 'var(--gray-900)' }}>{user.name}</span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: 'var(--spacing-2)'
            }}>
              <span style={{ fontWeight: '600', color: 'var(--gray-700)' }}>Age:</span>
              <span style={{ color: 'var(--gray-900)' }}>{user.age}</span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <span style={{ fontWeight: '600', color: 'var(--gray-700)' }}>Department:</span>
              <span style={{ color: 'var(--gray-900)' }}>{user.dept}</span>
            </div>
          </div>
        </div>

        <div className="card slide-up">
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: 'var(--accent-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto var(--spacing-6)',
            fontSize: 'var(--font-size-3xl)',
            color: 'var(--white)'
          }}>
            ℹ️
          </div>
          <h3 style={{
            fontSize: 'var(--font-size-2xl)',
            fontWeight: '600',
            color: 'var(--gray-900)',
            marginBottom: 'var(--spacing-4)',
            textAlign: 'center'
          }}>
            Info Context
          </h3>
          <div style={{
            backgroundColor: 'var(--gray-50)',
            padding: 'var(--spacing-4)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--gray-200)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: 'var(--spacing-2)'
            }}>
              <span style={{ fontWeight: '600', color: 'var(--gray-700)' }}>Name:</span>
              <span style={{ color: 'var(--gray-900)' }}>{info.name}</span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: 'var(--spacing-2)'
            }}>
              <span style={{ fontWeight: '600', color: 'var(--gray-700)' }}>Age:</span>
              <span style={{ color: 'var(--gray-900)' }}>{info.age}</span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <span style={{ fontWeight: '600', color: 'var(--gray-700)' }}>Department:</span>
              <span style={{ color: 'var(--gray-900)' }}>{info.dep}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="card slide-up">
        <h3 style={{
          fontSize: 'var(--font-size-xl)',
          fontWeight: '600',
          color: 'var(--gray-900)',
          marginBottom: 'var(--spacing-4)',
          textAlign: 'center'
        }}>
          🔄 Context Comparison
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'var(--spacing-4)',
          marginBottom: 'var(--spacing-4)'
        }}>
          <div style={{
            padding: 'var(--spacing-3)',
            backgroundColor: 'var(--primary-color)',
            color: 'var(--white)',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center'
          }}>
            <div style={{ fontWeight: '600', marginBottom: 'var(--spacing-1)' }}>
              User Context
            </div>
            <div style={{ fontSize: 'var(--font-size-sm)' }}>
              {user.name} - {user.dept}
            </div>
          </div>
          <div style={{
            padding: 'var(--spacing-3)',
            backgroundColor: 'var(--accent-color)',
            color: 'var(--white)',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center'
          }}>
            <div style={{ fontWeight: '600', marginBottom: 'var(--spacing-1)' }}>
              Info Context
            </div>
            <div style={{ fontSize: 'var(--font-size-sm)' }}>
              {info.name} - {info.dep}
            </div>
          </div>
        </div>
        <p style={{
          fontSize: 'var(--font-size-sm)',
          color: 'var(--gray-600)',
          textAlign: 'center',
          margin: 0
        }}>
          Both contexts provide different data structures and can be used independently throughout the app.
        </p>
      </div>
    </div>
  );
};

export default ContextDemo; 