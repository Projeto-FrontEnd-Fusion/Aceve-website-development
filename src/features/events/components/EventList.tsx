import { SingleEvent } from "./SingleEvent";

export default function EventsList() {
  return (

    <section className="px-[4.5rem] py-10 flex flex-col gap-10 mt-5">
        <div>
            <h2 className="text-center text-xl font-semibold m-10">
              01 de Janeiro de 2026
            </h2>      
            <div className="mt-5">
              <SingleEvent title="Titulo evento 1" />
            </div>
        </div>

        <hr className="border-black" />
       
        <div>
            <h2 className="text-center text-xl font-semibold m-10">
              05 de Janeiro de 2026
            </h2>

            <div className="mt-5">
              <SingleEvent title="titulo evento 2" />
            </div>
        </div>

        <hr className="border-black mb-10" />
    </section>
  )
}
