import { Dispatch } from 'react';
import { create } from 'zustand';

interface IDonationStore {
  donationValue: number | null;
  setDonationValue: (value: number | null) => void;
}

export const useDonationStore = create<IDonationStore>((set) => ({
  donationValue: null,
  setDonationValue: (value: number | null) => set((state) => ({ donationValue: value })),
}));
