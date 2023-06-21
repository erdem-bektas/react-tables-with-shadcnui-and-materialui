import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import { nanoid } from "nanoid";

async function getData(): Promise<Payment[]> {
  return new Array(50).fill(null).map(() => ({
    id: nanoid(),
    amount: Math.random() * 1000,
    status: 'pending',
    email: 'idk@example.com'
  }));
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="mx-auto py-10">
      <h1 className="text-xl font-serif m-8">used shadcn-ui</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
