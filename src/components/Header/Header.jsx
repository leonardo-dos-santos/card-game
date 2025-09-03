export default function Header() {
  return (
    <header className="w-full py-3 bg-gradient-to-b from-[#3c2a1a] to-[#2c1b0e] backdrop-blur-md shadow-lg border-b-2 border-[#8b5a2b]">
      <div className="max-w-5xl mx-auto px-4 text-center relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 animate-tumbleweed text-sm">🌵</div>
          <div className="absolute top-1/3 right-1/4 transform -translate-y-1/2 animate-tumbleweed text-sm" style={{animationDelay: '1s'}}>🤠</div>
        </div>
        
        <h1 className="western-title text-3xl md:text-4xl font-extrabold tracking-wider animate-pulse-glow py-1">
          No Country For Cards
        </h1>
        
        <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-[#d4a85a] to-transparent mx-auto my-1"></div>
        
        <p className="text-sm font-rubik text-[#d4a85a]/90 max-w-2xl mx-auto italic">
          Clique nas cartas diferentes para marcar pontos — clique na mesma e o score zera.
        </p>
      </div>
    </header>
  )
}
