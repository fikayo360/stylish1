import './contact.css'

const Contact = () => {
    return (
        <section className="container contact-cta">
            <h1 className="cta-title">Interested In<br />Working Together?</h1>
            <div className="cta-buttons">
                <button className="cta-button cta-filled">
                Copy Email
                </button>
                <button className="cta-button cta-outline">
                Dm me on X
                </button>
            </div>
        </section>
    )
}

export default Contact