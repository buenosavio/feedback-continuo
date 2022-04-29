const FirstLetterUppercase = (text: string) => {
  return (
    text.replace(/(^\w{1})|(\s+\w{1})/g, (letra: string)=> letra.toUpperCase())
  )
}

export default FirstLetterUppercase;