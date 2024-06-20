export default class HttpHeader {
    name?: string;
  
    value: any;
  
    public constructor(init?: Partial<HttpHeader>) {
      Object.assign(this, init);
    }
  }
