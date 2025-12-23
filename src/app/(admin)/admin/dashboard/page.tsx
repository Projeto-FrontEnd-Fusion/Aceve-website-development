"use client";
import EventForm from "@/features/admin-dashboard/components/EventForm";
import EventFormHeader from "@/features/admin-dashboard/components/EventFormHeader";

export default function EventDashboard() {
  return (
    <section className="bg-primary-100 rounded-lg min-h-screen w-full">
      <div className="w-full max-w-[960px] px-8 py-10">
        <EventFormHeader />
        <EventForm />
      </div>
    </section>
  );
}
