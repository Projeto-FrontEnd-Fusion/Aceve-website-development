import { createStaticPix } from 'pix-utils';
import type { PixStaticObject } from 'pix-utils';
import { off } from 'process';

export const generatePixCode = async (amount: number) => {

  console.log("Chamando generatePixCode com valor:", amount);


  if (!amount || amount <= 0) {
    console.error('Valor inválido para doação.');
    return { qrCodeBase64: null, brCode: null, error: "Valor inválido para doação." };

  }

  try {
    const pixResult = await createStaticPix({
      merchantName: 'Elizangela M. dos Santos',
      merchantCity: 'Sao Paulo',
      pixKey: '+5511964771181',
      infoAdicional: '',
      transactionAmount: amount,
    });

    //throw new Error ("Erro Simulado ao gerar qr code")

    pixResult.throwIfError();

    const validPix = pixResult as PixStaticObject;

    const qrCodeBase64 = await validPix.toImage();
    const brCode = await validPix.toBRCode();

    return { qrCodeBase64, brCode, error: null };

  } catch (err: any) {
    console.error("Erro ao gerar código PIX:", err.message || err);
    return { qrCodeBase64: null, brCode: null, error: "Erro ao gerar código PIX." };
  }
};

