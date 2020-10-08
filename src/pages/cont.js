import React, { useState } from "react"
import axios from "axios";
import { Link } from "gatsby"
import Layout from "components/Layout"
import { Input, TextArea } from "flwww";
import { message, Space, Timeline } from 'antd';
import styled from "@emotion/styled"
import colors from "styles/colors"

const MyForm = () => {

	const [serverState, setServerState] = useState({
		submitting: false,
		status: null
	});
	const handleServerResponse = (ok, msg, form) => {
		setServerState({
			submitting: false,
			status: { ok, msg }
		});
		if (ok) {
			form.reset();
		}
	};

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
			padding-top: 0.5em;

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

	const handleOnSubmit = e => {
		e.preventDefault();
		const form = e.target;
		setServerState({ submitting: true });
		axios({
			method: "post",
			url: "https://docs.google.com/forms/d/e/1FAIpQLSfw0BhiW3BQ4n0A0Vn2zdBEgqxUOcr5fV75-Q9TMjm9-Lqg2A/formResponse",
			data: new FormData(form)
		})
			.then(r => {
				handleServerResponse(true, "Thanks!", form);
				message.success('Successfully sent');
			})
			.catch(r => {
				handleServerResponse(false, "error", form);
				message.error('Error' + r.data);
				console.log(r);
			});
	};





	return (
		<Layout>

			<div>


				<form id="formElem" action="https://docs.google.com/forms/d/e/1FAIpQLSfw0BhiW3BQ4n0A0Vn2zdBEgqxUOcr5fV75-Q9TMjm9-Lqg2A/formResponse" >
					<input type="hidden" name="_captcha" value="false" />

					<div className="form-group" style={{ width: "500px" }}>
						<Input type="text" name="entry.1958416798" placeholder="Name" className="ContactFormInput" id="name" required="required" />
						<Input type="email" name="entry.124375465" placeholder="Email" className="ContactFormInput" id="email" required="required" />
					</div>

					<button type="submit" disabled={serverState.submitting}>
						Submit
           			</button>

					<PostCardAction className="PostCardAction" type="submit" disabled={serverState.submitting}>
						Submit <span>&#8594;</span>
					</PostCardAction>

				</form>

				{/* {serverState.status && (
					<p className={!serverState.status.ok ? "errorMsg" : ""}>
						{serverState.status.msg}
					</p>
				)} */}
			</div>

		</Layout>

	);
};


class Contact extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}


	handleSubmit = e => {
		const fields = { "fields": { "Name": this.state.name, "Email": this.state.email } }
		console.log(fields);
		fetch("https://api.airtable.com/v0/appGvTEW3Q4spcppz/Submissions", {
			method: "POST",
			headers: {
				"Authorization": `Bearer key8cxVR9axilDL4a`,
				"Content-Type": "application/json"
			},
			body: JSON.stringify(fields)
		})
			.then(() => message.success('Successfully sent'))
			.catch(error => message.error('Error new form'))

		e.preventDefault();
	}

	handleChange = e => this.setState({ [e.target.name]: e.target.value })

	render() {
		return (
			<Layout>

				<div>


					<form id="formElem" onSubmit={this.handleSubmit} >
						<input type="hidden" name="_captcha" value="false" />

						<div className="form-group" style={{ width: "500px" }}>
							<Input type="text" name="name" placeholder="Name" className="ContactFormInput" id="name" onChange={this.handleChange} required="required" />
							<Input type="email" name="email" placeholder="Email" className="ContactFormInput" id="email" onChange={this.handleChange} required="required" />
						</div>



						<button className="PostCardAction" type="submit">
							Submit <span>&#8594;</span>
						</button>

					</form>

					{/* {serverState.status && (
					<p className={!serverState.status.ok ? "errorMsg" : ""}>
						{serverState.status.msg}
					</p>
				)} */}
				</div>

			</Layout>
		)
	}
}


export default Contact;
// <Input type = "text" name = "phone-number" placeholder = "Phone Number" className = "ContactFormInput" id = "phone-number" required = "required" />
// <TextArea rows={4} name="message" id="message" placeholder="Message" style={{ marginTop: "0.5em", marginBottom: "0.5em", fontFamily: "'Inter var', sans-serif" }} />
