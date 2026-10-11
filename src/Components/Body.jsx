function Body() {
  const games = [
    { title: "Minecraft", genre: "Adventure", year: 2011 },
    { title: "Elden Ring", genre: "Action RPG", year: 2022 },
    { title: "Cyberpunk 2077", genre: "Action RPG", year: 2020 },
  ];

  return (
    <>
      <section
        id="home"
        className="px-6 py-24 text-center"
      >
        <p className="mb-4 font-semibold text-blue-400">
          WELCOME TO GAMEVAULT
        </p>

        <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
          Discover Your Next Favorite Game
        </h1>

        <p className="mx-auto mb-8 max-w-xl text-gray-400">
          Explore popular games, discover new adventures,
          and find your next gaming experience.
        </p>

        <a
          href="#games"
          className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-600"
        >
          Explore Games
        </a>
      </section>

      <section id="games" className="px-6 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-white">
          Featured Games
        </h2>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {games.map((game) => (
            <div
              key={game.title}
              className="rounded-xl border border-gray-800 bg-[#111820] p-6"
            >
              <h3 className="mb-3 text-xl font-bold text-white">
                {game.title}
              </h3>

              <p className="text-gray-400">
                Genre: {game.genre}
              </p>

              <p className="mt-2 text-gray-400">
                Release year: {game.year}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="px-6 py-16 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white">
          About GameVault
        </h2>

        <p className="mx-auto max-w-xl text-gray-400">
          GameVault is a simple gaming website built to
          showcase popular games and help visitors discover
          new titles.
        </p>
      </section>
    </>
  );
}

export default Body;