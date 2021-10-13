enum BUTTON {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  A = 'A',
  B = 'B',
}
const CLASS_PREFIX = 'button-';
const PRESSED_CLASS = `${CLASS_PREFIX}pressed`;
const buttons = [BUTTON.UP, BUTTON.DOWN, BUTTON.LEFT, BUTTON.RIGHT, BUTTON.A, BUTTON.B];

let buttonElements: NodeListOf<Element>;
let routeRef;
let events = [];
let initCalled = false;

function pressButton(button: BUTTON) {
  console.log('process button', button);
}


function onMouseDown(event: Event) {
  const elem: Element = event.target as Element;
  elem.classList.add(PRESSED_CLASS);
  const button = elem.classList[1].replace(CLASS_PREFIX, '');
  pressButton(button as BUTTON);
}

function onMouseUp(event: Event) {
  const elem: Element = event.target as Element;
  elem.classList.remove(PRESSED_CLASS);
}

function getButton(key: string): BUTTON | null {
  switch (key) {
    case 'ArrowUp':
      return BUTTON.UP;
    case 'ArrowDown':
      return BUTTON.DOWN;
    case 'ArrowLeft':
      return BUTTON.LEFT;
    case 'ArrowRight':
      return BUTTON.RIGHT;
    case 'a':
    case 'A':
    case ' ':
      return BUTTON.A;
    case 'b':
    case 'B':
    case 'Escape':
      return BUTTON.B;
    default:
      return null;
  }
}

function onKeyboardDown(event: KeyboardEvent) {
  const button = getButton(event.key);
  if (button !== null) {
    const elems = document.querySelectorAll(`.${CLASS_PREFIX}${button}`);
    elems.forEach((elem) => elem.classList.add(PRESSED_CLASS));
    pressButton(button);
  }
}

function onKeyboardUp(event: KeyboardEvent) {
  const button = getButton(event.key);
  if (button !== null) {
    const elems = document.querySelectorAll(`.${CLASS_PREFIX}${button}`);
    elems.forEach((elem) => elem.classList.remove(PRESSED_CLASS));
  }
}

export default function initController(route: unknown) {
  routeRef = route;
  if (initCalled) {
    // avoid re-init on hot reload
    console.log('skip2');
    return;
  }
  console.log('selector', buttons.map((button) => `${CLASS_PREFIX}${button}`).join(' '));
  buttonElements = document.querySelectorAll(
    buttons.map((button) => `.${CLASS_PREFIX}${button}`).join(','),
  );
  buttonElements.forEach((elem) => {
    elem.addEventListener('mousedown', onMouseDown);
    elem.addEventListener('mouseup', onMouseUp);
    elem.addEventListener('touchstart', onMouseDown);
    elem.addEventListener('touchend', onMouseUp);
  });
  document.addEventListener('keydown', onKeyboardDown);
  document.addEventListener('keyup', onKeyboardUp);
    


  // document.addEventListener('keydown', onKeyDown);
  initCalled = true;
  console.log('initController called', routeRef);
}
