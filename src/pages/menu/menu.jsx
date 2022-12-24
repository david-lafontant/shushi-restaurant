import React from 'react';
import Menu from '../../components/menu/menu';
import contents from '../../components/content';
import Sidebar from '../../components/sidebar/sidebar';

const MenuPage = () => (
  <div className="flex flex-row justify-evenly">
    <Sidebar />
    <div>
      <div>
        <h1 className="text-4xl bold">Shushi Food</h1>
      </div>
      <div className="p-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {contents.map((content) => (
          <Menu
            id={content.id}
            key={content.id}
            image={content.image}
            name={content.name}
          />
        ))}
      </div>
    </div>
  </div>
);

export default MenuPage;
