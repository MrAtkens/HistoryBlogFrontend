import React from 'react';
import {observer} from "mobx-react-lite";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import quotes from 'stores/quotesStore'

import {
  IntroWrapper,
  IntroImage,
  IntroTitle,
  Desciption,
  IntroInfo,
  Date
} from './style';

const Quotes = observer(() => {

  return (
      <Carousel showArrows={true} showStatus={false} emulateTouch={true}>
        {quotes.getQuotesTable.map(quote => {
          return (
              <IntroWrapper key={quote.id}>
                <IntroImage>
                  <img src={quote.image.webImagePath} alt={quote.image.alt}/>
                </IntroImage>
                <IntroInfo>
                  <IntroTitle>
                    {quote.fullName}
                  </IntroTitle>
                  <Desciption>{quote.description}</Desciption>
                  <Date>{quote.date}</Date>
                </IntroInfo>
              </IntroWrapper>
          )}
        )}
      </Carousel>
  )
});

export default Quotes;
