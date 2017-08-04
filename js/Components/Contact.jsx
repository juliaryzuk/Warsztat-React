import React from 'react'

class Contact extends React.Component {
    render()
    {
      return <div className="container">
             <h1>Kontakt</h1>
             <div className="row">
                <div className="col-6">
                  <form id="contact" action="" method="post">
    <fieldset>
      <input placeholder="Your name" type="text" tabindex="1" required autofocus></input>
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabindex="2" required></input>
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number" type="tel" tabindex="3" required></input>
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your Message Here...." tabindex="4" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
                </div>
            </div>
        </div>
    }
}

export default Contact
