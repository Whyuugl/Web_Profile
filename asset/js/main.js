const navbar = document.querySelector('.navbar-container');

function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('transparent');
    } else {
        navbar.classList.remove('transparent');
    }
});

function smoothScrollTo(element) {
    window.scrollTo({
        top: element.offsetTop - navbar.offsetHeight - 20,
        behavior: 'smooth'
    });
}

const navItems = document.querySelectorAll('.nav-list ul li a');
const sections = document.querySelectorAll('section');

function setActiveClass(clickedBtn) {
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    clickedBtn.classList.add('active');
}

navItems.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const targetSection = document.querySelector(item.getAttribute('href'));
        smoothScrollTo(targetSection);
    });
});

function setActiveOnPageLoad() {
    const currentHash = window.location.hash;

    navItems.forEach(item => {
        if (item.getAttribute('href') === currentHash) {
            item.classList.add('active');
        }
    });
}

window.addEventListener('load', setActiveOnPageLoad);

function updateActiveNavItemOnScroll() {
    let currentSection = "";

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 220 && rect.bottom > 220) {
            currentSection = section.id;
        }
    });

    navItems.forEach(item => {
        const linkHash = item.getAttribute('href').substring(1);
        if (currentSection === linkHash) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavItemOnScroll);

const words = ['Web Designer', 'Web Developer', 'UI/UX', 'Mobile App Development'];
        let wordIndex = 0;
        let charIndex = 0;
        const typingElement = document.querySelector('.typing');

        function type() {
            if (charIndex < words[wordIndex].length) {
                typingElement.textContent += words[wordIndex][charIndex];
                charIndex++;
                setTimeout(type, 150);
            } else {
                setTimeout(erase, 1000);
            }
        }

        function erase() {
            if (charIndex > 0) {
                typingElement.textContent = words[wordIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, 100);
            } else {
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 500);
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(type, 500);
        });
        
        function toggleDropdown() {
            const dropdown = document.getElementById('dropdownContent');
            dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';

            if (dropdown.style.display === 'none') {
                resetDetails();
            }
        }
        
        function showContent(sectionId) {
            const sections = document.querySelectorAll('.details-section');
            sections.forEach(section => {
                section.style.display = 'none';
            });
        
            const activeSection = document.getElementById(sectionId);
            if (activeSection) {
                activeSection.style.display = 'block';
            }
        }

        function resetDetails() {
            const sections = document.querySelectorAll('.details-section');
            sections.forEach(section => {
                section.style.display = 'none';
            });
        }
        
        let currentIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const slider = document.getElementById('slider');
        const totalSlides = slides.length;
        const skillDescription = document.getElementById('skill-description');
        const skillName = document.getElementById('skiil-name');

        function showSlide(index) {
            if (index >= totalSlides) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = totalSlides - 1;
            } else {
                currentIndex = index;
            }
            const offset = -currentIndex * 100;
            slider.style.transform = `translateX(${offset}%)`;

            const currentSlide = slides[currentIndex];
            const newText = currentSlide.getAttribute('data-text');
            updateSkillDescription(newText);
        }

        function updateSkillDescription(skill) {
            const descriptions = {
                'HTML': 'HTML is the standard markup language used to structure web pages.',
                'CSS': 'CSS is used to style and layout HTML elements, making web pages visually appealing.',
                'JavaScript': 'JavaScript is a programming language that adds interactivity and dynamic behavior to web pages.',
                'Python': 'Python is a high-level programming language known for its readability and versatility in various applications.',
                'Bootstrap': 'Bootstrap is a CSS framework that simplifies the creation of responsive and modern web designs.',
                'Tailwind': 'Tailwind CSS is a utility-first framework that enables fast and flexible web styling directly in HTML.',
                'PHP': 'PHP is a server-side scripting language widely used for web development, allowing dynamic content generation and seamless interaction with databases.'
            };

            skillDescription.textContent = descriptions[skill] || 'Here are some of the programming languages and tools I am proficient in. I am continuously learning and expanding my skill set to build better projects and solutions.';
            skillName.textContent = skill;
        }

        function nextSlide() {
            showSlide(currentIndex + 1);
        }

        function prevSlide() {
            showSlide(currentIndex - 1);
        }

        let slideInterval = setInterval(nextSlide, 7000);

        document.querySelectorAll('.slider-nav button').forEach(button => {
            button.addEventListener('click', () => {
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, 7000);
            });
        });
