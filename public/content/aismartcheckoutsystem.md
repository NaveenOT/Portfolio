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
  .badge-red    { background: #fee2e2; color: #b91c1c; }
  .badge-teal   { background: #ccfbf1; color: #0f766e; }

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
    width: 210px;
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

  /* Fruit grid */
  .fruit-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 10px;
  }

  .fruit-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 20px;
    padding: 5px 14px;
    font-size: 0.83rem;
    color: #374151;
    font-weight: 500;
  }

  .fruit-pill .price {
    color: #15803d;
    font-weight: 700;
  }

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

<h1>🛒 Smart AI Checkout</h1>

<div class="badge-row">
  <span class="badge badge-blue">Python</span>
  <span class="badge badge-purple">YOLOv8</span>
  <span class="badge badge-green">Streamlit</span>
  <span class="badge badge-orange">Raspberry Pi</span>
  <span class="badge badge-teal">OpenCV</span>
  <span class="badge badge-yellow">Computer Vision</span>
</div>

<div class="status-banner">
  IOT Project
</div>

<p>A real-time AI-powered checkout system that uses a <strong>Raspberry Pi</strong> with an OV camera module as a live video source, streamed over the local network and processed by a <strong>YOLOv8</strong> custom-trained model to detect and bill fruits automatically — no barcodes, no manual entry.</p>

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
      <td>📷 Live Video Feed</td>
      <td>Streams video from a Raspberry Pi + OV camera over HTTP on the local network; displayed in real time via Streamlit</td>
    </tr>
    <tr>
      <td>🍎 Fruit Detection</td>
      <td>Custom YOLOv8 model samples 10 frames at 0.15s intervals and detects fruits above a confidence threshold</td>
    </tr>
    <tr>
      <td>🧾 Auto Bill Generation</td>
      <td>Aggregates detections across sampled frames, deduplicates quantities, and computes a full itemised bill with GST-ready pricing</td>
    </tr>
    <tr>
      <td>📊 Metrics Dashboard</td>
      <td>Shows unique fruit count, total item quantity, and grand total at a glance after each scan</td>
    </tr>
    <tr>
      <td>🔬 Debug Inspector</td>
      <td>Expandable panel showing every raw detection label, confidence score, and whether it was included in or excluded from the bill</td>
    </tr>
    <tr>
      <td>🖼️ Annotated Frame</td>
      <td>Displays the last scanned frame with YOLO bounding boxes and class labels overlaid after each bill generation</td>
    </tr>
  </tbody>
</table>

<hr class="divider" />

<h2>📦 Architecture</h2>

<div class="arch-block">
  <span class="node">[Raspberry Pi + OV Camera]</span> <span class="arrow">── HTTP stream ──▶</span> <span class="node">[VideoStream Thread]</span><br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="arrow">│</span><br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="arrow">▼</span><br/>
  <span class="node">[Streamlit UI]</span> <span class="arrow">── on button click ──▶</span> <span class="node">[YOLOv8 Inference]</span><br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="arrow">│</span><br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="arrow">├──</span> <span class="label">Sample 10 frames × 0.15s</span><br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="arrow">├──</span> <span class="label">Filter to allowed fruits only</span><br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="arrow">└──</span> <span class="label">Build itemised bill + annotated frame</span><br/>
  <br/>
  <span class="comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ idle between scans — zero model inference on live feed</span>
</div>

<hr class="divider" />

<h2>🍊 Detectable Fruits &amp; Prices</h2>

<div class="fruit-grid">
  <span class="fruit-pill">🍎 Apple <span class="price">₹20</span></span>
  <span class="fruit-pill">🍌 Banana <span class="price">₹10</span></span>
  <span class="fruit-pill">🥒 Cucumber <span class="price">₹15</span></span>
  <span class="fruit-pill">🐉 Dragon Fruit <span class="price">₹100</span></span>
  <span class="fruit-pill">🍈 Guava <span class="price">₹30</span></span>
  <span class="fruit-pill">🍊 Orange <span class="price">₹40</span></span>
  <span class="fruit-pill">🍐 Pear <span class="price">₹50</span></span>
  <span class="fruit-pill">🍍 Pineapple <span class="price">₹60</span></span>
  <span class="fruit-pill">🍬 Sugar Apple <span class="price">₹70</span></span>
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
      <td>Hardware</td>
      <td>Raspberry Pi + OV Camera</td>
      <td>Edge video capture, streams MJPEG over local HTTP</td>
    </tr>
    <tr>
      <td>Vision</td>
      <td>YOLOv8 (Ultralytics)</td>
      <td>Custom-trained fruit detection model with bounding box output</td>
    </tr>
    <tr>
      <td>Video</td>
      <td>OpenCV + threading</td>
      <td>Background frame capture from the Pi stream with thread-safe locking</td>
    </tr>
    <tr>
      <td>UI</td>
      <td>Streamlit</td>
      <td>Live feed display, bill table, metrics, and debug panel</td>
    </tr>
    <tr>
      <td>Data</td>
      <td>Pandas + NumPy</td>
      <td>Detection aggregation, quantity normalisation, and bill construction</td>
    </tr>
  </tbody>
</table>

<p class="footer-note">Developed by <strong>Naveen O.T</strong> — computer vision checkout prototype using edge hardware and custom YOLO training.</p>

</div>
<br>
<br>
<br>