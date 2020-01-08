import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { fetchRequested } from "../modules/news";

export default function useNewsActions() {
  const dispatch = useDispatch();
  const requestFetch = useCallback(() => dispatch(fetchRequested()), [dispatch]);
  return { requestFetch };
}