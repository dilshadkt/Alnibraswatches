import { ArrowDown, ArrowUp } from "lucide-react";
import { useGetMetrics } from "../../../api/admin/hooks";
import { useEffect } from "react";

const MetricSection = ({ dateRange }) => {
  const { data: metricsData, isLoading } = useGetMetrics(dateRange);

  const metrics = metricsData?.[0] || {
    EcommerceRevenue: 0,
    RevenueChangePercent: 0,
    NewCustomers: 0,
    NewCustomersChangePercent: 0,
    RepeatPurchaseRate: 0,
    RepeatRateChangePercent: 0,
    AverageOrderValue: 0,
    AOVChangePercent: 0,
    ConversionRate: 0,
    ConversionRateChangePercent: 0,
  };

  const LoadingShimmer = () => (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-8 bg-gray-200 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
      {/* Revenue Card */}
      <div className="bg-amber-50 rounded-lg p-4">
        {isLoading ? (
          <LoadingShimmer />
        ) : (
          <>
            <p className="text-gray-700 font-medium mb-1">Ecommerce Revenue</p>
            <h2 className="text-2xl font-bold mb-2">
              AED {metrics.EcommerceRevenue.toLocaleString()}
            </h2>
            <div className="flex items-center">
              <div
                className={`flex items-center ${
                  metrics.RevenueChangePercent >= 0
                    ? "text-green-500"
                    : "text-red-500"
                } mr-2`}
              >
                {metrics.RevenueChangePercent >= 0 ? (
                  <ArrowUp size={16} />
                ) : (
                  <ArrowDown size={16} />
                )}
                <span className="text-sm">
                  {Math.abs(metrics.RevenueChangePercent)}%
                </span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* New Customers */}
      <div className="bg-green-50 rounded-lg p-4">
        {isLoading ? (
          <LoadingShimmer />
        ) : (
          <>
            <p className="text-gray-700 font-medium mb-1">New Customers</p>
            <h2 className="text-2xl font-bold mb-2">{metrics.NewCustomers}</h2>
            <div className="flex items-center">
              <div
                className={`flex items-center ${
                  metrics.NewCustomersChangePercent >= 0
                    ? "text-green-500"
                    : "text-red-500"
                } mr-2`}
              >
                {metrics.NewCustomersChangePercent >= 0 ? (
                  <ArrowUp size={16} />
                ) : (
                  <ArrowDown size={16} />
                )}
                <span className="text-sm">
                  {Math.abs(metrics.NewCustomersChangePercent)}%
                </span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Repeat Purchase Rate */}
      <div className="bg-blue-50 rounded-lg p-4">
        {isLoading ? (
          <LoadingShimmer />
        ) : (
          <>
            <p className="text-gray-700 font-medium mb-1">
              Repeat Purchase Rate
            </p>
            <h2 className="text-2xl font-bold mb-2">
              {metrics.RepeatPurchaseRate}%
            </h2>
            <div className="flex items-center">
              <div
                className={`flex items-center ${
                  metrics.RepeatRateChangePercent >= 0
                    ? "text-green-500"
                    : "text-red-500"
                } mr-2`}
              >
                {metrics.RepeatRateChangePercent >= 0 ? (
                  <ArrowUp size={16} />
                ) : (
                  <ArrowDown size={16} />
                )}
                <span className="text-sm">
                  {Math.abs(metrics.RepeatRateChangePercent)}%
                </span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Average Order Value */}
      <div className="bg-blue-50 rounded-lg p-4">
        {isLoading ? (
          <LoadingShimmer />
        ) : (
          <>
            <p className="text-gray-700 font-medium mb-1">
              Average Order Value
            </p>
            <h2 className="text-2xl font-bold mb-2">
              AED {metrics.AverageOrderValue.toLocaleString()}
            </h2>
            <div className="flex items-center">
              <div
                className={`flex items-center ${
                  metrics.AOVChangePercent >= 0
                    ? "text-green-500"
                    : "text-red-500"
                } mr-2`}
              >
                {metrics.AOVChangePercent >= 0 ? (
                  <ArrowUp size={16} />
                ) : (
                  <ArrowDown size={16} />
                )}
                <span className="text-sm">
                  {Math.abs(metrics.AOVChangePercent)}%
                </span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Conversion Rate */}
      <div className="bg-red-50 rounded-lg p-4">
        {isLoading ? (
          <LoadingShimmer />
        ) : (
          <>
            <p className="text-gray-700 font-medium mb-1">Conversion rate</p>
            <h2 className="text-2xl font-bold mb-2">
              {metrics.ConversionRate}%
            </h2>
            <div className="flex items-center">
              <div
                className={`flex items-center ${
                  metrics.ConversionRateChangePercent >= 0
                    ? "text-green-500"
                    : "text-red-500"
                } mr-2`}
              >
                {metrics.ConversionRateChangePercent >= 0 ? (
                  <ArrowUp size={16} />
                ) : (
                  <ArrowDown size={16} />
                )}
                <span className="text-sm">
                  {Math.abs(metrics.ConversionRateChangePercent)}%
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MetricSection;
