export const GTM_ID = 'GTM-T2Z3K44V';

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