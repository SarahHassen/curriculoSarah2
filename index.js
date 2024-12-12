document.addEventListener('DOMContentLoaded', function() {
    const skills = [
        'Linguagens de programação',
        'Desenvolvimento de software',
        'Python',
        'HTML',
        'CSS',
        'JavaScript'
    ];

    const skillsList = document.getElementById('skillsList');

    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'col-md-4 col-sm-6 mb-3';
        skillElement.innerHTML = `<div class="skill-item">${skill}</div>`;
        skillsList.appendChild(skillElement);
    });

    // Add a simple animation to the profile photo
    const profilePhoto = document.querySelector('.profile-photo');
    profilePhoto.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
    });
    profilePhoto.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });

    // Add a scroll reveal effect to sections
    const sections = document.querySelectorAll('section');
    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15,
    });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.5s, transform 0.5s';
        sectionObserver.observe(section);
    });
});

