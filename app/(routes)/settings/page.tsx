import SettingsForm from "@/app/components/settingsForm";
import { GetProfileDetails } from "./actions";

const Settings = async () => {
  const profile = await GetProfileDetails();

  return (
    <div className="max-w-md mx-auto">
      <h1 className="font-bold text-2xl mb-4">Profile Section</h1>
      <SettingsForm userDetails = {profile}/>
      
    </div>
  );
};

export default Settings;
