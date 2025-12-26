import React, { useState, useEffect } from 'react';
import './PageNav.css';

function PageNav() {
  const [activePage, setActivePage] = useState(0);

  const pages = [
    { id: 0, label: 'Home' },
    { id: 1, label: 'Stream' },
    { id: 2, label: 'About' },
    { id: 3, label: 'Socials' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActivePage(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index) => {
    const sections = document.querySelectorAll('section');
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="page-nav">
      {pages.map((page) => (
        <button
          key={page.id}
          className={`nav-dot ${activePage === page.id ? 'active' : ''}`}
          onClick={() => scrollToSection(page.id)}
          aria-label={`Go to ${page.label}`}
          title={page.label}
        />
      ))}
    </nav>
  );
}

export default PageNav;
