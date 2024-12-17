import React from 'react';
import ContactHeader from './ContactHeader';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
  return (
    <section className="py-20 bg-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactHeader
          title="Свяжитесь с нами"
          description="Начните свой путь к исцелению сегодня. Свяжитесь с нами, чтобы узнать больше о наших услугах или записаться на консультацию."
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div>
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;