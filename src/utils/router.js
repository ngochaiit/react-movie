import { pathToRegexp } from 'path-to-regexp'

const cache$1 = {}
const cacheLimit$1 = 10000
let cacheCount$1 = 0

function compilePath$1(path, options) {
  const cacheKey = `${options.end}${options.strict}${options.sensitive}`
  const pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {})
  if (pathCache[path]) return pathCache[path]
  const keys = []
  const regexp = pathToRegexp(path, keys, options)
  const result = {
    regexp,
    keys,
  }

  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result
    cacheCount$1 += 1
  }

  return result
}

// eslint-disable-next-line import/prefer-default-export
export function matchPath(pathname, options = {}) {
  const convertedOptions = typeof options === 'string' ? {
    path: options,
  } : options
  const convertedOptions$exact = convertedOptions.exact
  const exact = !convertedOptions$exact ? false : convertedOptions$exact
  const convertedOptions$strict = convertedOptions.strict
  const strict = !convertedOptions$strict ? false : convertedOptions$strict
  const convertedOptions$sensitive = convertedOptions.sensitive
  const sensitive = !convertedOptions$sensitive ? false : convertedOptions$sensitive
  const paths = [].concat(convertedOptions.path)
  return paths.reduce((matched, path) => {
    if (!path) return null
    if (matched) return matched

    const compilePath = compilePath$1(path, {
      end: exact,
      strict,
      sensitive,
    })
    const { regexp } = compilePath
    const { keys } = compilePath

    const match = regexp.exec(pathname)
    if (!match) return null
    const url = match[0]
    const values = match.slice(1)
    const isExact = pathname === url
    if (exact && !isExact) return null
    return {
      path,
      url: path === '/' && url === '' ? '/' : url,
      isExact,
      params: keys.reduce((memo, key, index) => {
        const newMemo = memo
        newMemo[key.name] = values[index]
        return newMemo
      }, {}),
    }
  }, null)
}
