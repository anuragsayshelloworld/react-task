import { useContext } from "react";
import BlogContext from "../context/BlogContext";

export default function useBlog() {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlog must be used within a BlogProvider");
  }
  return context;
}
