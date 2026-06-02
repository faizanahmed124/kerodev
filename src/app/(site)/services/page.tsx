import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Kerodevs - Web Development Agency",
  description:
    "Explore our professional services including Web Development, Mobile Apps, Digital Marketing, Customizations, and E-Commerce solutions.",
};

const serviceCategories = [
  {
    icon: "💻",
    tag: "Development",
    title: "Our Expertise",
    color: "#1d4ed8",
    bg: "#eff6ff",
    services: [
      { name: "Custom Software Development", desc: "Tailored software solutions built from scratch to fit your unique business needs." },
      { name: "Mobile App Development", desc: "Cross-platform iOS and Android apps using React Native and Flutter." },
      { name: "Web App Development", desc: "Modern, scalable web applications with cutting-edge technologies." },
      { name: "AI & ML Development", desc: "Intelligent systems and machine learning models for automation and insights." },
      { name: "Cloud & DevOps", desc: "Cloud infrastructure setup, CI/CD pipelines, and DevOps best practices." },
      { name: "QA And Testing", desc: "Comprehensive quality assurance to ensure bug-free, reliable software." },
    ],
  },
  {
    icon: "📣",
    tag: "Marketing",
    title: "Digital Marketing",
    color: "#0369a1",
    bg: "#f0f9ff",
    services: [
      { name: "SEO", desc: "Boost your search rankings and drive organic traffic to your website." },
      { name: "PPC", desc: "Pay-per-click campaigns that deliver measurable ROI across all platforms." },
      { name: "Social Media Management", desc: "Strategic social media presence to grow your brand and engage your audience." },
      { name: "Email Campaigns", desc: "Targeted email marketing that converts leads into loyal customers." },
      { name: "WordPress Website Development", desc: "Professional WordPress websites with custom themes and plugins." },
      { name: "UI/UX And Graphics Designing", desc: "Beautiful designs that captivate users and strengthen your brand identity." },
    ],
  },
  {
    icon: "⚙️",
    tag: "Customizations",
    title: "Customizations",
    color: "#7c3aed",
    bg: "#f5f3ff",
    services: [
      {
  name: "ERPNext Customization",
  desc: "Custom ERPNext modules, workflows, and integrations tailored to your exact business processes."
},
{
  name: "ERPNext Implementation",
  desc: "End-to-end ERPNext setup, configuration, data migration, and user training for smooth go-live."
},
{
  name: "ERPNext Integration",
  desc: "Connect ERPNext with payment gateways, CRMs, e-commerce platforms, and third-party APIs."
},
{
  name: "ERPNext Support & Maintenance",
  desc: "Proactive bug fixes, upgrades, and performance optimization to keep your system running smoothly."
},
    ],
  },
  {
    icon: "🛒",
    tag: "E-Commerce",
    title: "E-Commerce",
    color: "#0f766e",
    bg: "#f0fdfa",
    services: [
      { name: "Shopify", desc: "Full-featured Shopify stores with custom themes, apps, and integrations." },
      { name: "WooCommerce", desc: "Powerful WooCommerce stores built on WordPress for complete flexibility." },
      { name: "Magento Solution", desc: "Enterprise-grade Magento stores for large-scale e-commerce operations." },
    ],
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "We understand your goals, audience, and requirements." },
  { step: "02", title: "Planning", desc: "We create a detailed roadmap and technical architecture." },
  { step: "03", title: "Design", desc: "We design beautiful, user-focused interfaces." },
  { step: "04", title: "Development", desc: "We build your product with clean, maintainable code." },
  { step: "05", title: "Testing", desc: "We ensure quality through rigorous testing." },
  { step: "06", title: "Launch", desc: "We deploy and monitor your product post-launch." },
];

