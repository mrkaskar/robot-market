export enum Gesture {
  LEFT,
  RIGHT,
  UP,
  DOWN
}
let xStart: number;
let xEnd: number;
let yStart: number;
let yEnd: number;

function startTouch(e:TouchEvent):void {
  xStart = e.changedTouches[0].screenX;
  yStart = e.changedTouches[0].screenY;
}

function endTouch(e:TouchEvent, callback: (gest: Gesture) => void):void {
  xEnd = e.changedTouches[0].screenX;
  yEnd = e.changedTouches[0].screenY;

  const xDirection = Math.abs(xEnd - xStart) > Math.abs(yEnd - yStart);

  if (xDirection) {
    if (xEnd > xStart && xEnd - xStart > 50) callback(Gesture.RIGHT);
    else if (xEnd < xStart && xStart - xEnd > 50) callback(Gesture.LEFT);
  } else if (yEnd > yStart && yEnd - yStart > 50) callback(Gesture.DOWN);
  else if (yEnd < yStart && yStart - yEnd > 50) callback(Gesture.UP);
}

export function buildGesture(element: HTMLElement, callback: (gest: Gesture) => void):void {
  element.addEventListener('touchstart', startTouch, false);
  element.addEventListener('touchend', (e) => endTouch(e, callback), false);
}

export function cleanGesture(element: HTMLElement, callback: (gest: Gesture) => void):void {
  element.removeEventListener('touchstart', startTouch);
  element.removeEventListener('touchend', (e) => endTouch(e, callback));
}
