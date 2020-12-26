import { useIntl } from 'react-intl';
import { LangKeys } from 'lang';

export const useTranslate = (): ((
  langKey: LangKeys,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  values?: Record<string, any> | undefined
) => string) => {
  const intl = useIntl();

  return (langKey, values) => intl.formatMessage({ id: langKey }, values);
};
