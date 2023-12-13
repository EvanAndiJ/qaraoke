import { Suspense } from 'react';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Settings',
};
 
export default async function Feed() {
    // const revenue = await fetchRevenue();
    
  return (
    <>
      {/* <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}> */}
      <h1 className={`mb-4 text-xl md:text-2xl`}>
        Settings
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
      {/* <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense> 
        <Suspense fallback={<LatestInvoicesSkeleton/>}>
          <LatestInvoices/>
        </Suspense> */}
      </div>
    </>
  );
}