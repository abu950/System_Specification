
import '../sassstyle/Home.scss'
export const MideSection = () => {

    const data = [{ image: '/assets/system_1.jpg', text: ['01', 'Lorem ipsum dolor sit', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'] }, { image: '/assets/system_2.jpg', text: ['02', 'Lorem ipsum dolor sit', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'] }, { image: '/assets/system_3.jpg', text: ['03', 'Lorem ipsum dolor sit', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'] }]

    return (<>




        <div className='second_head'>
            <div className='vertical_text'>
                <p>Lorem</p>
                <p>Subtitle</p>
            </div>
            <div className='mid_head'>
                <div>
                    {data.map((content, index) => {
                        return (<>
                            <div className={`common_home back_${index}`}>
                                <div>
                                    {content.text.map((text) => <p>{text}</p>)}
                                </div>
                            </div>
                        </>)
                    })}
                </div>
            </div>
        </div>

    </>)
}