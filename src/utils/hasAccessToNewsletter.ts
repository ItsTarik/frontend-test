import { SubscriptionRight } from "@/dto/newsletter";

export const hasAccessToNewsletter = (
  newsletterSubscriptions: SubscriptionRight[],
  userSubscriptions: SubscriptionRight[]
): boolean => {
  if (newsletterSubscriptions.length === 0) return true;

  return newsletterSubscriptions.some((newsletterRight) =>
    userSubscriptions.some((userRight) => newsletterRight === userRight)
  );
};
