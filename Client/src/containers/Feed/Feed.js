import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import FeedItems from '../../components/FeedItems/FeedItems';
import FeedItem from '../../components/FeedItems/FeedItem/FeedItem';

class Feed extends Component {
    state = {
        origin: {
            feedItem1: {
                title: 'training1',
                info: {
                    date: {
                        placeholder: 'Date',
                        value: 'Dec 22, 2020'
                    },
                    sport: {
                        placeholder: 'Sport',
                        value: 'Running'
                    },
                    rpe: {
                        placeholder: 'RPE',
                        value: '6',
                    },
                    duration: {
                        placeholder: 'Duration',
                        value: '45',
                    },
                    hr: {
                        placeholder: 'Average Heart Rate',
                        value: '188'
                    },
                    distance: {
                        placeholder: 'Distance',
                        value: '8'
                    }
                },
                comment: 'Comments'
            },
            feedItem2: {
                title: 'training1',
                info: {
                    date: {
                        placeholder: 'Date',
                        value: 'Dec 29, 2020'
                    },
                    sport: {
                        placeholder: 'Sport',
                        value: 'Running'
                    },
                    rpe: {
                        placeholder: 'RPE',
                        value: '8',
                    },
                    duration: {
                        placeholder: 'Duration',
                        value: '25',
                    },
                    hr: {
                        placeholder: 'Average Heart Rate',
                        value: '197'
                    },
                    distance: {
                        placeholder: 'Distance',
                        value: '6'
                    }
                },
                comment: 'Ran hard'
            },
            feedItem3: {
                title: 'training3',
                info: {
                    date: {
                        placeholder: 'Date',
                        value: 'Jan 15, 2021'
                    },
                    sport: {
                        placeholder: 'Sport',
                        value: 'Swimming'
                    },
                    rpe: {
                        placeholder: 'RPE',
                        value: '7',
                    },
                    duration: {
                        placeholder: 'Duration',
                        value: '70',
                    },
                    hr: {
                        placeholder: 'Average Heart Rate',
                        value: '174'
                    },
                    distance: {
                        placeholder: 'Distance',
                        value: '3'
                    }
                },
                comment: 'Water was wet'
            }
        }
    }

    render () {
        const feedElementsArray = [];
        for (let key in this.state.origin) {
            feedElementsArray.push({
                id: key,
                item: this.state.origin[key]
            });
        }
        let feed = (
            <Aux>
                {feedElementsArray.map(feedElement => (
                    <FeedItem
                        key={feedElement.id}
                        feedItem={feedElement.item}
                        feedInfo={feedElement.item.info}
                        origin={this.state.origin} />
                ))}
            </Aux>
        )
        return (
            <Aux>
                <FeedItems>
                    {feed}
                </FeedItems>
            </Aux>
        )
    }
}

export default Feed;