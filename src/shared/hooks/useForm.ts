import {
  useForm as useReactHookForm,
  UseFormProps,
  FieldValues,
} from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export function useForm<T extends FieldValues>(
  schema: z.ZodType<T, any, any>,
  options?: UseFormProps<T>,
) {
  return useReactHookForm<T>({
    ...options,
    resolver: zodResolver(schema),
  });
}
