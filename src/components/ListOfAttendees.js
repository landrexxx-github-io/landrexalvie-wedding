import React, { useEffect, useState } from "react"

import { db } from "../firebase/config"
import { collection, getDocs } from "firebase/firestore"

function ListOfAttendees() {

	const [attendees, setAttendees] = useState([])
	const dataCollectionRef = collection(db, "attendees")

	useEffect(() => {
		const getAttendees = async () => {
			const data = await getDocs(dataCollectionRef)
			setAttendees(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
		}

		getAttendees()
	}, [])

	return (
		<>
			<div className="" style={{ paddingLeft: '120px'}}>
				<h1>Guest Lists</h1>

				<table id="table_list">
					<thead>
						<tr>
							<th>Code #</th>
							<th>Name of Guest</th>
							<th>Is Attend?</th>
							<th>Reason</th>
						</tr>
					</thead>
					<tbody>
						{attendees.map((attend) => {
							return (
								<tr key={attend.id}>
									<td>{attend.id}</td>
									<td>{attend.name}</td>
									<td>{attend.is_attend}</td>
									<td>{attend.reason}</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</>
	)
}

export default ListOfAttendees