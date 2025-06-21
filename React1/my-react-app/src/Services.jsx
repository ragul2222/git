const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React, Node.js, and MongoDB.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Security Implementation'],
      price: '$2,500+'
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['Cross-platform Development', 'Native Performance', 'App Store Optimization', 'Push Notifications'],
      price: '$3,500+'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces designed with user experience in mind.',
      features: ['Wireframing & Prototyping', 'User Research', 'Design Systems', 'Usability Testing'],
      price: '$1,800+'
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions for your applications.',
      features: ['AWS/Azure/GCP', 'CI/CD Pipelines', 'Monitoring & Logging', 'Auto-scaling'],
      price: '$1,200+'
    },
    {
      icon: '🔧',
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and technical support for your applications.',
      features: ['24/7 Monitoring', 'Regular Updates', 'Bug Fixes', 'Performance Optimization'],
      price: '$500/month'
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Data analysis and business intelligence solutions to drive informed decisions.',
      features: ['Data Visualization', 'Real-time Dashboards', 'Predictive Analytics', 'Custom Reports'],
      price: '$2,000+'
    }
  ];

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
          Our Services
        </h1>
        <p style={{
          fontSize: 'var(--font-size-xl)',
          color: 'var(--gray-600)',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          We offer comprehensive technology solutions to help your business thrive in the digital world. From web development to cloud solutions, we've got you covered.
        </p>
      </section>

      {/* Services Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: 'var(--spacing-8)',
        marginBottom: 'var(--spacing-12)'
      }}>
        {services.map((service, index) => (
          <div key={index} className="card slide-up" style={{
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Service Icon */}
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: 'var(--radius-xl)',
              backgroundColor: 'var(--primary-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 'var(--spacing-6)',
              fontSize: 'var(--font-size-3xl)',
              color: 'var(--white)'
            }}>
              {service.icon}
            </div>

            {/* Service Title */}
            <h3 style={{
              fontSize: 'var(--font-size-2xl)',
              fontWeight: '600',
              color: 'var(--gray-900)',
              marginBottom: 'var(--spacing-3)'
            }}>
              {service.title}
            </h3>

            {/* Service Description */}
            <p style={{
              fontSize: 'var(--font-size-base)',
              color: 'var(--gray-600)',
              lineHeight: '1.6',
              marginBottom: 'var(--spacing-6)'
            }}>
              {service.description}
            </p>

            {/* Features List */}
            <div style={{ marginBottom: 'var(--spacing-6)' }}>
              <h4 style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: '600',
                color: 'var(--gray-800)',
                marginBottom: 'var(--spacing-3)'
              }}>
                What's Included:
              </h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 'var(--spacing-2)',
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--gray-600)'
                  }}>
                    <span style={{
                      color: 'var(--success-color)',
                      marginRight: 'var(--spacing-2)',
                      fontSize: 'var(--font-size-base)'
                    }}>
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Price */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: 'var(--spacing-4)',
              borderTop: '1px solid var(--gray-200)'
            }}>
              <div>
                <span style={{
                  fontSize: 'var(--font-size-2xl)',
                  fontWeight: '700',
                  color: 'var(--primary-color)'
                }}>
                  {service.price}
                </span>
                {service.price.includes('/month') && (
                  <span style={{
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--gray-500)',
                    marginLeft: 'var(--spacing-1)'
                  }}>
                    per month
                  </span>
                )}
              </div>
              <button className="btn btn-primary">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <section style={{
        backgroundColor: 'var(--white)',
        borderRadius: 'var(--radius-2xl)',
        padding: 'var(--spacing-12)',
        textAlign: 'center',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid var(--gray-200)'
      }}>
        <h2 style={{
          fontSize: 'var(--font-size-3xl)',
          fontWeight: '600',
          color: 'var(--gray-900)',
          marginBottom: 'var(--spacing-4)'
        }}>
          Need a Custom Solution?
        </h2>
        <p style={{
          fontSize: 'var(--font-size-lg)',
          color: 'var(--gray-600)',
          marginBottom: 'var(--spacing-6)',
          maxWidth: '600px',
          margin: '0 auto var(--spacing-6)'
        }}>
          We specialize in creating tailored solutions that perfectly fit your business needs. Let's discuss your project requirements.
        </p>
        <div style={{
          display: 'flex',
          gap: 'var(--spacing-4)',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button className="btn btn-primary">
            Schedule Consultation
          </button>
          <button className="btn btn-secondary">
            View Portfolio
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
