import { usePathname } from '@/i18n/routing'

const useIsCurrentPage = () => {
  const _pathname = usePathname()
  return {
    isCurrentPath: (pathname: string, depth = 2) => {
      return _pathname.split('/').at(depth) === pathname.split('/').at(depth)
    },
    pathname: _pathname,
  }
}
export default useIsCurrentPage
