'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { pageview } from '@/utils/gtm';

export function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      pageview({
        page_path: pathname,
        page_title: document.title,
      });
    }
  }, [pathname]);

  return null;
} 