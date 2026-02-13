export default function Avatar({profileUrl} : {profileUrl : string}) {
  return (
    <div className="size-16 aspect-square overflow-hidden rounded-full">
      {profileUrl && (
        <img
          src={profileUrl}
          alt="profile"
          className="w-full h-full object-cover"
        ></img>
      )}
    </div>
  );
}
