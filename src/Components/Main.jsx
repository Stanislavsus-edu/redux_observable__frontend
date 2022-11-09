import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'

export default function Main() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/services")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);
  return
}