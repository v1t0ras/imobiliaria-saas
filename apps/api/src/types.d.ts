declare module Express {
  export interface Request {
    tenantId?: string;
  }
}
