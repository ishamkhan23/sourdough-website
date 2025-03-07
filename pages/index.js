export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Isham's Sourdough Baking Adventures</h1>
          <p className="lead">
            Experience the art of sourdough making, from the starter to the perfect loaf.
          </p>
        </div>

        {/* Image Section - Showcase 3 Loaves */}
        <div className="hero-images">
          <div className="hero-image">
            <img src="/loaf1.jpg" alt="Sourdough Loaf 1" />
          </div>
          <div className="hero-image">
            <img src="/loaf2.jpg" alt="Sourdough Loaf 2" />
          </div>
          <div className="hero-image">
            <img src="/loaf3.jpg" alt="Sourdough Loaf 3" />
          </div>
        </div>
      </section>

      {/* What is Sourdough Section */}
      <section className="sourdough-section">
        <div className="container">
          <div className="sourdough-content">
            
            {/* Left Side: Heading and Image */}
            <div className="sourdough-left">
              <h2 className="sourdough-heading">What is Sourdough?</h2>
              <div className="sourdough-image-container">
                <img src="/sourdough-bread.jpg" alt="Freshly Baked Sourdough Bread" className="sourdough-image" />
              </div>
            </div>

            {/* Right Side: Description */}
            <div className="sourdough-text">
            <div className="sourdough-box">
              <p className="sourdough-description">
                Sourdough is an ancient method of bread-making that relies on wild yeast and lactic acid bacteria for natural fermentation.
                Unlike commercial bread made with instant yeast, sourdough develops a deep, tangy flavor and a chewy texture over time.
                <br /><br />
                The key to sourdough is the starter, a live culture made by mixing flour and water and allowing natural yeasts and bacteria to thrive.
                This starter is fed regularly with fresh flour, making it a powerful natural leavening agent.
                <br /><br />
                
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>

     {/* Sourdough Components Section */}
<section className="sourdough-components">
  <div className="container">
    <h2 className="components-heading">Sourdough Components</h2>
    
    {/* Circles Container */}
    <div className="components-grid">
      {/* Starter */}
      <a href="/starter" className="component-circle">
        <img src="/starter.jpg" alt="Starter" />
        <p>Starter</p>
      </a>

      {/* Flour */}
      <a href="/flour" className="component-circle">
        <img src="/flour.jpg" alt="Flour" />
        <p>Flour</p>
      </a>

      {/* Water */}
      <a href="/water" className="component-circle">
        <img src="/water.jpg" alt="Water" />
        <p>Water</p>
      </a>

      {/* Discard */}
      <a href="/discard" className="component-circle">
        <img src="/discard.jpg" alt="Discard" />
        <p>Discard</p>
      </a>
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section className="section-light">
        <div className="container text-center">
          <h2>Get in Touch</h2>
          <p>If you have any questions or want to place an order, feel free to reach out!</p>
          <a href="mailto:ishamkhan23@gmail.com" className="btn btn-primary">Contact Us</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-dark text-center">
        <p>&copy; {new Date().getFullYear()} Isham's Sourdough</p>
      </footer>
    </div>
  );
}
