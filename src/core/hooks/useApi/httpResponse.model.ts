import HttpStatus from "./httpStatus.enum";

export default interface HttpResponse {
  status?: HttpStatus,
  loading: boolean,
  error?: any,
  data?: any,
  success: boolean,
}