// Test script to send a message through the contact form API
const testContactForm = async () => {
  const testData = {
    name: "Test User",
    email: "test@example.com",
    subject: "Contact Form Test - Portfolio",
    message: "This is a test message to verify that your portfolio contact form is working correctly. If you receive this email, everything is set up properly!"
  };

  try {
    console.log('Sending test message...');
    
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    if (response.ok) {
      const result = await response.json();
      console.log('✅ Test message sent successfully!');
      console.log('Response:', result);
      console.log('Check your email at mikeanthonyoliva25@gmail.com');
    } else {
      const error = await response.text();
      console.error('❌ Failed to send test message');
      console.error('Response status:', response.status);
      console.error('Error:', error);
    }
  } catch (error) {
    console.error('❌ Error sending test message:', error.message);
  }
};

// Run the test
testContactForm();
