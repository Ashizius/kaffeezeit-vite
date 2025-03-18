import { PropsWithChildren } from "react";

export type TFieldProps = PropsWithChildren<{
  className: string;
  error: string;
  label: string;
}>