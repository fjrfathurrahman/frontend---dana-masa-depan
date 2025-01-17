const Title: React.FC<{title: string, desc: string, align?: 'center' | 'left' | 'right'}> = (props) => {
  return (
    <div className={`mb-12 flex flex-col gap-4 ${props.align ? `text-${props.align}` : ''}`}>
      <h2 className='h2'>{props.title}</h2>
      <p className="p">{props.desc}</p>
    </div>
  )
}

export default Title