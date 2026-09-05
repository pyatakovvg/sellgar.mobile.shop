export interface CreateAndSendInput {
  method: string;
  url: string;
  params: Record<string, unknown>;
}
