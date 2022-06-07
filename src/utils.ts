export function escapeClassName(className: string) {
  return className.replace(/[\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
