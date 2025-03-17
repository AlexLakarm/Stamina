export const GTM_ID = 'GTM-VOTRE-ID'; // Remplacer par votre ID GTM

type PageView = {
  page_path: string;
  page_title: string;
};

export const pageview = ({ page_path, page_title }: PageView) => {
  window.dataLayer?.push({
    event: 'page_view',
    page_path,
    page_title,
  });
}; 