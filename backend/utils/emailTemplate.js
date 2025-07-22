module.exports = ({ name, email, phone, projectType, budget, message }) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Project Inquiry</title>
    <style>
      body {
        font-family: 'Segoe UI', sans-serif;
        background: #f5f7fa;
        color: #333;
        padding: 0;
        margin: 0;
      }
      .container {
        background: #ffffff;
        max-width: 600px;
        margin: 30px auto;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 8px 16px rgba(0,0,0,0.1);
      }
      .header {
        background: linear-gradient(to right, #4f46e5, #9333ea);
        color: #fff;
        padding: 20px 30px;
        text-align: center;
      }
      .header h1 {
        margin: 0;
        font-size: 24px;
      }
      .content {
        padding: 30px;
      }
      .section {
        margin-bottom: 20px;
      }
      .section strong {
        display: inline-block;
        width: 140px;
        color: #555;
      }
      .footer {
        background: #f3f4f6;
        padding: 20px;
        text-align: center;
        font-size: 14px;
        color: #777;
      }
      @media only screen and (max-width: 600px) {
        .container {
          margin: 10px;
        }
        .section strong {
          display: block;
          margin-bottom: 5px;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>📩 New Project Inquiry</h1>
        <p>from Aryahs World Infotech</p>
      </div>
      <div class="content">
        <div class="section">
          <strong>Name:</strong> ${name}
        </div>
        <div class="section">
          <strong>Email:</strong> ${email}
        </div>
        <div class="section">
          <strong>Phone:</strong> ${phone}
        </div>
        <div class="section">
          <strong>Project Type:</strong> ${projectType}
        </div>
        <div class="section">
          <strong>Budget:</strong> ${budget}
        </div>
        <div class="section">
          <strong>Message:</strong>
          <p style="margin-left: 20px; margin-top: 5px;">${message}</p>
        </div>
      </div>
      <div class="footer">
        🧠 Aryahs World Infotech (OPC) Pvt. Ltd.<br/>
        Building Premium Digital Experiences
      </div>
    </div>
  </body>
</html>
`;
