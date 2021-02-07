import React from 'react';
import Button from '../components/Button';
import BioCard from '../components/BioCard';
import CompanyCard from '../components/CompanyCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import teamBios1 from '../data/team-bios-1';
import teamBios2 from '../data/team-bios-2';
import companies1 from '../data/companies-1';
import companies2 from '../data/companies-2';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import companies3 from '../data/companies-3';
import companies4 from '../data/companies-4';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Womxn in Tech Conference 2021
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
          The Womxn in Tech Conference is a two-day conference for UC Berkeley students. Participants will have the opportunity to have 1-on-1 conversations with company recruiters and attend workshops and panels. 
          </p>
          <p className="text-xl lg:text-xl mt-6 font-light">
            Friday, February 12th, 2021 from 3PM - 6PM 
          </p>
          <p className="text-xl lg:text-xl mt-0 font-light">
            Saturday, February 13th, 2021 from 9AM -12PM 
          </p>
          <p className="mt-8 md:mt-12">
            <a href='https://forms.gle/qK8nKPYXNtTLnHhB8' target="_blank" rel="noopener noreferrer"> 
              <Button size="lg">Registration Form</Button>
            </a>
          </p>
          <p className="mt-4 text-gray-600">Our registration form is now open! Please note that you need to be signed into your berkeley email.</p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Attending Companies</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          {companies1.map(company => (
            <div className="flex-1 px-3" key={company.name}>
              <CompanyCard company={company} />
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:-mx-3">
          {companies2.map(company => (
            <div className="flex-1 px-3" key={company.name}>
              <CompanyCard company={company} />
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:-mx-3">
          {companies3.map(company => (
            <div className="flex-1 px-3" key={company.name}>
              <CompanyCard company={company} />
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:-mx-3">
          {companies4.map(company => (
            <div className="flex-1 px-3" key={company.name}>
              <CompanyCard company={company} />
            </div>
          ))}
        </div>
      </div>
    </section>

    <SplitSection
     reverseOrder
     primarySlot={
       <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">Company Presentations</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Quickly learn about the awesome companies attending the conference in rapid-fire five minute presentations by company representatives!
          </p>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Friday, February 12th at 3:10 PM PST
          </p>
          <p className="mt-2 text-xl font-light leading-relaxed">
            Saturday, February 13th at 9:10 AM PST
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Resume Workshop</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Join us for a resume workshop, hosted by the Data Science Undergraduate Studies: Peer Consulting team!
          </p>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Friday, February 12th at 4:00 PM PST
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Industry Insiders Panel
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Join a Q & A panel with representatives from the companies to learn more about careers in tech! 
          </p>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Friday, February 12th at 5:00 PM PST
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            1:1s with Company representatives
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Reservations are now open! Register here:
          </p>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Friday, February 12th at 3:10 PM PST
          </p>
          <p className="mt-2 text-xl font-light leading-relaxed">
            Saturday, February 13th at 9:10 AM PST
          </p>

          <p className="mt-8 md:mt-12">
            <a href='https://forms.gle/qK8nKPYXNtTLnHhB8' target="_blank" rel="noopener noreferrer"> 
              <Button size="lg">Registration Form</Button>
            </a>
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    {/* <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section> */}
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center"> Our Team</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {teamBios1.map(teamMember => (
            <div key={teamMember.name} className="flex-1 px-3">
              <BioCard teamMember={teamMember} />
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:-mx-3">
          {teamBios2.map(teamMember => (
            <div key={teamMember.name} className="flex-1 px-3">
              <BioCard teamMember={teamMember} />
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Contact Us</h3>
      <p className="mt-8 text-xl font-light">
        Feel free to reach us on Facebook!
      </p>
      <p className="mt-8">
        <Button size="xl">Facebook</Button>
      </p>
    </section> */}
  </Layout>
);
