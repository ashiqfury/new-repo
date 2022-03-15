import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { containerAnim, animation, button, inputAnim } from '../animations/contact'

const Contact = () => {
	const formRef = useRef(null)
	const [success, setSuccess] = useState(false)
	const [failure, setFailure] = useState(false)
	const [isSending, setIsSending] = useState(false)

	const sendEmail = e => {
		setSuccess(false)
		setFailure(false)
		setIsSending(true)
		e.preventDefault()

		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICEID,
				process.env.REACT_APP_TEMPLATEID,
				formRef.current,
				process.env.REACT_APP_USERID
			)
			.then(
				result => {
					setSuccess(true)
					setIsSending(false)
					e.target.reset()
				},
				error => {
					setFailure(true)
					setIsSending(false)
				}
			)
	}

	useEffect(() => {
		containerAnim('Info')
		containerAnim('Form')
		animation()
		button()
		inputAnim()
	}, [])

	return (
		<section className="contact">
			<div className="container">
				<div className="contact-info contactInfo">
					<div>
						<h2>Contact Info</h2>
						<ul className="info">
							<li className="infolist__user">
								<span>
									<i className="fas fa-user"></i>
								</span>
								<span>ashiq @fury</span>
							</li>
							<li className="infolist__email">
								<span>
									<i className="fas fa-envelope"></i>
								</span>
								<span>ashiqasraf07@gmail.com</span>
							</li>
							<li className="infolist__phone">
								<span>
									<i className="fas fa-phone"></i>
								</span>
								<span>+91 733-927-8868</span>
							</li>
							<li className="infolist__location">
								<span>
									<i className="fas fa-map-marker-alt"></i>
								</span>
								<span>
									40, Rahman Taj Nagar, <br />
									Melapalayam, <br />
									Tirunelveli - 627005.
								</span>
							</li>
						</ul>
					</div>
					<ul className="sci">
						<li>
							<a href="https://facebook.com/ashiqfury" target="_blank" rel="noreferrer">
								<i className="fab fa-facebook-square"></i>
							</a>
						</li>
						<li>
							<a href="https://instagram.com/_a.s.h.i.q__f.u.r.y_" target="_blank" rel="noreferrer">
								<i className="fab fa-instagram-square"></i>
							</a>
						</li>
						<li>
							<a href="https://twitter.com/ashiqfury" target="_blank" rel="noreferrer">
								<i className="fab fa-twitter-square"></i>
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/ashiq-fury-1224a9205/"
								target="_blank"
								rel="noreferrer"
							>
								<i className="fab fa-linkedin"></i>
							</a>
						</li>
						<li>
							<a href="https://github.com/ashiqfury" target="_blank" rel="noreferrer">
								<i className="fab fa-github-square"></i>
							</a>
						</li>
					</ul>
				</div>
				<form className="contactForm" ref={formRef} onSubmit={sendEmail}>
					<h2>Send a message</h2>
					<div className="formBox">
						<div className="inputBox w50 fname">
							<input type="text" name="fname" required />
							<span>First name</span>
						</div>
						<div className="inputBox w50 lname">
							<input type="text" name="lname" required />
							<span>Last name</span>
						</div>
						<div className="inputBox w50 email">
							<input type="email" name="email" required />
							<span>Email Address</span>
						</div>
						<div className="inputBox w50 phone">
							<input type="tel" maxLength="10" name="number" required />
							<span>Phone Number</span>
						</div>
						<div className="inputBox w100 message">
							<textarea type="text" name="message" required></textarea>
							<span>Write your message here...</span>
						</div>
						<div className="inputBox w100 btn-submit">
							{/* <input type="submit" value="Send" /> */}
							{isSending ? (
								<button type="submit">
									Sending...<i className="fas fa-paper-plane"></i>
								</button>
							) : (
								<button type="submit">
									Send<i className="fas fa-paper-plane"></i>
								</button>
							)}
						</div>
						<div className="formMessage">
							{success && <span className="formSuccess">Email successfully sent! 👍 </span>}
							{failure && <span className="formFailure">Email not sent! 👎</span>}
						</div>
					</div>
				</form>
			</div>
		</section>
	)
}

export default Contact
