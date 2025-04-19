import Loading from "@/components/profile/transactions/Loading";
import Table from "@/components/profile/transactions/Table";
import { Suspense } from "react";

export default function TransactionsPage({ searchParams }) {
  const params = new URLSearchParams(searchParams);
  // --params.toString() -> page=1
  return (
    <Suspense key={params.toString()} fallback={<Loading />}>
      <Table params={params.toString()} />
    </Suspense>
  );
}
