type FormData = {
  name: string;
  profession: number;
  location: number;
  lowestSalary: number;
  highestSalary: number;
  numberOfEmployees: number;
  startDate: Array<number>;
  recruitersQty: number;
  employmentType: number;
  workingSchedule: Array<string>;
  workingType: string;
  agreementType: string[];
  benefits: string[];
  other: string;
  // gender: string[];
  // minimum_age: number;
  // maximum_age: number;
  education: string[];
  core_skills: string;
  language_skills: number[];
  language_level: string[];
  driving_skills: string[];
  has_medical_sertificate: boolean;
  citizenship: number;
  requirements_description: string;
  rating: string;
  experience: string[];
  completed_orders: string;
  recruiters_experience: string;
  respond_speed: string;
  fulfillment_speed: string;
  recruiter_responsibilities: string[];
  description: string;
  candidate_resume_form: Array<string>;
  stop_list: string;
  numberOfPayment: number;
  paymentFormat: string;
};


export const BASE_URL = 'http://80.249.149.201:8000/api/v2';
// export const BASE_URL = 'http://localhost:3000';



// Это для обработки ошибок
const handleResponse = (res: Response) => {
  if (res.ok) {
    return res.json()
  } else {
    return Promise.reject(`Ошибка: ${res.status}`)
  }
}

// Для авторизации
export const login = (email: string, password: string) => {
  return fetch(`${BASE_URL}/auth/login/`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(res => handleResponse(res)
    )
    .then((res) => {
      if (res) {
        localStorage.setItem('token', res.token);
        return res;
      } else {
        return;
      }
    })
}


// Для получения данных по профессиям
export const getProfessions = () => {
  const token = localStorage.getItem('token');
  return fetch(`${BASE_URL}/professions/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  }).then(res => handleResponse(res))
}

// Для получения данных по городам
export const getCity = () => {
  const token = localStorage.getItem('token');
  return fetch(`${BASE_URL}/cities/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  }).then(res => handleResponse(res))
}


// Для получения данных по гражданствам
export const getCitizenship = () => {
  const token = localStorage.getItem('token');
  return fetch(`${BASE_URL}/citizenships/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  }).then(res => handleResponse(res))
}

// Для получения данных по иностранным языкам
export const getLanguages = () => {
  const token = localStorage.getItem('token');
  return fetch(`${BASE_URL}/languages/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  }).then(res => handleResponse(res))
}


export const saveForm = (formData: FormData) => {
  const token = localStorage.getItem('token');
  return fetch(`${BASE_URL}/aplications/create/`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: formData.name,
      profession: formData.profession,
      location: formData.location,
      lowestSalary: formData.lowestSalary,
      highestSalary: formData.highestSalary,
      numberOfEmployees: formData.numberOfEmployees,
      startDate: formData.startDate,
      recruitersQty: formData.recruitersQty,
      employmentType: formData.employmentType,
      workingSchedule: formData.workingSchedule,
      workingType: formData.workingType,
      agreementType: formData.agreementType,
      benefits: formData.benefits,
      other: formData.other,
      education: formData.education,
      core_skills: formData.core_skills,
      language_skills: formData.language_skills,
      language_level: formData.language_level,
      driving_skills: formData.driving_skills,
      has_medical_sertificate: formData.has_medical_sertificate,
      citizenship: formData.citizenship,
      requirements_description: formData.requirements_description,
      rating: formData.rating,
      experience: formData.experience,
      completed_orders: formData.completed_orders,
      recruiters_experience: formData.recruiters_experience,
      respond_speed: formData.respond_speed,
      fulfillment_speed: formData.fulfillment_speed,
      recruiter_responsibilities: formData.recruiter_responsibilities,
      description: formData.description,
      candidate_resume_form: formData.candidate_resume_form,
      stop_list: formData.stop_list,
      numberOfPayment: formData.numberOfPayment,
      paymentFormat: formData.paymentFormat,
    })
  })
    .then(res => handleResponse(res))
}
