const Welcome = (props) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        backgroundColor: 'var(--primary-color)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto var(--spacing-6)',
        boxShadow: 'var(--shadow-lg)'
      }}>
        <span style={{
          fontSize: 'var(--font-size-2xl)',
          color: 'var(--white)',
          fontWeight: '600'
        }}>
          {props.name.charAt(0)}
        </span>
      </div>
      
      <h2 style={{
        fontSize: 'var(--font-size-2xl)',
        fontWeight: '600',
        color: 'var(--gray-900)',
        marginBottom: 'var(--spacing-3)'
      }}>
        Welcome, {props.name}! 👋
      </h2>
      
      <p style={{
        fontSize: 'var(--font-size-base)',
        color: 'var(--gray-600)',
        marginBottom: 'var(--spacing-4)'
      }}>
        We're excited to have you here from {props.country}.
      </p>
      
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--spacing-2)',
        padding: 'var(--spacing-2) var(--spacing-4)',
        backgroundColor: 'var(--gray-100)',
        borderRadius: 'var(--radius-lg)',
        fontSize: 'var(--font-size-sm)',
        color: 'var(--gray-700)',
        fontWeight: '500'
      }}>
        <span>🌍</span>
        <span>From {props.country}</span>
      </div>
    </div>
  );
};

export default Welcome;
