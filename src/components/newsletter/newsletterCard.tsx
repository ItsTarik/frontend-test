import { NewsletterDto, SubscriptionRight } from "@/dto/newsletter";
import { Button } from "@/components/system/button";
import { H3 } from "@/components/system/heading/h3";
import { hasAccessToNewsletter } from "@/utils/hasAccessToNewsletter";

interface CardProps {
  newsletter: NewsletterDto;
  userSubscriptions: SubscriptionRight[];
}

export function NewsletterCard({
  newsletter: { title, description, subscriptions },
  userSubscriptions,
}: CardProps) {
  const hasAccess = hasAccessToNewsletter(subscriptions, userSubscriptions);

  return (
    <article className="w-full md:h-[350px] h-[300px] flex flex-col items-center transition-all">
      <div className="bg-lowContrast w-full md:h-[200px] h-[150px] flex justify-center items-center p-2">
        <H3 className="text-white card-text-shadow text-center" title={title} />
      </div>
      <p className="text-sm md:text-base font-sans p-1 text-center">
        {description}
      </p>
      <div className="mt-auto mb-2">
        <Button
          label={hasAccess ? "S'inscrire" : "S'abonner"}
          variant={hasAccess ? "primary" : "secondary"}
        />
      </div>
    </article>
  );
}
