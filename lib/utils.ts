/**
 * Utility functions used across the application.
 */

/**
 * Combines a list of class names into a single string.
 * Filters out falsy values.
 * 
 * @param inputs - list of class name values
 * @returns concatenated class names
 */
export function cn(...inputs: Array<string | false | null | undefined>): string {
  return inputs.filter(Boolean).join(' ');
}

/**
 * Format a Date instance to a human-readable string.
 * Uses locale 'en-US'.
 *
 * @param date - the date to format
 * @returns formatted date string
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(date);
}
