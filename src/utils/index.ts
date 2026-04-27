/**
 * Format date to readable string
 */
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
};

/**
 * Delay execution (async sleep)
 */
export const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));
