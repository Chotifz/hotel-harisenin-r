export default function HeroServices({title, subtitle}) {
  return (
    <div className="hero min-h-[65vh]">
      <div className="hero-overlay opacity-30 "></div>
      <div className="hero-content rounded-lg bg-gray-950 bg-opacity-45 px-24 py-12">
        <div className="max-w-lg  text-center text-white text-opacity-90">
          <h1 className="mb-5 text-7xl font-serif">{title}</h1>
          <p className="mb-5 text-2xl font-thin">
            {subtitle}
          </p>
          <p className="text-white text-2xl text-opacity-90">
            Enjoy The Moment
          </p>
        </div>
      </div>
    </div>
  );
}
