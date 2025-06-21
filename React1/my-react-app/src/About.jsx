import Reducer from './hooks/Reducer';

const About = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section style={{
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
          About Our Company
        </h1>
        <p style={{
          fontSize: 'var(--font-size-xl)',
          color: 'var(--gray-600)',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          We are a passionate team of developers and designers dedicated to creating exceptional digital experiences that drive business growth and user satisfaction.
        </p>
      </section>

      {/* Mission & Vision */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'var(--spacing-8)',
        marginBottom: 'var(--spacing-12)'
      }}>
        <div className="card slide-up">
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: 'var(--primary-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 'var(--spacing-4)'
          }}>
            <span style={{ fontSize: 'var(--font-size-xl)', color: 'var(--white)' }}>🎯</span>
          </div>
          <h3 style={{
            fontSize: 'var(--font-size-2xl)',
            fontWeight: '600',
            color: 'var(--gray-900)',
            marginBottom: 'var(--spacing-3)'
          }}>
            Our Mission
          </h3>
          <p style={{
            fontSize: 'var(--font-size-base)',
            color: 'var(--gray-600)',
            lineHeight: '1.6'
          }}>
            To empower businesses with innovative technology solutions that enhance productivity, improve user experiences, and drive sustainable growth in the digital landscape.
          </p>
        </div>

        <div className="card slide-up">
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: 'var(--accent-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 'var(--spacing-4)'
          }}>
            <span style={{ fontSize: 'var(--font-size-xl)', color: 'var(--white)' }}>🔮</span>
          </div>
          <h3 style={{
            fontSize: 'var(--font-size-2xl)',
            fontWeight: '600',
            color: 'var(--gray-900)',
            marginBottom: 'var(--spacing-3)'
          }}>
            Our Vision
          </h3>
          <p style={{
            fontSize: 'var(--font-size-base)',
            color: 'var(--gray-600)',
            lineHeight: '1.6'
          }}>
            To be the leading technology partner for businesses worldwide, known for delivering cutting-edge solutions that transform ideas into powerful digital realities.
          </p>
        </div>
      </div>

      {/* useReducer Demo Section */}
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
          🔄 useReducer Hook Demo
        </h2>
        <p style={{
          fontSize: 'var(--font-size-lg)',
          color: 'var(--gray-600)',
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto var(--spacing-8)',
          lineHeight: '1.6'
        }}>
          Demonstrating state management with useReducer hook for complex state logic.
        </p>
        
        <div style={{
          maxWidth: '400px',
          margin: '0 auto'
        }}>
          <Reducer />
        </div>
      </section>

      {/* Values */}
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
          Our Core Values
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--spacing-6)'
        }}>
          {[
            { icon: '💡', title: 'Innovation', desc: 'Constantly pushing boundaries and exploring new technologies' },
            { icon: '🤝', title: 'Collaboration', desc: 'Working together to achieve exceptional results' },
            { icon: '⚡', title: 'Excellence', desc: 'Delivering the highest quality in everything we do' },
            { icon: '🎯', title: 'Focus', desc: 'Staying committed to our goals and client success' }
          ].map((value, index) => (
            <div key={index} style={{
              textAlign: 'center',
              padding: 'var(--spacing-4)'
            }}>
              <div style={{
                fontSize: 'var(--font-size-3xl)',
                marginBottom: 'var(--spacing-3)'
              }}>
                {value.icon}
              </div>
              <h4 style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: '600',
                color: 'var(--gray-900)',
                marginBottom: 'var(--spacing-2)'
              }}>
                {value.title}
              </h4>
              <p style={{
                fontSize: 'var(--font-size-sm)',
                color: 'var(--gray-600)',
                lineHeight: '1.5'
              }}>
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 style={{
          fontSize: 'var(--font-size-3xl)',
          fontWeight: '600',
          color: 'var(--gray-900)',
          textAlign: 'center',
          marginBottom: 'var(--spacing-8)'
        }}>
          Meet Our Team
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'var(--spacing-6)'
        }}>
          {[
            { name: 'Ragul Kumar', role: 'Lead Developer', avatar: 'R' },
            { name: 'Sarah Johnson', role: 'UI/UX Designer', avatar: 'S' },
            { name: 'Mike Chen', role: 'Backend Engineer', avatar: 'M' }
          ].map((member, index) => (
            <div key={index} className="card slide-up">
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: 'var(--primary-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--spacing-4)',
                fontSize: 'var(--font-size-2xl)',
                color: 'var(--white)',
                fontWeight: '600'
              }}>
                {member.avatar}
              </div>
              <h4 style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: '600',
                color: 'var(--gray-900)',
                textAlign: 'center',
                marginBottom: 'var(--spacing-2)'
              }}>
                {member.name}
              </h4>
              <p style={{
                fontSize: 'var(--font-size-base)',
                color: 'var(--gray-600)',
                textAlign: 'center',
                marginBottom: 'var(--spacing-3)'
              }}>
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
