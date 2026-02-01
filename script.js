// Array of 30+ cute, flirty, sarcastic, and roast messages
const noButtonMessages = [
    "You sure? 🤔",
    "Hehe try again 😏",
    "Keep trying buttercup 🌼",
    "Really? Think again! 💭",
    "Nah, you don't mean that 😌",
    "Stop playing hard to get! 🙄",
    "My heart is breaking 💔",
    "Ouch! That hurt 😢",
    "You're breaking my heart here 🥺",
    "Come on, don't be like that! 😤",
    "I know you want to say yes 😏",
    "Your finger slipped, right? 🤭",
    "Wrong button, babe! 😘",
    "Try the other one 👉",
    "Nope, not accepting that! ❌",
    "Still waiting for YES... ⏰",
    "I can do this all day 💪",
    "You're so stubborn! 🙈",
    "But whyyyy? 🥹",
    "Okay now you're just being mean 😒",
    "I'm not giving up! 💪",
    "Nice try, genius 🤓",
    "Your loss... jk come back 😅",
    "The audacity! 😱",
    "Seriously? SERIOUSLY?! 🤨",
    "I know where you live 😈",
    "Mumbai trip says otherwise 🌆",
    "You love me, stop lying 🤥",
    "Quit the drama queen act 👑",
    "I'm telling your mom 😤",
    "This is exhausting 😮‍💨",
    "Fine, be that way! ...jk 🥺",
    "Last chance... maybe 👀",
    "Okay you win... NOT! 😎",
    "YES",
];

let noClickCount = 0;
let emailSent = false; // Flag to prevent duplicate email sends
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const modal = document.getElementById('successModal');
const closeModalBtn = document.getElementById('closeModal');

// Initialize EmailJS once when page loads
(function() {
    emailjs.init("Vk98_4YYd8fv6cuaB");
})();

// NO button click handler
noBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    // If NO button has already turned into YES, send the email
    if (noClickCount === noButtonMessages.length) {
        showSuccessModal();
        sendEmail();
        return;
    }
    
    // Update the button text with the next message
    if (noClickCount < noButtonMessages.length) {
        noBtn.textContent = noButtonMessages[noClickCount];
        noClickCount++;
        
        // If we've reached the last message (which is "YES"), change appearance
        if (noClickCount === noButtonMessages.length) {
            // Change button appearance to match YES button
            noBtn.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
            noBtn.style.color = 'white';
        }
    }
});

// YES button click handler
yesBtn.addEventListener('click', function() {
    showSuccessModal();
    sendEmail();
});

// Function to show success modal
function showSuccessModal() {
    modal.style.display = 'block';
}

// Close modal handler
closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Function to send email using EmailJS
function sendEmail() {
    // Prevent duplicate email sends
    if (emailSent) {
        console.log("Email already sent, skipping...");
        return;
    }
    
    // Email template parameters
    const templateParams = {
        from_name: "Atharva Lokhande",
        to_email: "yeemait006@gmail.com",
        subject: "💘 Valentine Tour Confirmation – Mumbai Edition 🌆✨",
        message: `Dear Madam Valentine 💌,

Congratulations! 🎉✨ After multiple (and honestly very suspicious) attempts to press "NO"…

Our system has officially detected:
➡️ Certified Girlfriend Drama Mode Activated 😌

Therefore, you have been successfully enrolled in:

✨ The Exclusive Mumbai Valentine Experience 2026 ✨ (Non-refundable. Non-cancellable)

🎟 Booking Confirmation Details

📌 Booking ID: VDAY-MUM-2026-AL💘
📌 Passenger Name: Maitreyee Kulkarni
📌 Departure City: Pune
📌 Destination: Mumbai + Unlimited Memories
📌 Seat Number: 1A (Next to Me, Obviously)
📌 Status: Confirmed ✅ (No take-backs allowed)

📍 Travel Location

Mumbai – City of Dreams, Chaos, Traffic… and Us 😏❤️

Where the waves hit Marine Drive,
and my only goal is to make you smile like an idiot the whole weekend.

🗓 Date of Departure

13th–14th February (Valentine Weekend Special 💘)

Yes, the most dangerous weekend of the year…
because emotions will be high,
and so will the chances of you falling for me again 😌

🧳 Itinerary

To be discussed… because surprises are part of the package 😌✨
(Also because you don't get to reject the plan now, sorry <3)

Expect random cute moments, unexpected adventures,
And me pretending I'm a professional tour guide when I'm actually just obsessed with you.

🎀 What's Included

✅ Unlimited Fun, Laughter (no daily limit applied)
✅ Cute moments + selfies (mandatory documentation)
✅ Food that will definitely be fought over
✅ Mandatory hand-holding policy (strictly enforced)
✅ Sarcasm, teasing, and boyfriend jokes
✅ Long walks + short kisses (terms apply 😏)
✅ Bonus: Your favorite human (me)
✅ Extra bonus: Me looking at you like you're the only person in Mumbai

👨‍✈️ Travel Manager & Guide

Atharva Lokhande
Certified Valentine Tour Operator™
(Overqualified, underpaid, hopelessly obsessed)

📞 Contact: +91 7021812012
(Available 24/7 for hugs, itinerary approvals, and emergency "I miss you" situations)

⚠ Important Note

Attempting to cancel this tour by pressing "NO" again will result in:
💘 Immediate extra dates being scheduled without warning.

Repeated rejection attempts may also lead to:
• surprise chocolates
• dramatic puppy eyes
• unlimited clinginess
• and excessive affection attacks

Proceed carefully.

This is not just a weekend plan…
This is a Valentine mission.
A Mumbai romance storyline.
A cute little memory we'll laugh about forever.

Looking forward to hosting you on this unforgettable journey,
because whether you like it or not…

You're my Valentine now 😈❤️

Warm hugs, forehead kisses & dramatic adventure,
Atharva 🌹`
    };
    
    // Mark email as being sent
    emailSent = true;
    
    // Send email using EmailJS
    emailjs.send("service_7hu5x89", "template_1e9xoxa", templateParams)
        .then(function(response) {
            console.log("✅ Email sent successfully!", response.status, response.text);
        }, function(error) {
            console.log("❌ Email sending failed...", error);
            emailSent = false; // Reset flag so user can try again
            // Fallback to mailto if EmailJS fails
            alert("Oops! Something went wrong. Opening your email client instead...");
            const subject = encodeURIComponent("💘 Valentine Tour Confirmation – Mumbai Edition 🌆✨");
            const body = encodeURIComponent(templateParams.message);
            const mailtoLink = `mailto:yeemait006@gmail.com?subject=${subject}&body=${body}`;
            window.location.href = mailtoLink;
        });
}
