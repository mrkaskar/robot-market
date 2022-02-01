export enum Gesture {
  LEFT,
  RIGHT
}
let xStart: number;
let xEnd: number;

function startTouch(e:TouchEvent):void {
  xStart = e.changedTouches[0].screenX;
}

function endTouch(e:TouchEvent, callback: (gest: Gesture) => void):void {
  xEnd = e.changedTouches[0].screenX;
  if (xStart) {
    if (xStart < xEnd) {
      callback(Gesture.RIGHT);
    } else if (xStart > xEnd) {
      callback(Gesture.LEFT);
    }
  }
}

export function buildGesture(element: HTMLElement, callback: (gest: Gesture) => void):void {
  element.addEventListener('touchstart', startTouch, false);
  element.addEventListener('touchend', (e) => endTouch(e, callback), false);
}

export function cleanGesture(element: HTMLElement, callback: (gest: Gesture) => void):void {
  element.removeEventListener('touchstart', startTouch);
  element.removeEventListener('touchend', (e) => endTouch(e, callback));
}
