export const TrimLongString = input => {
    if (!input) return ''

    return input.length > 200 ? `${input.substring(0, 200)} ...` : input
}
