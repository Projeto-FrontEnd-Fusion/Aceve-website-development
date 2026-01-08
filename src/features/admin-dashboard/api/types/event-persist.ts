export type CreateEventPersist = {
  name: string;
  description?: string;
  totalFunding: string;
  peopleBenefited: number;
  date?: Date;
  photos: {
    photoUrl: string;
    description?: string;
  }[];
};