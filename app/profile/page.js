import EditInfo from "@/components/profile/info/EditInfo";
import { getFetch } from "@/utils/fetch";
import { cookies } from "next/headers";

export default async function ProfilePage() {
  const token = cookies().get("token"); //this page should be server side because we want to have cookie
  const user = await getFetch("/profile/info", {
    Authorization: `Bearer ${token.value}`,
  });

  return (
    <div className="vh-70">
      <EditInfo user={user} />
    </div>
  );
}
