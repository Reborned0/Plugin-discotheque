export interface GetMusicFilesPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
