// 'use client'
// import {NextUIProvider} from '@nextui-org/react'

// export function Providers({children}: { children: React.ReactNode }) {
//   return (
//     <NextUIProvider>
//       {children}
//     </NextUIProvider>
//   )
// }



"use client";

import { useEffect, useState } from "react";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return isClient ? <NextUIProvider>{children}</NextUIProvider> : <></>
}