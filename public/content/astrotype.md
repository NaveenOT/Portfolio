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
    margin: 12px 0 28px;
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

  .feature-table tbody tr:last-child td {
    border-bottom: none;
  }

  .feature-table tbody tr:hover {
    background: #f8fafc;
  }

  /* Code block styling */
  .code-block {
    background: #0f172a;
    color: #e2e8f0;
    border-radius: 8px;
    padding: 18px 20px;
    font-family: 'Fira Code', 'Cascadia Code', 'Courier New', monospace;
    font-size: 0.85rem;
    line-height: 1.8;
    overflow-x: auto;
    margin: 10px 0 0;
  }

  .code-block .comment { color: #64748b; }
  .code-block .file    { color: #7dd3fc; }
  .code-block .cmd     { color: #86efac; }

  .build-box {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-left: 4px solid #3b82f6;
    border-radius: 6px;
    padding: 16px 20px;
    margin-top: 10px;
    font-size: 0.9rem;
    color: #374151;
  }

  .build-box .prereq {
    margin-bottom: 10px;
    font-size: 0.88rem;
  }

  .build-box .prereq a {
    color: #3b82f6;
    text-decoration: none;
    font-weight: 600;
  }

  .build-box code {
    display: block;
    background: #0f172a;
    color: #86efac;
    padding: 12px 16px;
    border-radius: 6px;
    font-family: 'Fira Code', monospace;
    font-size: 0.83rem;
    line-height: 1.9;
    margin-top: 8px;
    overflow-x: auto;
  }

  /* Screenshots */
  .screenshots-grid {
    display: flex;
    gap: 14px;
    margin-top: 10px;
  }

  .screenshot-item {
    flex: 1;
    text-align: center;
  }

  .screenshot-item img {
    width: 100%;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    display: block;
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
  .screenshot-item span {
    display: inline-block;
    margin-top: 7px;
    font-size: 0.78rem;
    font-weight: 600;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  /* Acknowledgments table */
  .ack-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.93rem;
    margin-top: 8px;
  }

  .ack-table td {
    padding: 10px 16px;
    border-bottom: 1px solid #f1f5f9;
    color: #374151;
    vertical-align: middle;
  }

  .ack-table td:first-child {
    font-weight: 700;
    width: 150px;
    color: #1a1a2e;
  }

  .ack-table td a {
    color: #3b82f6;
    text-decoration: none;
  }

  .ack-table tr:last-child td {
    border-bottom: none;
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

<h1>🚀 Astrotype</h1>

<div class="badge-row">
  <span class="badge badge-blue">C++</span>
  <span class="badge badge-green">raylib</span>
  <span class="badge badge-yellow">Wave-based</span>
</div>

<p>A retro-style, wave-based typing shooter built in <strong>C++</strong> using the <a href="https://www.raylib.com/">raylib</a> library. Asteroids carrying words hurtle toward your spaceship — type the correct word and hit <strong>Enter</strong> to fire a laser and destroy them before they reach you.</p>

<p>Each wave is faster and more relentless than the last. Survive as long as you can.</p>

<a class="github-link" href="https://github.com/NaveenOT/astrotype" target="_blank">
  ⭐ View on GitHub
</a>

<hr class="divider" />

<h2>🎮 How It Works</h2>

<p>Words are displayed on incoming asteroids drifting toward your ship. As you type, the game highlights matching asteroids in real time using a <strong>Trie</strong> data structure. Hit Enter on a correct word to fire a laser beam and destroy it. Let too many through and it's game over.</p>

<p>Waves scale in difficulty — more asteroids, faster speeds, less time to react.</p>

<hr class="divider" />

<h2>✨ Features</h2>

<table class="feature-table">
  <thead>
    <tr>
      <th>Feature</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Wave System</td>
      <td>Dynamic difficulty scaling — each wave adds more asteroids at higher speeds</td>
    </tr>
    <tr>
      <td>Word Matching</td>
      <td>Trie-based data structure for instant, efficient word lookup on every keystroke</td>
    </tr>
    <tr>
      <td>Scoreboard</td>
      <td>Skew heap maintains the top 5 high scores with persistent file-based storage</td>
    </tr>
    <tr>
      <td>Visuals</td>
      <td>Animated starfield background, collision explosions, and laser beam particles</td>
    </tr>
    <tr>
      <td>Audio</td>
      <td>Background music and explosion sound effects</td>
    </tr>
    <tr>
      <td>Screens</td>
      <td>Full Menu, Gameplay, Scoreboard, and Game Over screens</td>
    </tr>
  </tbody>
</table>

<hr class="divider" />

<h2>📂 Project Structure</h2>

<div class="code-block">
  <span class="file">Z-Type-Game/</span><br/>
  ├── <span class="file">main.cpp</span>     <span class="comment"># Main game loop &amp; rendering</span><br/>
  ├── <span class="file">tries.h</span>      <span class="comment"># Trie data structure for word matching</span><br/>
  ├── <span class="file">skew.h</span>       <span class="comment"># Skew heap for score management</span><br/>
  ├── <span class="file">words.h</span>      <span class="comment"># Word list (100+ words)</span><br/>
  └── <span class="file">scores.txt</span>   <span class="comment"># Auto-generated persistent score log</span>
</div>

<hr class="divider" />

<h2>🛠️ Build &amp; Run</h2>

<div class="build-box">
  <p class="prereq">Prerequisites: <a href="https://www.raylib.com/">raylib</a> must be installed on your system.</p>
  <code>
    g++ main.cpp -o astrotype.exe -lraylib -lopengl32 -lgdi32 -lwinmm<br/>
    ./astrotype.exe
  </code>
</div>

<hr class="divider" />

<h2>🖼️ Screenshots</h2>

<div class="screenshots-grid">
  <div class="screenshot-item">
    <img src="images/menu.png" alt="Menu Screen" />
    <span>Menu</span>
  </div>
  <div class="screenshot-item">
    <img src="images/gameplay.png" alt="Gameplay" />
    <span>Gameplay</span>
  </div>
  <div class="screenshot-item">
    <img src="images/score.png" alt="Scoreboard" />
    <span>Scoreboard</span>
  </div>
</div>

<hr class="divider" />

<h2>Acknowledgments</h2>

<table class="ack-table">
  <tbody>
    <tr>
      <td>raylib</td>
      <td><a href="https://www.raylib.com/">raylib.com</a> — the game library powering everything</td>
    </tr>
    <tr>
      <td>PressStart2P</td>
      <td>Retro pixel font used throughout the game UI</td>
    </tr>
    <tr>
      <td>NCS</td>
      <td>Background music</td>
    </tr>
  </tbody>
</table>

<p class="footer-note">Developed by <strong>Naveen O.T</strong> — feel free to ⭐ star the repo and share your feedback!</p>

</div>
<br>
<br>
<br>