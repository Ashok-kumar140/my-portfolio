import React, { useState } from 'react'
import vg from '../assets/contact_img.png';
import toast from 'react-hot-toast';
import { motion } from "framer-motion";
import { addDoc, collection } from 'firebase/firestore';
import { db } from "../firebase";
// import { async } from '@firebase/util';

const Contact = () => {


    const [name, setNmae] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [disablebBtn, setDisableBtn] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault()
        setDisableBtn(true);
        // console.log(name, email, message);


        try {
            await addDoc(collection(db, "contacts"), {
                name,
                email,
                message
            });
            setEmail("");
            setNmae("");
            setMessage("");
            toast.success("Message Sent");
            setDisableBtn(false);
        } catch (err) {
            toast.error("Error");
            setDisableBtn(false);
            console.log(err);

        }



    }

    const animation = {
        form: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,
            },
        },

        button: {
            initial: {
                y: "-100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            },
            transition: {
                delay: 0.5
            }
        },
    }
    return (
        <div id='contact'>
            <section>
                <motion.form onSubmit={submitHandler} {...animation.form}>
                    <h2>Contact Me</h2>

                    <input type="text" value={name} onChange={(e) => setNmae(e.target.value)} placeholder='Your Name' required />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your Email' required />
                    <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Your Message' required />

                    <motion.button disabled={disablebBtn}
                        {...animation.button}
                        className={disablebBtn?"disableBtn":""}
                        type='submit'

                    >
                        Send
                    </motion.button>
                </motion.form>
            </section>
            <aside>
                <img src={vg} alt="..." />
            </aside>
        </div>
    )
}

export default Contact

