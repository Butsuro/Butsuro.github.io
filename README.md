<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Portfolio</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
    }
    body {
      background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
      color: #fff;
      padding: 2rem;
    }
    header {
      text-align: center;
      margin-bottom: 3rem;
    }
    header h1 {
      font-size: 3rem;
      margin-bottom: 0.5rem;
    }
    header p {
      font-size: 1.2rem;
      color: #ccc;
    }
    .section {
      margin-bottom: 3rem;
    }
    .section h2 {
      font-size: 2rem;
      border-bottom: 2px solid #fff;
      margin-bottom: 1rem;
      display: inline-block;
    }
    .projects, .skills {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }
    .card {
      background: rgba(255, 255, 255, 0.05);
      padding: 1.5rem;
      border-radius: 1rem;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      transition: transform 0.2s ease;
    }
    .card:hover {
      transform: translateY(-5px);
    }
    footer {
      text-align: center;
      font-size: 0.9rem;
      color: #888;
      margin-top: 4rem;
    }
    a {
      color: #00d9ff;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <header>
    <h1>Your Name</h1>
    <p>Web Developer | Designer | Problem Solver</p>
  </header>

  <section class="section">
    <h2>About Me</h2>
    <p>I’m a creative and detail-oriented web developer with a passion for building beautiful, functional websites. I enjoy transforming complex problems into elegant digital solutions.</p>
  </section>

  <section class="section">
    <h2>Projects</h2>
    <div class="projects">
      <div class="card">
        <h3>Project One</h3>
        <p>A modern, responsive landing page for a startup.</p>
        <a href="#">View Project</a>
      </div>
      <div class="card">
        <h3>Project Two</h3>
        <p>A custom CMS built using React and Firebase.</p>
        <a href="#">View Project</a>
      </div>
      <div class="card">
        <h3>Project Three</h3>
        <p>An e-commerce platform with Stripe integration.</p>
        <a href="#">View Project</a>
      </div>
    </div>
  </section>

  <section class="section">
    <h2>Skills</h2>
    <div class="skills">
      <div class="card">HTML & CSS</div>
      <div class="card">JavaScript</div>
      <div class="card">React</div>
      <div class="card">Node.js</div>
      <div class="card">UI/UX Design</div>
      <div class="card">Git & GitHub</div>
    </div>
  </section>

  <section class="section">
    <h2>Contact</h2>
    <p>Feel free to <a href="mailto:your.email@example.com">email me</a> or connect on <a href="#">LinkedIn</a>.</p>
  </section>

  <footer>
    &copy; 2025 Your Name. All rights reserved.
  </footer>
</body>
</html>
