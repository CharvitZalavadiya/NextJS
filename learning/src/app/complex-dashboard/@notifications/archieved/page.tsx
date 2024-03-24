import Card from "@/components/card";
import Link from "next/link";

export default function ArchievedNotifications() {
  return (
    <Card>
      <div>Archieved</div>
      <Link href="/complex-dashboard">Normal</Link>
    </Card>
  );
}
