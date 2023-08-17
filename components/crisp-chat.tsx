"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("43670a61-502f-4191-8647-4c6172964e28");
  }, []);

  return null;
};
