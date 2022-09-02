export const isRequired = value => (value === '' ? false : true)

export const isEmail = email => {
    const re = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}')

    return re.test(email)
}

export const isSecure = password => {
    const re = new RegExp(
        '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,50}$'
    )

    return re.test(password)
}
