import re

# Read the current file
with open('/tmp/cc-agent/60283001/project/app/home/page.tsx', 'r') as f:
    content = f.read()

# Find the services section boundaries  
services_start = content.find('      <section id="services"')
results_start = content.find('      {/* Results Section - Blue Silk Gradient Background */}')

# Extract before and after
before = content[:services_start]
after = content[results_start:]

# The new services section
new_services = '''      {/* What We Do Section - Orbital Layout with Expandable Modals */}
      <section id="services" className="pt-20 pb-24 px-6 bg-[#f0f4f8] fade-in-section">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[2.75rem] font-bold text-[#1e3a5f] mb-3" style={{ fontFamily: 'Merriweather, serif', fontWeight: 700 }}>
              What We Do
            </h2>
            <p className="text-[1rem] text-[#6B7280]" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
              Core services designed to diagnose, fix, and optimize your federal sales posture
            </p>
          </div>

          {/* Orbital Layout Container */}
          <div className="relative w-full mx-auto" style={{ height: '900px', maxWidth: '1200px' }}>

            {/* SVG Connection Lines Layer */}
            <svg
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              viewBox="0 0 1200 900"
              preserveAspectRatio="xMidYMid meet"
              style={{ zIndex: 1 }}
            >
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: 'rgba(201, 162, 39, 0.1)' }} />
                  <stop offset="50%" style={{ stopColor: 'rgba(201, 162, 39, 0.4)' }} />
                  <stop offset="100%" style={{ stopColor: 'rgba(201, 162, 39, 0.1)' }} />
                </linearGradient>

                <filter id="pulseGlow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="4" result="blur"/>
                  <feFlood floodColor="#c9a227" floodOpacity="0.6"/>
                  <feComposite in2="blur" operator="in"/>
                  <feMerge>
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>

                <filter id="pulseGlowNavy" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="3" result="blur"/>
                  <feFlood floodColor="#2c5282" floodOpacity="0.5"/>
                  <feComposite in2="blur" operator="in"/>
                  <feMerge>
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>

                <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{ stopColor: 'rgba(201, 162, 39, 0.15)' }} />
                  <stop offset="100%" style={{ stopColor: 'transparent' }} />
                </radialGradient>
              </defs>

              <circle cx="600" cy="450" r="140" fill="url(#hubGlow)" opacity="0.5">
                <animate attributeName="r" values="140;155;140" dur="4s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.5;0.7;0.5" dur="4s" repeatCount="indefinite"/>
              </circle>

              <circle cx="600" cy="450" r="220" fill="none" stroke="rgba(30, 58, 95, 0.05)" strokeWidth="1" />
              <circle cx="600" cy="450" r="180" fill="none" stroke="rgba(201, 162, 39, 0.1)" strokeWidth="1.5" strokeDasharray="4 8">
                <animateTransform attributeName="transform" type="rotate" from="0 600 450" to="360 600 450" dur="60s" repeatCount="indefinite"/>
              </circle>
              <circle cx="600" cy="450" r="150" fill="none" stroke="rgba(30, 58, 95, 0.08)" strokeWidth="1" strokeDasharray="2 6">
                <animateTransform attributeName="transform" type="rotate" from="0 600 450" to="-360 600 450" dur="45s" repeatCount="indefinite"/>
              </circle>

              <path id="path1" d="M 180 100 Q 350 250 600 400" fill="none" stroke="rgba(30, 58, 95, 0.08)" strokeWidth="2" strokeLinecap="round"/>
              <path d="M 180 100 Q 350 250 600 400" fill="none" stroke="url(#goldGradient)" strokeWidth="2" strokeDasharray="6 14" strokeLinecap="round">
                <animate attributeName="stroke-dashoffset" from="0" to="-200" dur="15s" repeatCount="indefinite"/>
              </path>

              <path id="path2" d="M 1020 100 Q 850 250 600 400" fill="none" stroke="rgba(30, 58, 95, 0.08)" strokeWidth="2" strokeLinecap="round"/>
              <path d="M 1020 100 Q 850 250 600 400" fill="none" stroke="url(#goldGradient)" strokeWidth="2" strokeDasharray="6 14" strokeLinecap="round">
                <animate attributeName="stroke-dashoffset" from="-40" to="-240" dur="15s" repeatCount="indefinite"/>
              </path>

              <path id="path3" d="M 20 450 Q 280 450 520 450" fill="none" stroke="rgba(30, 58, 95, 0.08)" strokeWidth="2" strokeLinecap="round"/>
              <path d="M 20 450 Q 280 450 520 450" fill="none" stroke="url(#goldGradient)" strokeWidth="2" strokeDasharray="6 14" strokeLinecap="round">
                <animate attributeName="stroke-dashoffset" from="-80" to="-280" dur="15s" repeatCount="indefinite"/>
              </path>

              <path id="path4" d="M 1180 450 Q 920 450 680 450" fill="none" stroke="rgba(30, 58, 95, 0.08)" strokeWidth="2" strokeLinecap="round"/>
              <path d="M 1180 450 Q 920 450 680 450" fill="none" stroke="url(#goldGradient)" strokeWidth="2" strokeDasharray="6 14" strokeLinecap="round">
                <animate attributeName="stroke-dashoffset" from="-120" to="-320" dur="15s" repeatCount="indefinite"/>
              </path>

              <path id="path5" d="M 180 800 Q 350 650 600 500" fill="none" stroke="rgba(30, 58, 95, 0.08)" strokeWidth="2" strokeLinecap="round"/>
              <path d="M 180 800 Q 350 650 600 500" fill="none" stroke="url(#goldGradient)" strokeWidth="2" strokeDasharray="6 14" strokeLinecap="round">
                <animate attributeName="stroke-dashoffset" from="-160" to="-360" dur="15s" repeatCount="indefinite"/>
              </path>

              <path id="path6" d="M 1020 800 Q 850 650 600 500" fill="none" stroke="rgba(30, 58, 95, 0.08)" strokeWidth="2" strokeLinecap="round"/>
              <path d="M 1020 800 Q 850 650 600 500" fill="none" stroke="url(#goldGradient)" strokeWidth="2" strokeDasharray="6 14" strokeLinecap="round">
                <animate attributeName="stroke-dashoffset" from="-200" to="-400" dur="15s" repeatCount="indefinite"/>
              </path>

              {/* Pulse Dots */}
              <circle r="7" fill="#c9a227" filter="url(#pulseGlow)">
                <animateMotion dur="2.8s" repeatCount="indefinite"><mpath href="#path1"/></animateMotion>
                <animate attributeName="opacity" values="0;1;1;0" dur="2.8s" repeatCount="indefinite"/>
              </circle>
              <circle r="7" fill="#c9a227" filter="url(#pulseGlow)">
                <animateMotion dur="3.2s" repeatCount="indefinite" begin="0.6s"><mpath href="#path2"/></animateMotion>
                <animate attributeName="opacity" values="0;1;1;0" dur="3.2s" repeatCount="indefinite" begin="0.6s"/>
              </circle>
              <circle r="7" fill="#c9a227" filter="url(#pulseGlow)">
                <animateMotion dur="2.4s" repeatCount="indefinite" begin="1.2s"><mpath href="#path3"/></animateMotion>
                <animate attributeName="opacity" values="0;1;1;0" dur="2.4s" repeatCount="indefinite" begin="1.2s"/>
              </circle>
              <circle r="7" fill="#c9a227" filter="url(#pulseGlow)">
                <animateMotion dur="2.4s" repeatCount="indefinite" begin="1.8s"><mpath href="#path4"/></animateMotion>
                <animate attributeName="opacity" values="0;1;1;0" dur="2.4s" repeatCount="indefinite" begin="1.8s"/>
              </circle>
              <circle r="7" fill="#c9a227" filter="url(#pulseGlow)">
                <animateMotion dur="2.8s" repeatCount="indefinite" begin="2.4s"><mpath href="#path5"/></animateMotion>
                <animate attributeName="opacity" values="0;1;1;0" dur="2.8s" repeatCount="indefinite" begin="2.4s"/>
              </circle>
              <circle r="7" fill="#c9a227" filter="url(#pulseGlow)">
                <animateMotion dur="3.2s" repeatCount="indefinite" begin="3s"><mpath href="#path6"/></animateMotion>
                <animate attributeName="opacity" values="0;1;1;0" dur="3.2s" repeatCount="indefinite" begin="3s"/>
              </circle>

              <circle r="5" fill="#2c5282" filter="url(#pulseGlowNavy)">
                <animateMotion dur="2.8s" repeatCount="indefinite" begin="1.4s"><mpath href="#path1"/></animateMotion>
                <animate attributeName="opacity" values="0;0.8;0.8;0" dur="2.8s" repeatCount="indefinite" begin="1.4s"/>
              </circle>
              <circle r="5" fill="#2c5282" filter="url(#pulseGlowNavy)">
                <animateMotion dur="3.2s" repeatCount="indefinite" begin="2.2s"><mpath href="#path2"/></animateMotion>
                <animate attributeName="opacity" values="0;0.8;0.8;0" dur="3.2s" repeatCount="indefinite" begin="2.2s"/>
              </circle>
              <circle r="5" fill="#2c5282" filter="url(#pulseGlowNavy)">
                <animateMotion dur="2.4s" repeatCount="indefinite"><mpath href="#path3"/></animateMotion>
                <animate attributeName="opacity" values="0;0.8;0.8;0" dur="2.4s" repeatCount="indefinite"/>
              </circle>
              <circle r="5" fill="#2c5282" filter="url(#pulseGlowNavy)">
                <animateMotion dur="2.4s" repeatCount="indefinite" begin="0.6s"><mpath href="#path4"/></animateMotion>
                <animate attributeName="opacity" values="0;0.8;0.8;0" dur="2.4s" repeatCount="indefinite" begin="0.6s"/>
              </circle>
              <circle r="5" fill="#2c5282" filter="url(#pulseGlowNavy)">
                <animateMotion dur="2.8s" repeatCount="indefinite" begin="0.8s"><mpath href="#path5"/></animateMotion>
                <animate attributeName="opacity" values="0;0.8;0.8;0" dur="2.8s" repeatCount="indefinite" begin="0.8s"/>
              </circle>
              <circle r="5" fill="#2c5282" filter="url(#pulseGlowNavy)">
                <animateMotion dur="3.2s" repeatCount="indefinite" begin="1.5s"><mpath href="#path6"/></animateMotion>
                <animate attributeName="opacity" values="0;0.8;0.8;0" dur="3.2s" repeatCount="indefinite" begin="1.5s"/>
              </circle>
            </svg>

            {/* Center Logo Hub */}
            <div
              className="absolute"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 20,
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
              }}
            >
              <div
                className="absolute"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '320px',
                  height: '320px',
                  background: 'radial-gradient(circle, rgba(201, 162, 39, 0.12) 0%, transparent 70%)',
                  animation: 'logo-breathe 4s ease-in-out infinite',
                  zIndex: -1
                }}
              />

              <div
                className="relative"
                style={{
                  width: '260px',
                  height: '260px',
                  background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                  borderRadius: '28px',
                  border: '2px solid rgba(30, 58, 95, 0.06)',
                  boxShadow: '0 10px 50px rgba(30, 58, 95, 0.12), 0 2px 10px rgba(30, 58, 95, 0.06), inset 0 2px 0 rgba(255, 255, 255, 0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div style={{ position: 'absolute', top: '16px', left: '16px', width: '28px', height: '28px', border: '2.5px solid #c9a227', borderRight: 'none', borderBottom: 'none', borderRadius: '8px 0 0 0', opacity: 0.6 }} />
                <div style={{ position: 'absolute', bottom: '16px', right: '16px', width: '28px', height: '28px', border: '2.5px solid #c9a227', borderLeft: 'none', borderTop: 'none', borderRadius: '0 0 8px 0', opacity: 0.6 }} />

                <img src="/Civic Strategy Partners Minus LLC.png" alt="Civic Strategy Partners" style={{ width: '180px', height: 'auto', objectFit: 'contain' }} />
              </div>
            </div>

            {/* Service Cards - CLICKABLE */}
            {[
              { position: { top: '20px', left: '10px' }, service: services[0] },
              { position: { top: '20px', right: '10px' }, service: services[1] },
              { position: { top: '50%', left: '0', transform: 'translateY(-50%)' }, service: services[2] },
              { position: { top: '50%', right: '0', transform: 'translateY(-50%)' }, service: services[3] },
              { position: { bottom: '20px', left: '10px' }, service: services[4] },
              { position: { bottom: '20px', right: '10px' }, service: services[5] }
            ].map(({ position, service }, idx) => (
              <div
                key={service.id}
                className="absolute cursor-pointer"
                style={{
                  ...position,
                  width: '250px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  padding: '26px 22px',
                  border: '1px solid rgba(30, 58, 95, 0.06)',
                  boxShadow: '0 4px 24px rgba(30, 58, 95, 0.08)',
                  zIndex: 10,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onClick={() => setExpandedService(service.id)}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  const isMiddle = position.transform === 'translateY(-50%)';
                  el.style.transform = isMiddle ? 'translateY(-50%) translateY(-10px) scale(1.03)' : 'translateY(-10px) scale(1.03)';
                  el.style.boxShadow = '0 20px 60px rgba(30, 58, 95, 0.15)';
                  el.style.border = '2px solid transparent';
                  el.style.backgroundImage = 'linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), linear-gradient(135deg, #1e3a5f, #c9a227)';
                  el.style.backgroundOrigin = 'border-box';
                  el.style.backgroundClip = 'padding-box, border-box';
                  const cta = el.querySelector('[data-cta]');
                  if (cta) (cta as HTMLElement).style.color = '#c9a227';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  const isMiddle = position.transform === 'translateY(-50%)';
                  el.style.transform = isMiddle ? 'translateY(-50%)' : '';
                  el.style.boxShadow = '0 4px 24px rgba(30, 58, 95, 0.08)';
                  el.style.border = '1px solid rgba(30, 58, 95, 0.06)';
                  el.style.backgroundImage = '';
                  const cta = el.querySelector('[data-cta]');
                  if (cta) (cta as HTMLElement).style.color = '#1e3a5f';
                }}
              >
                <h3 style={{
                  fontFamily: 'Merriweather, serif',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#1e3a5f',
                  marginBottom: '12px',
                  lineHeight: 1.3
                }}>
                  {service.title}
                </h3>
                <p style={{
                  fontFamily: 'Source Sans Pro, sans-serif',
                  fontSize: '0.875rem',
                  color: '#4a5568',
                  lineHeight: 1.6,
                  marginBottom: '16px'
                }}>
                  {service.teaser}
                </p>
                <div data-cta style={{
                  fontFamily: 'Source Sans Pro, sans-serif',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#1e3a5f',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'color 0.3s ease'
                }}>
                  Learn More <span>→</span>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Modal Overlay - Shows when card is clicked */}
        {expandedService !== null && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 z-50"
            onClick={() => setExpandedService(null)}
            style={{
              animation: 'fadeIn 0.3s ease-out'
            }}
          >
            <div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
              style={{
                animation: 'slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 24px 80px rgba(0, 0, 0, 0.3)'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setExpandedService(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                style={{ zIndex: 10 }}
              >
                <span style={{ fontSize: '1.5rem', color: '#4a5568' }}>×</span>
              </button>

              {/* Modal Content */}
              <div className="p-10">
                {services.filter(s => s.id === expandedService).map(service => (
                  <div key={service.id}>
                    <h2 style={{
                      fontFamily: 'Merriweather, serif',
                      fontSize: '2.25rem',
                      fontWeight: 700,
                      color: '#1e3a5f',
                      marginBottom: '24px',
                      lineHeight: 1.2
                    }}>
                      {service.title}
                    </h2>

                    <div style={{
                      fontFamily: 'Source Sans Pro, sans-serif',
                      fontSize: '1.05rem',
                      color: '#374151',
                      lineHeight: 1.8,
                      whiteSpace: 'pre-line',
                      marginBottom: '32px'
                    }}>
                      {service.fullDescription}
                    </div>

                    <div style={{
                      padding: '24px',
                      background: 'linear-gradient(135deg, rgba(30, 58, 95, 0.05), rgba(201, 162, 39, 0.05))',
                      borderRadius: '16px',
                      borderLeft: '4px solid #c9a227'
                    }}>
                      <h3 style={{
                        fontFamily: 'Merriweather, serif',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: '#1e3a5f',
                        marginBottom: '16px'
                      }}>
                        Key Outcomes
                      </h3>
                      <ul style={{
                        fontFamily: 'Source Sans Pro, sans-serif',
                        fontSize: '1rem',
                        color: '#374151',
                        lineHeight: 1.8,
                        paddingLeft: '20px'
                      }}>
                        {service.outcomes.map((outcome, idx) => (
                          <li key={idx} style={{ marginBottom: '8px' }}>
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-200 flex justify-center">
                      <button
                        onClick={() => setExpandedService(null)}
                        style={{
                          fontFamily: 'Source Sans Pro, sans-serif',
                          fontSize: '1rem',
                          fontWeight: 600,
                          color: '#ffffff',
                          background: 'linear-gradient(135deg, #1e3a5f, #2c5282)',
                          padding: '14px 32px',
                          borderRadius: '12px',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 4px 12px rgba(30, 58, 95, 0.2)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 8px 20px rgba(30, 58, 95, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 4px 12px rgba(30, 58, 95, 0.2)';
                        }}
                      >
                        Contact Us About This Service
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes logo-breathe {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.5;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.15);
            opacity: 0.7;
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

'''

# Write the new combined file
new_content = before + new_services + after
with open('/tmp/cc-agent/60283001/project/app/home/page.tsx', 'w') as f:
    f.write(new_content)

print("Replacement complete!")
