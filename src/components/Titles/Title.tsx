const Title: React.FC<{title: string, desc: string, align?: 'center' | 'left' | 'right'}> = (props) => {
  return (
    <div className={`mb-12 flex flex-col gap-4 ${props.align ? `text-${props.align}` : ''}`}>
      <h3 className='h3'>{props.title}</h3>
      <p className="p">{props.desc}</p>
    </div>
  )
}

export default Title