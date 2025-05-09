import ProductRow from "./ProductRow";

// Order Card Component
const OrderCard = ({ order, isExpanded, toggleExpand }) => {
  const productCount = order.orderDetails.length;
  // Helper function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Status Badge Component
  const StatusBadge = ({ status }) => {
    const getStatusColor = (status) => {
      switch (status.toLowerCase()) {
        case "ordered":
          return "bg-blue-100 text-blue-800";
        case "shipped":
          return "bg-purple-100 text-purple-800";
        case "delivered":
          return "bg-green-100 text-green-800";
        case "cancelled":
          return "bg-red-100 text-red-800";
        default:
          return "bg-gray-100 text-gray-800";
      }
    };

    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
          status
        )}`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4 overflow-hidden">
      {/* Order Header */}
      <div
        className="flex items-center justify-between px-4 py-3 bg-gray-50 cursor-pointer"
        onClick={toggleExpand}
      >
        <div className="flex items-center space-x-4">
          <div className="font-medium">
            <span className="text-gray-900">Order #{order.orderId}</span>
            <span className="ml-2 text-xs text-gray-500">
              ({formatDate(order.orderDate)})
            </span>
          </div>
          <StatusBadge status={order.orderStatus} />
          <div className="text-sm text-gray-500">
            {productCount} {productCount === 1 ? "Product" : "Products"}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="font-medium text-gray-900">
              AED {order.orderAmount.toFixed(2)}
            </div>
            <div className="text-xs text-gray-500">
              {order.paymentMode !== "null"
                ? order.paymentMode
                : "Pending payment"}
            </div>
          </div>
          <svg
            className={`w-5 h-5 text-gray-400 transition-transform ${
              isExpanded ? "transform rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Order Details (Expanded) */}
      {isExpanded && (
        <div className="border-t border-gray-200">
          {/* Customer Info */}
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
            <div className="flex justify-between">
              <div>
                <span className="text-sm font-medium text-gray-500">
                  Customer:
                </span>
                <span className="ml-2 text-sm text-gray-900">
                  {order.userName}
                </span>
                <span className="ml-2 text-xs text-gray-500">
                  (ID: {order.userId})
                </span>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">
                  Transaction ID:
                </span>
                <span className="ml-2 text-sm text-gray-900">
                  {order.transactionId}
                </span>
              </div>
            </div>
          </div>

          {/* Products List */}
          <div className="divide-y divide-gray-100">
            {order.orderDetails.map((product, index) => (
              <ProductRow
                key={`${order.orderId}-${product.productId}-${index}`}
                product={product}
              />
            ))}
          </div>

          {/* Order Summary */}
          <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                <span>Payment Method: </span>
                <span className="font-medium text-gray-700">
                  {order.paymentMode !== "null"
                    ? order.paymentMode
                    : "Not specified"}
                </span>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500">Total Amount</div>
                <div className="text-lg font-medium text-gray-900">
                  AED {order.orderAmount.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderCard;
