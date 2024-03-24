import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2e57656kjCChVorBNHsvCkv9ASk",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
