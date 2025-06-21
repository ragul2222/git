const Skills = ({ skill }) => {
  const skillIcons = {
    'React': '⚛️',
    'Node': '🟢',
    'Express': '🚀',
    'MongoDB': '🍃',
    'JavaScript': '📜',
    'TypeScript': '📘',
    'Python': '🐍',
    'Java': '☕',
    'CSS': '🎨',
    'HTML': '🌐'
  };

  return (
    <div>
      <h2 style={{
        fontSize: 'var(--font-size-2xl)',
        fontWeight: '600',
        color: 'var(--gray-900)',
        marginBottom: 'var(--spacing-6)',
        textAlign: 'center'
      }}>
        🛠️ Technical Skills
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
        gap: 'var(--spacing-3)'
      }}>
        {skill.map((s, index) => (
          <div
            key={index}
            style={{
              padding: 'var(--spacing-3)',
              backgroundColor: 'var(--white)',
              border: '1px solid var(--gray-200)',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center',
              transition: 'all var(--transition-fast)',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-sm)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = 'var(--shadow-md)';
              e.target.style.borderColor = 'var(--primary-color)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'var(--shadow-sm)';
              e.target.style.borderColor = 'var(--gray-200)';
            }}
          >
            <div style={{
              fontSize: 'var(--font-size-2xl)',
              marginBottom: 'var(--spacing-2)'
            }}>
              {skillIcons[s] || '💻'}
            </div>
            <div style={{
              fontSize: 'var(--font-size-sm)',
              fontWeight: '500',
              color: 'var(--gray-700)'
            }}>
              {s}
            </div>
          </div>
        ))}
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
          margin: 0
        }}>
          <strong>{skill.length}</strong> technologies mastered and ready to build amazing solutions!
        </p>
      </div>
    </div>
  );
};

export default Skills;
