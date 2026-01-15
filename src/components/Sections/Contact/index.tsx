
import {DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {FC, memo} from 'react';

import {contact, SectionId} from '../../../data/data';
import {ContactType, ContactValue} from '../../../data/dataDef';
import FacebookIcon from '../../Icon/FacebookIcon';
import GithubIcon from '../../Icon/GithubIcon';
import InstagramIcon from '../../Icon/InstagramIcon';
import LinkedInIcon from '../../Icon/LinkedInIcon';
import TwitterIcon from '../../Icon/TwitterIcon';
import Section from '../../Layout/Section';

const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: {Icon: EnvelopeIcon, srLabel: 'Email'},
  [ContactType.Phone]: {Icon: DevicePhoneMobileIcon, srLabel: 'Phone'},
  [ContactType.Location]: {Icon: MapPinIcon, srLabel: 'Location'},
  [ContactType.Github]: {Icon: GithubIcon, srLabel: 'Github'},
  [ContactType.LinkedIn]: {Icon: LinkedInIcon, srLabel: 'LinkedIn'},
  [ContactType.Facebook]: {Icon: FacebookIcon, srLabel: 'Facebook'},
  [ContactType.Twitter]: {Icon: TwitterIcon, srLabel: 'Twitter'},
  [ContactType.Instagram]: {Icon: InstagramIcon, srLabel: 'Instagram'},
};

const Contact: FC = memo(() => {
  const {headerText, description, items} = contact;

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Contact}>
      <div className="flex flex-col items-center gap-y-6 text-center">
        {/* Title row centered */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center">
          <EnvelopeIcon className="hidden h-16 w-16 text-white md:block" />
          <h2 className="text-2xl font-bold text-white">{headerText}</h2>
        </div>

        {/* Content centered */}
        <div className="grid w-full grid-cols-1 place-items-center gap-6">
          <div className="flex flex-col items-center gap-y-4">
            <p className="prose max-w-xl text-center leading-6 text-neutral-300">{description}</p>

            {/* List centered as a block, aligned internally */}
            <dl className="mx-auto flex w-full max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-4 text-base text-neutral-500">
              {items.map(({type, text, href}) => {
                const {Icon, srLabel} = ContactValueMap[type];

                return (
                  <div key={srLabel} className="flex items-center">
                    <dt className="sr-only">{srLabel}</dt>
                    <dd>
                      <a
                        className={classNames(
                          'inline-flex items-center gap-x-3 rounded-md px-2 py-1 text-neutral-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500',
                          {'hover:text-white': href},
                        )}
                        href={href}
                        target="_blank"
                        rel="noreferrer">
                        <Icon aria-hidden="true" className="h-5 w-5 text-neutral-100" />
                        <span className="text-sm sm:text-base">{text}</span>
                      </a>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
});

Contact.displayName = 'About';
export default Contact;
