"use server";
import { promises as fs } from "fs";
import { SubscriptionRight } from "@/dto/newsletter";
import { UserDto } from "@/dto/user";
import { apiClient } from "@/http/apiClient";
import { revalidatePath } from "next/cache";

export async function updateUser(formData: FormData) {
  const user = await apiClient.getCurrentUser();

  const right1 = formData.get(SubscriptionRight.RIGHT_1);
  const right2 = formData.get(SubscriptionRight.RIGHT_2);

  const newSubscriptionRight = [
    ...(right1 === "on" ? [SubscriptionRight.RIGHT_1] : []),
    ...(right2 === "on" ? [SubscriptionRight.RIGHT_2] : []),
  ];

  const newUser: UserDto = {
    ...user,
    subscriptions: newSubscriptionRight,
  };

  await fs.writeFile(
    process.cwd() + "/src/mocks/default-user.json",
    JSON.stringify(newUser, null, 4)
  );

  revalidatePath("/");
}
