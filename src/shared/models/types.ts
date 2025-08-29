export type FetchStatus = 'idle' | 'pending' | 'success' | 'rejected';

export interface IStatus {
  status: FetchStatus;
  error?: TypeError;
}
