export default interface CountryItemResponse {
    name: CountryNameResponse;
    flags: CountryFlagResponse;
  }
  
interface CountryNameResponse {
    common: string;
    official: string;
  }
interface CountryFlagResponse {
    png: string;
  }
  