import { useEffect, useState } from 'react';

interface IFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

function useFetch<T>(url: string): IFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>('');

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const resualt = await response.json();
        setData(resualt);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
}

export default useFetch;

// Promise<void> =>
// Promise: در جاوااسکریپت و تایپ اسکریپت، پرامیس یک شیء است که نمایانگر یک عملیات غیرهمگام می‌باشد. پرامیس می‌تواند در آینده به یکی از دو حالت حل شده (fulfilled) یا رد شده (rejected) برسد.
//
//     void: در اینجا، void به این معنی است که این تابع پس از اجرای کامل و رسیدن به حالت حل شده، هیچ مقداری بازنمی‌گرداند. بنابراین، کدی که این تابع را فراخوانی می‌کند، نباید انتظار هیچ خروجی یا داده‌ای از آن داشته باشد.