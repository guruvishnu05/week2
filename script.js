function saveAllDetails() {
    // Personal Information
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Experience
    const jobTitle = document.getElementById('jobTitle').value;
    const company = document.getElementById('company').value;
    const duration = document.getElementById('duration').value;

    // Educational Details
    const collegename = document.getElementById('collegename').value;
    const course = document.getElementById('course').value;
    const year = document.getElementById('year').value;

    // Internship
    const i_company = document.getElementById('i_company').value;
    const role = document.getElementById('role').value;
    const i_year = document.getElementById('i_year').value;

    // Certifications
    const certificate_name = document.getElementById('certificate_name').value;
    const c_company = document.getElementById('c_company').value;
    const c_id = document.getElementById('c_id').value;

    // Save all details to local storage
    localStorage.setItem('personalInfo', JSON.stringify({ name, email, phone }));
    localStorage.setItem('experience', JSON.stringify({ jobTitle, company, duration }));
    localStorage.setItem('educationalDetails', JSON.stringify({ collegename, course, year }));
    localStorage.setItem('internships', JSON.stringify({ i_company, role, i_year }));
    localStorage.setItem('certifications', JSON.stringify({ certificate_name, c_company, c_id }));

    alert('All details saved successfully!');

    // Call the preview function to update the preview section
    updatePreview();
}

function updatePreview() {
    const personalInfo = JSON.parse(localStorage.getItem('personalInfo'));
    const experience = JSON.parse(localStorage.getItem('experience'));
    const educationalDetails = JSON.parse(localStorage.getItem('educationalDetails'));
    const internships = JSON.parse(localStorage.getItem('internships'));
    const certifications = JSON.parse(localStorage.getItem('certifications'));

    const resumePreview = document.getElementById('resumePreview');
    resumePreview.innerHTML = `
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${personalInfo ? personalInfo.name : 'N/A'}</p>
        <p><strong>Email:</strong> ${personalInfo ? personalInfo.email : 'N/A'}</p>
        <p><strong>Phone:</strong> ${personalInfo ? personalInfo.phone : 'N/A'}</p>

        <h3>Experience</h3>
        <p><strong>Job Title:</strong> ${experience ? experience.jobTitle : 'N/A'}</p>
        <p><strong>Company:</strong> ${experience ? experience.company : 'N/A'}</p>
        <p><strong>Duration:</strong> ${experience ? experience.duration : 'N/A'}</p>

        <h3>Educational Details</h3>
        <p><strong>College Name:</strong> ${educationalDetails ? educationalDetails.collegename : 'N/A'}</p>
        <p><strong>Course:</strong> ${educationalDetails ? educationalDetails.course : 'N/A'}</p>
        <p><strong>Graduation Year:</strong> ${educationalDetails ? educationalDetails.year : 'N/A'}</p>

        <h3>Internship</h3>
        <p><strong>Company:</strong> ${internships ? internships.i_company : 'N/A'}</p>
        <p><strong>Role:</strong> ${internships ? internships.role : 'N/A'}</p>
        <p><strong>Year:</strong> ${internships ? internships.i_year : 'N/A'}</p>

        <h3>Certifications</h3>
        <p><strong>Certification Name:</strong> ${certifications ? certifications.certificate_name : 'N/A'}</p>
        <p><strong>Certification Company:</strong> ${certifications ? certifications.c_company : 'N/A'}</p>
        <p><strong>Certificate ID:</strong> ${certifications ? certifications.c_id : 'N/A'}</p>
    `;
}

document.getElementById('downloadBtn').addEventListener('click', function() {
    const personalInfo = JSON.parse(localStorage.getItem('personalInfo'));
    const experience = JSON.parse(localStorage.getItem('experience'));
    const educationalDetails = JSON.parse(localStorage.getItem('educationalDetails'));
    const internships = JSON.parse(localStorage.getItem('internships'));
    const certifications = JSON.parse(localStorage.getItem('certifications'));

    if (!personalInfo || !experience || !educationalDetails || !internships || !certifications) {
        alert('Please save your personal information, experience, educational details, and internship details before downloading.');
        return;
    }

    // Create a PDF using jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Add personal information to the PDF
    doc.text(`Name: ${personalInfo.name}`, 10, 10);
    doc.text(`Email: ${personalInfo.email}`, 10, 20);
    doc.text(`Phone: ${personalInfo.phone}`, 10, 30);

    // Add experience to the PDF
    doc.text(`Job Title: ${experience.jobTitle}`, 10, 50);
    doc.text(`Company: ${experience.company}`, 10, 60);
    doc.text(`Duration: ${experience.duration}`, 10, 70);

    // Add educational details to the PDF
    doc.text(`College Name: ${educationalDetails.collegename}`, 10, 90);
    doc.text(`Course: ${educationalDetails.course}`, 10, 100);
    doc.text(`Graduation Year: ${educationalDetails.year}`, 10, 110);

    // Add internship details to the PDF
    doc.text(`Internship Company: ${internships.i_company}`, 10, 130);
    doc.text(`Intern Role: ${internships.role}`, 10, 140);
    doc.text(`Internship Year: ${internships.i_year}`, 10, 150);

    // Add certification details to the PDF
    doc.text(`Certification Name: ${certifications.certificate_name}`, 10, 170);
    doc.text(`Certification Company: ${certifications.c_company}`, 10, 180);
    doc.text(`Certificate ID: ${certifications.c_id}`, 10, 190);

    // Save the PDF
    doc.save('resume.pdf');
});