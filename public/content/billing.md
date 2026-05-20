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
  .badge-blue   { background: #dbeafe; color: #1d4ed8; }
  .badge-green  { background: #dcfce7; color: #15803d; }
  .badge-yellow { background: #fef9c3; color: #a16207; }
  .badge-purple { background: #ede9fe; color: #6d28d9; }
  .badge-orange { background: #ffedd5; color: #c2410c; }
  .badge-red    { background: #fee2e2; color: #b91c1c; }

  .status-banner {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    background: #dcfce7;
    border: 1px solid #86efac;
    color: #15803d;
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
    width: 220px;
  }

  .feature-table tbody tr:last-child td { border-bottom: none; }
  .feature-table tbody tr:hover { background: #f8fafc; }

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

  /* Install block */
  .install-block {
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

  .install-block .cmd    { color: #7dd3fc; font-weight: 700; }
  .install-block .comment { color: #64748b; }

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

<h1>🏪 Billing System</h1>

<div class="badge-row">
  <span class="badge badge-blue">Electron</span>
  <span class="badge badge-green">React</span>
  <span class="badge badge-yellow">SQLite</span>
  <span class="badge badge-purple">Vite</span>
  <span class="badge badge-orange">Chart.js</span>
  <span class="badge badge-red">jsPDF</span>
</div>



<p>A robust, Electron-based billing and inventory management desktop application, actively used in a <strong>live retail shop in Chennai</strong>. Built with <strong>Electron</strong>, <strong>Vite</strong>, <strong>React</strong>, <strong>SQLite</strong>, <strong>Chart.js</strong>, and <strong>jsPDF</strong>, it offers a full-featured solution for billing, inventory, dashboard analytics, expense tracking, and more — all running fully offline.</p>

<a class="github-link" href="https://github.com/NaveenOT/billing-system" target="_blank">
  ⭐ View on GitHub
</a>

<hr class="divider" />

<h2>🚀 Key Features</h2>

<table class="feature-table">
  <thead>
    <tr>
      <th>Feature</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>🧾 Invoice &amp; Billing</td>
      <td>Create detailed bills with GST calculations, line items, quick notes, and persistent bill storage</td>
    </tr>
    <tr>
      <td>📦 Product &amp; Catalogue</td>
      <td>Add, edit, and remove products with quick access by code, price, quantity, and procurement rate</td>
    </tr>
    <tr>
      <td>📊 Dashboard Analytics</td>
      <td>Profit, revenue, sales trends, and expense analytics visualised via Chart.js</td>
    </tr>
    <tr>
      <td>💸 Expense Management</td>
      <td>Log shop expenses and track monthly spending with categorised breakdowns</td>
    </tr>
    <tr>
      <td>🖨️ Invoice Export</td>
      <td>Generate and save printable, professional invoices as PDFs using jsPDF</td>
    </tr>
    <tr>
      <td>🗄️ Local Storage</td>
      <td>Powered by SQLite (<code>billing.db</code>) for reliable, offline-first data persistence</td>
    </tr>
    <tr>
      <td>🖥️ Cross-Platform Desktop</td>
      <td>Packaged via <code>electron-builder</code> for Windows, macOS, and Linux</td>
    </tr>
  </tbody>
</table>

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
      <td>Desktop</td>
      <td>Electron</td>
      <td>Cross-platform desktop framework and native OS integration</td>
    </tr>
    <tr>
      <td>Frontend</td>
      <td>Vite + React</td>
      <td>Fast, modern UI with component-based architecture</td>
    </tr>
    <tr>
      <td>Styling</td>
      <td>Tailwind CSS</td>
      <td>Utility-first CSS for a clean, responsive interface</td>
    </tr>
    <tr>
      <td>Database</td>
      <td>SQLite</td>
      <td>Embedded, offline-first data persistence via <code>billing.db</code></td>
    </tr>
    <tr>
      <td>Charts</td>
      <td>Chart.js</td>
      <td>Interactive sales, revenue, and expense visualisations</td>
    </tr>
    <tr>
      <td>PDF</td>
      <td>jsPDF</td>
      <td>Client-side generation of printable invoice documents</td>
    </tr>
    <tr>
      <td>Packaging</td>
      <td>electron-builder</td>
      <td>Builds distributable installers for all major platforms</td>
    </tr>
  </tbody>
</table>

<hr class="divider" />

<h2>⚙️ Installation</h2>

<div class="install-block">
  <span class="comment"># 1. Clone the repository</span><br/>
  <span class="cmd">git clone https://github.com/NaveenOT/billing-system.git</span><br/>
  <br/>
  <span class="comment"># 2. Install dependencies</span><br/>
  <span class="cmd">npm install</span><br/>
  <br/>
  <span class="comment"># 3. Build the frontend</span><br/>
  <span class="cmd">npm run build</span><br/>
  <br/>
  <span class="comment"># 4. Package the desktop app</span><br/>
  <span class="cmd">npm run electron:build</span>
</div>

<hr class="divider" />

<h2>🛡️ Data &amp; Configuration</h2>

<p>All data is saved in <code>billing.db</code>, stored alongside the application. To back up or migrate your data, simply copy this file to your desired location. Settings such as GST percentage and printer configuration are stored in local JSON config files for easy customisation.</p>

<p class="footer-note">Developed by <strong>Naveen O.T</strong> — built and maintained for a live retail shop in Chennai.</p>

</div>
<br>
<br>
<br>