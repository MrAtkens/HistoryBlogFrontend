import React from 'react';
import {observer} from "mobx-react-lite";
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";

import quoteStore from 'stores/quotesStore'

import {
  IntroWrapper,
  IntroImage,
  IntroTitle,
  Description,
  IntroInfo,
  Date
} from './style';

const Quotes = observer(() => {
  return (
      <Carousel showArrows={true} showStatus={false} emulateTouch={true} showThumbs={false}>
        {quoteStore.quotes.map(quote => {
          return (
              <IntroWrapper key={quote.id}>
                <IntroImage>
                  <img src={quote.image.webImagePath} alt={quote.image.alt}/>
                </IntroImage>
                <IntroInfo>
                  <IntroTitle>
                    {quote.fullName}
                  </IntroTitle>
                  <Description>{quote.description}</Description>
                  <Date>{quote.date}</Date>
                </IntroInfo>
              </IntroWrapper>
          )}
        )}
      </Carousel>

  )
});

export default Quotes;
