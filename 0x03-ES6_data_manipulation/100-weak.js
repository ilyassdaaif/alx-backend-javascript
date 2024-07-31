// Create a WeakMap instance
export const weakMap = new WeakMap();

/**
 * Queries an API and tracks the number of calls for each endpoint.
 * @param {Object} endpoint - The API endpoint object.
 * @throws {Error} Throws an error if the endpoint is queried 5 or more times.
 */
export function queryAPI(endpoint) {
    // Get the current count for this endpoint, or 0 if it doesn't exist
    let count = weakMap.get(endpoint) || 0;

    // Increment the count
    count++;

    // Update the count in the WeakMap
    weakMap.set(endpoint, count);

    // Check if the count is 5 or more
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
}