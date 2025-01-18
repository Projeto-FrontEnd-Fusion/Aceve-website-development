import { useForm } from "react-hook-form";
import { SchemaDonationProps } from "@/model/schemas/schemaDonation";

import { yupResolver } from "@hookform/resolvers/yup";
import { postFormDataService } from "@/services/postFormDataService";

interface schemasOptions {
  schemas: any;
}

export function useValidation(schemas: schemasOptions) {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaDonationProps>({
    resolver: yupResolver(schemas.schemas),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    postFormDataService("/seja-voluntario", data);
  };

  return { register, watch, handleSubmit: handleSubmit(onSubmit), errors };
}
