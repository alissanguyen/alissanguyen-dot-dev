import * as React from 'react';
import { Form } from '@remix-run/react';
import { useTheme } from '~/providers/ThemeProvider';
import { SupportedTheme } from '~/types';

interface Props {
    subscriberEmail: string
    setSubscriberEmail: (email: string) => void;
}

const SubscriptionForm: React.FC<Props> = (props) => {
    const { theme } = useTheme();
    return (
        <Form
            id={"email-subscription-form"}
            method="post"
            action="/blog"
            className="contact-form flex flex-col text-contact-label w-full"
        >
            <p className="BlogPage__SubHeader mb-5 leading-normal text-post-bodyText text-2xl font-normal">
                Stay up to date with new tech, articles, and more!
            </p>
            <div className="flex flex-row gap-2 items-center">
                <div className="SubscribeEmail__InputWrapper flex-grow">
                    <input
                        type="email"
                        name="Subscribe"
                        id="subscribe-email"
                        value={props.subscriberEmail}
                        onChange={(e) => {
                            props.setSubscriberEmail(e.target.value);
                        }}
                        className="SubscribeEmail__Input"
                        placeholder="Enter your email" />
                </div>
                <button type="submit" className={`Subscribe__Button rounded-xl text-lg px-5 h-12 bg-blog-tagBg ${theme === SupportedTheme.LIGHT ? 'text-black' : 'text-white'}`}>Subscribe</button>
            </div>
            {/* <div className="error-message">
                Not a valid email
            </div> */}
        </Form>
    )
}

export default SubscriptionForm