export class PageSizeOptions {
  displayName: string;
  pageSize: number;

  constructor(config: any) {
    config = config || {};
    this.displayName = config.displayName;
    this.pageSize = config.pageSize;
  }
}
