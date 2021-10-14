// Add a top margin so that it's possible to scroll and hide toolbars on mobile
export const MOBILE_TOP_MARGIN_SIZE = 25;

export function isMobile(): boolean {
  // return true;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
