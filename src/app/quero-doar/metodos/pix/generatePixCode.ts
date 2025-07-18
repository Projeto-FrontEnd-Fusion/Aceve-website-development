import { createStaticPix } from 'pix-utils';
import type { PixStaticObject } from 'pix-utils';

export const generatePixCode = async (amount: number) => {
  
  if (!amount || amount <= 0) {
    console.error('Valor inválido para doação.');
    return { qrCodeBase64: null, brCode: null, error: "Valor inválido para doação." }; 
  
  }
  const pixResult = await createStaticPix({
    merchantName: 'Elizangela M. dos Santos',
    merchantCity: 'Sao Paulo',
    pixKey: '+5511964771181',
    infoAdicional: '',
    transactionAmount: amount,
  })
  pixResult.throwIfError();


  
  if (typeof (pixResult as any).toImage !== "function"){
    console.error('Erro ao gerar código Pix.');
    return { qrCodeBase64: null, brCode: null, error: "Erro ao gerar código Pix." };
  } 

 const validPix= pixResult as PixStaticObject
  const qrCodeBase64 = await validPix.toImage(); 
  const brCode = await validPix.toBRCode(); 

  return { qrCodeBase64, brCode, error: null };
};
