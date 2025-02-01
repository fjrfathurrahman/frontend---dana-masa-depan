const Title: React.FC<{title: string, desc: string, align?: 'center' | 'left' | 'right'}> = (props) => {
  return (
    <div className={`mb-12 flex flex-col gap-2 ${props.align ? `text-${props.align}` : ''}`}>
      <h4 className='h4'>{props.title}</h4>
      <p>{props.desc}</p>
    </div>
  )
}

export default Title