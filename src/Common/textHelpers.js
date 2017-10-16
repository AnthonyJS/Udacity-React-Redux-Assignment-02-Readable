export const TrimLongString = input =>
    input.length > 200 ? `${input.substring(0, 200)} ...` : input
