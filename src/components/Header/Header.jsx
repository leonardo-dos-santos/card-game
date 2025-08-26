export default function Header() {
  return (
    <header className="w-full py-6">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Memory Game
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Clique cartas diferentes para marcar pontos — clique na mesma e o score
          zera. Interface pronta para lógica e API.
        </p>
      </div>
    </header>
  )
}
