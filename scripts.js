function scrollToFeatured() {
    const featuredSection = document.getElementById('featured');
    if (featuredSection) {
      // Calculate position accounting for any fixed headers
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const targetPosition = featuredSection.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }