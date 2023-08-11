"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("273b48fb-0bfa-48cf-bbd0-e901f509a23d");
  }, []);

  return null;
};
