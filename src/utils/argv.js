/**
 * 解析命令行参数
 * 例如：--date=20212102
 */
export default function (key, defaultValue = null) {
  const argv = process.argv.filter(v => v.startsWith(`--${key}=`))
  if (argv.length === 0) return defaultValue

  return argv[0].split('=')[1] || defaultValue
}
