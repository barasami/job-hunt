import axios from 'axios';

const Url='https://ai-resume-generator.p.rapidapi.com/Documents/GenerateCoverLetter'

const options = {
  params: {
    jobTitle: 'Full Stack Web Developer',
    jobDescription: 'Example Co. is looking for a Full Stack Web Developer to maintain and improve our custom web application. The solutions will require both frontend and backend skills. Our web application runs on a LEMP stack. LEMP stack experience is a bonus, but not required.',
    university: 'Michigan State University',
    degree: 'Information Systems',
    skills: 'Networking, Web Development'
  },
  headers: {
    'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
    'X-RapidAPI-Host': 'ai-resume-generator.p.rapidapi.com'
  }
};

export const allLetter=async()=>{

    try {
        const response = await axios.request(Url,options);
        return response;
    } catch (error) {
        console.log(error);
    }
}