"use client";

import { useEffect, useState } from "react";

function ModalProvider(): JSX.Element | null {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <>ModalProvider</>;
}

export default ModalProvider;
