// app.js
let plan = {};

function savePlanning() {
    let form = document.getElementById('planningForm');
    if (!form.checkValidity()) {
        alert('Please fill out all fields.');
        return;
    }

    let experience = document.getElementById('experience').value;
    let date = document.getElementById('date').value;
    let duration = document.getElementById('duration').value;
    let location = document.getElementById('location').value;
    let participants = document.getElementById('participants').value;
    let itinerary = document.getElementById('itinerary').value;

    plan = {
        ...plan,
        experience,
        date,
        duration,
        location,
        participants,
        itinerary
    };

    // Scroll to next step
    document.getElementById('step2').scrollIntoView({behavior: "smooth"});
}

function saveBudgeting() {
    let form = document.getElementById('budgetingForm');
    if (!form.checkValidity()) {
        alert('Please fill out all fields.');
        return;
    }

    let budget = document.getElementById('budget').value;
    let funding = document.getElementById('funding').value;

    plan = {
        ...plan,
        budget,
        funding
    };

    // Scroll to next step
    document.getElementById('step3').scrollIntoView({behavior: "smooth"});
}

function saveExecution() {
    let form = document.getElementById('executionForm');
    if (!form.checkValidity()) {
        alert('Please fill out all fields.');
        return;
    }

    let checklist = document.getElementById('checklist').value;

    plan = {
        ...plan,
        checklist
    };

    // Display summary
    let summaryDiv = document.getElementById('summary');
    summaryDiv.innerHTML = `
        <p>Experience: ${plan.experience}</p>
        <p>Date: ${plan.date}</p>
        <p>Duration: ${plan.duration}</p>
        <p>Location: ${plan.location}</p>
        <p>Number of Participants: ${plan.participants}</p>
        <p>Itinerary: ${plan.itinerary}</p>
        <p>Budget: ${plan.budget}</p>
        <p>Funding Needed: ${plan.funding}</p>
        <p>Checklist: ${plan.checklist}</p>
    `;

    // Scroll to summary
    document.getElementById('summary').scrollIntoView({behavior: "smooth"});
}