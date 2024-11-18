import React from 'react'

export const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", `${import.meta.env.VITE_API_KEY}`);
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
          event.target.reset();
        }
        else {
            alert('There was an issue with the submission. Please try again.');
          }
      };
    
  return (
    <>

      <section className='contact' id='contact'>
        <h2 className='heading contact-heading'>Contact <span>Me</span></h2>
        <form onSubmit={onSubmit}>

            <div className="input-box">
                <input type="text" placeholder='Full Name' name='name' required/>
                <input type="email" placeholder='Email Address' name='email' required/>
            </div>

            <div className="input-box">
                <input type="number" placeholder='Mobile Number' name='mobile' required/>
                <input type="text" placeholder='Email Subject' name='email_subject' />
            </div>
            
            <textarea name="message" id="" cols="30" rows="10"  placeholder='Your Message' ></textarea>
           <center> <input type='submit' className='btn' /></center>

        </form>
      </section>
      

    </>
  )
}


