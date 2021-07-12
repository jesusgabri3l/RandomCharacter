import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Loader from './Loader'

function Card(props){
	const {idValue} = props
	const [character, setCharacter] = useState({})
	const [loading, setLoading] = useState(false)

	useEffect( () => {
		if(idValue) getCharacter()
	}, [idValue])

	async function getCharacter(){
		setLoading(true)
		let response = await axios.get(`https://rickandmortyapi.com/api/character/${idValue}`)
		setLoading(false)
		setCharacter(response.data)
	}
	return (
	<div className = "card-container">
		{
		loading ? 
		<div className = "loader"><Loader></Loader> </div>
		: <>
		<div className = "img-container">
			<img src={character.image} alt = {character.name} />
		</div>
		<div className = "info-container" >
			<h2 className = "name-title">{character.name}</h2>
			<p className = "info-text first">{character.status} - {character.species}</p>
			<p className = "info-text-title"><i className = "fa fa-globe-americas mr-2"></i>Origin : </p>
			<p className = "info-text">{character.origin === undefined ? 'Undefined' : character.origin.name}</p>
			<p className = "info-text-title"><i className = "fa fa-map-marker-alt mr-2"></i>Last known location : </p>
			<p className = "info-text">{character.location === undefined ? 'Undefined' : character.location.name}</p>
		</div>
		</>
		}
	</div>

	)
	
}
export default Card;