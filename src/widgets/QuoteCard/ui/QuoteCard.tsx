import { Quote } from "@/entities/quote/model/types";

type QuoteCardProps = {
  quote: Quote;
};

const QuoteCard = ({ quote }: QuoteCardProps) => {
  return (
    <div>
      <p>"{quote.text}"</p>
      <p>- {quote.author}</p>
    </div>
  );
};

export default QuoteCard;
