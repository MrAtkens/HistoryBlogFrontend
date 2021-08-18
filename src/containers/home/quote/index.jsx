import React from 'react';
import {observer} from "mobx-react-lite";
import { Carousel } from 'react-responsive-carousel';
import Image from "material-ui-image";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import quoteStore from 'stores/quotesStore'

import {
  IntroWrapper,
  IntroImage,
  IntroTitle,
  Desciption,
  IntroInfo,
  Date
} from './style';

const Quotes = observer(({posts}) => {
  console.log("Posts JSON")
  console.log(posts)
  return (
      <Carousel showArrows={true} showStatus={false} emulateTouch={true}>
        {quoteStore.quotes.map(quote => {
          return (
              <IntroWrapper key={quote.id}>
                <IntroImage>
                  <Image src={quote.image.webImagePath} alt={quote.image.alt}/>
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
