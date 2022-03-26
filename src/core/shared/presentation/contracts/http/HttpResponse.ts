import { Exception } from '@core/shared/data/contracts';

export type HttpResponse<T = unknown> = {
  statusCode: number;
  data: T;
};

export const HttpError = (
  error: Exception,
  statusCode: number
): HttpResponse => {
  return {
    statusCode,
    data: error.message
  };
};

export class HttpResponses<T> {
  created(data: T): HttpResponse<T> {
    return {
      statusCode: 201,
      data
    };
  }

  error(error: Exception, statusCode: number): HttpResponse<Exception> {
    return {
      statusCode,
      data: error
    };
  }
}
