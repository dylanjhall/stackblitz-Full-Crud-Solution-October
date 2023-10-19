export interface SuccessResponseHandler<RModel> {
  handleSuccess(response: RModel): void;
}
