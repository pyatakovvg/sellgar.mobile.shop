import moment from 'moment';

interface IOptions {
  useSeconds?: boolean;
}

export const timeFormat = (date: string, options?: IOptions) => {
  if (options?.useSeconds) {
    return moment(date).format('HH:mm:ss');
  }
  return moment(date).format('HH:mm');
};
