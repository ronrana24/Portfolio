import { useEffect, useState } from "react";

export default function useFetch(url: string, options?: RequestInit) {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
 

  useEffect(() => {
    const controller = new AbortController(); // Create an AbortController instance
    const signal = controller.signal; // Get the abort signal

    const fetchData = async () => {
      setLoading(true); // Ensure loading state is set before fetch
      setError(null); // Reset error before new request

      try {
        
        const response = await fetch(url, { ...options, signal });

        if (!response.ok) {
          throw new Error(`API Error: ${response.statusText}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error: any) {
        if (error.name !== "AbortError") {
          setData(null);
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort(); // Cleanup function to cancel ongoing request
    };
  }, [url, JSON.stringify(options)]); // Ensure stable dependency tracking

  return { data, loading, error };
}
