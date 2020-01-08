import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { fetchRequested } from "../modules/news";

export default function useNewsActions() {
  const dispatch = useDispatch();
  const onUpdate = useCallback(() => dispatch(fetchRequested()), [dispatch]);
  return { onUpdate };
}