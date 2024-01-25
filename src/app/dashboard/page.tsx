"use client";

import { useUser } from "@clerk/nextjs"
import Image from "next/image";

export default function DashBoardPage() {
  const { user } = useUser();

  if (!user) return null;

  return (
    <div className="flex flex-col items-center mt-10 gap-5">
      <h1>DashBoardPage</h1>
      <Image className="rounded-full" src={user.imageUrl} width={150} height={150} alt="user-image" />
      <p><b>{user.fullName}</b></p>
      <p>User ID: <b>{user.id}</b></p>
    </div>
  )
}