import Marquee from "@/components/ui/Marquee";
import { FeatureCard } from "./FeatureCard";
import { flipCardData } from "@/lib/url";

function MarkCards() {
  return (
    <div className="storybook-fix relative flex h-full max-h-96 min-h-72 w-full min-w-72 items-center justify-center overflow-hidden rounded border bg-background">
      <Marquee pauseOnHover>
        {flipCardData.map((card, index) => (
          <FeatureCard
            key={index}
            /* image={card.image} */
            title={card.title}
            description={card.description}
            subtitle={card.subtitle}
            href={card.href}
            icon={card.icon}
          />
        ))}
      </Marquee>
    </div>
  );
}

export default MarkCards;
