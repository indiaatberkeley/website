import React, { useState } from "react"
import axios from "axios";
import { Link } from "gatsby"
import Layout from "components/Layout"
import { Input, TextArea } from "flwww";
import { message, Space, Timeline } from 'antd';
import styled from "@emotion/styled"
import colors from "styles/colors"


const ConForm = styled("form")`
	display: flex;
	align-items: center;
	flex-direction: column;

	.ContactFormInput{
		margin-top: 0.5em;
		margin-bottom: 0.5em;
		font-family: 'Inter var', sans-serif;

	}



`

const PostCardAction = styled("button")`
		font-weight: 600;
			font-size: 0.95em;
			color: currentColor;
			transition: all 150ms ease-in-out;

			background: none;
			color: inherit;
			border: none;
			font-family: 'Inter var', sans-serif;
			padding: 0;
			cursor: pointer;
			padding: 0.5em;

			span {
				margin-left: 1em;
				transform: translateX(-8px);
				display: inline-block;
				transition: transform 400ms ease-in-out;
			}

			&:hover {
			

					color: ${colors.blue500};
					transition: all 150ms ease-in-out;

					span {
						transform: translateX(0px);
						opacity: 1;
						transition: transform 150ms ease-in-out;
					
				}
			}

`


class Contact extends React.Component {
	// constructor(props) {
	// 	super(props)
	// 	this.state = {}
	// }


	handleSubmit = e => {

		const fields = { "fields": { "Name": e.target.name.value, "Email": e.target.email.value, "Phone": e.target.phone.value, "Message": e.target.message.value } }
		// fetch("https://api.airtable.com/v0/appGvTEW3Q4spcppz/Submissions", {
		// 	method: "POST",
		// 	headers: {
		// 		"Authorization": `Bearer ${process.env.AIRTABLE_API}`,
		// 		"Content-Type": "application/json"
		// 	},
		// 	body: JSON.stringify(fields)
		// })
		// 	.then(r => message.success('Thank you for submitting. We will get back to you soon.', 10))
		// 	.catch(error => message.error('An error occurred. Please try again later.', 10))
		axios({
			method: "post",
			url: "https://api.airtable.com/v0/appGvTEW3Q4spcppz/Submissions",
			data: fields,
			headers: {
				"Authorization": `Bearer ${process.env.GATSBY_AIRTABLE_API}`,
				"Content-Type": "application/json"
			}
		})
			.then(r => {
				message.success('Thank you for submitting. We will get back to you soon.', 10);
				e.target.name.disabled = true;
				e.target.email.disabled = true;
				e.target.phone.disabled = true;
				e.target.message.disabled = true;
				e.target.sub.disabled = true;
			})
			.catch(r => {
				message.error('An error occurred. Please try again later.', 10);
				console.log(r);
			});
		e.preventDefault();
	}

	render() {
		return (



			<ConForm id="formElem" onSubmit={this.handleSubmit}>
				<input type="hidden" name="_captcha" value="false" />

				<div className="form-group" style={{ width: "70%", minWidth: "350px" }}>
					<Input type="text" name="name" placeholder="Name" className="ContactFormInput" id="name" required="required" />
					<Input type="email" name="email" placeholder="Email" className="ContactFormInput" id="email" required="required" />
					<Input type="text" name="phone" placeholder="Phone Number" className="ContactFormInput" />
					<TextArea rows={6} name="message" placeholder="Message" style={{ marginTop: "0.5em", marginBottom: "0.5em", fontFamily: "'Inter var', sans-serif" }} required="required" />
				</div>



				<PostCardAction name="sub" className="PostCardAction" type="submit" >
					Submit <span>&#8594;</span>
				</PostCardAction>

			</ConForm>


		)
	}
}


export default Contact;
