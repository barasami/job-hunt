import axios from 'axios';

const Url='https://remote-jobs-api.p.rapidapi.com/jobs'

const options = {
  params: {company: 'shopify'},
  headers: {
    'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
    'X-RapidAPI-Host': 'remote-jobs-api.p.rapidapi.com'
  }
};

export const myApi=async()=>{
    try {
	    const response = await axios.get(Url,options);
	    return response;
    } 
    catch (error) {
	console.log(error);
    }
}


//

