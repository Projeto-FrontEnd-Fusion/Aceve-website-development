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
    <section className="py-10 px-4 sm:px-4 tablet:px-8 laptop:px-[4.5rem] flex flex-col gap-0 mt-5">
      {events.map((event) => (
        <div key={event.id}>
          <h2 className="text-center text-xl font-semibold mt-0 mb-8">
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
          <hr className="border-black my-8" />
        </div>
      ))}
    </section>
  );
}
