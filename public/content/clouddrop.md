<style>
  .project-wrapper {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    line-height: 1.7;
    color: #1a1a2e;
    max-width: 860px;
    margin: 0 auto;
    padding: 0 16px 48px;
  }

  .project-wrapper h1 {
    font-size: 2.2rem;
    font-weight: 800;
    margin-bottom: 6px;
    letter-spacing: -0.5px;
  }

  .project-wrapper h2 {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 40px 0 14px;
    padding-bottom: 6px;
    border-bottom: 2px solid #e2e8f0;
    color: #1a1a2e;
  }

  .project-wrapper p {
    margin: 0 0 14px;
    color: #374151;
    font-size: 0.97rem;
  }

  .badge-row {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin: 12px 0 20px;
  }

  .badge {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.3px;
  }

  .badge-blue   { background: #dbeafe; color: #1d4ed8; }
  .badge-green  { background: #dcfce7; color: #15803d; }
  .badge-yellow { background: #fef9c3; color: #a16207; }
  .badge-purple { background: #ede9fe; color: #6d28d9; }
  .badge-orange { background: #ffedd5; color: #c2410c; }

  .status-banner {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    background: #fef9c3;
    border: 1px solid #fde047;
    color: #854d0e;
    border-radius: 6px;
    padding: 7px 14px;
    font-size: 0.83rem;
    font-weight: 600;
    margin-bottom: 28px;
  }

  .github-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #1a1a2e;
    color: #fff !important;
    text-decoration: none !important;
    padding: 9px 18px;
    border-radius: 6px;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 28px;
    transition: opacity 0.15s;
  }

  .github-link:hover { opacity: 0.85; }

  .divider {
    border: none;
    border-top: 1px solid #e2e8f0;
    margin: 36px 0;
  }

  /* Feature table */
  .feature-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.93rem;
    margin-top: 8px;
  }

  .feature-table thead tr {
    background: #f1f5f9;
  }

  .feature-table th {
    padding: 10px 16px;
    text-align: left;
    font-weight: 700;
    font-size: 0.82rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #475569;
    border-bottom: 2px solid #e2e8f0;
  }

  .feature-table td {
    padding: 11px 16px;
    border-bottom: 1px solid #f1f5f9;
    color: #374151;
    vertical-align: top;
  }

  .feature-table td:first-child {
    font-weight: 600;
    white-space: nowrap;
    color: #1a1a2e;
    width: 180px;
  }

  .feature-table tbody tr:last-child td { border-bottom: none; }
  .feature-table tbody tr:hover { background: #f8fafc; }

  /* Architecture block */
  .arch-block {
    background: #0f172a;
    color: #e2e8f0;
    border-radius: 8px;
    padding: 22px 24px;
    font-family: 'Fira Code', 'Cascadia Code', 'Courier New', monospace;
    font-size: 0.82rem;
    line-height: 2;
    overflow-x: auto;
    margin-top: 10px;
  }

  .arch-block .node    { color: #7dd3fc; font-weight: 700; }
  .arch-block .arrow   { color: #64748b; }
  .arch-block .label   { color: #86efac; }
  .arch-block .comment { color: #94a3b8; }

  /* Stack table */
  .stack-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.93rem;
    margin-top: 8px;
  }

  .stack-table th {
    padding: 10px 16px;
    text-align: left;
    font-weight: 700;
    font-size: 0.82rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #475569;
    background: #f1f5f9;
    border-bottom: 2px solid #e2e8f0;
  }

  .stack-table td {
    padding: 10px 16px;
    border-bottom: 1px solid #f1f5f9;
    color: #374151;
    vertical-align: top;
  }

  .stack-table td:first-child {
    font-weight: 600;
    color: #1a1a2e;
    width: 140px;
  }

  .stack-table tbody tr:last-child td { border-bottom: none; }
  .stack-table tbody tr:hover { background: #f8fafc; }

  .footer-note {
    margin-top: 40px;
    font-size: 0.88rem;
    color: #64748b;
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid #e2e8f0;
  }
</style>

<div class="project-wrapper">

<h1>☁️ CloudDrop</h1>

<div class="badge-row">
  <span class="badge badge-blue">Flutter</span>
  <span class="badge badge-green">Go</span>
  <span class="badge badge-purple">Cross-platform</span>
  <span class="badge badge-orange">Cloudflare Tunnel</span>
</div>

<p>CloudDrop is a cross-platform file sharing application that bridges local and mobile environments using a QR-code-enabled tunnel system. Built with <strong>Flutter</strong> for the frontend and <strong>Go</strong> for the backend, it enables secure, self-hosted file access across all your devices — no third-party storage required.</p>

<!-- PASTE YOUR GITHUB LINK BELOW — replace the href -->
<a class="github-link" href="https://github.com/NaveenOT/clouddrop" target="_blank">
  ⭐ View on GitHub
</a>

<hr class="divider" />

<h2>🔧 Current Functionality</h2>

<table class="feature-table">
  <thead>
    <tr>
      <th>Component</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>📱 Flutter Mobile</td>
      <td>Access, browse, and download files over the local network or internet via a secure tunnel</td>
    </tr>
    <tr>
      <td>🖥️ Flutter Desktop</td>
      <td>Launches the Go backend server and sets up a Cloudflare tunnel to expose your file directory</td>
    </tr>
    <tr>
      <td>🌐 Go Server</td>
      <td>Serves files over HTTP, reads upload/download metadata, and interfaces with the tunnel API</td>
    </tr>
    <tr>
      <td>📸 QR Code</td>
      <td>Generates a scannable QR code containing the tunnel URL for instant device pairing</td>
    </tr>
    <tr>
      <td>🔒 Local-first</td>
      <td>No third-party cloud storage — your files never leave your own system</td>
    </tr>
  </tbody>
</table>

<hr class="divider" />

<h2>📦 Architecture</h2>

<div class="arch-block">
  <span class="node">[Flutter Desktop]</span> <span class="arrow">── starts ──▶</span> <span class="node">[Go Backend Server]</span><br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="arrow">│</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="arrow">│</span><br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="arrow">│</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="arrow">├──</span> <span class="label">Serves files from selected directory</span><br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="arrow">│</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="arrow">├──</span> <span class="label">Starts Cloudflare tunnel</span><br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="arrow">│</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="arrow">└──</span> <span class="label">Displays public URL as QR code</span><br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="arrow">▼</span><br/>
  <span class="node">[Flutter Mobile]</span> <span class="arrow">◀── scans ──</span> <span class="label">QR code with tunnel URL</span><br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="arrow">│</span><br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="arrow">└──</span> <span class="label">Access / download / upload files over tunnel via Go API</span>
</div>

<hr class="divider" />

<h2>🛠️ Tech Stack</h2>

<table class="stack-table">
  <thead>
    <tr>
      <th>Layer</th>
      <th>Technology</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Frontend</td>
      <td>Flutter (Dart)</td>
      <td>Cross-platform UI for both mobile and desktop clients</td>
    </tr>
    <tr>
      <td>Backend</td>
      <td>Go</td>
      <td>HTTP file server, tunnel management, and API layer</td>
    </tr>
    <tr>
      <td>Tunneling</td>
      <td>Cloudflare Tunnel</td>
      <td>Exposes the local server securely to the internet</td>
    </tr>
    <tr>
      <td>Pairing</td>
      <td>QR Code</td>
      <td>Instant URL sharing between desktop and mobile</td>
    </tr>
  </tbody>
</table>

<p class="footer-note">Developed by <strong>Naveen O.T</strong> — feel free to ⭐ star the repo and share your feedback!</p>

</div>
<br>
<br>
<br>