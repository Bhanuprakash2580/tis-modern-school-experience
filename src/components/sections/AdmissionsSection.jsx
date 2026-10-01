import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../animation/ScrollEffects.jsx';

function prepareEnquiry(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const parentName = formData.get('parentName');
  const email = formData.get('email');
  const grade = formData.get('grade');
  const schoolOption = formData.get('schoolOption');
  const subject = encodeURIComponent(`Admissions enquiry for Class ${grade}`);
  const body = encodeURIComponent([
    'Hello Tulas Admissions,',
    '',
    `My name is ${parentName}.`,
    `I am enquiring about Class ${grade}.`,
    `School preference: ${schoolOption}.`,
    `Email: ${email}.`,
    '',
    'Please share the next steps for a conversation or campus visit.',
  ].join('\n'));

  window.location.href = `mailto:info@tis.edu.in?subject=${subject}&body=${body}`;
}

export default function AdmissionsSection() {
  return (
    <section className="admissions" id="admissions" aria-labelledby="admissions-title">
      <Reveal className="admissions-copy">
        <span className="eyebrow eyebrow-light">FOR THE YEARS THAT SHAPE YOU</span>
        <h2 id="admissions-title">Your story has<br />a next chapter.</h2>
        <p>From Class 4 to 12, find the kind of school that makes space for who you are and who you are becoming.</p>
        <span className="admissions-number">04<span>—</span>12</span>
        <span className="admissions-fact">CLASSES AT TULAS · BOARDING & DAY SCHOOL</span>
      </Reveal>
      <form className="admissions-form" onSubmit={prepareEnquiry} aria-label="Admissions enquiry">
        <div className="admissions-form-heading">
          <span>LET'S START A CONVERSATION</span>
          <p>Tell us a little about what you are looking for.</p>
        </div>
        <label className="admissions-field">
          Parent or guardian name
          <input name="parentName" type="text" autoComplete="name" required />
        </label>
        <div className="admissions-fields-row">
          <label className="admissions-field">
            Email address
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label className="admissions-field">
            Class of interest
            <select name="grade" defaultValue="" required>
              <option value="" disabled>Select a class</option>
              {Array.from({ length: 9 }, (_, index) => index + 4).map((grade) => (
                <option value={grade} key={grade}>Class {grade}</option>
              ))}
            </select>
          </label>
        </div>
        <label className="admissions-field">
          School option
          <select name="schoolOption" defaultValue="" required>
            <option value="" disabled>Select an option</option>
            <option value="Boarding">Boarding</option>
            <option value="Day school">Day school</option>
            <option value="I'd like to discuss both">I'd like to discuss both</option>
          </select>
        </label>
        <button className="button button-cream admissions-submit" type="submit">
          Prepare an enquiry <ArrowUpRight size={17} />
        </button>
        <p className="admissions-form-note">This opens an email draft. Your details are not stored on this page.</p>
      </form>
    </section>
  );
}