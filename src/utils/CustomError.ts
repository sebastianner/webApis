class CustomError extends Error {
  status: number;
  constructor(message: string, status: number, stack: string) {
    super();
    this.status = status;
  }
}

export default CustomError;
