import { useEffect, useState } from "react";

export const useClient = (): { isClient: boolean; key: string } => {
  const [isClient, setIsClient] = useState(false);
  const key = isClient ? "client" : "server";
  useEffect(() => setIsClient(true), []);

  return { isClient, key };
};
