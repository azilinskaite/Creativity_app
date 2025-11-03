import { getDisciplines } from "@/actions/getDisciplines";

export default async function FetchTest() {
  const disciplines = await getDisciplines();

  return (
    <div className="z-10 w-full flex items-center flex-col justify-between md:flex-row bg-black text-white">
      {disciplines.length > 0 ? (
        disciplines.map((discipline) => (
          <div
            key={discipline._id}
            className="p-4 border border-white m-2 w-full max-w-lg"
          >
            <h3 className="text-2xl font-semibold">{discipline.title}</h3>
            <p className="text-sm opacity-80">{discipline.description}</p>
          </div>
        ))
      ) : (
        <p>No disciplines found.</p>
      )}
    </div>
  );
}
