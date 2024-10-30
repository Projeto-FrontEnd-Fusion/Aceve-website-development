import { useForm } from "react-hook-form";
import { SchemaDonationProps } from "@/model/schemas/schemaDonation";

import { yupResolver } from "@hookform/resolvers/yup";

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
  };

  return { register, watch, handleSubmit: handleSubmit(onSubmit), errors };
}
