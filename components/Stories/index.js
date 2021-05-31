import Story from '../Story';

import { stories } from './data';

function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map(story => (
                <Story
                    key={story.src}
                    name={story.name}
                    src={story.src}
                    profile={story.profile}
                />
            ))}
        </div>
    )
}

export default Stories
