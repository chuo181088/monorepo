import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,        // 5 min antes de considerar datos "viejos"
        gcTime: 1000 * 60 * 10,          // 10 min en caché
        retry: 1,                         // Solo 1 reintento
        refetchOnWindowFocus: false,      // 👈 CRÍTICO para UX
        refetchOnReconnect: false,
      },
    },
  });

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreload: "intent",             // 👈 Precarga rutas al hacer hover
    defaultPreloadStaleTime: 1000 * 60,   // 1 min
  });

  return router;
};