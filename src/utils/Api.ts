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
    await asyncDebug();
    const json = (await response.json()) as Partial<T>;
    return new this.type(json);
  }

  async getAll(): Promise<T[]> {
    const response = await fetch(this.url);
    await asyncDebug();
    const json = (await response.json()) as Partial<T>[];
    return json.map(i => new this.type(i));
  }
}

export const asyncDebug = async () => {
  await sleep(500);
  await randomError(0.3);
}

export const sleep = (ms: number):Promise<null> => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const randomError = (posobility: number):Promise<null> => {
  return new Promise( (resolve, reject) => {
    if (Math.random() > posobility) {
      resolve(null);
    } else {
      reject('Loading Error');
    }
  });
}


