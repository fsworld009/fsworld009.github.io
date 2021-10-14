import { MOBILE_TOP_MARGIN_SIZE } from '~/assets/utils';

export default function scrollBehavior(to, from, savedPosition) {
  return { x: 0, y: MOBILE_TOP_MARGIN_SIZE };
}
