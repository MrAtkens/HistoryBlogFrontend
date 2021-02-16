import * as React from 'react';
import Image from 'material-ui-image';
import { IoMdArrowRoundBack } from 'react-icons/io';
import {
  NotFoundWrapper,
  NotFoundContent,
  NotFoundImage,
  Goback,
  Icon,
} from './style';
import {Link} from "react-router-dom";

interface NotFoundProps {}

const NotFound: React.FunctionComponent<NotFoundProps> = () => {

  return (
    <NotFoundWrapper>
      <NotFoundContent>
        <h1>This Page Was Lost</h1>
        <p>
          The Page You are looking for isn’t available. Try to search again or
          use the Go Back button below.
        </p>
        <Goback>
          <Link to="/">
            <Icon>
              <IoMdArrowRoundBack />
            </Icon>
            Go Back
          </Link>
        </Goback>
      </NotFoundContent>
      <NotFoundImage>
        <Image src={""} alt="author" />
      </NotFoundImage>
    </NotFoundWrapper>
  );
};

export default NotFound;
