export interface FindLatestEventParams {
    take: number;
    orderBy: OrderBy;
}

export type OrderBy = {
    date: "asc" | "desc";
};