import { WebPlugin } from '@capacitor/core';

import type { GetMusicFilesPlugin } from './definitions';

export class GetMusicFilesWeb extends WebPlugin implements GetMusicFilesPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
