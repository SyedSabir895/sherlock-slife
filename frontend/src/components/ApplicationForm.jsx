const countries = ['India', 'United States', 'United Kingdom', 'Canada', 'Australia', 'Philippines', 'Indonesia', 'Brazil', 'Other'];
const niches = ['Gaming & Esports', 'Lifestyle & Vlogging', 'Fashion & Beauty', 'Food & Cooking', 'Fitness & Health', 'Tech & Reviews', 'Music & Entertainment', 'Education & How-to', 'Travel', 'Art & Design', 'Comedy & Skits', 'Other'];
const platforms = ['YouTube', 'Instagram', 'TikTok', 'Twitch', 'Podcast', 'X (Twitter)', 'Other'];
const followerRanges = ['1K - 10K', '10K - 50K', '50K - 100K', '100K - 500K', '500K - 1M', '1M+'];
const viewRanges = ['Under 1K', '1K - 10K', '10K - 50K', '50K - 100K', '100K - 500K', '500K+'];
const interests = ['Hosting a Panel or Talk', 'Meet & Greet Booth', 'Creator Collaborations', 'Brand Sponsorship Opportunities', 'Live Content Challenges'];
const discoverySources = ['Instagram', 'YouTube', 'TikTok', 'From another creator', 'Email / Newsletter', 'Google Search', 'Other'];

function SelectField({ label, required, options, placeholder = 'Select one' }) {
  return (
    <label>
      {label}{required ? ' *' : ''}
      <select required={required}>
        <option value="">{placeholder}</option>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </label>
  );
}

function CheckboxGroup({ title, options }) {
  return (
    <div className="check-group full">
      <p>{title}</p>
      {options.map((option) => (
        <label key={option}>
          <input type="checkbox" />
          {option}
        </label>
      ))}
    </div>
  );
}

export default function ApplicationForm() {
  function handleSubmit(event) {
    event.preventDefault();
    event.currentTarget.classList.add('is-submitted');
  }

  return (
    <section className="section apply" id="apply">
      <div className="apply-head">
        <h2>Apply as a Creator</h2>
        <p>Fill in the form below and we'll review your application within 5-7 business days.</p>
      </div>

      <form className="application-form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Information</legend>
          <label>First Name *<input type="text" required /></label>
          <label>Last Name *<input type="text" required /></label>
          <label>Email Address *<input type="email" required /></label>
          <label>Phone Number<input type="tel" /></label>
          <SelectField label="Country" required options={countries} placeholder="Select your country" />
          <label>City<input type="text" /></label>
        </fieldset>

        <fieldset>
          <legend>Creator Profile</legend>
          <label>Primary Creator Handle / Name *<input type="text" required /></label>
          <SelectField label="Content Niche" required options={niches} placeholder="Select your niche" />
          <CheckboxGroup title="Primary Platform(s) *" options={platforms} />
          <SelectField label="Total Followers / Subscribers" required options={followerRanges} placeholder="Select range" />
          <SelectField label="Average Views per Post" options={viewRanges} placeholder="Select range" />
          <label>Primary Channel / Profile Link *<input type="url" required /></label>
          <label className="full">Other Social Media Links<textarea rows="4" /></label>
        </fieldset>

        <fieldset>
          <legend>Participation Preferences</legend>
          <CheckboxGroup title="Interested In (Select all that apply)" options={interests} />
          <label className="full">Tell Us About Yourself & Why You Want to Join *<textarea rows="5" required /></label>
          <label className="full">Previous Event Experience<textarea rows="4" /></label>
          <SelectField label="How Did You Hear About FanFest 2026?" options={discoverySources} />
        </fieldset>

        <div className="agreements">
          <label><input type="checkbox" required /> I agree to FanFest 2026's Terms & Conditions and Creator Code of Conduct. *</label>
          <label><input type="checkbox" /> I consent to photos and videos of me being used in FanFest marketing materials.</label>
          <label><input type="checkbox" /> Keep me updated with FanFest news and future opportunities.</label>
        </div>

        <button className="submit" type="submit">Submit My Application -&gt;</button>
        <p className="fine-print">Applications close June 30, 2026. We'll respond within 5-7 business days. Limited spots available.</p>
        <p className="success-message" role="status">Thanks. Your demo application has been captured.</p>
      </form>
    </section>
  );
}
