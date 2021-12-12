import { registerPlugin } from '@capacitor/core';

import type { GetMusicFilesPlugin } from './definitions';

const GetMusicFiles = registerPlugin<GetMusicFilesPlugin>('GetMusicFiles', {
  web: () => import('./web').then(m => new m.GetMusicFilesWeb()),
});

export * from './definitions';
export { GetMusicFiles };
