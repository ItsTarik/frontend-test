import { NewsletterDto } from "@/dto/newsletter";

interface GroupedNewslettersBySite {
  [key: string]: NewsletterDto[];
}

export const groupNewsletterBySite = (
  newsletters: NewsletterDto[]
): GroupedNewslettersBySite =>
  newsletters.reduce<GroupedNewslettersBySite>((acc, item) => {
    return {
      ...acc,
      [item.site]: acc[item.site] ? [...acc[item.site], item] : [item],
    };
  }, {});
