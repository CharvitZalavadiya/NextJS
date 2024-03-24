import Card from "@/components/card";
import Link from "next/link";

export default function DefaultNotifications() {
  return (
    <Card>
      <div>Notifications</div>
      <Link href="/complex-dashboard/archieved">Archieved</Link>
    </Card>
  );
}
