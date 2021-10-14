import { onMounted, useRoute } from '@nuxtjs/composition-api';
import useScore from '../store/score';

export default function pageSetup(): void {
  onMounted(() => {
    const route = useRoute();
    const score = useScore();
    score.viewPage(route);
  });
}
