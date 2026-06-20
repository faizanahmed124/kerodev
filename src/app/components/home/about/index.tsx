"use client";

const Work = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;900&display=swap');
      `}</style>

      <section
        id="about"
        className="relative py-0"
        style={{ background: "#ffffff", fontFamily: "'Outfit', sans-serif" }}
      >
        <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #38bdf8, transparent 70%)" }} />
        <div className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #1d4ed8, transparent 70%)" }} />

        <div className="container relative z-10">

          {/* Heading */}
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
              style={{ background: "rgba(56,189,248,0.10)", border: "1px solid rgba(56,189,248,0.35)", color: "#0369a1" }}>
              About Us
            </span>
            <h2 className="mb-6"
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#0f172a", letterSpacing: "3px", textTransform: "uppercase" }}>
              Who We Are
            </h2>
            <div className="mx-auto mb-8 w-14 h-1 rounded-full"
              style={{ background: "linear-gradient(90deg,#1d4ed8,#38bdf8)" }} />
            <p className="max-w-4xl mx-auto md:text-lg md:leading-9 leading-8"
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, color: "#475569", letterSpacing: "0.2px" }}>
              At Kerodevs, we help businesses grow through innovative web development, mobile app development, and custom software solutions. Our team creates secure, scalable, and user-focused digital products that solve real business challenges and deliver measurable results.

              By combining modern technology, creative design, and strategic thinking, we build high-performance applications that support digital transformation and long-term success. From startups to enterprises, Kerodevs is committed to delivering reliable, future-ready solutions that help businesses stay ahead in a competitive market.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="rounded-3xl p-8 md:p-10 h-[320px] flex flex-col justify-between transition-all duration-500 hover:scale-105 hover:-translate-y-1"
              style={{ background: "#071738", border: "1.5px solid #38bdf8", boxShadow: "0 2px 16px rgba(30,58,95,0.06)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(56,189,248,0.25)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(30,58,95,0.06)"; }}
            >
              <span className="w-fit text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ background: "rgba(56,189,248,0.15)", border: "1px solid rgba(56,189,248,0.4)", color: "#7dd3fc" }}>
                01
              </span>
              <div>
                <h3 className="text-2xl mb-3"
                  style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: "#ffffff", letterSpacing: "0.5px" }}>
                  Our Mission
                </h3>
                <div className="w-8 h-0.5 mb-4 rounded-full" style={{ background: "linear-gradient(90deg,#1d4ed8,#38bdf8)" }} />
                <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, color: "#94a3b8", lineHeight: 1.75, fontSize: "15px" }}>
                  To empower businesses through innovative software development services, cutting-edge technology, and scalable digital solutions that improve efficiency, enhance user experiences, and drive sustainable growth
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl p-8 md:p-10 h-[320px] flex flex-col justify-between transition-all duration-500 hover:scale-105 hover:-translate-y-1"
              style={{ background: "#0d1b35", border: "1.5px solid #38bdf8", boxShadow: "0 2px 16px rgba(30,58,95,0.06)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(56,189,248,0.25)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(30,58,95,0.06)"; }}
            >
              <span className="w-fit text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ background: "rgba(56,189,248,0.15)", border: "1px solid rgba(56,189,248,0.4)", color: "#7dd3fc" }}>
                02
              </span>
              <div>
                <h3 className="text-2xl mb-3"
                  style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: "#ffffff", letterSpacing: "0.5px" }}>
                  Our Vision
                </h3>
                <div className="w-8 h-0.5 mb-4 rounded-full" style={{ background: "linear-gradient(90deg,#1d4ed8,#38bdf8)" }} />
                <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, color: "#94a3b8", lineHeight: 1.75, fontSize: "15px" }}>
                  To become a globally recognized technology company by creating intelligent digital products, transforming industries through innovation, and shaping the future with AI-driven solutions.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl p-8 md:p-10 h-[320px] flex flex-col justify-between transition-all duration-500 hover:scale-105 hover:-translate-y-1"
              style={{ background: "#0d1b35", border: "1.5px solid #38bdf8", boxShadow: "0 2px 16px rgba(30,58,95,0.06)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(56,189,248,0.25)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(30,58,95,0.06)"; }}
            >
              <span className="w-fit text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ background: "rgba(56,189,248,0.15)", border: "1px solid rgba(56,189,248,0.4)", color: "#7dd3fc" }}>
                03
              </span>
              <div>
                <h3 className="text-2xl mb-3"
                  style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: "#ffffff", letterSpacing: "0.5px" }}>
                  Our Strategy
                </h3>
                <div className="w-8 h-0.5 mb-4 rounded-full" style={{ background: "linear-gradient(90deg,#1d4ed8,#38bdf8)" }} />
                <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, color: "#94a3b8", lineHeight: 1.75, fontSize: "15px" }}>
                  We leverage modern technologies, agile development methodologies, and data-driven strategies to deliver secure, scalable, and future-ready software solutions tailored to our clients' unique business needs.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Work;