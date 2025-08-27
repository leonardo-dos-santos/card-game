export default function Header() {
  return (
    <header className="w-full py-5 bg-black/50 backdrop-blur-md shadow-lg">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-blue-200 drop-shadow-lg">
          Memory Game
        </h1>
        <p className="mt-2 text-lg text-gray-300">
          Clique nas cartas diferentes para marcar pontos — clique na mesma e o score zera.
        </p>
      </div>
    </header>

  )
}
