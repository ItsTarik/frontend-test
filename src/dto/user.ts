import { SubscriptionRight } from "./newsletter";

export interface UserDto {
  subscriptions: SubscriptionRight[];
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
}
