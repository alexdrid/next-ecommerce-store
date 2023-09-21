"use client";

import router from "next/router";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button onClick={() => router.push('/cart')} className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {/* {cart.items.length} */}
          0
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
