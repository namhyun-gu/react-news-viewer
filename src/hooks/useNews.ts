import { useSelector } from "react-redux";
import { RootState } from "../app/rootReducer";

export default function useNews() {
  const news = useSelector((state: RootState) => state.news);
  return news;
}
