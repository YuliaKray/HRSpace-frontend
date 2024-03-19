import { useEffect, useState } from "react";

type LanguageType = {
  language_skills: number[];
  language_level: string[];
}

type LanguageTypeProps = LanguageType & {
  updateFields: (fields: Partial<LanguageType>) => void;
}

//Это дата пример для данных по языкам которые будем получать из апи
const dataLang = [{
  id: 1,
  language: "Английский язык"
}, {
  id: 2,
  language: "Французкий язык"

}, {
  id: 3,
  language: "Немецкий язык"

}]


export function LanguageInput({ language_skills, language_level, updateFields }: LanguageTypeProps) {
  const [disabledInput, setDisabledInput] = useState(true); // стейт для блокировки инпута уровня языка

  // нужен, чтобы обновлять стейты сразу
  useEffect(() => {
    openInput()
  }, [language_skills])

  //Функция для разблокировки инпута выбора уровня знания языка
  function openInput() {
    // console.log(language_skills);
    if (language_skills.length !== 0) {

      setDisabledInput(false);
    }
  }

  function renderLanguage() {
    const langSelector = dataLang.map((language) => {
      return (
        <>
            {/*Похоже value здесь будет id языка, который придет с бека !!!!*/}
            <option value={language.id} key={language.id}>{language.language}</option>
        </>
      )
    })
    return langSelector;
  }


  return (
    <>
      {/*выбор языка - это массив из id языков, которые выбрал пользователь */}
      <div>
      < select id="language_skills" name="language_skills" onChange={e => updateFields({
        language_skills: [...language_skills, parseInt(e.target.value)]
      })} defaultValue={language_skills[1]} className="form__input-text form__input-text_small" >
        <option value={0} disabled>Выберите язык</option>
        {renderLanguage()}

      </select >

      <select id="language_level" name="language_level" defaultValue={language_level} disabled={disabledInput} 
      onChange={e => updateFields({ language_level: [...language_level, e.target.value] })} className="form__input-text form__input-text_small">
        <option value="language_level" disabled>Выберите уровень</option>
        <option value="A1">A1 — Начальный</option>
        <option value="A2">A2 — Элементарный</option>
        <option value="B1">B1 — Средний</option>
        <option value="B2">B2 — Средне-продвинутый</option>
        <option value="C1">C1 — Продвинутый</option>
        <option value="C2">C2 — В совершенстве</option>
      </select>
      </div>
    </>
  )
}