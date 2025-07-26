export const PixQRCode = ({
  loading,
  qrCodeBase64,
}: {
  loading: boolean;
  qrCodeBase64: string | null;
}) => {
  return (
    <div className="flex justify-center">
      {loading ? (
        <div className="w-40 h-40 object-contain bg-zinc-300 rounded" />
      ) : qrCodeBase64 ? (
        <img
          src={qrCodeBase64}
          alt="QR Code para pagamento PIX"
        />
      ) : (
        <div className="text-red-500 text-center">
          Erro ao gerar QR Code.
        </div>
      )}
    </div>
  );
}

