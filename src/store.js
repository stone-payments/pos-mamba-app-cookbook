import MambaStore from '@mamba/store';

export const INITIAL_DATA = {};

const store = MambaStore(INITIAL_DATA);

if (__DEV__) {
  window.MambaStore = store;
}

export default store;
