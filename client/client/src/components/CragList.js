import React, {useEffect, useState} from "react";
import { gql, useQuery } from "@apollo/client";

const GET_CRAGS = gql`
{crags {
	name
	style {
		name
	}
	city
	prefecture {
		name
	}
	description
}}`

export default function CragList(props) { 
	const {data, loading, error } = useQuery(GET_CRAGS)

	if (loading) return 'Loading...';
	if (error) return `Error! ${error}`;

	console.log(data.crags);

	return (
      	<div id="crag-list">
			<h2>Crag list</h2>
			<ul>
			{
				data.crags.length > 0 ? data.crags.map(crag => {
					return (
						<li className="cragSummary">
							<h3>{crag.name}</h3>
							<ul>
								<li>Climbing style: {crag.style.name}</li>
								<li>Prefecture: {crag.prefecture.name}</li>
								<li>City: {crag.city}</li>
								<p>{crag.description}</p>
							</ul>
							{/* <button onClick={deleteCrag(crag.id)}>Delete</button> */}
						</li>
					)
				}): ''
			}
				<li>Crag1</li>
				<li>Crag1</li>
			</ul>
      	</div>
  )
}