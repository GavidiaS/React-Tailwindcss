import { useContext } from "react";
import { ShopyNexContext } from "../Context";

export function useShopyNexContext() {
  const context = useContext(ShopyNexContext);
  return context;
}