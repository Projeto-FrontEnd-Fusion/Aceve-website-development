import { SchemaTalkToUsProps } from "@/model/schemas/schemaTalkToUs";
import { useAxiosClient } from "./useAxiosClient";
import { SchemaBeVolunteerProps } from "@/model/schemas/schemaBeVolunteer";

export const postFormDataService = async (
  endpoint: string,
  data: SchemaTalkToUsProps | SchemaBeVolunteerProps
) => {
  const response = await useAxiosClient().post(endpoint, data);
  console.log(`Post created at ${endpoint}`);

  return response.data;
};
