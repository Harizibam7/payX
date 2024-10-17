import {PrismaClient} from "@repo/db/client"
export default function Home() {
  const client = new PrismaClient();
  
  return (
      <div className="text-4x">
        Harizibam
      </div>
  );
}
