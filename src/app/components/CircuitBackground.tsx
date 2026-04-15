export default function CircuitBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
        background: "#060027",
      }}
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>{`
          .tr { fill: none; stroke-linecap: square; }
          .t1 { stroke: #0090dd; stroke-width: 0.8; opacity: 0.3; }
          .t2 { stroke: #FFF; stroke-width: 0.5; opacity: 0.18; }
          .t3 { stroke: #38bdf8; stroke-width: 0.6; opacity: 0.22; }
          .nr { fill: none; stroke: #FFF; stroke-width: 0.8; opacity: 0.6; }
          .nd { fill: #FFF; opacity: 0.8; }
          @keyframes travel {
            0%   { offset-distance: 0%; }
            100% { offset-distance: 100%; }
          }
        `}</style>

        {/* Top-left cluster */}
        <polyline className="tr t1" points="0,300 160,80 160,200 360,200" />
        <polyline className="tr t2" points="160,80 160,0" />
        <polyline className="tr t2" points="0,100 100,140 100,80" />
        <polyline className="tr t3" points="360,200 360,320 520,320" />
        <polyline className="tr t2" points="360,80 360,200" />
        <polyline className="tr t2" points="0,260 80,260 80,320 240,320" />
        <polyline className="tr t3" points="240,320 240,440 400,440" />

        {/* Top-right cluster */}
        <polyline className="tr t1" points="700,0 700,120 900,120 900,280 1100,280" />
        <polyline className="tr t2" points="900,120 900,60 1020,60" />
        <polyline className="tr t3" points="1100,280 1100,160 1280,160 1280,0" />
        <polyline className="tr t2" points="1100,280 1440,280" />
        <polyline className="tr t2" points="1020,60 1020,0" />

        {/* Middle band */}
        <polyline className="tr t1" points="0,460 220,460 220,380 520,380" />
        <polyline className="tr t2" points="520,380 520,320" />
        <polyline className="tr t3" points="520,380 740,380 740,460 1000,460" />
        <polyline className="tr t2" points="740,380 740,280 900,280" />
        <polyline className="tr t2" points="1000,460 1000,560 1200,560" />
        <polyline className="tr t3" points="1200,560 1440,560" />
        <polyline className="tr t2" points="1200,560 1200,460 1440,460" />

        {/* Lower band */}
        <polyline className="tr t1" points="0,620 200,620 200,540 440,540" />
        <polyline className="tr t2" points="200,620 200,720 380,720 380,620 600,620" />
        <polyline className="tr t3" points="600,620 600,540 440,540" />
        <polyline className="tr t2" points="600,620 600,720 760,720" />
        <polyline className="tr t1" points="760,720 760,620 1000,620" />
        <polyline className="tr t2" points="1000,620 1000,720 1200,720 1200,620 1440,620" />
        <polyline className="tr t3" points="1000,460 1000,620" />

        {/* Bottom */}
        <polyline className="tr t2" points="0,800 120,800 120,900" />
        <polyline className="tr t2" points="380,720 380,800 600,800 600,900" />
        <polyline className="tr t3" points="760,720 760,820 1000,820" />
        <polyline className="tr t2" points="1000,820 1200,820 1200,720" />
        <polyline className="tr t2" points="1000,820 1000,900" />

        {/* Nodes */}
        {[
          [160, 80], [160, 200], [360, 200], [360, 320], [520, 320],
          [240, 320], [520, 380], [700, 120], [900, 120], [900, 280],
          [1100, 280], [1280, 160], [740, 380], [740, 280], [1000, 460],
          [1200, 560], [200, 620], [380, 720], [600, 620], [760, 720],
          [1000, 620], [1200, 720], [1000, 820],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="5" className="nr" />
            <circle cx={cx} cy={cy} r="2" className="nd" />
          </g>
        ))}

        {/* Travelling pulse dots */}
        <circle
          r="2.5"
          style={{
            fill: "#FFF",
            opacity: 0.9,
            offsetPath: "path('M0,80 H160 V200 H360 V320 H520 V380 H740 V460 H1000')",
            offsetDistance: "0%",
            animation: "travel 8s linear infinite",
          } as React.CSSProperties}
        />
        <circle
          r="2.5"
          style={{
            fill: "#38bdf8",
            opacity: 0.85,
            offsetPath: "path('M700,0 V120 H900 V280 H1100 V160 H1280')",
            offsetDistance: "0%",
            animation: "travel 7s linear infinite 2s",
          } as React.CSSProperties}
        />
        <circle
          r="2"
          style={{
            fill: "#FFF",
            opacity: 0.8,
            offsetPath: "path('M0,460 H220 V380 H520 V320 H240 V440')",
            offsetDistance: "0%",
            animation: "travel 6s linear infinite 1s",
          } as React.CSSProperties}
        />
        <circle
          r="2"
          style={{
            fill: "#38bdf8",
            opacity: 0.75,
            offsetPath:
              "path('M0,620 H200 V720 H380 V620 H600 V720 H760 V620 H1000 V720 H1200')",
            offsetDistance: "0%",
            animation: "travel 10s linear infinite 3s",
          } as React.CSSProperties}
        />
        <circle
          r="2"
          style={{
            fill: "#FFF",
            opacity: 0.7,
            offsetPath:
              "path('M1000,460 V560 H1200 V720 H1000 V820 H380 V800 H120')",
            offsetDistance: "0%",
            animation: "travel 9s linear infinite 4.5s",
          } as React.CSSProperties}
        />
      </svg>
    </div>
  );
}