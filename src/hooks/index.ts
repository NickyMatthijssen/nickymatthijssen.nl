import { globalsContext } from "@/components";
import { useContext } from "react";

export const useGlobals = () => useContext(globalsContext);

export * from "./useRecentProjects";