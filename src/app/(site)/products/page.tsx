import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Kerodevs - Software Products",
  description:
    "Explore our software products built with modern technologies. Ready-to-use solutions for your business.",
};

const products = [
  {
    icon: "🩺",
    tag: "Health AI",
    title: "ClearMedAI",
    description:
      "An AI-powered platform that converts complex laboratory reports into simple language, highlights abnormal values, provides doctor visit urgency scores, tracks health trends, stores family reports, and enables easy WhatsApp sharing.",
    status: "Under Development",
    statusColor: "#f59e0b",
    statusBg: "#fef3c7",
    color: "#10b981",
    bg: "#ecfdf5",
    price: "Coming Soon",

    features: [
      "Lab Report Upload + OCR",
      "Plain Urdu & English Explanation",
      "Normal / Abnormal Highlights",
      "Doctor Visit Urgency Score",
      "Report History & Trend Tracking",
      "Nearby Specialist Finder",
      "Family Health Vault",
      "WhatsApp PDF Sharing",
    ],
  },

  {
    icon: "🕒",
    tag: "HR Tech",
    title: "Automated Attendance System",
    description:
      "A smart attendance management solution that automates employee check-in/check-out using biometric, QR code, or GPS verification with real-time reporting and payroll integration.",
    status: "Under Development",
    statusColor: "#f59e0b",
    statusBg: "#fef3c7",
    color: "#2563eb",
    bg: "#eff6ff",
    price: "Coming Soon",

    features: [
      "Real-time Attendance Tracking",
      "QR & Biometric Support",
      "GPS Location Verification",
      "Shift & Leave Management",
      "Payroll Integration",
      "Admin Dashboard",
      "Attendance Reports",
      "Employee Mobile App",
    ],
  },
];

const stats = [
  { number: "2", label: "Products in Development" },
  { number: "8+", label: "Core Features" },
  { number: "AI", label: "Powered Solutions" },
  { number: "24/7", label: "Innovation" },
];

export default function ProductsPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;900&display=swap');
        .products-page * { font-family: 'Outfit', sans-serif; }
        .product-card {
          background: #fff;
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 2rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(29,78,216,0.10);
          border-color: rgba(29,78,216,0.25);
        }
        .tech-badge {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 600;
          background: #f1f5f9;
          color: #475569;
          border: 1px solid #e2e8f0;
        }
        .stat-card {
          background: #fff;
          border: 1.5px solid rgba(56,189,248,0.25);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }
        .stat-card:hover {
          border-color: #1d4ed8;
          transform: translateY(-4px);
        }
        .cta-btn {
          display: inline-block;
          padding: 10px 24px;
          border-radius: 999px;
          font-size: 0.85rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s ease;
          cursor: pointer;
          border: none;
        }
      `}</style>

      <main className="products-page" style={{ background: "#f8fafc", minHeight: "100vh", paddingTop: "80px" }}>

        {/* Hero */}
        <section style={{ background: "#fff", padding: "5rem 0 4rem", borderBottom: "1px solid #e2e8f0" }}>
          <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
            <span style={{
              display: "inline-block", marginBottom: "1rem",
              padding: "6px 18px", borderRadius: "999px", fontSize: "12px",
              fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px",
              background: "rgba(29,78,216,0.08)", color: "#1d4ed8",
              border: "1px solid rgba(29,78,216,0.2)"
            }}>Software Products</span>

            <h1 style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800,
              color: "#0f172a", lineHeight: 1.15, marginBottom: "1.5rem",
              letterSpacing: "-0.5px"
            }}>
              Our <span style={{ color: "#1d4ed8" }}>Products</span>
            </h1>

            <div style={{ width: "60px", height: "4px", background: "linear-gradient(90deg,#1d4ed8,#38bdf8)", borderRadius: "99px", margin: "0 auto 1.5rem" }} />

            <p style={{ fontSize: "1.1rem", color: "#475569", maxWidth: "600px", margin: "0 auto", lineHeight: 1.8 }}>
              We build software products that solve real problems. Each product is crafted with care, built to scale, and designed to delight.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section style={{ padding: "4rem 0", background: "#f8fafc" }}>
          <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
              {stats.map((s, i) => (
                <div key={i} className="stat-card">
                  <p style={{ fontSize: "2.5rem", fontWeight: 900, color: "#1d4ed8", margin: "0 0 4px" }}>{s.number}</p>
                  <p style={{ fontSize: "0.9rem", color: "#64748b", margin: 0, fontWeight: 500 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section style={{ padding: "3rem 0 5rem" }}>
          <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "2rem" }}>
              {products.map((product, i) => (
                <div key={i} className="product-card">
                  {/* Header */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{
                        width: "52px", height: "52px", borderRadius: "14px",
                        background: product.bg, display: "flex",
                        alignItems: "center", justifyContent: "center", fontSize: "26px"
                      }}>
                        {product.icon}
                      </div>
                      <div>
                        <span style={{
                          fontSize: "11px", fontWeight: 700, textTransform: "uppercase",
                          letterSpacing: "1px", color: product.color, display: "block"
                        }}>{product.tag}</span>
                        <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>{product.title}</h2>
                      </div>
                    </div>
                    <span style={{
                      padding: "4px 10px", borderRadius: "999px", fontSize: "11px",
                      fontWeight: 700, background: product.statusBg, color: product.statusColor,
                      whiteSpace: "nowrap"
                    }}>{product.status}</span>
                  </div>

                  {/* Description */}
                  <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.25rem", flex: 1 }}>
                    {product.description}
                  </p>

<div
  style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "1.5rem",
  }}
>
  {product.features?.map((feature, index) => (
    <span
      key={index}
      className="tech-badge"
      style={{
        background: "#f8fafc",
        border: "1px solid #e2e8f0",
        color: "#334155",
      }}
    >
      ✓ {feature}
    </span>
  ))}
</div>
                  {/* Footer */}
                  <div style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    borderTop: "1px solid #f1f5f9", paddingTop: "1rem"
                  }}>
                    <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "#0f172a" }}>{product.price}</span>
                    <a
                      href="/#contact"
                      className="cta-btn"
                      style={{
                        background: product.status === "Available"
                          ? "linear-gradient(135deg,#1d4ed8,#38bdf8)"
                          : "#f1f5f9",
                        color: product.status === "Available" ? "#fff" : "#94a3b8",
                      }}
                    >
                      {product.status === "Available" ? "Get Started →" : "Notify Me"}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "5rem 0", background: "linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 100%)" }}>
          <div className="container" style={{ maxWidth: "700px", margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>
              Need a Custom Solution?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              Can't find what you're looking for? We build custom software tailored to your exact needs.
            </p>
            <a href="/#contact" style={{
              display: "inline-block", padding: "14px 36px", borderRadius: "999px",
              background: "#fff", color: "#1d4ed8", fontWeight: 700, fontSize: "0.95rem",
              textDecoration: "none", letterSpacing: "0.5px",
            }}>
              Talk to Us →
            </a>
          </div>
        </section>

      </main>
    </>
  );
}