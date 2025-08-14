import LoginBox from "@/components/LoginBox";

export default function Home() {
  return (
    <section className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/photolink.jpg')" }}
      ></div>

      <div className="relative z-10 flex items-center justify-end min-h-screen px-8">
        <div className="max-w-lg mr-10">
          <h1 className="text-5xl font-bold mb-6">
            Parctice Your Creativity
          </h1>
          <LoginBox />
        </div>
      </div>
    </section>
  );
}
