import React, { useState } from 'react'
import vg from '../assets/contact_img.png';
import toast from 'react-hot-toast';
const Contact = () => {


    const [name, setNmae] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(name, email, message);

        toast.success("Message Sent");

    }
    return (
        <div id='contact'>
            <section>
                <form onSubmit={submitHandler}>
                    <h2>Contact Me</h2>

                    <input type="text" value={name} onChange={(e) => setNmae(e.target.value)} placeholder='Your Name' required />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your Email' required />
                    <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Your Message' required />

                    <button type='submit'>Send</button>
                </form>
            </section>
            <aside>
                <img src={vg} alt="..." />
            </aside>
        </div>
    )
}

export default Contact

