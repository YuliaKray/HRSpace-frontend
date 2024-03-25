type FormData = {
  name: string;
  profession: number;
  location: number;
  lowestSalary: number;
  highestSalary: number;
  numberOfEmployees: number;
  startDate: string;
  recruitersQty: number;
  employmentType: string[];
  workingSchedule: Array<string>;
  workingType: string[];
  agreementType: string[];
  benefits: string[];
  other: string;
  education: string[];
  language_skills: number[];
  language_level: string[];
  driving_skills: string[];
  has_medical_sertificate: boolean;
  citizenship: number[];
  requirements_description: string;
  experience: string[];
  recruiter_responsibilities: string[];
  description: string;
  candidate_resume_form: string;
  stop_list: string;
  numberOfPayment: number;
  paymentFormat: string;
  recruit_experience: string;
};


export const BASE_URL = 'http://80.249.149.201:8000/api/v2';



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
        localStorage.setItem('token', res.auth_token);
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
      'Authorization': `Token ${token}`,
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
      'Authorization': `Token ${token}`,
    }
  }).then(res => handleResponse(res))
}


// Для получения данных по гражданствам
export const getCitizenship = () => {
  const token = localStorage.getItem('token');
  return fetch(`${BASE_URL}/citizenships/`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`,
    }
  }).then(res => handleResponse(res))
}

// Для получения данных по иностранным языкам
export const getLanguages = () => {
  const token = localStorage.getItem('token');
  return fetch(`${BASE_URL}/languages/`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`,
    }
  }).then(res => handleResponse(res))
}


export const saveForm = (formData: FormData) => {
  const token = localStorage.getItem('token');
  return fetch(`${BASE_URL}/applications/`, {
    method: 'POST',
    headers: {
      'Authorization': `Token ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      application: {
        title: formData.name,
        city: formData.location,
        profession: formData.profession,
        min_salary: formData.lowestSalary,
        max_salary: formData.highestSalary,
        number_of_employees: formData.numberOfEmployees,
        start_working: formData.startDate,
        number_of_recruiters: formData.recruitersQty,
      },
      job_info: {
        employment_type: formData.employmentType,
        schedule: formData.workingSchedule,
        work_model: formData.workingType,
        contract_type: formData.agreementType,
        working_conditions: formData.benefits,
        description: formData.other,
      },
      candidate_requirements: {
        education: formData.education,
        experience: formData.experience,
        language_skills: formData.language_skills,

        driving_skills: formData.driving_skills,
        has_medical_sertificate: formData.has_medical_sertificate,
        citizenship: formData.citizenship,
        coreskills_and_responsibilities: formData.requirements_description,

      },
      recruiter_requirements: {
        recruiter_responsibilities: formData.recruiter_responsibilities,
        description: formData.description,
        candidate_resume_form: formData.candidate_resume_form,
        stop_list: formData.stop_list,
      }, 
      payments: {
        payment_amount: formData.numberOfPayment,
        payment_type: formData.paymentFormat,
      }
    })
  })
    .then(res => handleResponse(res))
}
