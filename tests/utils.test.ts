import { formatDate, sleep } from '../src/utils';

describe('formatDate', () => {
  it('should return a formatted date string', () => {
    const date = new Date('2026-01-01');
    const result = formatDate(date);
    expect(result).toContain('2026');
  });
});

describe('sleep', () => {
  it('should resolve after given ms', async () => {
    await expect(sleep(10)).resolves.toBeUndefined();
  });
});
