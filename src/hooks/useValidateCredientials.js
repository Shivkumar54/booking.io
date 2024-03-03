export const useValidateCredientials = (name, email, password) => {
  const validateEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    email
  )
  const valiadtePassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(
      password
    )
  const validateName = /^[a-zA-Z]+$/.test(name)

  if (!validateEmail) {
    return "Please Enter Valid Email"
  } else if (!valiadtePassword) {
    return "Please Enter Valid Password"
  }
  if (!validateName) return "Enter valid Name"

  return null
}
