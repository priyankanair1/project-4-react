export default function CategoryList({ categories, activeCat, setActiveCat }) {
  const cats = categories.map(cat =>

    <div 
      key={cat}
      className={cat === activeCat ? 'py-2 px-4 bg-dark text-white mb-3 text-uppercase' : 'py-2 px-4 bg-light mb-3 small text-uppercase'}
      onClick={() => setActiveCat(cat)}
    >
      {cat}
    </div>
  );
  return (
    <div>
      <h5 className="text-uppercase mb-4">Categories</h5>
      {cats}
    </div>
  );
}
