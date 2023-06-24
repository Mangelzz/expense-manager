export const generateId = () => {
    const random = Math.random().toString(36).substring(2)
    const timestamp = Date.now().toString(36)

    return random + timestamp
}

export const formatDate = date => {
    const newDate = new Date(date)
    const options = { year: 'numeric', month: 'long', day: 'numeric' }

    return newDate.toLocaleDateString('en-EN', options)
}