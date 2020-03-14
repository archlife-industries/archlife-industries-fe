import axios from 'axios'

const BASE_URL = process.env.NODE_ENV !== "production" ? "http://localhost:5000" : "https://archlife-eeg.herokuapp.com/"
console.log('process.env.NODE_ENV', process.env.NODE_ENV)

export default function (contentType ='application/json' ) {
	return axios.create({
		baseURL:BASE_URL,
		timeout:80000,
		headers:{
			'Content-Type': contentType
		}
	})
}
