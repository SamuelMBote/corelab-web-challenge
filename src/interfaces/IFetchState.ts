export default interface IFetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}
