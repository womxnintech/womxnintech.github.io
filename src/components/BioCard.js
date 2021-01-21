import React from 'react';
import Card from './Card';

const BioCard = ({ teamMember }) => (
  <Card className="mb-8">
    <div className="flex items-center mt-8">
      <img
        className="w-12 h-12 mr-4 rounded-full"
        src={teamMember.picture}
        alt={teamMember.name}
      />
      <div>
        <p>{teamMember.name}</p>
        <p className="text-sm text-gray-600">{teamMember.title}</p>
      </div>
    </div>
    {/* <p className="text-xl font-semibold">{customer.title}</p> */}
    <p className="mt-6">{teamMember.bio}</p>
  </Card>
);

export default BioCard;
