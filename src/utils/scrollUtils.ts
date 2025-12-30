export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = 80; // Account for fixed header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    // Add a brief highlight effect to the target section
    element.style.transition = 'box-shadow 0.3s ease';
    element.style.boxShadow = '0 0 20px rgba(255, 107, 53, 0.3)';
    
    setTimeout(() => {
      element.style.boxShadow = 'none';
    }, 1000);

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};