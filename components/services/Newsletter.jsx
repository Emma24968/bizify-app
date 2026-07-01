export default function Newsletter() {
  return (
    <section className="flex flex-col md:flex-row w-full">

      <div className="w-full md:w-1/2">
        <video
          src="/service-video.mp4"
          loop
          muted
          autoPlay
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 bg-[#153C3C] text-white flex flex-col justify-center px-10 py-16 gap-6">

        <h3 className="text-3xl md:text-4xl font-bold leading-tight">
          Subscribe to Our <br /> Newsletter
        </h3>

        <p className="text-gray-300">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">

          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 py-3 bg-white px-4 rounded-md text-black outline-none"
          />

          <button className="bg-[#84a17d] px-6 py-3 rounded-md font-medium hover:bg-[#6f8d69] transition">
            Subscribe
          </button>

        </div>
      </div>
    </section>
  );
}