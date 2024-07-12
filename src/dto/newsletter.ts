export enum SubscriptionRight {
  RIGHT_1 = "RIGHT_1",
  RIGHT_2 = "RIGHT_2",
}

export interface NewsletterDto {
  id: string;
  image: string;
  description: string;
  title: string;
  site: string;
  subscriptions: SubscriptionRight[];
}
