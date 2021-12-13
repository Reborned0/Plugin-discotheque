export interface GetMusicFilesPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  getMusicFiles(options:{internal: boolean}): Promise<{ music: {title:string,
      artist:string,album:string,
      year:number}[] }>;
}
