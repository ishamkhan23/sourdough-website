export default function Recipes() {
  return (
    <div className="container mt-5">
      <h1 className="text-center text-success mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Sourdough Recipes</h1>
      <div className="row">
        {/* Recipe Cards */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="/images/recipe1.jpg" className="card-img-top" alt="Classic Sourdough" />
            <div className="card-body">
              <h5 className="card-title">Classic Sourdough</h5>
              <p className="card-text">A simple yet delicious recipe for making classic sourdough bread at home.</p>
              <a href="/recipes/classic" className="btn btn-dark">View Recipe</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
