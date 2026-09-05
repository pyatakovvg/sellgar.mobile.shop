import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';

export const dateLocaleFormat = (isoString: string) => format(parseISO(isoString), 'd MMMM yyyy', { locale: ru });
