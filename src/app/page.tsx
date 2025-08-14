import LoginBox from "@/components/LoginBox";

export default function Home() {
  return (
    <section className="relative flex items-center min-h-screen p-[2rem] md:p-[6rem]">
      {/* <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/photolink.jpg')" }}
      ></div> */}
      <div className="z-10 w-full flex items-center flex-col justify-between md:flex-row">
        <h1 className="py-4 max-w-lg text-5xl text-center font-bold mr-6 md:text-left">
          Get into the groove of creativity
        </h1>
        <LoginBox />
      </div>
    </section>
  );
}
