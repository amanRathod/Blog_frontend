/* eslint-disable import/order */
/* eslint-disable react/prop-types */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState, useContext } from 'react';
import Header from '../components/header';
import Timeline from '../components/timeline';

const Dashboard = () => {
  useEffect(() => {
    document.title = 'Dashboard - Blog';
  }, []);

  return (
    <div className="bg-gray-background">
      <Header />
      {/* <Timeline /> */}
    </div>
  );
};
export default Dashboard;
