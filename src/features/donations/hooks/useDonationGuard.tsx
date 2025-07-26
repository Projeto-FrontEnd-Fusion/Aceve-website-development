"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDonationStore } from "@/features/donations/stores/donationvalue.store";

export function useDonationGuard(redirectTo: string = "/quero-doar") {
  const donationValue = useDonationStore((state) => state.donationValue);
  const router = useRouter();

  useEffect(() => {
    if (!donationValue || donationValue <= 0) {
      router.push(redirectTo);
    }
  }, [donationValue, redirectTo, router]);
}

