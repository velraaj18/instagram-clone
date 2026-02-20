import SettingsForm from "@/app/components/settingsForm";
import { GetProfileDetails } from "./actions";
import { Button } from "@radix-ui/themes";
import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";

const Settings = async () => {
  const profile = await GetProfileDetails();
  const session = await auth();

  return (
    <div className="max-w-md mx-auto">
      <h1 className="font-bold text-2xl mb-4">Profile Section</h1>
      <SettingsForm userDetails={profile ?? undefined} />
      {session && (
        <form
          action={async () => {
            "use server";
            await signOut();
            redirect('/')
          }}
        >
          <div className="mt-4 flex justify-end">
            <Button type="submit" color="red">
              Logout
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Settings;
