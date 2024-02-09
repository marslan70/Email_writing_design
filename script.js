document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const receiverEmail = document.getElementById('receiverEmail').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    console.log('Receiver Email:', receiverEmail);
    console.log('Subject:', subject);
    console.log('Message:', message);
    
    alert('Email sent');
  });
  