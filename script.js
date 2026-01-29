/* ==========================================================================
   LaunchFast — Clean Interactions
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // FAQ Accordion - One open at a time
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('toggle', function () {
            if (this.open) {
                faqItems.forEach(other => {
                    if (other !== this && other.open) {
                        other.open = false;
                    }
                });
            }
        });
    });

    // Scroll Reveal Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll(
        '.stat-card, .service-card, .comparison-card, .testimonial-card, .faq-item'
    );

    revealElements.forEach((el, index) => {
        el.classList.add('reveal-element');
        el.style.transitionDelay = `${index * 15}ms`;
        revealObserver.observe(el);
    });

    // Add reveal styles
    const style = document.createElement('style');
    style.textContent = `
        .reveal-element {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
        
        .revealed {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);

    // ==========================================================================
    // JOURNEY ROADMAP - Scroll-Triggered Animations
    // ==========================================================================

    initJourneyRoadmap();
    initProcessParticles();

});

/* ==========================================================================
   Journey Roadmap - Scroll Progress & Checkpoint Animations
   ========================================================================== */
function initJourneyRoadmap() {
    const processSection = document.querySelector('.process-section');
    const roadProgress = document.querySelector('.road-progress');
    const progressFill = document.getElementById('journeyProgressFill');
    const progressGlow = document.querySelector('.journey-progress-glow');
    const checkpoints = document.querySelectorAll('.checkpoint');

    if (!processSection || !checkpoints.length) return;

    // Get the actual path length from the SVG
    let pathLength = 2500;
    if (roadProgress) {
        try {
            pathLength = roadProgress.getTotalLength();
        } catch (e) {
            pathLength = 2500; // fallback
        }
        roadProgress.style.strokeDasharray = pathLength;
        roadProgress.style.strokeDashoffset = pathLength;
    }

    // Checkpoint progress thresholds - aligned with visual checkpoint positions
    // Animation completes at 50% scroll, so these are spread across that range
    const checkpointThresholds = [
        0.05,  // Checkpoint 1 (Scope) - start of road
        0.30,  // Checkpoint 2 (Design) - top curve
        0.60,  // Checkpoint 3 (Build) - bottom curve
        0.95   // Checkpoint 4 (Launch) - end of road (road completes when this appears)
    ];

    // Scroll handler for road progress
    function updateRoadProgress() {
        const rect = processSection.getBoundingClientRect();
        const sectionHeight = processSection.offsetHeight;
        const windowHeight = window.innerHeight;

        // Calculate how far we've scrolled through the section
        // Animation completes at 25% of section scroll
        const scrollStart = rect.top - windowHeight * 0.9;
        const scrollEnd = rect.top + (sectionHeight * 0.25) - windowHeight * 0.3;
        const scrollRange = scrollEnd - scrollStart;
        const currentScroll = -scrollStart;

        // Calculate progress (0 to 1) - reaches 100% at 25% section scroll
        let progress = Math.max(0, Math.min(1, currentScroll / scrollRange));

        // Map progress to road fill - the road should fill to match checkpoint positions
        // When checkpoint 4 appears (progress = 1.0), the road should be 100% filled
        const roadFillProgress = progress;

        // Update SVG road progress - draw from start to current position
        if (roadProgress) {
            const drawLength = pathLength - (pathLength * roadFillProgress);
            roadProgress.style.strokeDashoffset = drawLength;
        }

        // Update bottom progress bar
        if (progressFill) {
            progressFill.style.width = `${roadFillProgress * 100}%`;
        }
        if (progressGlow) {
            progressGlow.style.width = `${roadFillProgress * 100}%`;
        }

        // Activate checkpoints based on scroll progress
        checkpoints.forEach((checkpoint, index) => {
            const threshold = checkpointThresholds[index];
            const nextThreshold = checkpointThresholds[index + 1] || 1.1;

            // Show checkpoint slightly before reaching its threshold
            if (progress >= threshold - 0.05) {
                checkpoint.classList.add('visible');
            }

            // Activate checkpoint when we reach its threshold
            // The road fill will be at the checkpoint's visual position
            if (progress >= threshold) {
                checkpoint.classList.add('active');
            }

            // Mark as completed when we move past it
            if (progress >= threshold + 0.05) {
                checkpoint.classList.add('completed');
            }

            // Remove active from previous checkpoints when moving forward
            if (progress >= nextThreshold && index < checkpoints.length - 1) {
                checkpoint.classList.remove('active');
            }
        });
    }

    // Easing function for smoother animation
    function easeInOutCubic(t) {
        return t < 0.5
            ? 4 * t * t * t
            : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    // Throttled scroll listener
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateRoadProgress();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Initial call
    updateRoadProgress();

    // Checkpoint hover interactions
    checkpoints.forEach((checkpoint, index) => {
        checkpoint.addEventListener('mouseenter', () => {
            checkpoint.classList.add('active');
        });

        checkpoint.addEventListener('mouseleave', () => {
            // Check if we should stay active based on current scroll position
            const rect = processSection.getBoundingClientRect();
            const sectionHeight = processSection.offsetHeight;
            const windowHeight = window.innerHeight;
            const scrollStart = rect.top - windowHeight * 0.9;
            const scrollEnd = rect.top + (sectionHeight * 0.25) - windowHeight * 0.3;
            const scrollRange = scrollEnd - scrollStart;
            const currentScroll = -scrollStart;
            const progress = Math.max(0, Math.min(1, currentScroll / scrollRange));

            const threshold = checkpointThresholds[index];
            const nextThreshold = checkpointThresholds[index + 1] || 1.1;

            // Remove active if we haven't reached this checkpoint yet or have passed it
            if (progress < threshold || progress >= nextThreshold) {
                checkpoint.classList.remove('active');
            }
        });
    });
}

/* ==========================================================================
   Process Section - Particle Effects
   ========================================================================== */
function initProcessParticles() {
    const particlesContainer = document.getElementById('processParticles');
    if (!particlesContainer) return;

    const particleCount = 30;
    const colors = ['#a855f7', '#c084fc', '#f472b6', '#e879f9'];

    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer, colors, i);
    }
}

function createParticle(container, colors, index) {
    const particle = document.createElement('div');
    particle.className = 'process-particle';

    // Random properties
    const size = Math.random() * 4 + 2;
    const left = Math.random() * 100;
    const delay = Math.random() * 8;
    const duration = Math.random() * 4 + 6;
    const color = colors[Math.floor(Math.random() * colors.length)];

    particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${left}%;
        top: ${50 + (Math.random() - 0.5) * 60}%;
        background: ${color};
        animation-delay: ${delay}s;
        animation-duration: ${duration}s;
        box-shadow: 0 0 ${size * 2}px ${color};
    `;

    container.appendChild(particle);

    // Recreate particle after animation
    particle.addEventListener('animationiteration', () => {
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${50 + (Math.random() - 0.5) * 60}%`;
    });
}

/* ==========================================================================
   Sparkle Effect (Optional - for checkpoint hover)
   ========================================================================== */
function createSparkle(x, y, container) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: white;
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        animation: sparkle-burst 0.6s ease-out forwards;
    `;

    container.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 600);
}

// Add sparkle animation to stylesheet
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkle-burst {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(1.5) rotate(180deg);
            opacity: 0.8;
        }
        100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(sparkleStyle);
