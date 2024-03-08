export const useValidateCredientials = (name, email, password) => {
  const usrPass = password ? password : null
  const validateEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    email
  )
  const valiadtePassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(
      usrPass
    )
  const validateName = /^[a-zA-Z ]+$/.test(name)

  if (!validateEmail) {
    return "Please Enter Valid Email"
  }
  if (usrPass && !valiadtePassword) {
    return `
    Password should include
    - One Special Character, One Capital Letter, One Number, length should be more or equal to 8 
    `
  }
  if (name && !validateName) return "Enter valid Name"

  return null
}