export default function ServicesPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;900&display=swap');
        .services-page * { font-family: 'Outfit', sans-serif; }
        .category-card {
          background: #fff;
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 2rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .category-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(29,78,216,0.08);
          border-color: rgba(29,78,216,0.25);
        }
        .service-item {
          padding: 1rem;
          border-radius: 12px;
          border: 1px solid #f1f5f9;
          background: #f8fafc;
          transition: all 0.2s ease;
        }
        .service-item:hover {
          background: #fff;
          border-color: #e2e8f0;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
        }
        .process-card {
          background: #fff;
          border: 1.5px solid #e2e8f0;
          border-radius: 16px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }
        .process-card:hover {
          border-color: #1d4ed8;
          box-shadow: 0 8px 30px rgba(29,78,216,0.08);
        }
        .cta-link {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .cta-link:hover {
          transform: scale(1.04);
          box-shadow: 0 8px 30px rgba(255,255,255,0.3);
        }
      `}</style>

      <main className="services-page" style={{ background: "#f8fafc", minHeight: "100vh", paddingTop: "80px" }}>

        {/* Hero */}
        <section style={{ background: "#fff", padding: "5rem 0 4rem", borderBottom: "1px solid #e2e8f0" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
            <span style={{
              display: "inline-block", marginBottom: "1rem",
              padding: "6px 18px", borderRadius: "999px", fontSize: "12px",
              fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "2px",
              background: "rgba(29,78,216,0.08)", color: "#1c398e",
              border: "1px solid rgba(29,78,216,0.2)"
            }}>What We Offer</span>

            <h1 style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 500,
              color: "#1c398e", lineHeight: 1.15, marginBottom: "1.5rem",
              letterSpacing: "-0.5px"
            }}>
              Our <span style={{ color: "#1c398e" }}>Services</span>
            </h1>

            <div style={{ width: "60px", height: "4px", background: "linear-gradient(90deg,#1d4ed8,#38bdf8)", borderRadius: "99px", margin: "0 auto 1.5rem" }} />

            <p style={{ fontSize: "1.1rem", color: "#475569", maxWidth: "600px", margin: "0 auto", lineHeight: 1.8 }}>
              We deliver end-to-end digital solutions — from idea to launch. Our team specializes in building products that are fast, beautiful, and scalable.
            </p>
          </div>
        </section>

        {/* Service Categories */}
        <section style={{ padding: "5rem 0" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "3rem" }}>
              {serviceCategories.map((category, i) => (
                <div key={i} className="category-card">
                  {/* Category Header */}
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "2rem", paddingBottom: "1.5rem", borderBottom: "1px solid #f1f5f9" }}>
                    <div style={{
                      width: "56px", height: "56px", borderRadius: "16px",
                      background: category.bg, display: "flex",
                      alignItems: "center", justifyContent: "center", fontSize: "28px",
                      flexShrink: 0
                    }}>
                      {category.icon}
                    </div>
                    <div>
                      <span style={{
                        fontSize: "11px", fontWeight: 700, textTransform: "uppercase" as const,
                        letterSpacing: "1.5px", color: category.color, display: "block", marginBottom: "2px"
                      }}>{category.tag}</span>
                      <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
                        {category.title}
                      </h2>
                    </div>
                  </div>

                  {/* Services Grid */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
                    {category.services.map((service, j) => (
                      <div key={j} className="service-item">
                        <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                          <span style={{
                            width: "20px", height: "20px", borderRadius: "50%",
                            background: category.bg, color: category.color,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: "11px", fontWeight: 800, flexShrink: 0, marginTop: "2px"
                          }}>✓</span>
                          <div>
                            <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0f172a", margin: "0 0 4px" }}>
                              {service.name}
                            </h3>
                            <p style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                              {service.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section style={{ padding: "5rem 0", background: "#fff", borderTop: "1px solid #e2e8f0" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <span style={{
                display: "inline-block", marginBottom: "1rem",
                padding: "6px 18px", borderRadius: "999px", fontSize: "12px",
                fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "2px",
                background: "rgba(29,78,216,0.08)", color: "#1c398e",
                border: "1px solid rgba(29,78,216,0.2)"
              }}>How We Work</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 500, color: "#1c398e" }}>
                Our <span style={{ color: "#1c398e" }}>Process</span>
              </h2>
              <div style={{ width: "60px", height: "4px", background: "linear-gradient(90deg,#1d4ed8,#38bdf8)", borderRadius: "99px", margin: "1rem auto 0" }} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {process.map((p, i) => (
                <div key={i} className="process-card">
                  <span style={{
                    fontSize: "2.5rem", fontWeight: 900, color: "rgba(29,78,216,0.12)",
                    display: "block", lineHeight: 1, marginBottom: "0.75rem"
                  }}>{p.step}</span>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.5rem" }}>{p.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "5rem 0", background: "linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 100%)" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>
              Ready to Start Your Project?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              Let&apos;s build something amazing together. Get in touch and we&apos;ll get back to you within 24 hours.
            </p>
            <a href="/#contact" className="cta-link" style={{
              display: "inline-block", padding: "14px 36px", borderRadius: "999px",
              background: "#fff", color: "#1d4ed8", fontWeight: 700, fontSize: "0.95rem",
              textDecoration: "none", letterSpacing: "0.5px",
            }}>
              Get In Touch →
            </a>
          </div>
        </section>

      </main>
    </>
  );
}