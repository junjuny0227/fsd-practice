"use client";
import React from "react";

import { useState } from "react";
import { getRandomQuote } from "@/entities/quote/utils/getRandomQuote";
import { Quote } from "@/entities/quote/model/types";
import QuoteCard from "@/widgets/QuoteCard/ui/QuoteCard";

export function QuotesPage() {
  const [quote, setQuote] = useState<Quote | null>(null);

  return (
    <div>
      <div>
        <h1>✨ 랜덤 명언 ✨</h1>

        {quote && <QuoteCard quote={quote} />}

        <button onClick={() => setQuote(getRandomQuote())}>
          새로운 명언 보기
        </button>
      </div>
    </div>
  );
}
