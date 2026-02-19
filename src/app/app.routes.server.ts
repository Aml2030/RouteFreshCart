


import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'productdetails/:id',
    renderMode: RenderMode.Server, // Tells the build to skip this page
  },
  {
    path: 'shippingaddress/:id',
    renderMode: RenderMode.Server, // Tells the build to skip this page
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
