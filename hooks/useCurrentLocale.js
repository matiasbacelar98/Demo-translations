import { useRouter } from 'next/router';

export function useCurrentLocale() {
  const router = useRouter();
  const currentLocale = router.locale;

  return currentLocale;
}
