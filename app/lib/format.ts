/**
 * Formats a file size in bytes to a human-readable string (KB, MB, GB)
 * @param bytes - The size in bytes to format
 * @returns A formatted string with the appropriate unit (KB, MB, GB)
 */
export function formatSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const k = 1024;
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  // Round to 2 decimal places and remove trailing zeros
  const size = parseFloat((bytes / Math.pow(k, i)).toFixed(2));
  
  return `${size} ${units[i]}`;
}
export const generateUUID = () => crypto.randomUUID()
