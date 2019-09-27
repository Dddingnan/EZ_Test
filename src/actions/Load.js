export const LOADING_SHOW = 'Load/LOADING_SHOW';
export const LOADING_HIDE = 'Load/LOADING_HIDE';

export function loadingShow() {
  return {
    type: LOADING_SHOW,
  };
}

export function loadingHide() {
  return {
    type: LOADING_HIDE,
  };
}
