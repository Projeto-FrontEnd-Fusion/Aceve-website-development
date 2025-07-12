import { DonationOptions } from "@/components/DonationOptions";

function QueroDoar() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <h1>Quero Doar</h1>
        <DonationOptions/>
      </div>
    </main>
  );
}

export default QueroDoar;
