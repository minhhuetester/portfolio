// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add active state to nav links on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Prevent default behavior for View Project buttons (since they're placeholder links)
// document.querySelectorAll('.btn-outline').forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         e.preventDefault();
//         alert('Project details would be displayed here. You can link to actual project pages!');
//     });
// });

// Add parallax effect to hero image
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image-container');
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// anonymous comment
const API_URL = 'https://69169fe4a7a34288a27ddce1.mockapi.io/api/user/comments';
// DOM elements
const commentForm = document.getElementById('commentForm');
const commentsList = document.getElementById('commentsList');
async function loadComments() {
    try {
        //Gửi yêu cầu lấy dữ liệu từ API
        const response = await fetch(API_URL,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        const displayData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        displayComments(displayData);
    } catch (error) {
        console.error('Error loading comments:', error);
        alert('Error loading comments');
    }
}
function displayComments(comments) {
    commentsList.innerHTML = '<h2>Comments</h2>';
    if (comments.length === 0) {
        commentsList.innerHTML += '<p>No comments available.</p>';
        return;
    }
    // Add each cmt to the list
    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.innerHTML = `
           <div class="comment-content">${comment.content}</div>
           <div class="comment-meta">
               <span>Created at: ${comment.createdAt || Date.now().toLocaleString()}
           </div>
        `;
        commentsList.appendChild(commentElement);
    });
}
// Submit comment
async function submitComment(content) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: content,
                createdAt: new Date().toISOString(),
            }),
        });
        document.querySelector("#commentContent").value=""
        loadComments()
    } catch (error) {
        console.error('Error submitting comment:', error);
        alert('Error submitting comment');
    }
}
// Event listener for form submission
commentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
   const content = document.getElementById('commentContent').value.trim();
   if (content) {
    await submitComment(content);
   }
});
document.addEventListener('DOMContentLoaded', loadComments);

