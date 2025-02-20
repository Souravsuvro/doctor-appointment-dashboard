/**
 * Shared interface for components that use date range filtering
 */
export interface DateRangeProps {
  /**
   * Date range string representing the time period for data filtering
   * Possible formats: 
   * - '7d': Last 7 days
   * - '30d': Last 30 days
   * - '3m': Last 3 months
   * - '12m': Last 12 months
   * - 'ytd': Year to date
   */
  dateRange: string;
}
