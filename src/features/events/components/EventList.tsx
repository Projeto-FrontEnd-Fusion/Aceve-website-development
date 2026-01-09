import { SingleEvent } from "./SingleEvent";

export default function EventsList() {
  return (

    <section className="max-w-6xl px-6 py-10 flex flex-col mx-auto gap-10 mt-5">

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
