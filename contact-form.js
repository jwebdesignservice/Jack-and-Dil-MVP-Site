// Multi-Step Form Handler
(function() {
    const form = document.getElementById('multiStepForm');
    const nextBtn = document.getElementById('nextBtn');
    const backBtn = document.getElementById('backBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    let currentStep = 1;
    const totalSteps = 4;
    
    // Initialize form
    function init() {
        updateStepDisplay();
        updateButtons();
        
        // Event listeners
        nextBtn.addEventListener('click', handleNext);
        backBtn.addEventListener('click', handleBack);
        form.addEventListener('submit', handleSubmit);
    }
    
    // Validate current step
    function validateStep(step) {
        const currentStepElement = document.querySelector(`.form-step[data-step="${step}"]`);
        const requiredFields = currentStepElement.querySelectorAll('[required]');
        
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('error');
                
                // Add error styling temporarily
                setTimeout(() => {
                    field.classList.remove('error');
                }, 2000);
            } else {
                field.classList.remove('error');
            }
        });
        
        if (!isValid) {
            // Shake animation for invalid form
            currentStepElement.classList.add('shake');
            setTimeout(() => {
                currentStepElement.classList.remove('shake');
            }, 500);
        }
        
        return isValid;
    }
    
    // Handle next button click
    function handleNext() {
        if (validateStep(currentStep)) {
            if (currentStep < totalSteps) {
                currentStep++;
                updateStepDisplay();
                updateButtons();
                scrollToTop();
            }
        }
    }
    
    // Handle back button click
    function handleBack() {
        if (currentStep > 1) {
            currentStep--;
            updateStepDisplay();
            updateButtons();
            scrollToTop();
        }
    }
    
    // Update step display
    function updateStepDisplay() {
        // Update form steps
        document.querySelectorAll('.form-step').forEach(step => {
            const stepNumber = parseInt(step.getAttribute('data-step'));
            if (stepNumber === currentStep) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
        
        // Update progress indicators
        document.querySelectorAll('.progress-step').forEach(step => {
            const stepNumber = parseInt(step.getAttribute('data-step'));
            if (stepNumber < currentStep) {
                step.classList.add('completed');
                step.classList.remove('active');
            } else if (stepNumber === currentStep) {
                step.classList.add('active');
                step.classList.remove('completed');
            } else {
                step.classList.remove('active', 'completed');
            }
        });
        
        // Update progress lines
        document.querySelectorAll('.progress-line').forEach((line, index) => {
            if (index < currentStep - 1) {
                line.classList.add('completed');
            } else {
                line.classList.remove('completed');
            }
        });
    }
    
    // Update button visibility
    function updateButtons() {
        // Back button
        if (currentStep === 1) {
            backBtn.style.display = 'none';
        } else {
            backBtn.style.display = 'flex';
        }
        
        // Next button
        if (currentStep === totalSteps) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'flex';
        } else {
            nextBtn.style.display = 'flex';
            submitBtn.style.display = 'none';
        }
    }
    
    // Scroll to top of form
    function scrollToTop() {
        const formWrapper = document.querySelector('.contact-form-wrapper');
        if (formWrapper) {
            formWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    
    // Handle form submission
    async function handleSubmit(e) {
        e.preventDefault();
        
        if (validateStep(currentStep)) {
            // Collect form data
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            console.log('Form submitted:', data);
            
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span>Sending...</span>';
            
            try {
                // Combine first and last name
                const fullName = `${data.firstName || ''} ${data.lastName || ''}`.trim();
                
                // Combine project description and additional info into message
                const message = [
                    `Project Type: ${data.projectType || 'Not specified'}`,
                    '',
                    'Project Description:',
                    data.projectDescription || 'Not provided',
                    '',
                    data.features ? `Key Features: ${data.features}` : '',
                    '',
                    data.additionalInfo ? `Additional Info: ${data.additionalInfo}` : '',
                    '',
                    data.howFound ? `How they found us: ${data.howFound}` : ''
                ].filter(line => line !== undefined && line !== '').join('\n');
                
                // Submit to Supabase
                const { data: result, error } = await supabase
                    .from('contact_submissions')
                    .insert([
                        {
                            name: fullName,
                            email: data.email,
                            phone: data.phone || null,
                            company: data.company || null,
                            project_type: data.projectType || null,
                            budget: data.budget || null,
                            timeline: data.timeline || null,
                            message: message,
                            status: 'new'
                        }
                    ]);
                
                if (error) {
                    console.error('Supabase error:', error);
                    showErrorMessage();
                } else {
                    console.log('Success:', result);
                    showSuccessMessage();
                }
            } catch (error) {
                console.error('Error:', error);
                showErrorMessage();
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = `
                    <span>Submit</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                `;
            }
        }
    }
    
    // Show success message
    function showSuccessMessage() {
        const formWrapper = document.querySelector('.contact-form-wrapper');
        formWrapper.innerHTML = `
            <div class="success-message">
                <div class="success-icon">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                </div>
                <h2>Thank You!</h2>
                <p>We've received your information and will get back to you within 24 hours.</p>
                <p class="success-subtext">Check your email for a confirmation message.</p>
                <a href="index.html" class="btn btn-primary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                    <span>Back to Home</span>
                </a>
            </div>
        `;
    }
    
    // Show error message
    function showErrorMessage() {
        const formWrapper = document.querySelector('.contact-form-wrapper');
        formWrapper.innerHTML = `
            <div class="success-message error-message">
                <div class="success-icon" style="background: rgba(239, 68, 68, 0.1); color: #ef4444;">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="15" y1="9" x2="9" y2="15"/>
                        <line x1="9" y1="9" x2="15" y2="15"/>
                    </svg>
                </div>
                <h2>Oops! Something went wrong.</h2>
                <p>We couldn't submit your form. Please try again or contact us directly at hello@launchfast.dev</p>
                <button onclick="location.reload()" class="btn btn-primary">
                    <span>Try Again</span>
                </button>
            </div>
        `;
    }
    
    // Initialize on page load
    if (form) {
        init();
    }
})();
