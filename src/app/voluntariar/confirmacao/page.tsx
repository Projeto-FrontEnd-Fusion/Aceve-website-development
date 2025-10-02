export default function ConfirmationPage() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-purple-100 p-4">
      <div className="w-[220px] h-[220px] md:w-[240px] md:h-[240px]  bg-gray-100 rounded-[16px] border border-purple-600 flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-base md:text-lg font-bold text-purple-700 mb-6">
          Obrigado por se inscrever como voluntário!
        </h1>
        <p className="text-xs md:text-sm text-purple-500">
          Você receberá um e-mail de confirmação em breve.
        </p>
      </div>
    </section>
  );
}
