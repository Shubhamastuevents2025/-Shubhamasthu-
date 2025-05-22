export default function NoScriptFallback() {
  return (
    <noscript>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#000",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          zIndex: 9999,
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>JavaScript Required</h1>
        <p style={{ maxWidth: "600px", marginBottom: "20px" }}>
          This website requires JavaScript to function properly. Please enable JavaScript in your browser settings and
          reload the page.
        </p>
        <a
          href="/"
          style={{
            padding: "10px 20px",
            backgroundColor: "#d4af37",
            color: "#000",
            textDecoration: "none",
            borderRadius: "4px",
          }}
        >
          Reload Page
        </a>
      </div>
    </noscript>
  )
}
