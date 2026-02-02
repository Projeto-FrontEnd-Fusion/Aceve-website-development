"use client";
import { PhotoUploadCard } from "@/features/admin-dashboard/components/PhotoUploadCard";
import { SingleEvent } from "./SingleEvent";
import { useGetEvents } from "@/features/admin-dashboard/hooks/useGetEvents";

export default function EventsList() {
  const { events, isLoading, error } = useGetEvents();
  if (isLoading) {
    return <p className="text-center py-10">Carregando eventos...</p>;
  }

  if (error) {
    return <p className="text-center py-10">{error}</p>;
  }
  return (
    <section className="py-10 flex flex-col gap-10 mt-5">
      {events.map((event) => (
        <div key={event.id}>
          <h2 className="text-center text-xl font-semibold m-10">
            {event.name}
          </h2>
          <div className="mt-5">
            <SingleEvent
              title={new Date(event.date).toLocaleDateString("pt-BR")}
              photos={event.photos}
              total={event.totalFunding}
              beneficiaries={event.peopleBenefited}
              report={event.description}
            />
          </div>
          <hr className="border-black" />
        </div>
      ))}
      {/*<div>
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

      <hr className="border-black mb-10" />*/}
    </section>
  );
}
