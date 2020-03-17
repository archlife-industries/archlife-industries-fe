import axios from 'axios'

const BASE_URL = "https://archlife-eeg.herokuapp.com/"

export default function (contentType ='application/json' ) {
	const token = localStorage.getItem('token')
	return axios.create({
		baseURL:BASE_URL,
		timeout:80000,
		headers:{
			'Content-Type': contentType,
			'Authorization':`Bearer ${token}`
		}
	})
}
