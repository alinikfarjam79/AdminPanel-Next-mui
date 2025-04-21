"use client";
import { useUser } from "@/context/userContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";

function useAuth() {
  const [status, setStatus] = useState();
  const router = useRouter();
  const { user } = useUser();
  useEffect(() => {
    if (user == null) {
      setStatus(true);
      router.push("/");
    }
    setStatus(false);
  }, []);

  return status;
}

export default useAuth;
