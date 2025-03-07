export default function About() {
    return (
      <div className="container mt-5">
        <h1 className="text-center text-primary mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          About Me
        </h1>
        <p className="text-center lead mt-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
          I’m Isham, the creator behind Isham’s Sourdough. I’ve been baking sourdough for years, and I’m passionate about sharing the art of making this delicious bread with others. Join me on this baking journey!
        </p>
        <div className="text-center my-5">
          <img src="/images/isham-photo.jpg" alt="Isham" className="img-fluid rounded-circle" style={{ border: '5px solid #D2691E' }} />
        </div>
      </div>
    );
  }
  