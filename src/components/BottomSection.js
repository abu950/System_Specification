
export const BottomSection = () => {
    const data = [{ image: '/assets/system_4.jpg', text: ['Lorem ipsum ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'] }]
    return (<>
        <div className='third_head'>
            <div className='third_head_child'>
                {data.map((content) => {
                    return (<>
                        <div className='system_head'>
                            <img src={content.image} className='system' />
                        </div>
                        <div className='lorem_head'>
                            {content.text.map((text) => <p>{text}</p>)}
                            <div className="arrow_section">
                                <p>Lorem ipsum</p>
                                <img src='/assets/side_arrow.png' />
                            </div>
                        </div>
                    </>)
                })}

            </div>
        </div>
    </>)
}