import React, { useEffect, useState } from "react"

import { db } from "../firebase/config"
import { collection, addDoc } from "firebase/firestore"

function RSVP() {

	const dataCollectionRef = collection(db, "attendees")
	const [show, setShow] = useState(false)
	const [disable, setDisable] = useState(false)

	const [isAttend, setIsAttend] = useState("");
	const [name, setName] = useState("");
	const [reason, setReason] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		setDisable(true)

		const response = await addDoc(dataCollectionRef, { is_attend: isAttend, name: name, reason: reason })

		if(response) 
			alert("Thank you for your response.");
		
		setDisable(false)
		e.target.reset()

	}

	return (
		<div
			id='rsvp'
			className='section-padding bg-img bg-fixed'
		>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-md-6 bg-white p-40'>
						{' '}
						<span className='oliven-title-meta text-center'>Will you attend?</span>
						<h2 className='oliven-title text-center'>R.S.V.P</h2>
						<br />
						<form method='post' className='row' onSubmit={handleSubmit}>
							<label className=''>Are you sure you want to attend the wedding?</label>
							<div className='col-md-12'>
								<div className='form-group ml-2 mb-3 mt-1'>
									<input
										type='radio'
										name='isAttend'
										value={'yes'}
										onChange={(e) => {
											setShow(false)
											setIsAttend(e.target.value)
										}}
										required
										disabled={disable}
									/> {' Yes '}
									<br />
									<input
										type='radio'
										name='isAttend'
										value={'no'}
										onChange={(e) => {
											setIsAttend(e.target.value)
											setShow(!show)
										}}
										required
										disabled={disable}
									/> {' No '}
								</div>
							</div>
							<div className='col-md-12'>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										placeholder='Name'
										name="name"
										onChange={(e) => setName(e.target.value)}
										required
										disabled={disable}
									/>{' '}
								</div>
							</div>
							<div className='col-md-12 reason'>
								<div className='form-group'>
									{show ?
										<textarea
											name='name'
											id='message'
											onChange={(e) => setReason(e.target.value)}
											cols='30'
											rows='7'
											className='form-control'
											placeholder="Please state your reason."
											disabled={disable}
										></textarea>
										: null}
								</div>
							</div>
							<div className='col-md-12'>
								<div className='form-group'>
									<input 
										type='submit' 
										className='btn buttono' 
										value='SEND' 
										disabled={disable}
									/>{' '}
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RSVP
