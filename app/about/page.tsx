export default function Page() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen p-8 animate-fadeIn">
      <div className="max-w-3xl w-full">
        <h1 className="font-bold text-3xl mb-6 text-center">About Me</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">なぜ勉強しているのか</h2>
          <p className="text-lg leading-relaxed">
            私はプログラミングを通して、自分のアイデアを形にできる力を身につけたいと思い勉強を始めました。<br />
            今の世の中はWebに支えられていると思っています！
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">目標</h2>
          <p className="text-lg leading-relaxed">
            小さなアプリやコンポーネントを作りながら実践力を高め、<br />
            最終的には誰でも触れる快適な作品ページを作ることを目標にしています！
          </p>
        </section>
      </div>
    </main>
  );
}
