import React, {Component} from 'react';
import { Link  } from 'react-router-dom';
import './styles/Item.scss';

// Components
import '../components/loader/Loader';
import Loader from '../components/loader/Loader';

class Item extends Component {
    state = {
        name: '',
        index: '',
        sprites: '',
        spritesLoading: true,
        requests: false,
    };

    componentDidMount() {
        const { name, url } = this.props;
        const index = url.split('/')[url.split('/').length - 2];
        const sprites = `https://github.com/PokeApi/sprites/blob/master/sprites/pokemon/${index}.png?raw=true`;

        this.setState({
            name,
            index,
            sprites,
        });
    }

    render() {
        return (
            <div className="itemContainer">
                <Link to={`pokemon/${this.state.name}`}>
                    <li>
                        {this.state.spritesLoading ? (
                            <Loader />
                        ) : null}
                        <img alt=""
                            onLoad={() => this.setState({ spritesLoading: false })}
                            onError={() => this.setState({ requests: true })}
                            src={this.state.sprites}
                        />
                        <h3>{this.state.name.toLowerCase()
                                .split(" ")
                                .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
                                .join(' ')}
                        </h3>
                    </li>
                </Link>
            </div>
        );
    }
}

export default Item;