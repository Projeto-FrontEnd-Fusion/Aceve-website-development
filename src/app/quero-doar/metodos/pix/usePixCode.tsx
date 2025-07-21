"use client";

import { useEffect, useState } from "react";
import { useDonationStore } from "@/zustand-store/donationvalue.store";
import { useRouter } from "next/navigation";
import { generatePixCode } from "./generatePixCode";

export function usePixCode() {
  const donationValue = useDonationStore((state) => state.donationValue);
  const [qrCodeBase64, setQrCodeBase64] = useState<string | null>(null);
  const [brCode, setBrCode] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (!donationValue) {
      router.push("/quero-doar");
      return;
    }

    (async () => {
      setLoading(true);
      const { qrCodeBase64, brCode, error } = await generatePixCode(
        donationValue
      );

      if (!error) {
        setQrCodeBase64(qrCodeBase64);
        setBrCode(brCode);
      }

      setLoading(false);
    })();
  }, [donationValue]);

  const handleCopy = () => {
    if (!brCode) return;
    navigator.clipboard.writeText(brCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return {
    qrCodeBase64,
    brCode,
    loading,
    copied,
    handleCopy,
  };
}

