import { useReducer } from 'react';

// Step 1: Reducer function
const reducerFunction = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

// Step 2: Initial value
const initialValue = { count: 0 };

// Step 3: Component
const Reducer = () => {
  const [state, dispatch] = useReducer(reducerFunction, initialValue);

  return (
    <div className="card slide-up">
      <h2 style={{
        fontSize: 'var(--font-size-2xl)',
        fontWeight: '600',
        color: 'var(--gray-900)',
        marginBottom: 'var(--spacing-6)',
        textAlign: 'center'
      }}>
        🔄 useReducer Example
      </h2>
      
      <div style={{
        textAlign: 'center',
        marginBottom: 'var(--spacing-6)'
      }}>
        <div style={{
          fontSize: 'var(--font-size-4xl)',
          fontWeight: '700',
          color: 'var(--primary-color)',
          marginBottom: 'var(--spacing-4)'
        }}>
          {state.count}
        </div>
        <p style={{
          fontSize: 'var(--font-size-lg)',
          color: 'var(--gray-600)',
          marginBottom: 'var(--spacing-6)'
        }}>
          Current Count
        </p>
      </div>

      <div style={{
        display: 'flex',
        gap: 'var(--spacing-3)',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <button 
          onClick={() => dispatch({ type: 'INCREMENT' })}
          className="btn btn-primary"
          style={{ minWidth: '120px' }}
        >
          ➕ Increment
        </button>
        <button 
          onClick={() => dispatch({ type: 'DECREMENT' })}
          className="btn btn-secondary"
          style={{ minWidth: '120px' }}
        >
          ➖ Decrement
        </button>
        <button 
          onClick={() => dispatch({ type: 'RESET' })}
          className="btn btn-secondary"
          style={{ minWidth: '120px' }}
        >
          🔄 Reset
        </button>
      </div>

      <div style={{
        marginTop: 'var(--spacing-6)',
        padding: 'var(--spacing-4)',
        backgroundColor: 'var(--gray-50)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--gray-200)'
      }}>
        <p style={{
          fontSize: 'var(--font-size-sm)',
          color: 'var(--gray-600)',
          textAlign: 'center',
          margin: 0,
          lineHeight: '1.5'
        }}>
          <strong>useReducer</strong> is perfect for managing complex state logic with multiple sub-values or when the next state depends on the previous one.
        </p>
      </div>
    </div>
  );
};

export default Reducer; 