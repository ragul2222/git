import { useState, useEffect } from 'react';

const Effect = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  // Update document title and log mount
  useEffect(() => {
    console.log('Component mounted');
    document.title = `Clicked ${count} times`;

    return () => {
      console.log('Component unmounted or before next effect');
    };
  }, [count]);

  // Fetch user data on first render
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.error('Error fetching users:', err);
      });
  }, []); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => {
        console.error('Error fetching posts:', err);
      });
  }, []);

  return (
    <div className="fade-in">
      <div className="card slide-up" style={{ marginBottom: 'var(--spacing-8)' }}>
        <h2 style={{
          fontSize: 'var(--font-size-2xl)',
          fontWeight: '600',
          color: 'var(--gray-900)',
          marginBottom: 'var(--spacing-6)',
          textAlign: 'center'
        }}>
          🔄 useEffect Example
        </h2>

        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-6)' }}>
          <p style={{
            fontSize: 'var(--font-size-lg)',
            color: 'var(--gray-700)',
            marginBottom: 'var(--spacing-4)'
          }}>
            You clicked {count} times.
          </p>
          <button 
            onClick={() => setCount(prev => prev + 1)}
            className="btn btn-primary"
          >
            Click Me
          </button>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'var(--spacing-8)'
      }}>
        <div className="card slide-up">
          <h3 style={{
            fontSize: 'var(--font-size-xl)',
            fontWeight: '600',
            color: 'var(--gray-900)',
            marginBottom: 'var(--spacing-4)',
            textAlign: 'center'
          }}>
            👥 User List
          </h3>
          <div style={{
            maxHeight: '400px',
            overflowY: 'auto',
            padding: 'var(--spacing-2)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {users.map(user => (
                <li key={user.id} style={{
                  padding: 'var(--spacing-3)',
                  marginBottom: 'var(--spacing-2)',
                  backgroundColor: 'var(--gray-50)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--gray-200)'
                }}>
                  <div style={{
                    fontWeight: '600',
                    color: 'var(--gray-900)',
                    marginBottom: 'var(--spacing-1)'
                  }}>
                    {user.name}
                  </div>
                  <div style={{
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--gray-600)'
                  }}>
                    {user.email}
                  </div>
                </li>
              ))}
            </ul>
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
            📝 Posts List
          </h3>
          <div style={{
            maxHeight: '400px',
            overflowY: 'auto',
            padding: 'var(--spacing-2)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {posts.slice(0, 10).map((post) => (
                <li key={post.id} style={{
                  padding: 'var(--spacing-4)',
                  marginBottom: 'var(--spacing-3)',
                  backgroundColor: 'var(--gray-50)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--gray-200)'
                }}>
                  <h4 style={{
                    fontSize: 'var(--font-size-base)',
                    fontWeight: '600',
                    color: 'var(--gray-900)',
                    marginBottom: 'var(--spacing-2)'
                  }}>
                    {post.title}
                  </h4>
                  <p style={{
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--gray-600)',
                    lineHeight: '1.5'
                  }}>
                    {post.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Effect; 