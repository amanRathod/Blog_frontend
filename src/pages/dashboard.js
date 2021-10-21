import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Timeline from '../components/Posts';
import { getAllPosts } from '../service/backened_call';
import Flash from '../components/flash';
import Footer from '../components/public/footer';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [flash, setFlash] = useState({});
  useEffect(() => {
    document.title = 'Dashboard - Blog';
    const fetchData = async () => {
      const response = await getAllPosts();
      setPosts('');
      setTimeout(() => setPosts(response), 1000);
      // setPosts(response);
    };

    fetchData();
    return () => {
      fetchData();
    };
  }, []);

  return (
    <div className="bg-gray-background dark:bg-darkMode-base">
      <Header search={search} setSearch={setSearch} />
      <Timeline posts={posts} search={search} setPosts={setPosts} setFlash={setFlash} />
      <Flash flash={flash} setFlash={setFlash} />
      <Footer />
    </div>
  );
};
export default Dashboard;
