/** Escape HTML and turn `code` spans into <code> elements. */
export function rich(text: string): string {
  const esc = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  return esc.replace(/`([^`]+)`/g, '<code>$1</code>');
}
