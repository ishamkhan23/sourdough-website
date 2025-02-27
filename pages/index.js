//pages/index.js - Home Page
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-orange-200 font-sans">
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-gray-800">Sourdough Love</h1>
        <nav className="space-x-6">
          <Link href="/order"><a className="text-lg font-medium text-gray-700 hover:text-orange-600">Order a Loaf</a></Link>
          <Link href="/recipes"><a className="text-lg font-medium text-gray-700 hover:text-orange-600">My Recipes</a></Link>
          <Link href="/tools"><a className="text-lg font-medium text-gray-700 hover:text-orange-600">Tools for Sourdough</a></Link>
        </nav>
      </header>
      <main className="p-10 text-center">
        <h2 className="text-4xl font-bold text-gray-900">What is Sourdough?</h2>
        <p className="mt-4 text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Sourdough bread is a naturally leavened bread made using wild yeast and lactic acid bacteria, giving it a rich, tangy flavor and a delightfully chewy texture.
        </p>
        <Link href="/recipes">
          <a className="mt-6 inline-block bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-orange-600 transition duration-200">
            See My Recipe
          </a>
        </Link>
      </main>
    </div>
  );
}