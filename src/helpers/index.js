export function randomString(length = 7) {
  const alphaUpperLow = 65
  const alphaUpperHig = 90
  const alphaLowerLow = 97
  const alphaLowerHigh = 122

  function randomCharacter() {
    let group = Boolean(Math.floor(Math.random() * 2))
    let code
    code = group ? Math.floor(Math.random() * (alphaUpperHig - alphaUpperLow) + alphaUpperLow) : Math.floor(Math.random() * (alphaLowerHigh - alphaLowerLow) + alphaLowerLow)

    return String.fromCharCode(code)
  }
  return Array.from({ length })
    .map(i => randomCharacter())
    .join('')
}
