import React from 'react';

interface Props {
    images: any[],
}

interface State {
    image: any;
}

export class EnemyAnimationComponent extends React.Component<Props, State> {

    private index = 0;
    private min = 5;
    private max = 10;
    private interval: any = null;
    private intervalTime = (Math.floor(Math.random() * (this.max - this.min + 1)) + this.min) * 100;

    constructor(props: Props) {
        super(props);
        this.state = {
            image: this.props.images[0]
        };
        console.log(this.intervalTime)
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ image: this.props.images[this.index] });
            this.index++;
            if (this.index === this.props.images.length) {
                this.index = 0;
            }
        }, this.intervalTime)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <img src={this.state.image} width="48" height="48" alt="this is the enemy" />
        );
    }
}
