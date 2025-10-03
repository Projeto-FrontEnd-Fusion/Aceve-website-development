export default function ConfirmationPage() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-purple-100 p-4">
      <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px]  bg-gray-100 rounded-[16px] border border-purple-600 flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-base md:text-lg font-bold text-purple-700 mb-6">
          Obrigada por se inscrever como voluntário!
        </h1>
        <p className="text-xs md:text-sm text-purple-500">
          Você receberá um e-mail de confirmação em breve.
        </p>
      </div>
    </section>
  );
}
