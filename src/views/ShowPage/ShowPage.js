import React from 'react';
import { useParams } from 'react-router-dom';

const ShowPage = () => {
  const { id } = useParams();

  return <div>ShowPage use {id} to fetch details</div>;
};

export default ShowPage;
