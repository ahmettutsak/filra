export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex md:flex-row flex-col items-center justify-evenly h-[60vh] w-full p-4">
        <div className="flex flex-col md:gap-2 gap-6 justify-center items-center md:items-start ">
          <h1 className="md:text-6xl text-3xl text-center md:text-start">
            Organize Your Digital Life
          </h1>
          <p className="text-[#838174] md:text-xl md:w-3/4 text-center md:text-start">
            A minimalist space to store, organize, and find your notes, files,
            and ideas all in one place.
          </p>
        </div>
        <div className="flex flex-col">
          <h1>Filra</h1>
        </div>
      </div>
    </div>
  );
}
