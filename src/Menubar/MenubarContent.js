import React, { useState } from 'react';
import MenuBar from './Menubar';
import './Menubar.css'

const MenubarContent = () => {
  const [activeContent, setActiveContent] = useState('Contact Information'); 

  return (
    <div>
      <MenuBar setActiveContent={setActiveContent} />
      
      <div className="content">
        {activeContent === 'My Info' && <span className='txt'>No Record Found</span>}
        {activeContent === 'School Info' && <span className='txt'>No Record Found</span>}
        {activeContent === 'Contact Information' && <div className='tabscontent'>
             <p>No Records Found </p>
             <button type='raised' className='btn3'>
                  Add New Contact Information
             </button>  </div>}
        {activeContent === 'Course Registeration' && <span className='txt'>No Record Found</span>}
      </div>
    </div>
  );
};

export default MenubarContent;
