import React, { useState } from 'react';
import Input from '../input/input';
import Button from '../button/button';
import {
  NewsletterWrapper,
  NewsletterInnerWrapper,
  NewsletterTitle,
  NewsletterDescription,
  NewsletterInputWrapper,
  ErrorMessage,
  SuccessMessage,
} from './newsletter.style';

type NewsletterProps = {};

const Newsletter: React.FunctionComponent<NewsletterProps> = ({ ...props }) => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

  };
  return (
    <NewsletterWrapper {...props}>
      <NewsletterInnerWrapper>
        <NewsletterTitle>
          Get The Best Of All Hands Delivered To Your Inbox
        </NewsletterTitle>
        <NewsletterDescription>
          Subscribe to our newsletter and stay updated.
        </NewsletterDescription>

        <NewsletterInputWrapper onSubmit={handleSubmit}>
          {success ? (
            <SuccessMessage>{success} 🙂</SuccessMessage>
          ) : (
            <>
              <Input
                type="email"
                name="email"
                placeholder="Write your email here"
                onChange={handleChange}
                value={email}
                required={true}
              />
              <Button title="Subscribe" type="submit" />
            </>
          )}
        </NewsletterInputWrapper>
        {error && (
          <ErrorMessage
            dangerouslySetInnerHTML={{ __html: `<span>*</span>${error}` }}
          />
        )}
      </NewsletterInnerWrapper>
    </NewsletterWrapper>
  );
};

export default Newsletter;
