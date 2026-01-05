import TeamDetailsMain from '@/pages/team/team-details';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Kaev & Co - Team Details page",
};

const page = () => {
    return (
        <>
            <TeamDetailsMain id={1} />
        </>
    );
};

export default page;