/**
 * TypeORM 특유의 함정으로 쓰게되는 에러. prisma에선 타입정의가 잘 되기 때문에 쓸일이 없다.
 */
export class UndefinedPropertyError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UndefinedPropertyError';
  }
}

/**
 * 백엔드 개발자 실수를 방지하기 위한 에러. 클라이언트 개발자 실수를 방지하기 위해선 400(BadRequestException을 사용)
 */
export class InvalidValueError extends Error {
  constructor(value) {
    super(`Invalid value: ${value}`);
    this.name = 'InvalidValueError';
  }
}

export {
  ValidationError,
  BadGatewayException,
  BadRequestException,
  ConflictException,
  GoneException,
  HttpException,
  NotFoundException,
  NotAcceptableException,
  UnauthorizedException,
  ForbiddenException,
  ImATeapotException,
  MisdirectedException,
  GatewayTimeoutException,
  NotImplementedException,
  RequestTimeoutException,
  ServiceUnavailableException,
  PayloadTooLargeException,
  MethodNotAllowedException,
  PreconditionFailedException,
  UnprocessableEntityException,
  InternalServerErrorException,
  UnsupportedMediaTypeException,
  HttpVersionNotSupportedException,
} from '@nestjs/common';
