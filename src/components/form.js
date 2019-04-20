import React from "react"

const Form = () => {
    return(
        <div className={"form"}>
            <form className="contact-form" action="https://formspree.io/josh.foti@iinet.net.au" method="POST">
                <h2>Get in touch</h2>
                <input type="text" id="name" name="name" placeholder="Name"/>
                <input type="text" id="email" name="email" placeholder="E-Mail"/>  
                <input type="text" id="subject" name="subject" placeholder="Subject"/>
                <textarea placeholder="Message"></textarea>
                <div class="btn-right">
                    <input type="submit" value="Send"/>
                </div>
            </form>
        </div>
       

    )
}

export {Form}
