import Auth from "@/components/Auth";
import FetchTest from "@/components/FetchTest";

export default function Home() {
  return (
    <div className="relative h-full flex items-center p-[2rem] md:p-[6rem]">
      <FetchTest/>
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover opacity-95"
        style={{ backgroundImage: "url('/background.webp')" }}
      ></div>
      <div className="z-10 w-full flex items-center flex-col justify-between md:flex-row">
        <div>
          <h1 className="py-4 max-w-lg text-6xl text-white text-center font-bold m-auto mr-6 md:m-0 md:text-left">
            Get on the wave of creativity
          </h1>
          <p className="mb-[1rem] w-[90%] text-white md:w-[70%] m-auto text-center md:m-0 md:text-left">
            Join an inspiring journey with small daily creative challenges
            designed to spark your imagination. Every day, receive a fresh
            challenge that encourages you to create something new and build your own personal creative gallery.
          </p>
        </div>
        <Auth />
      </div>
    </div>
  );
}
