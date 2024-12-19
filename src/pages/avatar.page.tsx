import { Avatar } from "@/components/alerts/avatar";

type Props = {
  user: {
    avatarUrl: string;
  };
};

function AvatarPageExample({ user }: Props) {
  return (
    <>
      <Avatar className="size-6" src={user.avatarUrl} />
      <Avatar className="size-8" src={user.avatarUrl} />
      <Avatar className="size-10" src={user.avatarUrl} />
    </>
  );
}

export default AvatarPageExample;
