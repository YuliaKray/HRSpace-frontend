export function GeneralInfoForm() {
    return (
        <div>
            <h1>General Info</h1>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" required />
        </div>
    )
}