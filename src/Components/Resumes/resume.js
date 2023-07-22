import axios from 'axios';

const Url='https://ai-resume-generator.p.rapidapi.com/Documents/GenerateResume'

const options = {
  params: {
    university: 'Michigan State University',
    degree: 'Information Systems',
    skills: 'Networking, Web Development'
  },
  headers: {
    'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
    'X-RapidAPI-Host': 'ai-resume-generator.p.rapidapi.com'
  }
};

export const getResume=async()=>{
    try {
        const response = await axios.request(Url,options);
        return response;
    } catch (error) {
        console.error(error);
    }
}