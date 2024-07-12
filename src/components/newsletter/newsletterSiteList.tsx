import { NewsletterCard } from "./newsletterCard";
import { NewsletterDto } from "@/dto/newsletter";
import { UserDto } from "@/dto/user";
import { H2 } from "../system/heading/h2";

interface NewsletterSiteProps {
  items: NewsletterDto[];
  site: NewsletterDto["site"];
  user: UserDto;
}

export function NewsletterSiteList({ items, site, user }: NewsletterSiteProps) {
  return (
    <div>
      <div className="my-2 space-y-2">
        <H2 title={site} />
        <div className="h-1 bg-red-600 w-[70px] rounded-lg" />
      </div>
      <ul className="grid justify-items-center lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-5 md:gap-3 gap-2 mt-5">
        {items.map((newsletter) => (
          <li key={newsletter.id} className="w-full">
            <NewsletterCard
              newsletter={newsletter}
              userSubscriptions={user.subscriptions}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
