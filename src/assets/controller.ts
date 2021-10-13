enum BUTTON {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  A = 'A',
  B = 'B'
}


let routeRef;
let events = [];
let initCalled = false;

const CLASS_PREFIX = 'button-';

let button: BUTTON = BUTTON.UP;

export default function initController(route: unknown) {
  routeRef = route;
  if (initCalled) {
    // avoid re-init on hot reload
    console.log('skip2');
    return;
  }
  document.addEventListener('keydown', onKeyDown);
  initCalled = true;
  console.log('initController called', routeRef);
}
