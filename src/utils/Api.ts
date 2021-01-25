export class Api<T> {
  rootUrl: string = 'https://jsonplaceholder.typicode.com/';
  url: string = '';
  type: (new (data: Partial<T>) => T);

  constructor(type: (new (data: Partial<T>) => T), url: string) {
    this.url = this.rootUrl + url;
    this.type = type;
  }

  create<T>(type: (new () => T)): T {
    return new type();
  }

  async get(id: number): Promise<T> {
    const response = await fetch(this.url + '/' + id);
    const json = (await response.json()) as Partial<T>;
    return new this.type(json);
  }

  async getAll(): Promise<T[]> {
    const response = await fetch(this.url);
    await sleep(2000);
    const json = (await response.json()) as Partial<T>[];
    return json.map(i => new this.type(i));
  }
}

export const sleep = (ms: number):Promise<null> => {
  return new Promise(resolve => setTimeout(resolve, ms));
}
