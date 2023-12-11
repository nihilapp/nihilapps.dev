export class configData {
  static title = '니힐앱스';
  static description = '크고 작은 웹 프로그램을 만듭니다.';
  static keywords = 'app,앱,프로그램,program,웹개발,web development';
  static author = {
    name: 'NIHILncunia',
    url: 'https://github.com/NIHILncunia',
  };
  static type = 'website';
  static url = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://nihilapps.dev';
  static image = '';
  static version = 'v0.0.0';
  static baseApiUrl = `${this.url}/api`;
}
