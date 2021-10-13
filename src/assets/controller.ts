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
const SELECTED_CLASS = 'link-selected';
const buttons = [BUTTON.UP, BUTTON.DOWN, BUTTON.LEFT, BUTTON.RIGHT, BUTTON.A, BUTTON.B];
let keypressed = false;

let buttonElements: NodeListOf<Element>;
let initCalled = false;

function scrollToElem(elem: HTMLElement) {
  const scroller = document.querySelector('.frame__scroll') as HTMLElement;
  scroller.scrollTo(0, elem.offsetTop - 120);
}

function scroll(offset: number) {
  const scroller = document.querySelector('.frame__scroll') as HTMLElement;
  scroller.scrollTo(0, scroller.scrollTop + offset);
}

function selectLink(next: boolean) {
  const links = document.querySelectorAll('a');
  if (links.length <= 0) {
    return;
  }

  let nextIndex;
  for (let index = 0; index < links.length; index += 1) {
    // console.log('linkElem', linkElem);
    const linkElem = links[index];
    if (linkElem.classList.contains(SELECTED_CLASS)) {
      if (next) {
        nextIndex = index + 1;
        if (nextIndex >= links.length) {
          nextIndex = 0;
        }
      } else {
        nextIndex = index - 1;
        if (nextIndex < 0) {
          nextIndex = links.length - 1;
        }
      }
      links[nextIndex].classList.add(SELECTED_CLASS);
      linkElem.classList.remove(SELECTED_CLASS);
      scrollToElem(links[nextIndex]);
      return;
    }
  }
  // no existed selection, select the first or last one
  nextIndex = next ? 0 : links.length - 1;
  links[nextIndex].classList.add(SELECTED_CLASS);
  scrollToElem(links[nextIndex]);
}

/* eslint-disable no-case-declarations */
function pressButton(button: BUTTON) {
  switch (button) {
    case BUTTON.B:
      const backLink = document.querySelector('.back');
      if (backLink) {
        (backLink as HTMLElement).click();
      }
      break;
    case BUTTON.A:
      const selectedLink = document.querySelector(`.${SELECTED_CLASS}`);
      if (selectedLink) {
        (selectedLink as HTMLElement).click();
      }
      break;
    case BUTTON.DOWN:
      selectLink(true);
      break;
    case BUTTON.UP:
      selectLink(false);
      break;
    case BUTTON.RIGHT:
      scroll(200);
      break;
    case BUTTON.LEFT:
      scroll(-200);
      break;
    default:
  }
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
  if (keypressed) {
    return;
  }
  const button = getButton(event.key);
  if (button !== null) {
    event.preventDefault();
    keypressed = true;
    const elems = document.querySelectorAll(`.${CLASS_PREFIX}${button}`);
    elems.forEach((elem) => elem.classList.add(PRESSED_CLASS));
    pressButton(button);
  }
}

function onKeyboardUp(event: KeyboardEvent) {
  const button = getButton(event.key);
  if (button !== null) {
    keypressed = false;
    const elems = document.querySelectorAll(`.${CLASS_PREFIX}${button}`);
    elems.forEach((elem) => elem.classList.remove(PRESSED_CLASS));
  }
}

export default function initController(route: unknown) {
  // routeRef = route as VueRoute;
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
  // avoid calling init multiple times on Vue component hot reload
  initCalled = true;
}
