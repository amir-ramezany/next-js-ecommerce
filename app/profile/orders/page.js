import Loading from "@/components/profile/orders/Loading";
import Table from "@/components/profile/orders/Table";
import { Suspense } from "react";

export default function OrdersPage({ searchParams }) {
  const params = new URLSearchParams(searchParams);
  // --params.toString() -> page=1
  return (
    <Suspense key={params.toString()} fallback={<Loading />}>
      <Table params={params.toString()} />
    </Suspense>
  );
}
