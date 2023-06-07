import { SuperBalls } from '@uiball/loaders'

const Loading = () => {
    return (
        <div className='loading'>
            <SuperBalls
                size={100}
                speed={1.4}
                color="#1c5d62dc" />
            <h2>Loading shopping cart...</h2>
        </div>
    )
}


export default Loading