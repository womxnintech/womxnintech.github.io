import React from 'react';
import Card from './Card';

const CompanyCard = ({ company }) => (
    <Card className="mb-8">

    {/* <div className="flex-center"> */}
    <a href={company.website} target="_blank" rel="noopener noreferrer"> 
      <img
        // className="w-24 h-24 ml-12 rounded-full"
        src={company.logo}
        alt={company.name}
      />
    </a>
      {/* <div>
        <p className="text-xl text-gray-600">{company.name}</p>
      </div> */}
    {/* </div> */}
    {/* <p className="font-semibold text-xl"> {company.name} </p> */}
    <p className="mt-4 text-sm">
    {company.description}
    </p>
    </Card>
);

export default CompanyCard;
