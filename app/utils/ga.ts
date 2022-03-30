export function injectGA(): any {
  if (typeof window == "undefined") {
    return;
  }
  // @ts-ignore
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    // @ts-ignore
    window.dataLayer.push(arguments);
  }
  // @ts-ignore
  gtag("js", new Date());
  // @ts-ignore
  gtag("config", "G-4J0L3BTY29");
}
