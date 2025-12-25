import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function SectionRedirect({ hash }: { hash: string }) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/${hash}`, { replace: true });
  }, [hash, navigate]);

  return null;
}
