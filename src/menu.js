// MenuFetcher.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

const MenuFetcher = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://www.pusan.ac.kr/kor/CMS/MenuMgr/menuListOnBuilding.do?mCode=MN202&campus_gb=PUSAN&building_gb=R004&restaurant_code=PH002');
        const html = response.data;
        const $ = cheerio.load(html);
        
        // 페이지의 구조에 따라 셀렉터 수정 필요
        const menuItems = [];
        $('table.menu-tbl.type-day tbody tr td ul li').each((index, element) => {
            const dayMenu = $(element).text().trim();
            menuItems.push(dayMenu);
          });

        setMenus(menuItems);
        setLoading(false);
      } catch (e) {
        console.error("Error fetching menu:", e);
        setError(e);
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading menu!</div>;

  return (
    <div>
      <h1>Menu</h1>
      {menus.map((menu, index) => (
        <div key={index}>
          <p>{menu}</p>
        </div>
      ))}
    </div>
  );
};

export default MenuFetcher;
